import {
  FeesToBeMinted as FeesToBeMintedEvent,
  ManagementFeeCalculated as ManagementFeeCalculatedEvent,
  EntryExitFeeCharged as EntryExitFeeChargedEvent,
} from "../generated/templates/FeeModule/FeeModule";
import {
  FeesToBeMinted,
  ManagementFeeCalculated,
  EntryExitFeeCharged,
} from "../generated/schema";

export function handleFeesToBeMinted(event: FeesToBeMintedEvent): void {
  let entity = new FeesToBeMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.feeModule = event.address;
  entity.assetManagementTreasury = event.params.assetManagementTreasury;
  entity.protocolTreasury = event.params.protocolTreasury;
  entity.protocolFeeAmount = event.params.protocolFeeAmount;
  entity.managerFeeAmount = event.params.managerFeeAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleManagementFeeCalculated(
  event: ManagementFeeCalculatedEvent
): void {
  let entity = new ManagementFeeCalculated(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.feeModule = event.address;
  entity.protocolStreamingFeeAmount = event.params.protocolStreamingFeeAmount;
  entity.managementFeeAmount = event.params.managementFeeAmount;
  entity.protocolFeeCutAmount = event.params.protocolFeeCutAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleEntryExitFeeCharged(
  event: EntryExitFeeChargedEvent
): void {
  let entity = new EntryExitFeeCharged(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.feeModule = event.address;
  entity.entryExitProtocolFeeAmount = event.params.entryExitProtocolFeeAmount;
  entity.entryExitAssetManagerFeeAmount =
    event.params.entryExitAssetManagerFeeAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
