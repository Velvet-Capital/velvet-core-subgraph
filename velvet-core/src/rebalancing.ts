import { RebalanceExecuted as RebalanceExecutedEvent } from "../generated/templates/Rebalancing/Rebalancing";
import { RebalanceExecuted } from "../generated/schema";

export function handleRebalanceExecuted(event: RebalanceExecutedEvent): void {
  let entity = new RebalanceExecuted(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  entity.executor = event.params.executor;
  entity.timestamp = event.params.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
