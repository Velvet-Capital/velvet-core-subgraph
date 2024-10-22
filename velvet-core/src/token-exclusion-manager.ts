import { TokenExcluded as TokenExcludedEvent } from "../generated/templates/TokenExclusionManager/TokenExclusionManager";
import { TokenExcluded } from "../generated/schema";

export function handleTokenExcluded(event: TokenExcludedEvent): void {
  let entity = new TokenExcluded(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  entity.token = event.params.token;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
