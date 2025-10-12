import { createPublicClient, decodeEventLog, http } from "viem";
import WebSocket from "ws";
import redis from "./config/redis.config";
import { mainnet } from "viem/chains";
import { PrismaClient } from "@prisma/client";
import SeaportsABI from "./abis/settlement.abi";
import {
    RPC_URL,
    WS_RPC_URL, 
    CONTRACT_ADDRESS,
    STREAM_KEY,
    MAX_RANGE_SIZE,
    START_BLOCK_BACKOFF,
    BATCH_BLOCKS,
} from "./config/env";
import { eventNames } from "process";
import { bigint, json, set, unknown } from "zod";
import {parseBlockNumber} from "./lib/utils";


type updateDBFromEventTypes = {
    orderHash: string,
    txHash: string,
    logIndex: number,
    blockNumber: number,
    status: string,
    raw: any
}

const publicClient = createPublicClient({
    transport: http(RPC_URL),
    chain: mainnet
})

const prisma = new PrismaClient();

const STREAM = STREAM_KEY;

//function for creating unique event id to prevent duplicates
function makeEventId(txHash: string, logIndex: number) {
    return `${txHash.toLowerCase()}-${logIndex}`;
}

async function alreadyProcessed(eventId : string) {
    const event = await prisma.processedEvent.findUnique({
        where: {
            eventId
        }
    })

    return !!event
}

async function markEventProcessed(eventId: string, txHash: string, logIndex: number, eventType: string) {
    try{

        const storeEvent = await prisma.processedEvent.create({
            data: {
                eventId,
                txHash,
                logIndex,
                eventType
            }
        })

    }
    catch(error){
        console.error(error)
    }

}

async function publish(event: any) {
    const eventId = event.eventId/////
    const body = JSON.stringify(event);
    await redis.xadd(STREAM, "MAXLEN", "~", 200000, "*", "event_id", eventId, "body", body);
}


async function getLastProcessedBlock() {
    const lastProcessedBlock = await prisma.indexerMeta.findUnique({
        where: {
            key: "last_processed_block"
        }
    })

    return lastProcessedBlock ? Number(lastProcessedBlock.value) : null
}

async function setLastProcessedBlock(blockNumber: number) {
    await prisma.indexerMeta.upsert({
        where: {
            key: "last_processed_block"
        },
        create:{
            key: "last_processed_block",
            value: String(blockNumber)
        },
        update:{
            key: "last_processed_block",
            value: String(blockNumber)
        }
    })
}

async function storeProcessedBlockDetails(blockNumber: number, blockHash: string) {
    const processedBlock = await prisma.processedBlock.upsert({
        where:{
            blockNumber
        },
        create:{
            blockNumber,
            blockHash
        },
        update:{
            blockHash,
            proccesedAt: new Date()
        }
    })
}

async function getStoredBlockHash(blockNumber: number) {
    const block = await prisma.processedBlock.findUnique({
        where: {
            blockNumber
        }
    })
    return block ? block.blockHash : null
}


async function updateOrderFromEvent({orderHash, txHash, blockNumber, logIndex, status, raw}: updateDBFromEventTypes) {
    const updateOrder = await prisma.order.update({
        where: {
            orderHash
        },
        data: {
            txHash,
            blockNumber,
            logIndex,
            status,
            isConfirmed: false,
            isOrphaned: false,
            rawOrder: raw
        }
    })

    return orderHash;
}

async function markOrderAsConfirmed(confirmationCutoffBlock: number) {
    const checkUnconfirmedOrders = await prisma.order.updateMany({
        where:{
            isConfirmed: false,
            isOrphaned: false,
            blockNumber: {
                lte: confirmationCutoffBlock
            }
        }
    })

    const confirmedOrders = await prisma.findMany({
        where: {
            isConfirmed: true,
            isOrphaned: false,
            blockNumber: {
                lte: confirmationCutoffBlock
            }
        },
        select: {
            orderHash: true,
            txHash: true,
            logIndex: true,
            blockNumber: true,
            status: true
        },
        orderBy:{
            updatedAt: 'asc'
        },
        take: 1000
    })

    for (let orders of confirmedOrders){
        const order = {
            version: "1",
            eventId: makeEventId(orders.txHash, orders.logIndex),
            source: "indexer",
            eventType: `order:${orders.status}`,
            txHash: orders.txHash,
            logIndex: orders.logIndex,
            blockNumber: orders.blockNumber,
            tentative: false,
            payload: {
                status: orders.status
            },
            createdAt: new Date().toISOString()
        }

        await publish(order)
    }
}

async function markOrderAsOrphaned(fromBlock: number) {
    await prisma.order.findMany({
        where:{
            blockNumber:{
                gte: fromBlock
            },
            isOrphaned: false
        },

        data:{
            isOrphaned: true,
            isConfirmed: false
        }
    })

    const orphanedOrders = await prisma.order.findMany({
        where:{
            blockNumber:{
                gte: fromBlock
            },
            select:{
                orderHash: true,
                txHash: true,
                logIndex: true,
                blockNumber: true,
                status: true
            }
        }
    })

    for (let orders of orphanedOrders){
        const order = {
            version: "1",
            eventId: makeEventId(orders.txHash, orders.logIndex),
            source: "indexer",
            eventType: `order:orphaned`,
            txHash: orders.txHash,
            logIndex: orders.logIndex,
            blockNumber: orders.blockNumber,
            tentative: false,
            payload: {
                reason: "reorg"
            },
            createdAt: new Date().toISOString()
        }

        await publish(order)
    }

    await prisma.processedBlock.deleteMany({
        where: {
            blockNumber: {
                gte: fromBlock
            }
        }
    })
}

function decodeEventLogs(log: any){
    try{
        const decoded = decodeEventLog({
            abi: SeaportsABI,
            data: log.data,
            topics: log.topics
        })

        return decoded;
    }
    catch(error){
        console.log(error);
        return null;
    }
    
}

//The main function for processing 
async function processBlockRange(from: number, to: number){

    try{
        const rangeSize = to - from + 1;

        if(rangeSize > MAX_RANGE_SIZE) throw new Error("Max range size exceeded");

        const logs = await publicClient.getLogs({
            address: CONTRACT_ADDRESS as `0x${string}`,
            fromBlock: BigInt(String(from)),
            toBlock: BigInt(String(to))
        })

        for (const log of logs){
            const txHash = String(log.transactionHash);
            const logIndex = Number(log.logIndex);
            const eventId = makeEventId(txHash, logIndex);

            if (await alreadyProcessed(eventId)) continue;

            const decoded =  decodeEventLogs(log);

            if(!decoded){
                await markEventProcessed(eventId, txHash, logIndex, "unknown");
                continue;
            }

            const eventName = decoded.eventName;
        
            const args = decoded.args as any

            if(!eventName || !args) continue;

            const orderHash = args.orderHash ? String(args.orderHash) : null;
            if(!orderHash) continue;
            const maker = args.maker ? String(args.maker) : null;
            const taker = args.taker ? String(args.taker) : null;
            const price = args.price ? Number(args.price) : null;

            const status = eventName === "OrderCancelled" ? "cancelled" : eventName === "OrderFulfilled" ? "filled" : "unknown";

            await updateOrderFromEvent({
                orderHash,
                txHash, 
                logIndex, 
                blockNumber : Number(log.blockNumber), 
                status, 
                raw: {eventName, args}
            });

            await markEventProcessed(eventId, txHash, logIndex, status)

            const order = {
                version: "1",
                eventId,
                source: "indexer",
                eventType: `order:${status}`,
                txHash,
                logIndex,
                blockNumber: Number(log.blockNumber),
                tentative: true,
                payload: {
                    status,
                    orderHash,
                    maker,
                    taker,
                    price
                },
                createdAt: new Date().toISOString()
            }

            await publish(order);
        }

    }
    catch(error){
        console.error(error);
    }
    
}

//websocket and polling functionality
let running = true;
let ws: WebSocket;
let wsBackoff = 1000;
let lastProcessedBlock= null;
let pendingHeads: Set<number> = new Set();
let processingLock = false;
let activeSubId: (string | null) = null;


async function processBlockBatches(targetBlock: number) {
    if(processingLock) return;
    processingLock = true;
    
    try{
        //get last processed block from the db
        let lastBlock = await getLastProcessedBlock();
        if(lastBlock == null){
            //get the current block go back some blocks and start processsing to avoid reorgs
            const currentBlock = Number(await publicClient.getBlockNumber());
            lastBlock = Math.max(0, currentBlock - START_BLOCK_BACKOFF)
            await setLastProcessedBlock(lastBlock);
        }

        if(targetBlock <= lastBlock) return

        while (targetBlock > lastBlock){
            const to = Math.min(lastBlock + BATCH_BLOCKS, targetBlock);
            await processBlockRange(lastBlock + 1, to)


            //store processed block hashes for reorg detection
            for (let last = lastBlock + 1; last <= to; last++){
                const block = await publicClient.getBlock({
                    blockNumber: BigInt(String(last))
                })

                if(block) await storeProcessedBlockDetails(Number(block.number), block.hash);
            }

            lastBlock = to;

            await setLastProcessedBlock(lastBlock);
        }

    }
    catch(error){
        console.log(error)
    }
    finally{
        processingLock = false;
    }

}

async function onNewHead(blockNumber: number){
    pendingHeads.add(blockNumber);

    //compute the highest known heads
    const highest = Math.max(...Array.from(pendingHeads));
    try{
        await processBlockBatches(highest);
    }
    catch(error){
        console.log("processBlockBatches error:", error)
    }
    finally{
        const lastProcessedBlock = await getLastProcessedBlock();

        for (const blockNum of Array.from(pendingHeads)){
            if(lastProcessedBlock != null && blockNum <= lastProcessedBlock){
                pendingHeads.delete(blockNum);
            }
        }
    }
    
}

//handles the websocket connection
function connectWs(){
    if(!WS_RPC_URL) {
        console.warn("WS_RPC_URL not provided — falling back to polling-only mode.");
        return;
    }

    console.log("connecting to websocket", WS_RPC_URL);

    ws = new WebSocket(WS_RPC_URL, {
        handshakeTimeout: 10_000
    });

    ws.on("open", () => {
        console.log("WS open — subscribing to newHeads");
        wsBackoff = 1000; //reset backoff
        
        const req = {
            jsonrpc: "2.0",
            id: 1,
            method: "eth_subscribe",
            params: ["newHeads"]
        };

        ws.send(JSON.stringify(req));

    });

    ws.on("message", async (data: any) =>{
        try{
            const message = JSON.parse(data.toString());

            if(message.method === "eth_subscription" && message.params && message.params.result){
                const subId = message.params.subscription
                

                if(activeSubId && subId != activeSubId) return  

                const result = message.params.result;

                const blockNumber = parseBlockNumber(result.number ?? result.blockNumber);

                if(blockNumber != null){
                    try{
                        await onNewHead(blockNumber);
                    }
                    catch(error){
                        console.log("onNewHead error:", error);
                    }
                    
                }
                else{
                    console.warn("Subscription notification without parsable block number", result);
                }

                return ;
            }

            if(message.id && message.result ){
                if(message.id == 1){
                    activeSubId = message.result;
                    console.log("WS subscribed, id:", activeSubId);
                }
                return;
                
            }
            if (message.error) {
                console.warn("WS JSON-RPC error:", message.error);

                if(ws && ws.readyState === ws.OPEN){
                    setTimeout(() => {
                        const req = {
                            jsonrpc: "2.0",
                            id: 1,
                            method: "eth_subscribe",
                            params: ["newHeads"]
                        }
                        ws.send(JSON.stringify(req));
                    }, 5000)
                }
                return;
            }

        }
        catch(error){
            console.log("WS message error:", error, data.toString());
        }
    })

    ws.on("close", (code: any, reason: any) => {
        console.log("WS closed", code, reason?.toString() ?? reason);
        setTimeout(() =>{
            wsBackoff = Math.min(wsBackoff * 1.5, 60_000);
            connectWs();
        }, wsBackoff);
    })

    ws.on("error", (err) => {
        console.error("WS error:", err);
        try { 
            ws.close(); 
        } 
        catch(err) {
            ws.terminate?.();
        }
    });
}

