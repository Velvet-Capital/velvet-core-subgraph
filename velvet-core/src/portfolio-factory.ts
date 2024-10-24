import { PortfolioInfo as PortfolioInfoEvent } from "../generated/PortfolioFactory/PortfolioFactory";

import { PortfolioInfo, PortfoliolInfo, Portfolio } from "../generated/schema";

import { log } from "@graphprotocol/graph-ts";

import {
  Portfolio as PortfolioTemplate,
  TokenExclusionManager as TokenExclusionManagerTemplate,
  Rebalancing as RebalancingTemplate,
  AssetManagementConfig as AssetManagementConfigTemplate,
  FeeModule as FeeModuleTemplate,
} from "../generated/templates";

export function handlePortfolioCreated(event: PortfolioInfoEvent): void {
  let portfolioAddress = event.params.portfolioData.portfolio.toHexString();

  // Create PortfoliolInfo entity
  let portfolioData = new PortfoliolInfo(portfolioAddress);
  portfolioData.portfolio = event.params.portfolioData.portfolio;
  portfolioData.tokenExclusionManager =
    event.params.portfolioData.tokenExclusionManager;
  portfolioData.rebalancing = event.params.portfolioData.rebalancing;
  portfolioData.owner = event.params.portfolioData.owner;
  portfolioData.assetManagementConfig =
    event.params.portfolioData.assetManagementConfig;
  portfolioData.feeModule = event.params.portfolioData.feeModule;
  portfolioData.vaultAddress = event.params.portfolioData.vaultAddress;
  portfolioData.gnosisModule = event.params.portfolioData.gnosisModule;
  portfolioData.save();

  // Create PortfolioInfo entity
  let entity = new PortfolioInfo(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
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

  // Create and initialize Portfolio entity
  let portfolio = new Portfolio(portfolioAddress);
  portfolio.name = event.params._name;
  portfolio.symbol = event.params._symbol;
  portfolio.owner = event.params._owner;
  portfolio.portfolio = event.params.portfolioData.portfolio;
  portfolio.accessController = event.params._accessController;
  portfolio.isPublicPortfolio = event.params.isPublicPortfolio;
  portfolio.tokenExclusionManagerAddress =
    event.params.portfolioData.tokenExclusionManager;
  portfolio.rebalancingAddress = event.params.portfolioData.rebalancing;
  portfolio.assetManagementConfigAddress =
    event.params.portfolioData.assetManagementConfig;
  portfolio.feeModuleAddress = event.params.portfolioData.feeModule;
  portfolio.save();

  // Create templates
  PortfolioTemplate.create(event.params.portfolioData.portfolio);
  TokenExclusionManagerTemplate.create(
    event.params.portfolioData.tokenExclusionManager
  );
  RebalancingTemplate.create(event.params.portfolioData.rebalancing);
  AssetManagementConfigTemplate.create(
    event.params.portfolioData.assetManagementConfig
  );
  FeeModuleTemplate.create(event.params.portfolioData.feeModule);
}
