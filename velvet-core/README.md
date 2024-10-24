# Velvet-Core Subgraph

## Overview

The Velvet-Core subgraph indexes and provides query access to key events and entities within the Velvet protocol. This subgraph allows for efficient querying of portfolio data, associated events, and related contract instances.

## Querying the Subgraph

### Portfolio Information

To query information about a specific portfolio:

graphql {
portfolio(id: "0x1234...") {
name
symbol
owner
accessController
isPublicPortfolio
tokenExclusionManagerAddress
rebalancingAddress
assetManagementConfigAddress
feeModuleAddress }
}

### Querying Events for Specific Contract Instances

You can query events related to specific contract instances using the following structure:

graphql {
eventName(where: {contractFieldName: "contractAddress"}) {
id
// other fields... }
}

Examples:

1. UserWhitelisted events for a specific Asset Management Config:

graphql {
userWhitelisteds(where: {assetManagementConfigAddress: "0x1234..."}) {
id
users
blockNumber
blockTimestamp
transactionHash }
}

2. FeesToBeMinted events for a specific Fee Module:

graphql {
feesToBeMinteds(where: {feeModule: "0x5678..."}) {
id
assetManagementTreasury
protocolTreasury
protocolFeeAmount
managerFeeAmount
blockNumber
blockTimestamp }
}

3. TokenRecordUpdated events for a specific Token Exclusion Manager:

graphql {
tokenRecordUpdateds(where: {tokenExclusionManager: "0x9ABC..."}) {
id
token
totalSupply
atSnapshotId
blockNumber
blockTimestamp }
}

### Updating the Subgraph Manifest

1. Open `subgraph.yaml`
2. Add new data sources or event handlers. Example:

   yaml
   dataSources:
   kind: ethereum
   name: NewContract
   network: mainnet
   source:
   address: "0x1234..."
   abi: NewContract
   mapping:
   kind: ethereum/events
   apiVersion: 0.0.7
   language: wasm/assemblyscript
   file: ./src/new-contract.ts
   entities:
   NewEvent
   abis:
   name: NewContract
   file: ./abis/NewContract.json
   eventHandlers:
   event: NewEvent(address,uint256)

### Creating or Modifying AssemblyScript Mappings

1. Create a new file or modify existing ones in the `src/` directory
2. Import necessary types and entities
3. Create handler functions for each event. Example:

   typescript
   import { NewEvent as NewEventEvent } from "../generated/NewContract/NewContract"
   import { NewEvent } from "../generated/schema"
   export function handleNewEvent(event: NewEventEvent): void {
   let entity = new NewEvent(
   event.transaction.hash.concatI32(event.logIndex.toI32())
   )
   entity.someAddress = event.params.someAddress
   entity.someValue = event.params.someValue
   entity.blockNumber = event.block.number
   entity.blockTimestamp = event.block.timestamp
   entity.transactionHash = event.transaction.hash
   entity.save()
   }

### After Making Changes

1. Run `graph codegen` to generate TypeScript types based on your schema
2. Run `graph build` to compile the subgraph
3. Deploy your subgraph using `graph deploy`

## Conclusion

This README provides a basic overview of how to query the Velvet-Core subgraph and how to extend it. For more detailed information, please refer to The Graph's official documentation and the specific implementation details of the Velvet-Core project.
