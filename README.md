# Native Typescript support repro

This repro showcases the usage of the `--experimental-strip-transform` flag and have the following all working:
- ESM
- Typescript, with relative paths and decorators
- Biome
- Vitest

⚠️ Not tested in a monorepo yet. ⚠️

## Requirements:
- `fnm` (eg: `brew install fnm`)
- `pnpm` (eg: `npm install -g pnpm`)

## How to run

Run:
```sh
pnpm install
pnpm start
```

Also `tsc`, `biome` and `vitest` running fine:
```sh
pnpm tsc
pnpm lint ./src
pnpm test
```
