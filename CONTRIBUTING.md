# Contributing Guide

_This guide is still work in progress._

## For Maintainers

### Publishing Packages on npm

This monorepo uses [Lerna](https://lerna.js.org/) to manage package versioning and publishing. There is currently no CI job set up to use Lerna, so the following command needs to be run manually, on the `main` branch, if the maintainer wishes to deploy a new version on npm:

```bash
yarn lerna:deploy
```

This command will:

-   bump all packages in this monorepo, following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec,
-   publish the bumped packages to npm.
