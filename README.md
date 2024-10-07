# Native Typescript support repro

This repro showcases the usage of the `--experimental-strip-transform` flag and have the following all working:
- ESM
- Typescript, with relative paths and decorators
- Biome
- Vitest

Problems in the monorepo:
- `pnpm tsc` is broken with `#` subpath imports.
- IDE (`webstorm` in my case) cannot resolve the `#` subpath imports and autocomplete them.
- IDE (`webstorm` in my case) cannot resolve the sibling package `@` imports and autocomplete them.

## Requirements:
- `fnm` (eg: `brew install fnm`)
- `pnpm` (eg: `npm install -g pnpm`)

## How to run

Run:
```sh
pnpm install
pnpm -F api start:dev
```

Also `tsc`, `biome` and `vitest` running fine:
```sh
pnpm tsc
pnpm lint ./src
pnpm test
```
