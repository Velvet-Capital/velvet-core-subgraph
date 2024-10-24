import {
  UserRecordUpdated as UserRecordUpdatedEvent,
  TokenRecordUpdated as TokenRecordUpdatedEvent,
  SnapShotCreated as SnapShotCreatedEvent,
  UserClaimedToken as UserClaimedTokenEvent,
  UserClaimedTokenAtRange as UserClaimedTokenAtRangeEvent,
} from "../generated/templates/TokenExclusionManager/TokenExclusionManager";
import {
  UserRecordUpdated,
  TokenRecordUpdated,
  SnapShotCreated,
  UserClaimedToken,
  UserClaimedTokenAtRange,
} from "../generated/schema";

export function handleUserRecordUpdated(event: UserRecordUpdatedEvent): void {
  let entity = new UserRecordUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.tokenExclusionManager = event.address;
  entity.user = event.params.user;
  entity.portfolioBalance = event.params.portfolioBalance;
  entity.atSnapshotId = event.params.atSnapshotId;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTokenRecordUpdated(event: TokenRecordUpdatedEvent): void {
  let entity = new TokenRecordUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.tokenExclusionManager = event.address;
  entity.token = event.params.token;
  entity.totalSupply = event.params.totalSupply;
  entity.atSnapshotId = event.params.atSnapshotId;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSnapShotCreated(event: SnapShotCreatedEvent): void {
  let entity = new SnapShotCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.tokenExclusionManager = event.address;
  entity.snapshotId = event.params.snapshotId;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUserClaimedToken(event: UserClaimedTokenEvent): void {
  let entity = new UserClaimedToken(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.tokenExclusionManager = event.address;
  entity.user = event.params.user;
  entity.claimedAtId = event.params.claimedAtId;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUserClaimedTokenAtRange(
  event: UserClaimedTokenAtRangeEvent
): void {
  let entity = new UserClaimedTokenAtRange(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.tokenExclusionManager = event.address;
  entity.user = event.params.user;
  entity.startId = event.params.startId;
  entity.endId = event.params.endId;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
