import { FeesCollected as FeesCollectedEvent } from "../generated/templates/FeeModule/FeeModule";
import { FeesCollected } from "../generated/schema";

export function handleFeesCollected(event: FeesCollectedEvent): void {
  let entity = new FeesCollected(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  entity.amount1 = event.params.amount1;
  entity.amount2 = event.params.amount2;
  entity.amount3 = event.params.amount3;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
