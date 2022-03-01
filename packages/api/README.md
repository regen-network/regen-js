[![Actions Status](https://github.com/regen-network/regen-js/workflows/CI/badge.svg?branch=main)](https://github.com/regen-network/regen-js/actions)
![GitHub License](https://img.shields.io/github/license/regen-network/regen-js)

<br /><br /><br />

<h1 align="center">@regen-network/api</h1>

<h4 align="center">
  A TypeScript client library for the Regen Ledger.
</h4>

<br /><br /><br />

## 🚧 Warning

This API is still under heavy construction, be ready for unexpected breaking changes.

## Get Started

The library exposes one main TypeScript class: the `RegenApi` class. Here is an example of fetching the user's balance.

```ts
import { RegenApi } from '@regen-network/api';
import { QueryClientImpl } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { MsgSend } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/tx';

// Create a new instance of the RegenApi class.
const api = RegenApi.connect({
	// RegenApi only supports using the Tendermint RPC to interact with a node for now.
	// But it may support other client connections in the future:
	// - via gRPC
	// - via gRPC-web
	// - via REST and gRPC-gateway
	connection: {
		type: 'tendermint',
		endpoint: 'http://redwood.regen.network:26657',
		signer, // OfflineSigner from @cosmjs/proto-signing
	},
});

// Create a client for the x/bank module.
const bankClient = new QueryClientImpl(api.queryClient);

// Fetch the balance of the signer address.
const [firstAccount] = await signer.getAccounts();
const myAddress = firstAccount.address;

const balances = await bankClient.AllBalances({
	address: myAddress,
});

console.log(balances); // Prints `{"balances":[{"denom":"utree","amount":"10000000000"}],"pagination":{"total":1}}`

// Sign and broadcast a transaction with some x/bank MsgSend.
const msg = MsgSend.fromPartial({
  fromAddress: myAddress,
  toAddress: 'regen:1j9...',
  amount: [{ amount: '1000000', denom: 'uregen' }],
});
const fee = { ... }; // StdFee from @cosmjs/stargate

const txBytes = await api.msgClient?.sign(
	myAddress,
	[msg],
	fee,
	'some memo',
);
if (txBytes) {
	const deliverTxRes = await api.msgClient?.broadcast(txBytes);
}
```

<details>
  <summary>Click to see some ideas on a future more user-friendly API.</summary>
  
```ts
import { RegenApi } from '@regen-network/api';

// Same as above.
const api = new RegenApi({ ... });

// Fetch the balance of an address with new API.
const myAddress = 'regen:1j9...';
const balances = await api.query.cosmos.bank.v1beta1.AllBalances({
	address: myAddress,
});

console.log(balances); // Prints `{"balances":[{"denom":"utree","amount":"10000000000"}],"pagination":{"total":1}}`

```

Feel free to comment on [issue #2](https://github.com/regen-network/regen-js/issues/2) if you have ideas of user-facing APIs you'd like to see.

</details>

## Documentation

The list of all available methods to call can be found in:

-   [Regen Ledger Docs](https://docs.regen.network/getting-started.html) for Regen-specific modules (`x/data`, `x/ecocredit`)
-   [Cosmos SDK Docs](https://docs.cosmos.network/master) for all other modules (`x/bank`, `x/staking`...)

Alternatively, you can just explore the [`./src/generated/` folder](./src/generated), all methods are commented in the code.

