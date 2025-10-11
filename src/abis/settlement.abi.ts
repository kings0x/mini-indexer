// src/abis/seaport.events.ts
import type { Abi } from "viem";

export const SeaportsAbi: Abi = [
  // OrderFulfilled (very useful to index fills)
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bytes32", name: "orderHash", type: "bytes32" },
      { indexed: false, internalType: "address", name: "offerer", type: "address" },
      { indexed: false, internalType: "address", name: "zone", type: "address" },
      { indexed: false, internalType: "address", name: "recipient", type: "address" },
      {
        indexed: false,
        internalType: "tuple[]",
        name: "offer",
        type: "tuple[]"
      },
      {
        indexed: false,
        internalType: "tuple[]",
        name: "consideration",
        type: "tuple[]"
      }
    ],
    name: "OrderFulfilled",
    type: "event"
  },

  // OrderCancelled
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bytes32", name: "orderHash", type: "bytes32" },
      { indexed: false, internalType: "address", name: "offerer", type: "address" }
    ],
    name: "OrderCancelled",
    type: "event"
  },

  // OrderValidated
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bytes32", name: "orderHash", type: "bytes32" },
      { indexed: false, internalType: "address", name: "offerer", type: "address" }
    ],
    name: "OrderValidated",
    type: "event"
  },
] as const;

export default SeaportsAbi;
