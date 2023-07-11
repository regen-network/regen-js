# @regen-network/api

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [LCD Queries](#lcd-queries)
  - [RPC Queries](#rpc-queries)
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

### LCD Queries

Example query using a cosmos module:

```ts
import { cosmos } from "@regen-network/api"
import { PageRequest } from "@regen-network/api/types/codegen/helpers"

const { createLCDClient } = cosmos.ClientFactory
const client = await createLCDClient({ restEndpoint: REST_ENDPOINT })

const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46",
  pagination: { countTotal: true } as PageRequest,
})
```

Example query using a regen module:

```ts
import { regen } from "@regen-network/api"
import { PageRequest } from "@regen-network/api/types/codegen/helpers"

const { createLCDClient } = regen.ClientFactory
const client = await createLCDClient({ restEndpoint: REST_ENDPOINT })

const balance = await client.regen.ecocredit.v1.projectByClass({
  classId: "C01",
  pagination: { countTotal: true } as PageRequest,
})
```

### RPC Queries

Example query using a cosmos module:

```ts
import { cosmos } from "@regen-network/api"
import { PageRequest } from "@regen-network/api/types/codegen/helpers"

import Long from "long"

const { createRPCQueryClient } = cosmos.ClientFactory
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT })

const balance = await client.cosmos.bank.v1beta1.allBalances({
  address: "regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46",
  pagination: {
    key: new Uint8Array(0),
    limit: Long.fromNumber(0),
    offset: Long.fromNumber(0),
  } as PageRequest,
})
```

Example query using a regen module:

```ts
import { regen } from "@regen-network/api"
import { PageRequest } from "@regen-network/api/types/codegen/helpers"

import Long from "long"

const { createRPCQueryClient } = regen.ClientFactory
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT })

const balance = await client.regen.ecocredit.v1.projectByClass({
  classId: "C01",
  pagination: {
    key: new Uint8Array(0),
    limit: Long.fromNumber(0),
    offset: Long.fromNumber(0),
  } as PageRequest,
})
```

### Composing Messages

Example message using a cosmos module:

```ts
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
  fromAddress: "regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46",
})
```

Example message using a regen module:

```ts
import { regen, getSigningCosmosClient } from "@regen-network/api"

const { createProject } = regen.ecocredit.v1.MessageComposer.withTypeUrl

const msg = createProject({
  admin: "regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46",
  classId: "C01",
  metadata: "regen:13toVgf5UjYBz6J29x28pLQyjKz5FpcW3f4bT5uRKGxGREWGKjEdXYG.rdf",
  jurisdiction: "US-WA",
})
```

### Signing Messages

```ts
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

await signingClient.signAndBroadcast("regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46", [msg], fee)
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
