import {
  UpdatedWeights as UpdatedWeightsEvent,
  UpdatedTokens as UpdatedTokensEvent,
  PortfolioTokenRemoved as PortfolioTokenRemovedEvent,
} from "../generated/templates/Rebalancing/Rebalancing";
import {
  UpdatedWeights,
  UpdatedTokens,
  PortfolioTokenRemoved,
} from "../generated/schema";
import { Address, Bytes } from "@graphprotocol/graph-ts";

export function handleUpdatedWeights(event: UpdatedWeightsEvent): void {
  let entity = new UpdatedWeights(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUpdatedTokens(event: UpdatedTokensEvent): void {
  let entity = new UpdatedTokens(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.newTokens = event.params.newTokens.map<Bytes>(
    (address: Address) => address as Bytes
  );
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePortfolioTokenRemoved(
  event: PortfolioTokenRemovedEvent
): void {
  let entity = new PortfolioTokenRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.token = event.params.token;
  entity.vault = event.params.vault;
  entity.balance = event.params.balance;
  entity.atSnapshotId = event.params.atSnapshotId;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
