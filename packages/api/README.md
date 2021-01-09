# `@stargazefi/api`

A client library for the Stargaze blockchain.

## Get Started

The library exposes one main TypeScript class: the `StargazeApi` class. Import it like this in your code:

```ts
import { StargazeApi } from '@stargazefi/api';

// Create a new instance of the StargazeApi class.
const api = new StargazeApi({
	// StargazeApi supports multiple client connections to interact with a node:
	// - via the Tendermint RPC
	// - via gRPC
	// - via gRPC-web
	// - via REST and gRPC-gateway
	connection: {
		// Here, we are using the Tendermint RPC client connection.
		type: 'tendermint',
		url: 'http://devnet.stargaze.fi:26657',
	},
});

// Fetch the balance of an address
const myAddress = 'stb...';
const balances = await api.query.cosmos.bank.v1beta1.AllBalances({
	address: myAddress,
});
console.log(balances); // Prints `{"balances":[{"denom":"uegg","amount":"10000000000"}],"pagination":{"total":1}}`
```
