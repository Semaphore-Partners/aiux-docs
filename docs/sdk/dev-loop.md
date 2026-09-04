# Dev loop

Running, building, linting, and deploying an SDK project.

> Version note: `@servicenow/aiux` 22.42.3, `@servicenow/sdk` 4.11.0. See [Overview](overview.md).

## Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Local SSR dev server with HMR on `:3000`; the instance provides auth and data |
| `pnpm build` | Rollup → `dist/` bundles + `dist-metadata/` record JSON |
| `pnpm lint` | eslint with the five AIUX plugins: `style`, `app`, `a11y`, `i18n`, `ssr` |
| `pnpm deploy` | `now-sdk install --auth <alias>`; pushes the records to the instance |

Templates typically also define a combined build-and-install script. Check `package.json`.

## `pnpm dev` is local, not a proxy to a deployed app

One expectation to correct up front: **there is no Vite**. The dev server is Fastify + `@lit-labs/ssr` + Rollup. Content-hashed Vite filenames appear in the *platform* bundles under `/sncapps/aix/assets/` (see [Bundle anatomy](../reference/bundles.md)), but your project builds with Rollup.

The dev server compiles your working tree and server-renders it locally. Your app does not need to be deployed to the instance to develop it; the build pins `appWidgetImportMode: 'relative'` precisely so it can serve widgets without an install step.

| Port | Purpose |
|---|---|
| `:3000` | Dev server (`PORT`, pinned in the script) |
| `:3101` | HMR websocket (hardcoded in the SDK) |

The instance still provides **auth and data**. Login is always on: a request with no session bounces through the instance's real login page and returns you to your local page. That redirect is not an error.

## The widget sandbox

Every dev build scaffolds a standalone preview page per widget, so you never have to embed a widget in a real page just to look at it. Idempotent, gitignored, regenerated on change.

| Path | Shows |
|---|---|
| `/.widget-sandbox` | Widget with the app chrome around it |
| `/.widget-sandbox-bare` | The widget alone |

## Build output

```
dist/
├── client/**          # browser bundles
├── server/**          # server-side bundles (SSR + compiled server scripts)
└── manifest.json      # routes, hasLoader flags, widget list
dist-metadata/
└── aiux-json/         # one JSON per sys_aix_* record
```

Open one file in `dist-metadata/aiux-json/` after your first build. It is the fastest way to make "your app becomes rows" concrete. See [Overview → Your files, as records](overview.md#your-files-as-records).

## Lint is the spec

`eslint.config.mjs` is the conventions in enforceable form and the fastest specification in any SDK project. The five plugins:

| Plugin | Enforces |
|---|---|
| `ssr` | No browser globals in render, no DOM reads in render, no non-deterministic APIs, no side effects in render or constructor, no module-level browser access. **Errors** across `pages/**`. |
| `style` | Tailwind in templates, `:host` only in `static styles`, `aiux-` prefixes, semantic colour tokens |
| `i18n` | Every user-visible string through `i18n.getMessage()` |
| `a11y` | Accessible markup in templates |
| `app` | Project structure and AIUX-specific rules (base classes, decorators, imports) |

Glide globals (`gs`, `GlideRecordSecure`, `GlideAggregate`, `$aiux`) are declared for `widgets/**/server-script.js` only. Using them anywhere else is a lint error.

## Deploying

`now-sdk install` pushes the `dist-metadata/` records to the instance under the application scope in `now.config.json`. Because everything is `sys_metadata`, the records are captured by the active update set or application file tracking like any other configuration. See [Reference → Tables](../reference/tables.md) for which tables extend `sys_metadata`.

## Gotchas collected so far

- **`@servicenow/aiux-components-core` is not installed.** Import from `@servicenow/aiux/aiux-components-core`. See [Overview → Import paths](overview.md#import-paths-the-one-that-will-bite-builder-users-first).
- **`theme.js` colour swatches.** Object notation for `neutral_colors` creates a new `sys_aix_color_swatch` on every install. A string value reuses a shipped swatch (`sand`, `granite`, `stone`, `zinc`, `dune`, `slate`). The build warns about this; heed it.
- **Adding a route means editing `application.js` too.** Nav items and active state are computed there, not derived from the file tree. See [Pages, loaders & SSR → The app shell](pages-loaders-and-ssr.md#the-app-shell-applicationjs).
- **Unused imports show up in build output.** The build reports them; a template that imports `aiuxFetch` and never uses it is a template assembled from fragments. Clean them up before they multiply.
- **Loader query in two places.** If a page's loader fetches rows *and* the list component gets `table`/`query` attributes for client-side refresh, the query lives twice. Hoist it to a constant.

## Where to look next in a fresh project, in order

1. The purest Lit file, usually a page-scoped component under `pages/<route>/components/`.
2. The page with a loader (`hasLoader: true` in `dist/manifest.json`). The whole data story in sixty lines.
3. One widget's JSON in `dist-metadata/aiux-json/`. Your decorators as columns.
4. `application.js`. How the shell and nav are assembled imperatively.
5. `eslint.config.mjs`. The conventions in enforceable form.
