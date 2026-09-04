# API reference generator

Turns the `public-api-manifest.json` files shipped inside the public [`@servicenow/aiux`](https://www.npmjs.com/package/@servicenow/aiux) npm package into the Markdown pages under [`docs/reference/api/`](../../docs/reference/api/README.md).

The generated pages are committed, so readers never need to run this. Run it to bump the documented version.

## Run

```bash
node tools/api-reference/generate.mjs                    # version pinned in version.json
node tools/api-reference/generate.mjs --version 22.43.0  # a different version
node tools/api-reference/generate.mjs --pkg-dir ~/pkg    # an already-unpacked tarball
```

No npm dependencies. Node 20 or later, plus `npm` and `tar` on `PATH` for the download. The tarball is cached under `tools/api-reference/.cache/` (gitignored).

## What it reads

Each package inside the tarball has a `public-api-manifest.json`:

```
{ schema, package, elements[], functions[], types{}, constants[], classShapes{} }
```

- **elements**: `tag`, `class`, `properties[] {name, type, attribute, reflect, hasDefault}`, `events[] {name, detail}`, `slots[]`
- **functions**: `name`, `signatures[] {params[] {name, type, optional}, return}`
- **types**: `interface` with `members[]`, or `type` aliases with `resolvedTo`. Aliases whose members were expanded into built-in prototype methods (arrays, strings) are rendered by name only.
- **constants**: `{name, type}` or object constants with `members[]`
- **classShapes**: class name → `members[] {name, kind: method|property, signatures|type}`

## What it writes

- `docs/reference/api/README.md`: index grouped by category, plus a table of every public tag
- `docs/reference/api/<package-slug>.md`: one page per manifest, sections for Elements, Functions, Constants, Types, Classes
- `tools/api-reference/version.json`: the version generated and the date

Pages are deterministic for a given version: everything is sorted, so a regeneration against the same tarball produces no diff.

## Bumping the version

1. `node tools/api-reference/generate.mjs --version <new>`
2. Read the diff. Removed elements or changed signatures are the interesting part; note them in the PR description.
3. Update the version notes on the [SDK pages](../../docs/sdk/overview.md) if anything they describe changed.
4. Open a PR.

The `api-reference` GitHub Actions workflow does step 1 weekly against the latest published version and opens a PR when there is a diff.

## Limits

The manifests carry types but no descriptions. Property and event semantics come from the package's `.d.ts` JSDoc, which this generator does not yet read. Pull requests that add that are welcome; keep the output deterministic.
