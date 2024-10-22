import {
  TransferabilityUpdated as TransferabilityUpdatedEvent,
  ChangedPortfolioToPublic as ChangedPortfolioToPublicEvent,
  MinPortfolioTokenHoldingAmountUpdated as MinPortfolioTokenHoldingAmountUpdatedEvent,
  InitialPortfolioAmountUpdated as InitialPortfolioAmountUpdatedEvent,
  ProposeManagementFee as ProposeManagementFeeEvent,
  ProposePerformanceFee as ProposePerformanceFeeEvent,
  ProposeEntryAndExitFee as ProposeEntryAndExitFeeEvent,
  UpdateManagementFee as UpdateManagementFeeEvent,
  UpdatePerformanceFee as UpdatePerformanceFeeEvent,
  UpdateEntryAndExitFee as UpdateEntryAndExitFeeEvent,
  DeleteProposedManagementFee as DeleteProposedManagementFeeEvent,
  DeleteProposedPerformanceFee as DeleteProposedPerformanceFeeEvent,
  DeleteProposedEntryAndExitFee as DeleteProposedEntryAndExitFeeEvent,
  TokenWhitelisted as TokenWhitelistedEvent,
  TokensRemovedFromWhitelist as TokensRemovedFromWhitelistEvent,
  TreasuryUpdated as TreasuryUpdatedEvent,
  UserWhitelisted as UserWhitelistedEvent,
  UserRemovedFromWhitelist as UserRemovedFromWhitelistEvent,
} from "../generated/templates/AssetManagementConfig/AssetManagementConfig";
import {
  TransferabilityUpdated,
  ChangedPortfolioToPublic,
  MinPortfolioTokenHoldingAmountUpdated,
  InitialPortfolioAmountUpdated,
  ProposeManagementFee,
  ProposePerformanceFee,
  ProposeEntryAndExitFee,
  UpdateManagementFee,
  UpdatePerformanceFee,
  UpdateEntryAndExitFee,
  DeleteProposedManagementFee,
  DeleteProposedPerformanceFee,
  DeleteProposedEntryAndExitFee,
  TokenWhitelisted,
  TokensRemovedFromWhitelist,
  TreasuryUpdated,
  UserWhitelisted,
  UserRemovedFromWhitelist,
} from "../generated/schema";
import { Bytes } from "@graphprotocol/graph-ts";

export function handleTransferabilityUpdated(
  event: TransferabilityUpdatedEvent
): void {
  let entity = new TransferabilityUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.transferable = event.params._transferable;
  entity.publicTransfers = event.params._publicTransfers;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleChangedPortfolioToPublic(
  event: ChangedPortfolioToPublicEvent
): void {
  let entity = new ChangedPortfolioToPublic(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.isPublic = event.params.isPublic;
  entity.isTransferableToPublic = event.params.isTransferableToPublic;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleMinPortfolioTokenHoldingAmountUpdated(
  event: MinPortfolioTokenHoldingAmountUpdatedEvent
): void {
  let entity = new MinPortfolioTokenHoldingAmountUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.minPortfolioTokenHoldingAmount =
    event.params._minPortfolioTokenHoldingAmount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleInitialPortfolioAmountUpdated(
  event: InitialPortfolioAmountUpdatedEvent
): void {
  let entity = new InitialPortfolioAmountUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.newInitialPortfolioAmount = event.params._newInitialPortfolioAmount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleProposeManagementFee(
  event: ProposeManagementFeeEvent
): void {
  let entity = new ProposeManagementFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.newManagementFee = event.params.newManagementFee;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleProposePerformanceFee(
  event: ProposePerformanceFeeEvent
): void {
  let entity = new ProposePerformanceFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.newPerformanceFee = event.params.newPerformanceFee;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleProposeEntryAndExitFee(
  event: ProposeEntryAndExitFeeEvent
): void {
  let entity = new ProposeEntryAndExitFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.newEntryFee = event.params.newEntryFee;
  entity.newExitFee = event.params.newExitFee;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleUpdateManagementFee(
  event: UpdateManagementFeeEvent
): void {
  let entity = new UpdateManagementFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.newManagementFee = event.params.newManagementFee;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleUpdatePerformanceFee(
  event: UpdatePerformanceFeeEvent
): void {
  let entity = new UpdatePerformanceFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.newPerformanceFee = event.params.newPerformanceFee;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleUpdateEntryAndExitFee(
  event: UpdateEntryAndExitFeeEvent
): void {
  let entity = new UpdateEntryAndExitFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.newEntryFee = event.params.newEntryFee;
  entity.newExitFee = event.params.newExitFee;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleDeleteProposedManagementFee(
  event: DeleteProposedManagementFeeEvent
): void {
  let entity = new DeleteProposedManagementFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleDeleteProposedPerformanceFee(
  event: DeleteProposedPerformanceFeeEvent
): void {
  let entity = new DeleteProposedPerformanceFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleDeleteProposedEntryAndExitFee(
  event: DeleteProposedEntryAndExitFeeEvent
): void {
  let entity = new DeleteProposedEntryAndExitFee(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleTokenWhitelisted(event: TokenWhitelistedEvent): void {
  let entity = new TokenWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.tokens = event.params.tokens.map<Bytes>((t) => t);
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleTokensRemovedFromWhitelist(
  event: TokensRemovedFromWhitelistEvent
): void {
  let entity = new TokensRemovedFromWhitelist(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.tokens = event.params.tokens.map<Bytes>((t) => t);
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleTreasuryUpdated(event: TreasuryUpdatedEvent): void {
  let entity = new TreasuryUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.newTreasury = event.params.newTreasury;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleUserWhitelisted(event: UserWhitelistedEvent): void {
  let entity = new UserWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.users = event.params.users.map<Bytes>((u) => u);
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleUserRemovedFromWhitelist(
  event: UserRemovedFromWhitelistEvent
): void {
  let entity = new UserRemovedFromWhitelist(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.users = event.params.users.map<Bytes>((u) => u);
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}
