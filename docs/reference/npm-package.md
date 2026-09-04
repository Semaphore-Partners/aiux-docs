# The `@servicenow/aiux` package

The framework's client runtime, component library, SDK build, and public dev server are published to the public npm registry as **`@servicenow/aiux`**. Anyone can `npm pack` it. For a framework with no published documentation, the package is the closest thing to an authoritative reference: it ships type definitions and machine-readable API manifests for every component.

| | |
|---|---|
| Package | [`@servicenow/aiux`](https://www.npmjs.com/package/@servicenow/aiux) |
| Version documented | 22.42.3 (first public release 22.42.1, 2026-08-04) |
| Description | "Public dev server for AINPX applications — SSR, HMR, and AIEL/chat support" |
| License | ISC (declared in `package.json`) |
| Size | ~144 MB unpacked, ~5,700 files, 288 export subpaths |
| Siblings | `@servicenow/sdk` 4.11.x, `@servicenow/aiux-app-templates`, `@servicenow/eslint-plugin-aiux-{ssr,style,app,a11y,i18n}`, `@servicenow/agent-pack-aiux` |

> The package name, and the `AINPX` / `AIEL` acronyms in its description, are more evidence for the naming tangle in the [Introduction](../introduction.md#a-word-on-names). Internally the codebase calls itself **karuna**; you will see that word in comments and in the `aiux-commons/karuna-internal-prefixes` export.

## What's in it

```
aiux/client/           the SPA runtime (router, boot loader, loader context, prefetch)
components/            ~60 component packages, each with src/, types/, public-api-manifest.json
context/               Lit contexts (widget-origin, mobile-app-bridge, …)
controllers/           reactive controllers (aria-live, chat, focus, roving-tabindex, tooltip)
core/                  commons (build helpers), component-registry, observability, route-utils,
                       sdk (the `now-sdk build` implementation), ssr-shared, telemetry
directives/            icon, lazy-image, live-region, lottie, provider-origin, spread, time-ago, tooltip
libraries/             devtools, client-scripting, fit, kaa-profile, theme-generation, utils
locales/               translations
services/              i18n, notifications, location, theme, record-watcher, user-preferences, …
utils/                 httpRequest (snHttp), loadWidget, sanitizeHtml, user, …
public-dev-server/     Fastify + @lit-labs/ssr dev server; `now-sdk run dev` resolves to this
```

Three things make it a reference rather than just a dependency:

- **503 TypeScript declaration files.** `components/core/types/index.d.ts` is the authoritative shape of `AIUXElement` and `AIUXWidgetElement`, with JSDoc explaining intent. The Builder-side [Intellisense dump](intellisense.md) is a subset of this.
- **74 `public-api-manifest.json` files.** One per package, listing each custom element's tag, class, events (with detail types), plus exported functions with full signatures. These are what a generated API reference should be built from.
- **Extensive header comments in the SDK and dev server** explaining the design: the two-identity auth model, the SSR worker's stylesheet injection strategy, why decorators are no-ops, what `aiux.json` keys do.

## The export map

Import everything from a subpath of the one package. The bare names used inside the Builder (`@servicenow/aiux-components-core`) are what the *runtime* exposes in the browser; in a project you write `@servicenow/aiux/<subpath>`.

| Subpath | What it exports |
|---|---|
| `aiux-components-core` | `AIUXElement`, `AIUXWidgetElement`, `decorators`, `WithData`, `defineRouteView`, `sp` (system properties), contexts, the config-editor decorators |
| `aiux-services` | `i18n`, `notifications`, `locationService`, `themeService`, `recordWatcherService`, `userPreferencesService`, `ariaLive`, `mobileAppBridgeService`, `experienceProperties`, `keyboardShortcut` |
| `aiux-utils` | `snHttp`, `getUser`, `loadWidget`, `sanitizeHtml`, `readOnly`, `getAiuxGlobal` / `setAiuxGlobal` |
| `aiux-context` | `routeContext`, `experienceContext`, `userPreferencesContext`, `widgetRenderingContext`, `mobileAppBridgeContext` |
| `aiux-directives` | `spreadProps`, `timeAgo`, `icon`, `lazyImage`, `lottie`, `tooltip`, live-region directives |
| `aiux-components-<name>` | One per component package; see below |
| `aiux-controller-<name>` | Reactive controllers |
| `aiux-sdk`, `aiux-sdk/build`, `aiux-sdk/doctor`, `aiux-sdk/serve`, `aiux-sdk/widget-sandbox/scaffold` | The build pipeline `now-sdk` calls |
| `aiux-commons/*` | Build-time helpers: sysprop allowlist consolidation, tag-to-package mapping, vendor chunking |
| `aiux-theme`, `aiux-theme/horizon-theme`, `aiux-theme/tailwind` | Theme tokens and the Tailwind preset |
| `aiux-locales`, `aiux-telemetry`, `aiux-observability`, `aiux-devtools` | Supporting libraries |

## Component packages

Sixty-odd `aiux-components-*` subpaths. The twelve on the [Daisy](../widgets/daisy.md) page are the design-system primitives; the rest are the platform components the SDK conventions tell you to reach for before hand-rolling anything.

**Records and lists:** `list`, `record` (with `record/context`, `record/services`, `record/email-client`), `condition-builder`, `search-combobox`, `date-range-picker`, `control` (the field controls: reference, choice, date, duration, HTML, journal, slushbucket, …), `attachment`, `document-viewer`

**Layout and navigation:** `nav` (`aiux-nav-layout`, sidebar, horizontal nav, flyouts, preferences), `layout`, `layout-renderer`, `dashboard-layout`, `dashboard-config`, `config-editor` and its props pane, `stepper`, `tabs`, `page-alert`, `empty-state-content`, `notification-container`

**AI surfaces:** `chat`, `ainh-gateway`, `ai-filter-assist`, `help-assistant`, `help-panel`, `nacm`, `guidance-modal`, `playbook`

**Visualisation:** `visualizations-{base,arc,axis,bullet,composition,highcharts,matrix,score,spider}`, `score`, `visual-board` (kanban), `coe-node-map` (cytoscape)

**Compatibility:** `angular` (the `<aiux-angular-element>` [Service Portal bridge](../widgets/service-portal-bridge.md) and `sp-libs-loader`), `glide-widgets`

**Design system:** `accordion`, `action`, `alert`, `announcement-banner`, `calendar`, `carousel`, `dialog`, `icon`, `live-region`, `loader`, `pagination`, `time-selector`, `toast`, `code-editor` (Monaco)

Across the whole package, roughly **460 custom element tags** are registered. Not all are public API; the `public-api-manifest.json` in each package is the line between what is supported and what is internal.

## Notable finds

- **Decorators are no-ops at runtime.** `components/core/src/decorators.js` is fifteen pass-through functions. The build reads their arguments from the AST. See [Widgets & decorators](../sdk/widgets-and-decorators.md#decorators-briefly).
- **`this.server.get()` posts to `/api/now/aix/widget/{$$aiux_id}`**, confirming the endpoint the Builder-side docs observed. `update()` and `refresh()` are wrappers that assign to `this.data`, and on a plain `AIUXElement` they set an inert property.
- **Capabilities.** `AIUXElement` has a `static capabilities` map that auto-registers handlers into the nearest `CapabilityRegistry`. This is the mechanism under `client_tools`.
- **System property allowlist.** Apps can opt in to `systemPropertyAllowlist` in `aiux.json`; the build consolidates every `getSystemProperty('...')` literal from the manifest into a committed allowlist the instance enforces. `aiux.*` properties are auto-allowed.
- **Extension apps.** The `aiux-extension` template overlays pages onto an existing host experience through `sys_aix_page_route_map`, which is the table that `@roles` on an extension page writes to.
- **Deprecated-alias machinery** exists (`aiux-ssr-shared/deprecated-aliases`) but the alias table is empty as of 22.42.3. When packages get renamed, this is where the old names will keep resolving.
- **"IP-free" markers.** Several modules describe themselves as the "light, IP-free counterpart" of an internal implementation. The public package is a deliberately curated surface, not an accidental leak, which is the difference between this and the [source maps](bundles.md).

## Using it as a reference

```bash
npm pack @servicenow/aiux@22.42.3
tar xzf servicenow-aiux-22.42.3.tgz
cd package
# the runtime contract
less components/core/types/index.d.ts
# every element, event and function a package considers public
jq '.elements[] | {tag, events}' components/list/public-api-manifest.json
# every registered tag in the package
grep -rhoE "customElement\('[a-z0-9-]+'" components | sort -u
```

Contributions that turn the manifests into per-component reference pages are welcome. See [CONTRIBUTING](../../CONTRIBUTING.md). Quote the package's type definitions and manifests freely; they are ISC-licensed and published for exactly this purpose. Do not vendor the source tree into this repo.
