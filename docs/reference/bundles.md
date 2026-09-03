# Bundle anatomy

Extracted from the bundles served at `/sncapps/aix/assets/` on a live instance, cross-referenced with the source maps each bundle ships. The framework is built with Vite + pnpm and ships *full source maps with embedded source content*, so the original TypeScript / JavaScript is recoverable.

This document is the architectural map of what's actually on the wire and where it comes from.

---

## Build system signals

A few tells from the source maps and asset filenames:

- **Vite output** — content-hashed filenames (`-D24AXy2E`, `-BU98KuCM`, `-DZ06VTdw`) are Vite's default rolling cache-busting scheme. Dynamic icon chunks (`circle-info-BQRWlHPE.js`, `plus-B67XTfgL.js`) are Rollup's per-import code splitting.
- **pnpm workspace** — every npm dep in the source maps lives under `node_modules/.pnpm/<pkg>@<ver>_<peerhash>/node_modules/<pkg>/`. That's pnpm's content-addressable layout.
- **TypeScript source** — most project files are `.ts`; some legacy bits are `.js`.
- **Source maps include `sourcesContent`** — the original code is embedded, not just pointed to. Anyone with DevTools can browse the original tree (which is exactly what the Sources panel screenshot shows: `src/base-component/`, `src/client/`, `src/shared/`, `node_modules/.pnpm/`).

---

## Bundle inventory

What loads, in order:

| Bundle | Size | Sources | What it is |
|---|---|---|---|
| `aiux-core-loader.js` | <1 KB | 0 | Entry stub. `export *` from `core.js`, `import` `angular-decorators.js` |
| `core-DvTkGc1m.js` | 1 KB | 0 | Barrel re-export of the index bundle |
| `angular-decorators-bd187e13.js` | 16 KB | 0 | jQuery tooltip patch — only runs if Angular is present (the SP-bridge case) |
| `index-D24AXy2E.js` | **2.3 MB** | **758** | The AIUX SPA: router, services, AIUXWidgetElement, all 12 OOB components, telemetry, locales |
| `aiex-BU98KuCM.js` | **2.0 MB** | 154 | The `ai-engagement-shell-experience` package — chat/engagement/widget renderer/interactive view |
| `aiel-BAycOU2K.js` | 83 KB | 87 | The `library-ai-engagement` package — AI chat protocol, SSE/REST adapters, zustand store |
| `lit-all-DZ06VTdw.js` | 28 KB | 42 | `lit-html@3.3.2` + `@lit/*` directives |
| `lodash-6hopiss6.js` | 127 KB | 1 | Full lodash, bundled |
| `directive-qZcRl9EY.js` | 21 KB | 5 | `@lit/reactive-element@2.1.2`, `lit-element@4.2.2`, `lit-html@3.3.2` core |
| `ref-B0y6RaLi.js` | 4 KB | — | Lit `ref()` directive |
| `class-map-Du0Oc6eS.js` | 1 KB | — | Lit `classMap` directive |

Plus per-icon dynamic chunks (`circle-info`, `plus`, `moon`, `magnifying-glass`, etc.) — one bundle each, lazy-loaded the first time an icon is referenced.

Total wire size for a cold load: roughly **4.6 MB of JavaScript** before code splitting kicks in for the engagement surfaces.

---

## What's inside `index-D24AXy2E.js` (the main SPA)

758 source files. 111 of them are project code in `src/`; the rest are bundled npm dependencies.

### Project source tree (the actual framework)

```
src/
├── client/
│   ├── core/
│   │   ├── AIUXElement.js           ← design-system base class
│   │   ├── AIUXWidgetElement.js     ← widget base class (server.*, aiContext, deps, trackEvent, logger)
│   │   └── WithData.js              ← mixin for opt-in server-data binding
│   ├── services/
│   │   ├── router.js                ← URL pattern, routeContext, navigation
│   │   ├── server.js                ← this.server.get/update/refresh — the server-script bridge
│   │   ├── i18n.js
│   │   ├── notifications.js
│   │   ├── recordWatcher.js         ← reactive GlideRecord
│   │   ├── mobileAppBridge.js
│   │   ├── amb.js                   ← AMB session messaging (real-time push)
│   │   ├── httpRequestExperience.js ← the /api/now/aix/config/<suffix> multipart client
│   │   ├── userPreferences/userPreferences.js
│   │   ├── telemetry/initTelemetry.js
│   │   ├── telemetry/buildConfig.js
│   │   ├── telemetry/userConsent.js
│   │   ├── telemetry/constants.js
│   │   ├── loggerProvider.js
│   │   ├── widgetPinningService.js
│   │   ├── pinnedWidgetCache.js
│   │   ├── registry.js              ← service-injection (static dependencies)
│   │   └── globals.js               ← what's exposed on window.NOW.aiux
│   ├── directives/
│   │   └── spreadDirective.js
│   ├── context/
│   │   └── widget-origin.js         ← widgetRenderingContext
│   ├── utils/
│   │   ├── sanitizeHtml.js          ← dompurify wrapper
│   │   ├── pkce.js                  ← OAuth PKCE flow
│   │   ├── httpRequest.js
│   │   ├── loadWidget.js
│   │   ├── aielUtils.js
│   │   ├── errorHelpers.js
│   │   ├── defineElement.js
│   │   ├── readOnly.js
│   │   ├── commons.js
│   │   └── globalStyles.js
│   ├── components/dashboard/constants.js
│   ├── locales/                     ← i18n data
│   ├── constants.js
│   └── index.js
├── base-component/                  ← the 12 OOB DaisyUI components
│   ├── accordion/
│   ├── alert/
│   ├── calendar/
│   ├── carousel/
│   ├── dialog/
│   ├── icon/
│   ├── live-region/
│   ├── loader/
│   ├── pagination/
│   ├── tabs/
│   ├── time-selector/
│   └── toast/
└── shared/
    ├── constants/apiEndpoints.js
    └── storage.js
```

### Third-party deps in the SPA bundle

Source-file counts give a rough proxy for surface area used:

| Package | Sources | What for |
|---|---|---|
| `@devsnc` | 147 | ServiceNow internal dev packages (`sn-ui-logger`, etc.) |
| `@servicenow` | 141 | Design tokens, icon set, internal libraries |
| `lodash` | 122 | The usual |
| `chroma-js` | 96 | Color manipulation |
| `mout` | 56 | Utility library |
| `sn-http-request` | 51 | ServiceNow HTTP client (returns `Promise<Response>`) |
| `ciebase`, `ciecam02` | 13 | **CIE color spaces** — advanced perceptual color math |
| `@adobe` | 7 | Adobe color libraries |
| `dompurify` | 5 | HTML sanitization |
| `uuid` | 4 | UUID generation |
| `lottie-web` | 1 | Animations (used in `<aiux-loader>`) |
| `hsluv` | 1 | HSL → perceptually uniform conversion |
| `apca-w3` | 1 | **APCA contrast** (new accessibility contrast algorithm) |
| `fflate` | 1 | Compression |

The presence of `chroma-js`, `ciebase`, `ciecam02`, `hsluv`, and `apca-w3` is the most interesting find here. **ServiceNow is doing serious color science for theming.** Themes aren't just stored hex codes — they're computed in perceptual color spaces with APCA-grade contrast validation. Anyone planning to ship a custom theme should know the framework will validate it against accessible contrast curves, not the old WCAG 2.x relative-luminance heuristic.

---

## What's inside `aiex-BU98KuCM.js` (the engagement shell)

This is a standalone package, **`ai-engagement-shell-experience@1.1.0-rc.3`**, distributed as a bundle. 154 source files, 26 in `src/components/` and the rest bundled npm deps.

### Project source tree

```
src/components/
├── engagement/                      ← the chat / AI engagement shell
│   ├── chat-loader.ts
│   ├── sn-engagement-experience.ts  ← the main engagement custom element
│   ├── sn-mw-component/             ← message/widget messaging component
│   ├── events/
│   ├── utils/
│   │   ├── navigation-utils.ts
│   │   ├── component-await.ts
│   │   └── aiel-subscription.ts
├── interactive/                     ← interactive view (chat ↔ widgets)
│   ├── sn-interactive-view.ts
│   ├── events/
│   └── utils/scroll-direction-detector.ts
├── renderer/                        ← widget rendering inside engagement
│   ├── sn-widget-renderer.ts
│   └── loadWidgetRenderer.ts
├── widget/
│   ├── util/loadWidget.ts
│   └── seismicWidgetRenderer.ts
├── sn-attachment-renderer/          ← attachment rendering in chat
│   ├── sn-attachment-renderer.ts
│   └── sn-attachment-renderer.utils.ts
├── sn-engagement-pinned-widget/     ← pinned widgets in the engagement panel
│   ├── sn-engagement-pinned-widget.ts
│   └── utils.ts
└── commons/icons/                   ← inline SVG: close-outline, pop-out, chevron-left, loading-spinner
```

### Third-party deps in the engagement bundle

| Package | Sources |
|---|---|
| `pdfjs-dist` | 59 |
| `lodash` | 52 |
| `@lit` / `lit-html` / `lit-element` | 12 |
| `sn-uxpage-presource` | 3 |
| `@open-wc`, `lodash.debounce` | 2 |

The standout: **pdfjs-dist** is bundled into the engagement shell, meaning the chat UI can render PDFs inline. Attachments are first-class — text, images, and PDFs all render without leaving the conversation.

---

## What's inside `aiel-BAycOU2K.js` (the AI engagement library)

Another standalone package, **`library-ai-engagement@1.1.0-rc.2`**. 87 sources, 28 project files.

### Project source tree

```
src/
├── api/                             ← the AI protocol layer
│   ├── adapters/restAdapter.ts
│   ├── adapters/sseAdapter.ts       ← Server-Sent Events streaming
│   ├── utils/buildURL.ts
│   ├── utils/parseSSEEvent.ts
│   ├── requestManager.ts
│   ├── handlers/contextHandler.ts
│   └── handlers/customActionHandler.ts
├── services/
│   ├── pageContext.ts               ← context provider for chat (what page is the user on)
│   ├── telemetry.ts
│   ├── backendConfig.ts
│   ├── backendContext.ts
│   └── brandingService.ts
├── launcher/                        ← the chat launcher (button/widget that opens chat)
│   ├── launcher.js
│   ├── launcher-behavior.js
│   ├── coreUIPageLauncher.js
│   ├── graphql-utils.js
│   └── aiex-library.js
├── constants/
│   ├── events.ts
│   ├── endpoints.ts
│   ├── telemetryEvents.ts
│   └── constants.ts
├── store/
│   ├── createStore.ts               ← zustand-based state management
│   ├── storeHelper.ts
│   └── eventBus.ts
├── types/
│   ├── chatkit.ts
│   └── globals.ts
├── common/logger.ts
├── utils.ts
└── index.ts
```

### Third-party deps

| Package | Sources |
|---|---|
| `lodash` | 52 |
| `sn-uxpage-presource` | 3 |
| `zustand` | 1 (the core) |
| `lodash.clonedeep`, `lodash.isequal` | 2 |

**zustand** is the state-management lib. Modern, hooks-friendly, framework-agnostic. The chat client uses it for conversation state. Worth flagging because it indicates the chat surface was likely originally prototyped in React (zustand's home turf) before being shipped as Lit/web-components.

The `aiex-library.js` and `coreUIPageLauncher.js` files suggest the same library can be embedded into legacy Service Portal pages via a separate launcher path — `sn-uxpage-presource` is a Service Portal page helper.

---

## What's inside `lit-all-DZ06VTdw.js` and `directive-qZcRl9EY.js`

Vanilla Lit, pinned versions visible in the source-map paths:

- **lit-html 3.3.2** — 21 sources (template engine + every standard directive)
- **@lit/reactive-element 2.1.2** — reactive property system
- **lit-element 4.2.2** — the `LitElement` base class

That's the current Lit major (Lit 3). The framework can use any standard Lit directive — `repeat`, `classMap`, `styleMap`, `ifDefined`, `guard`, `until`, `unsafeHTML`, `cache`, `choose`, `live`, `keyed`, `map`, `join`, etc. — by importing from `lit/directives/...`.

---

## Versioning crumbs

The pnpm source-map paths pin every dep to an exact version. Notable ones:

| Package | Version |
|---|---|
| `lit-html` | 3.3.2 |
| `lit-element` | 4.2.2 |
| `@lit/reactive-element` | 2.1.2 |
| `dompurify` | 3.3.3 |
| `zustand` | 5.0.10 |
| `lodash` | 4.17.21 |
| `ai-engagement-shell-experience` | **1.1.0-rc.3** |
| `library-ai-engagement` | **1.1.0-rc.2** |

The `-rc.3` / `-rc.2` tags are the most interesting. The engagement-shell and AI-engagement libraries are still on *release candidates* as shipped on Zurich P9. ServiceNow is iterating quickly on these. Expect minor-version churn over the next several patches.

The pnpm graph also references `react@19.2.4` as a transitive peer dep — but it's not actually used at runtime. zustand's React-coupled package was resolved from npm for type-only purposes.

---

## Load order and runtime lifecycle

1. The HTML shell (served by `$ai_experience.do`) loads `aiux-core-loader.js`.
2. Loader: `export * from 'core.js'` re-exports the SPA's public API, then `import 'angular-decorators.js'` patches jQuery tooltip behavior *if* Angular is present (the SP-bridge case).
3. `core.js` re-exports from `index-D24AXy2E.js` (a tiny barrel — every public symbol is actually in the index bundle).
4. `index-D24AXy2E.js` initializes:
   - `routerService` (parses `window.location.pathname` against `URLPattern('/aiux/:experience/:page*')`)
   - `experienceContextManager`
   - `telemetryService`
   - `mobileAppBridgeService`
   - `ambService` (subscribes to real-time push)
   - Registers all 12 `<aiux-*>` base components
5. The router fetches `/api/now/aix/config/<experience>` via the `httpRequestExperience` service. The endpoint streams multipart/mixed JSON parts: `experienceData`, `appShellData`, `urlRewriteRules`.
6. The page's widget instances render. Each `sys_aix_widget` row becomes a Lit class registered as a custom element via `defineElement`.
7. If the AI chat surface is needed, `aiex-BU98KuCM.js` and `aiel-BAycOU2K.js` load as dynamic chunks.
8. Icons load on-demand — one chunk per icon, first reference wins.

---

## What I expected to find and didn't

- **No Service Worker.** No offline-first behavior, no background sync.
- **No web worker.** Color science and PDF rendering happen on the main thread.
- **No external CDN dependencies.** Every asset is self-hosted under `/sncapps/aix/assets/`.
- **No third-party telemetry.** All telemetry endpoints go back to ServiceNow itself.
- **No GraphQL endpoint in use yet.** The `graphql-utils.js` in the engagement library is present but unused in the OOB experiences — likely speculative scaffolding for a future API surface.

---

## High-signal source files for further reading

If I had to pick ten files to read to deeply understand the framework, in order:

1. **`src/client/core/AIUXWidgetElement.js`** — the widget base class. Inheritance, `this.server.*`, `this.aiContext`, `this.deps`.
2. **`src/client/core/AIUXElement.js`** — the design-system base class.
3. **`src/client/services/router.js`** — URL pattern, `routeContext`, navigation API.
4. **`src/client/services/server.js`** — the server-script bridge (`this.server.get/update/refresh`).
5. **`src/client/services/httpRequestExperience.js`** — multipart/mixed streaming client for the config endpoint.
6. **`src/client/services/registry.js`** — service injection (`static dependencies`).
7. **`src/client/utils/loadWidget.js`** — how a `sys_aix_widget` row becomes a Lit custom element.
8. **`src/client/utils/defineElement.js`** — the `customElements.define` wrapper.
9. **`src/client/directives/spreadDirective.js`** — the `spreadProps` directive.
10. **`src/client/services/globals.js`** — exactly what's exposed on `window.NOW.aiux`.

All ten are visible (with full original source) in Chrome DevTools → Sources → `(top frame)` → `sncapps/aix/src/client/...`. The source maps expose them by name, so no manual decompilation needed.

---

## How to recover the full source tree

Anyone with admin DevTools access on a Zurich P9 instance can recover the entire `src/` tree:

1. Open DevTools on a `/aiux/...` page.
2. Open the **Sources** tab.
3. Expand the `sncapps/aix/` tree on the left.
4. Drill into `src/client/`, `src/shared/`, `src/base-component/`.
5. Right-click any file → **Save as…** to disk.

For the npm deps, the same applies under `node_modules/.pnpm/<package>@<version>/...` in the Sources tree. Every bundled dep ships full source content.

This is intentional: ServiceNow shipped the source maps publicly. Whether that was deliberate transparency or a build-config oversight, the practical effect is that **`sn_aiux` is fully inspectable, with original TypeScript source, on every instance running Zurich P9**.

---

## A note on the recovered source

The extracted source trees are **not** part of this repository. They are ServiceNow's copyrighted code and are only useful on an instance you are licensed to use. Recover them yourself with the DevTools steps above, and keep them out of pull requests — a `.gitignore` rule for `bundles/` and `sourcemaps/` is in place to make that hard to do by accident.
