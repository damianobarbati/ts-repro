# Native Typescript support repro

This repro showcases the usage of the `--experimental-strip-transform` flag and have the following all working:
- ESM
- Typescript, with relative paths and decorators
- Biome
- Vitest

Keep in mind:
- To have a package PKG1 importing from another package PKG2, PKG2 must have an `exports` field in its `package.json` file.

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
