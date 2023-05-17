# Network Theory

Let's also clear up the blockchain network we're going to run with this setup and how the compensation works for providing the piece of backend infrastructure. Its important to know the basics of how we will participate.

### 6.2.1 Proof of Stake

PoS is a consensus mechanism used in many blockchain networks to validate and add new transactions to the blockchain. Unlike Proof of Work on Bitcoin, which requires miners to solve complex mathematical problems to add new blocks to the blockchain, PoS relies on the amount of cryptocurrency a person holds and is willing to stake as collateral.

In a PoS blockchain, validators are chosen to create a new block based on their stake in the network. The more cryptocurrency a person holds, the higher their chances of being chosen as a validator. Once chosen, validators validate transactions and add them to the blockchain. For their service, validators are rewarded with transaction fees and potentially new coins.

One of the main advantages of PoS over PoW is its energy efficiency. While PoW requires massive computational resources and energy consumption, PoS achieves consensus with minimal energy use. This makes PoS a more sustainable and environmentally friendly choice for blockchain networks.

Another advantage of PoS is the security it provides. Since validators have a significant investment in the network, they are incentivized to act honestly. If a validator tries to manipulate the system or validate fraudulent transactions, they risk losing their stake, making attacks on the network costly and therefore less likely.

### 6.2.2 Network Operations

The Ethereum Virtual Machine is a crucial part of the Ethereum ecosystem and each full node running the Ethereum software has its own instance of it. This is because every full node validates every transaction and smart contract execution independently. The EVM is isolated from the network, filesystem, and other processes of the node's computer system, which makes it a sandboxed environment for smart contract execution.

When a node receives a new block, it executes all transactions in that block in its own EVM to validate the correctness of the transaction results and the final state of the block. This is a fundamental part of the Ethereum network's decentralized nature: every node independently verifies the validity of every block and every transaction.

### 6.2.3 Computation Measures

Each operation in the EVM requires a certain amount of gas, which is paid for in the chains coin. The cost of gas is a crucial part of Ethereum's incentive structure, deterring spam on the network and incentivizing miners to confirm transactions.

Since the [London Update](https://eips.ethereum.org/EIPS/eip-1559) Ethereum has a predictable fee system with two parts: a base fee and a tip. The base fee is burned and adjusts up or down depending on network congestion. This means that when the network is busy, the base fee increases, and when the network is less busy, the base fee decreases. The tip, also called priority fee, is given to the miner as an incentive to include the transaction in the block.

Gas plays a crucial role in the execution of transactions. If a transaction or smart contract operation does not have enough gas, it runs out of gas and fails, but the gas used up to that point is not returned as the computation was finished up to this point.

### 6.2.4 Tokenomics

A large portion of the transaction fee is burned, i.e., permanently removed from circulation. This burning mechanism effectively reduces the supply of Ether over time, which can exert upward pressure on the price, assuming demand remains constant or increases, making EVM PoS blockchain coins a semi-deflationary asset.

Therefore, validators only receive the block rewards and tips as fees.

### 6.2.5 Earnings & Withdrawals

When it comes to withdrawels and returns, there are certain wallet addresses to maintain: the withdrawal and the recipient address. They could be the same address, but different actions are bind to them:

- **Staking Withdrawal Address**: Staking withdrawals refer to withdrawing earned rewards or the initial staked amount (32 LYX) by validators participating in Proof-of-Stake. These withdrawals become possible after the Shapella upgrade & EIP-4895 are up and running on the according network. These staking withdrawals are automatically pushed to the withdrawal address set during the key generation process and are registered on-chain during the deposit. This address cannot be changed once the stake is deposited.
- **Recipient Fee Address**: The recipient fee address, e.g., transaction or gas fee address, differs from the staking withdrawal. The recipient fee address is associated with the validator when they perform validation duties, such as proposing and attesting to blocks. The recipient fee address is set during the start of the validator client on the node and can be changed upon restart. To set or modify, you need your node's wallet password after importing the validator keys. The fees are paid by users who initiate transactions and smart contract executions on the EVM network. Validators collect the fees as an incentive for their work in maintaining the blockchain.

Both addresses are regular Ethereum Addresses (EOAs) that can be generated in wallets like MetaMask or hardware wallets like Ledger. They could even be the same addresses, meaning you will receive both: withdrawals and fees onto the same address.

> Please keep in mind, that your hardware wallet needs support for importing or using these accounts on regular dApps. Otherwise, you might not be able to manage these funds until the LUKSO network is supported. In case of Ledger, they can easily imported into MetaMask, which should do the trick for most of you. Keep in mind to send some minimal supported funds onto this hardware key, so it will show up again if it was restored from the seed alone.

In conclusion, staking withdrawals refer to withdrawing rewards and staked amounts connected to the consensus mechanism. On the other end, the recipient fee address is where validators receive transaction fees for their validation work itself.

> Typically everything is included in the APY for staking rewards. But as expected, there are fluctuations for various factors such as network usage, the number of validators, and consensus changes.

### 6.2.6 Slashing

In the context of Proof of Stake consensus, the slasher functionality is a mechanism designed to discourage validators from behaving dishonestly or maliciously. If a validator behaves in a way that could compromise the network's integrity—like trying to manipulate the transaction history or proposing conflicting blocks—they can be slashed. When a validator gets slashed, a portion of its staked LYX or LYXt is removed, e,g. burnt. Additionally, they are ejected from the validator set, losing their ability to participate in the consensus process and earn further rewards.

The slashing conditions include:

- **Double Proposal**: If a validator proposes two different blocks during the same time slot.
- **Surround Vote**: If a validator makes attestations that surround each other, meaning a later vote contradicts an earlier one in a way that isn't just an update.

Without the slasher, slashed validators that have committed offenses might not be promptly removed from the validator set, which could theoretically affect network operation in certain situations. Running a slasher service can be resource-intensive. The slasher service needs to keep track of a significant amount of historical data to detect slashable offences, which can require substantial storage space and processing power.

### 6.2.7 Panelties

In Proof of Stake, validators can be penalized for being offline, technically different as loosing stake due to slashing. Instead, it's considered inactivity leakage or an inactivity penalty. The exact penalties for an offline validator are dynamically adjusted based on the total amount of offline validators and the duration they've been offline.

The idea behind this mechanism is to incentivize validators to stay online and actively participate in the network's consensus process. Validators are expected to be online to propose and attest to blocks. If a validator is offline, they're not fulfilling their role, and so their balance slowly leaks over time.

The penalties for being offline are much less severe than the penalties for malicious behavior that would result in slashing. The inactivity penalty is proportional to the square of the length of time the validator has been offline, meaning the penalty accelerates the longer the validator is offline.

It's important to note that these penalties are only applied during periods where the network isn't finalizing blocks. If the network is finalizing blocks, offline validators don't receive inactivity penalties, but they do miss out on potential rewards.

The design intention is to ensure that validators have a strong incentive to remain online and participate in the consensus process, but without making the penalties so severe that minor issues could result in significant losses. This balance aims to encourage a secure and decentralized network.

#### Panelty Estimation

The exact calculation of these penalties can be complex due to these variables, but here are rough estimates:

```text
For being offline for 5 hours:    0.01 LYX/LYXt panelty
For being offline for 1 day:      0.10 LYX/LYXt panelty
For being offline for 7 days:     1.00 LYX/LYXt panelty
```

> Remember, these are rough estimates and the actual penalties could be different based on the network conditions. If the network is not finalizing, e.g., more than one-third of the network is offline, penalties can ramp up significantly.

### 6.2.8 Participation Rate

In Proof of Stake consensus, for the chain to finalize blocks, at least two-thirds of the validators need to be online and actively participating. Network stalls can occur due to various reasons, such as network partitions or a significant number of other validators also being offline or not participating effectively around the same time.