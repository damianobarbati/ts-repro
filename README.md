# Native Typescript support repro

This repro showcases the usage of the `--experimental-strip-transform` flag and have the following all working:
- ESM
- Typescript, with relative paths and decorators
- Biome
- Vitest

Problems in the monorepo:
- `pnpm tsc` is broken with `@` imports.
- IDE (`webstorm` in my case) cannot resolve the `@` aliased module imports and autocomplete them.

## Requirements:
- `fnm` (eg: `brew install fnm`)
- `pnpm` (eg: `npm install -g pnpm`)

## How to run

Run:
```sh
pnpm install
pnpm -F api start:dev
```

Also `vitest`, `tsc` and `biome` running fine:
```sh
pnpm -F api test
pnpm tsc
pnpm lint ./services
```
