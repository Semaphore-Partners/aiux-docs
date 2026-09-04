# Unofficial `sn_aiux` Documentation

Community documentation for **`sn_aiux`** — ServiceNow's AI Experience Framework (marketed as **AIEX**, schema prefix `sys_aix_*`), the Lit + Tailwind + DaisyUI portal framework that ships on Zurich Patch 9 and underpins **Slate**.

ServiceNow has not published architecture docs, an API reference, or a migration guide for the framework. This repository is the map we wish they had shipped: what the tables are, how a widget is put together, how routing works, how existing Service Portal widgets are bridged in, and how widgets participate in AI conversations.

> **This is unofficial.** It is offered in good faith and is not endorsed, reviewed, or maintained by ServiceNow. Everything here is observed behavior on Zurich P9, not contract. When official docs arrive, prefer them for anything that conflicts.

**Read it:** the rendered version lives at [relay.semaphorepartners.com/aiux-docs](https://relay.semaphorepartners.com/aiux-docs/). This repo is the source of truth; the site is published from it.

**Background:** the investigation that started this is written up in [AIEX & Slate: everything Knowledge26 didn't tell you](https://relay.semaphorepartners.com/articles/aiex-slate-everything-knowledge26-didnt-tell-you/).

## Contents

- [Introduction](docs/introduction.md) — what `sn_aiux` is, the AIUX / AIEX / Slate naming, compatibility, caveats
- **Getting started**
  - [Installing](docs/getting-started/installing.md) — the three store apps, verifying the install, roles
  - [Your first widget](docs/getting-started/your-first-widget.md) — port the OOB Cool Clock in twenty lines of Lit
- **Widgets**
  - [Component](docs/widgets/component.md) — `AIUXWidgetElement`, instance members, lifecycle, services, contexts, directives
  - [Lit](docs/widgets/lit.md) — the Lit surface that ships in the bundle
  - [Daisy](docs/widgets/daisy.md) — the `<aiux-*>` components and the `aiux-` prefixed utility classes
  - [Server script](docs/widgets/server-script.md) — `data` / `options` / `input`, the `$aiux` scriptable, the `GlideSPScriptable` sidecar
  - [Service Portal bridge](docs/widgets/service-portal-bridge.md) — `<aiux-angular-element>` and the migration story
  - [AI integration](docs/widgets/ai-integration.md) — `best_for`, `client_tools`, `aiContext`, `$aiux.getWidget`
  - [Worked example: Impersonation widget](docs/widgets/example-impersonation.md) — a full native port with AI tools
- **Building with the SDK**
  - [Overview](docs/sdk/overview.md) — author / build / run time, your files as records, project layout, Builder vs SDK import paths
  - [Widgets & decorators](docs/sdk/widgets-and-decorators.md) — `@name`, `@bestFor`, `@server`, `@discoverable` as columns; the four things that make a file a widget
  - [Pages, loaders & SSR](docs/sdk/pages-loaders-and-ssr.md) — file routing, `static async loader(ctx)`, rendering in a Glide isolate, `isServer`, the app shell
  - [Dev loop](docs/sdk/dev-loop.md) — `pnpm dev`, the widget sandbox, build output, the five eslint plugins, deploying
- **Experiences**
  - [Overview](docs/experiences/overview.md) — `sys_aix_experience`, the `/aiux/<suffix>/<page>` URL pattern, the config endpoint, the `sp_portal` sidecar
  - [Pages & routing](docs/experiences/pages-and-routing.md) — `sys_aix_page`, path patterns, the 404 Breakout page
  - [App shells & themes](docs/experiences/app-shells-and-themes.md) — `sys_aix_app_shell`, `sys_aix_theme`, menus, page CSS
  - [URL rewrites](docs/experiences/url-rewrites.md) — `sys_aix_url_rewrite_rule` and legacy deep links
- **Reference**
  - [Architecture diagrams](docs/reference/architecture.md) — mounting hierarchy, data model, page-load sequence, widget interaction model
  - [Tables](docs/reference/tables.md) — the 29 `sys_aix_*` tables grouped by purpose
  - [Intellisense dump](docs/reference/intellisense.md) — the full API surface the Builder's autocomplete knows about
  - [The @servicenow/aiux package](docs/reference/npm-package.md) — the public npm package: export map, component packages, type definitions and API manifests to build a reference from
  - [Bundle anatomy](docs/reference/bundles.md) — what's on the wire under `/sncapps/aix/assets/` and where it comes from
  - [Sample: `/api/now/aix/config/builder` response](docs/reference/samples/config-builder-response.json)

## Contributing

Corrections, new pages, and notes on behavior changes in newer patches are all welcome. Open an issue for something wrong, or send a pull request for something you have verified on an instance. See [CONTRIBUTING.md](CONTRIBUTING.md) for the ground rules, including what **not** to commit (ServiceNow source recovered from source maps, instance names, sys_ids of non-OOB records).

## Publishing

Pages in `docs/` are published to the Ghost site from this repo. `ghost/manifest.yaml` maps each page to its Ghost slug and navigation order; see [ghost/README.md](ghost/README.md).

## License

Documentation is licensed under [CC BY 4.0](LICENSE). Code samples in the documentation may be used under the same terms. ServiceNow, Service Portal, Now Assist, and Slate are trademarks of ServiceNow, Inc.; this project is not affiliated with ServiceNow.

---

Maintained by [Semaphore Partners](https://semaphorepartners.com). In the spirit of the original community [Service Portal docs](https://github.com/newrocketinc/service-portal-docs).
