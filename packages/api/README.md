# `@stargazefi/api`

A client library for the Stargaze blockchain.

## 🚧 Warning

This API is still under heavy construction, be ready for unexpected breaking changes.

## Get Started

The library exposes one main TypeScript class: the `StargazeApi` class. Here is an example of fetching the user's balance.

```ts
import { StargazeApi } from '@stargazefi/api';
import { QueryClientImpl } from '@stargazefi/api/lib/generated/cosmos/bank/v1beta1/query';

// Create a new instance of the StargazeApi class.
const api = StargazeApi.connect({
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

// Create a client for the x/bank module.
const bankClient = new QueryClientImpl(api.connection.queryConnection);
// Fetch the balance of an address.
const myAddress = 'stars1j9...';
const balances = await bankClient.AllBalances({
	address: myAddress,
});

console.log(balances); // Prints `{"balances":[{"denom":"utree","amount":"10000000000"}],"pagination":{"total":1}}`
```

<details>
  <summary>Click to see some ideas on a future more user-friendly API.</summary>
  
```ts
import { StargazeApi } from '@stargazefi/api';

// Same as above.
const api = new StargazeApi({ ... });

// Fetch the balance of an address with new API.
const myAddress = 'stars1j9...';
const balances = await api.query.cosmos.bank.v1beta1.AllBalances({
address: myAddress,
});

console.log(balances); // Prints `{"balances":[{"denom":"utree","amount":"10000000000"}],"pagination":{"total":1}}`

```

Feel free to comment on [issue #2](https://github.com/regen-network/regen-js/issues/2) if you have ideas of user-facing APIs you'd like to see.

</details>

## Documentation

The list of all available methods to call can be found in:

-   [Cosmos SDK Docs](https://docs.cosmos.network/master) for all other modules (`x/bank`, `x/staking`...)

Alternatively, you can just explore the [`./src/generated/` folder](./src/generated), all methods are commented in the code.

## Differences with CosmJS

The main difference with [CosmJS](https://github.com/cosmos/cosmjs) is that StargazeJS is 100%-generated TS client, while CosmJS recommends manually decorating your own TS classes. For this code generation, StargazeJS uses [`ts-proto`](https://github.com/stephenh/ts-proto). However, the generated types create imcompatibilities with CosmJS (which uses [protobufjs](https://github.com/protobufjs/protobuf.js)).

## Long-term Roadmap

- Create a "JS Client generator": you input some proto files, the generator outputs a fully-functional TS client.
- Make it compatible with CosmJS.


```
