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

  // Create a string representation of portfolioData
  let portfolioDataString =
    `portfolio:${event.params.portfolioData.portfolio.toHexString()},` +
    `tokenExclusionManager:${event.params.portfolioData.tokenExclusionManager.toHexString()},` +
    `rebalancing:${event.params.portfolioData.rebalancing.toHexString()},` +
    `assetManagementConfig:${event.params.portfolioData.assetManagementConfig.toHexString()},` +
    `feeModule:${event.params.portfolioData.feeModule.toHexString()},` +
    `gnosisModule:${event.params.portfolioData.gnosisModule.toHexString()}`;

  entity.portfolioData = portfolioDataString;

  // Create PortfolioData instance
  let portfolioData = new PortfoliolInfo(event.transaction.hash.toHexString());
  portfolioData.portfolio = event.params.portfolioData.portfolio;
  portfolioData.tokenExclusionManager =
    event.params.portfolioData.tokenExclusionManager;
  portfolioData.rebalancing = event.params.portfolioData.rebalancing;
  portfolioData.owner = event.params._owner;
  portfolioData.assetManagementConfig =
    event.params.portfolioData.assetManagementConfig;
  portfolioData.feeModule = event.params.portfolioData.feeModule;
  portfolioData.vaultAddress = event.params.portfolioData.vaultAddress;
  portfolioData.gnosisModule = event.params.portfolioData.gnosisModule;
  portfolioData.save();

  entity.portfolioData = portfolioData.id;

  entity.portfolioId = event.params.portfolioId;
  entity.name = event.params._name;
  entity.symbol = event.params._symbol;
  entity.owner = event.params._owner;
  entity.accessController = event.params._accessController;
  entity.isPublicPortfolio = event.params.isPublicPortfolio;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

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
