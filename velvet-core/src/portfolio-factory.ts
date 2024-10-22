import { PortfolioInfo as PortfolioInfoEvent } from "../generated/PortfolioFactory/PortfolioFactory";

import { PortfolioInfo, PortfoliolInfo } from "../generated/schema";

import { log } from "@graphprotocol/graph-ts";

import { Portfolio as PortfolioTemplate } from "../generated/templates";
import { TokenExclusionManager as TokenExclusionManagerTemplate } from "../generated/templates";
import { Rebalancing as RebalancingTemplate } from "../generated/templates";
import { AssetManagementConfig as AssetManagementConfigTemplate } from "../generated/templates";
import { FeeModule as FeeModuleTemplate } from "../generated/templates";
import { VelvetSafeModule as VelvetSafeModuleTemplate } from "../generated/templates";

export function handlePortfolioCreated(event: PortfolioInfoEvent): void {
  let entity = new PortfolioInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );

  entity.portfolioId = event.params.portfolioId;
  entity.name = event.params._name;
  entity.symbol = event.params._symbol;
  entity.owner = event.params._owner;
  entity.accessController = event.params._accessController;
  entity.isPublicPortfolio = event.params.isPublicPortfolio;

  entity.save();

  entity.save();

  // Create templates as before
  PortfolioTemplate.create(event.params.portfolioData.portfolio);
  TokenExclusionManagerTemplate.create(
    event.params.portfolioData.tokenExclusionManager
  );
  RebalancingTemplate.create(event.params.portfolioData.rebalancing);
  AssetManagementConfigTemplate.create(
    event.params.portfolioData.assetManagementConfig
  );
  FeeModuleTemplate.create(event.params.portfolioData.feeModule);
  VelvetSafeModuleTemplate.create(event.params.portfolioData.gnosisModule);
}
