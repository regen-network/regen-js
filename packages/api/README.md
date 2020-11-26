# `@regennetwork/api`

A client library for the Regen Ledger.

## Get Started

The library exposes one main TypeScript class: the `RegenApi` class. Import it like this in your code:

```ts
import { RegenApi } from '@regennetwork/api';

// Create a new instance of the RegenApi class.
const api = new RegenApi({
	// RegenApi supports multiple client connections to interact with a node:
	// - via the Tendermint RPC
	// - via gRPC
	// - via gRPC-web
	// - via REST and gRPC-gateway
	connection: {
		// Here, we are using the Tendermint RPC client connection.
		type: 'tendermint',
		url: 'http://devnet.regen.network:26657',
	},
});

// Fetch the balance of an address
const myAddress = 'regen:1j9...';
const balances = await api.query.cosmos.bank.v1beta1.AllBalances({
	address: myAddress,
});
console.log(balances); // Prints `{"balances":[{"denom":"utree","amount":"10000000000"}],"pagination":{"total":1}}`
```

## How it Works

TODO (Protobuf, decoration, signing)
