import {
  Transfer as TransferEvent,
  PublicSwapEnabled as PublicSwapEnabledEvent,
  Deposited as DepositedEvent,
  Withdrawn as WithdrawnEvent,
  UserDepositedAmounts as UserDepositedAmountsEvent,
} from "../generated/templates/Portfolio/Portfolio";
import {
  Transfer,
  PublicSwapEnabled,
  Deposit,
  Withdrawal,
  UserDepositedAmount,
} from "../generated/schema";
import { Bytes } from "@graphprotocol/graph-ts";

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePublicSwapEnabled(event: PublicSwapEnabledEvent): void {
  let entity = new PublicSwapEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.portfolio = event.params.portfolio;
  entity.timestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDeposited(event: DepositedEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.portfolio = event.params.portfolio;
  entity.user = event.params.user;
  entity.mintedAmount = event.params.mintedAmount;
  entity.userBalanceAfterDeposit = event.params.userBalanceAfterDeposit;
  entity.timestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.user = event.params.user;
  entity.burnedAmount = event.params.burnedAmount;
  entity.portfolio = event.params.portfolio;
  entity.portfolioTokens = event.params.portfolioTokens.map<Bytes>(
    (address) => address as Bytes
  );
  entity.userBalanceAfterWithdrawal = event.params.userBalanceAfterWithdrawal;
  entity.userWithdrawalAmounts = event.params.userWithdrawalAmounts;
  entity.timestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUserDepositedAmounts(
  event: UserDepositedAmountsEvent
): void {
  let entity = new UserDepositedAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  );
  entity.portfolio = event.address;
  entity.depositedAmounts = event.params.depositedAmounts;
  entity.portfolioTokens = event.params.portfolioTokens.map<Bytes>(
    (address) => address as Bytes
  );
  entity.timestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
