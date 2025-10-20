-- CreateEnum
CREATE TYPE "Status" AS ENUM ('open', 'filled', 'cancelled', 'invalid');

-- CreateTable
CREATE TABLE "ProcessedEvent" (
    "eventId" TEXT NOT NULL,
    "txHash" TEXT NOT NULL,
    "logIndex" INTEGER NOT NULL,
    "eventType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProcessedEvent_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "IndexerMeta" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndexerMeta_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "ProcessedBlock" (
    "blockNumber" INTEGER NOT NULL,
    "blockHash" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcessedBlock_pkey" PRIMARY KEY ("blockNumber")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderHash" TEXT NOT NULL,
    "txHash" TEXT,
    "logIndex" INTEGER,
    "blockNumber" INTEGER,
    "status" "Status",
    "isConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "isOrphaned" BOOLEAN NOT NULL DEFAULT false,
    "rawOrder" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderHash")
);

-- CreateIndex
CREATE INDEX "idx_processed_event_tx_log" ON "ProcessedEvent"("txHash", "logIndex");

-- CreateIndex
CREATE INDEX "idx_processed_block_hash" ON "ProcessedBlock"("blockHash");

-- CreateIndex
CREATE INDEX "idx_order_blockNumber" ON "Order"("blockNumber");

-- CreateIndex
CREATE INDEX "idx_order_confirm_orphan" ON "Order"("isConfirmed", "isOrphaned");

-- CreateIndex
CREATE INDEX "idx_order_tx_log" ON "Order"("txHash", "logIndex");
