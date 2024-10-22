import { FeeUpdated as FeeUpdatedEvent } from "../generated/templates/AssetManagementConfig/AssetManagementConfig";
import { FeeUpdated } from "../generated/schema";

export function handleFeeUpdated(event: FeeUpdatedEvent): void {
  let entity = new FeeUpdated(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  entity.param1 = event.params.param1;
  entity.param2 = event.params.param2;
  entity.param3 = event.params.param3;
  entity.param4 = event.params.param4;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
