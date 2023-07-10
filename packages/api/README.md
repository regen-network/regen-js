# @regen-network/api

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [Queries](#queries)
  - [Composing Messages](#composing-messages)
  - [Signing Messages](#signing-messages)
- [Development](#development)
  - [Codegen](#codegen)
  - [Updating types](#updating-types)
  - [Publishing](#publishing)
- [Credits](#credits)

## Install

```sh
yarn add @regen-network/api@v1.0.0-alpha3
```

## Usage

### Queries

Example query using a cosmos module:

```js
import { cosmos } from "@regen-network/api"

const { createRPCQueryClient } = cosmos.ClientFactory
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT })

const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "regen1nzh226hxrsvf4k69sa8v0nfuzx5vgwkczk8j68",
})
```

Example query using a regen module:

```js
import { regen } from "@regen-network/api"

const { createRPCQueryClient } = regen.ClientFactory
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT })

const balance = await client.regen.ecocredit.v1.projectByClass({
  classId: "C01-001",
})
```

### Composing Messages

Example message using a cosmos module:

```js
import { cosmos, getSigningCosmosClient } from "@regen-network/api"

const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl

const msg = send({
  amount: [
    {
      denom: "uregen",
      amount: "1000000000",
    },
  ],
  toAddress: "regen156d26rl52y3wl865pr5x9q2vqetuw9kf0642sa",
  fromAddress: "regen1nzh226hxrsvf4k69sa8v0nfuzx5vgwkczk8j68",
})
```

Example message using a regen module:

```js
import { regen, getSigningCosmosClient } from "@regen-network/api"

const { createProject } = regen.ecocredit.v1.MessageComposer.withTypeUrl

const msg = createProject({
  admin: "regen1nzh226hxrsvf4k69sa8v0nfuzx5vgwkczk8j68",
  classId: "C01-001",
  metadata: "regen:13toVgf5UjYBz6J29x28pLQyjKz5FpcW3f4bT5uRKGxGREWGKjEdXYG.rdf",
  jurisdiction: "US-WA",
})
```

### Signing Messages

```js
const offlineSigner = keplr.getOfflineSigner("regen-local")

const signingClient = await getSigningCosmosClient({
  rpcEndpoint: "http://localhost:26657",
  signer: offlineSigner,
})

const fee: StdFee = {
  amount: [
    {
      denom: "uregen",
      amount: "500",
    },
  ],
  gas: "100000",
}

await signingClient.signAndBroadcast("regen1nzh226hxrsvf4k69sa8v0nfuzx5vgwkczk8j68", [msg], fee)
```

## Development

Install dependencies:

```sh
yarn
```

Generate code from proto:

```sh
yarn codegen
```

Compile and build library:

```sh
yarn build
```

Build types:
```sh
yarn build:ts
```

## Credits

This package is built on [osmonauts/telescope](https://github.com/osmosis-labs/telescope) with initial guidance from [pyramation/tmpl-telescope-module](https://github.com/pyramation/tmpl-telescope-module).
