# Stargaze-JS

Regen Network does JavaScript. This monorepo contains JavaScript libraries and UIs for interacting with the [Regen Ledger](https://github.com/regen-network/regen-ledger).

"JS" is short for runs everywhere – we actually develop in TypeScript.

🚧 This API is still under heavy construction, be ready for unexpected breaking changes.

## Get Started

```bash
# Clone the repo.
git clone https://github.com/regen-network/regen-js

# Install dependencies.
yarn install

# Make sure to run this command, or else some TypeScript references won't be
# available statically.
yarn build:api
```

Then, to run the React app, just run the following command:

```bash
# Start the React app.
yarn start
```

The app should be running on http://localhost:3000.

> Pro tip 💡: everytime you modify the `@stargaze/api` package, be sure to run again `yarn build:api`, to let the other packages in the monorepo be aware of your latest changes. You can also add to `--watch` flag on this command to build on file change.

## Packages

Regen-JS consists of many smaller npm packages within the [@stargaze namespace](https://www.npmjs.com/org/regennetwork), a so called monorepo. Here is the list of all packages.

| Package                                     | Description                                         | Latest                                                                                                                |
| ------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [@stargaze/api](packages/api)           | A client library interacting with the Regen Ledger. | [![npm version](https://img.shields.io/npm/v/@stargaze/api.svg)](https://www.npmjs.com/package/@stargaze/api) |
| [@stargaze/demo-app](packages/demo-app) | A demo React app using `@stargaze/api`.         | Not published on npm.                                                                                                 |

## Build the packages from source

To build all the packages, just run `yarn build` from the root folder. You may also build them individually by going into each package's directory, and running `yarn build` from there.
