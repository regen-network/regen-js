[![Actions Status]](https://github.com/regen-network/regen-js/actions)
![GitHub License]

[Actions Status]: https://github.com/regen-network/regen-js/workflows/CI/badge.svg?branch=main
[Github License]: https://img.shields.io/github/license/regen-network/regen-js

# Regen-JS

This monorepo contains JavaScript libraries and UIs for interacting with the
[Regen Ledger].

[regen ledger]: https://github.com/regen-network/regen-ledger

## 🚧 Warning

This API is still under heavy construction, be ready for unexpected breaking
changes.

## Get Started

```bash
# Clone the repo.
git clone https://github.com/regen-network/regen-js

# Install dependencies.
yarn install

# Make sure to run this command to build the `api` package, so that other
# packages can reference it. Or else, some TypeScript references won't be
# available statically.
yarn build:api
```

Then, to run the React app, just run the following command:

```bash
# Start the React app.
yarn start
```

The app should be running on http://localhost:3000.

> Pro tip 💡: everytime you modify the `@regen-network/api` package, be sure to
> run again `yarn build:api`, to let the other packages in the monorepo be
> aware of your latest changes. You can also add to `--watch` flag on this
> command to build on file change.

## Packages

Regen-JS consists of smaller npm packages within the [@regen-network
namespace](https://www.npmjs.com/org/regennetwork), a so called monorepo. Here
is the list of all packages.

| Package                                        | Description                                         | Latest                                                             |
| ---------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| [`@regen-network/api`](packages/api)           | A client library interacting with the Regen Ledger. | [![npm version]](https://www.npmjs.com/package/@regen-network/api) |
| [`@regen-network/demo-app`](packages/demo-app) | A demo React app using `@regen-network/api`.        | Not published on npm.                                              |

[npm version]: https://img.shields.io/npm/v/@regen-network/api.svg

## Build the packages from source

To build all the packages, just run `yarn build` from the root folder. You may
also build them individually by going into each package's directory, and
running `yarn build` from there.
