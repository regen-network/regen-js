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

// Create a new instance of the RegenApi class.
const api = RegenApi.connect({
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

// Create a client for the x/bank module.
const bankClient = new QueryClientImpl(api.queryClient);
// Fetch the balance of an address.
const myAddress = 'regen:1j9...';
const balances = await bankClient.AllBalances({
	address: myAddress,
});

console.log(balances); // Prints `{"balances":[{"denom":"utree","amount":"10000000000"}],"pagination":{"total":1}}`
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

## Differences with CosmJS

The main difference with [CosmJS](https://github.com/cosmos/cosmjs) is that RegenJS is 100%-generated TS client, while CosmJS recommends manually decorating your own TS classes. For this code generation, RegenJS uses [`ts-proto`](https://github.com/stephenh/ts-proto). However, the generated types create imcompatibilities with CosmJS (which uses [protobufjs](https://github.com/protobufjs/protobuf.js)).

Regen's team goal is not to divide the JS/TS community in the Cosmos ecosystem. We are currently actively talking with the CosmJS team to discuss to use the same foundation, based on `ts-proto`. The progress can be followed [here](https://github.com/cosmos/cosmjs/issues/586).

Other than that, RegenJS actually plans to use multiple components of CosmJS under the hood: the Tendermint client, the `proto-signing` package...

## Long-term Roadmap

- Create a "JS Client generator": you input some proto files, the generator outputs a fully-functional TS client.
- Make it compatible with CosmJS.


```
