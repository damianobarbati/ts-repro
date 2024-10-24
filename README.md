# Native Typescript support repro

This repro showcases the usage of the `--experimental-strip-transform` flag to have all the following working with native Typescript support and no `tsx` dependency:
- pnpm monorepo
- ESM
- Typescript
- Biome
- Vitest

Keep in mind:
- You can't use typescript features requiring transpilation (eg: `decorators`, `paths`).
- To have relative-imports in `PkgX`, it must have the configured `exports` field in its `package.json` file (check [api/package.json](./services/api/package.json#L4)).
- To have a package `PkgX` capable of importing from another package `PkgY`:
  - `PkgX` must have the `PkgY` defined as a workspace dependency to allow the package manager to link it (check [api/package.json](./services/types/package.json#L14)).
  - `PkgY` must have the `exports` field configured in its `package.json` file (check [types/package.json](./services/types/package.json#L4)).

## Requirements:

Dependencies:
- `fnm` (eg: `brew install fnm`)
- `pnpm` (eg: `npm install -g pnpm`)

Setup:
```sh
fnm install
fnm use
npm install -g pnpm
```

## How to run

Run:
```sh
pnpm install
pnpm -F api start:dev
```

Also `vitest`, `tsc` and `biome` running fine:
```sh
pnpm tsc
pnpm lint ./services
pnpm -F api test
```
