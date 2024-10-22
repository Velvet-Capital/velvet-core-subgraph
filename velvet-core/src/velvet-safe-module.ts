import { ModuleSetUp as ModuleSetUpEvent } from "../generated/templates/VelvetSafeModule/VelvetSafeModule";
import { ModuleSetUp } from "../generated/schema";

export function handleModuleSetUp(event: ModuleSetUpEvent): void {
  let entity = new ModuleSetUp(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  entity.module = event.params.module;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
