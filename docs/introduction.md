# Introduction

> ⚠ **This is the unofficial documentation.**
> ServiceNow has not published architecture docs, API references, or migration guides for the AI Experience framework. This documentation is offered in good faith but is **not endorsed, reviewed, or maintained by ServiceNow.** When official docs arrive, prefer those for anything that conflicts.

`sn_aiux` is ServiceNow's new portal-style UI framework, shipping on Zurich Patch 9. It's a Lit.js + Tailwind + DaisyUI runtime, with a deliberate bridge that lets you embed your existing Angular Service Portal widgets inside Lit components — so nothing you've already built has to be thrown away. New work happens in a stack that's much more familiar to anyone who's written modern web components in the last five years.

This project is the architectural map ServiceNow didn't ship.

## Why this exists

We're builders. Customers, partners, in-house teams. We have projects scheduled. Stakeholders waiting on demos. A migration plan that needs to start *now*, not whenever the docs catch up. When the framework lands without a manual, the choice is to either stop and wait, or to dig in, figure it out, and write down what you find so the next person doesn't have to.

There's precedent for this. When Service Portal launched a decade ago, ServiceNow themselves published unofficial docs on GitHub — community-style references that filled the gap between the marketing decks and the official Now Create rollout. Those early notes were how a lot of us actually learned how `sp_widget` worked. They weren't authoritative, they weren't pretty, and they weren't supported — but they were *there*, and they shipped weeks ahead of the polished version.

This project is that, for `sn_aiux`. Same spirit. Same intent. Same offer: get the architecture map into the hands of people who need to build *now*, and refine it as the framework stabilizes.

## A word on names

The naming around AIUX, AIEX, and Slate has caused enough confusion already that it's worth getting straight at the top.

- **`sn_aiux`** is the framework. You'll see **AIEX** in marketing material and `sys_aix_*` as the schema prefix everywhere. They all refer to the same thing. (The codebase also internally aliases the server-side scriptable as `$uxkit` in places — the original codename before the rename.)
- **Slate** is the headline branded experience ServiceNow ships on top of `sn_aiux`. It is *one experience*, not the framework. Roughly analogous to how Employee Center is one portal built on top of Service Portal.
- The mapping back to what you already know: *Service Portal → sn_aiux* is what *framework → framework* is. *sp_portal record → sys_aix_experience record* is what *portal → experience* is. Pages, widgets, themes — all the supporting concepts have direct equivalents.

## What you'll find here

- **[Getting Started](getting-started/installing.md)** — install the three store apps, build your first widget, port your first Service Portal widget across.
- **[Widgets](widgets/component.md)** — authoring a single widget: Lit components, server scripts, DaisyUI styling, the Service Portal bridge, AI integration.
- **[Building with the SDK](sdk/overview.md)** — the code-first path: a local repo that compiles into `sys_aix_*` records, with file-based routing, loaders, and server-side rendering.
- **[Experiences](experiences/overview.md)** — the framework around widgets: URL routing, pages, app shells, themes, the migration story for legacy Service Portal URLs.
- **[Reference](reference/tables.md)** — the 29 `sys_aix_*` tables and the complete intellisense dump from the Builder.

## Compatibility at a glance

- **Release:** Zurich Patch 9. Earlier patches do not include the AIEX runtime.
- **Required store apps:** `sn_aiux_ia_config`, `sn_aiux_builder`, `sn_aiux_components`. All three.
- **Builder roles:** `aix_widget_admin` and `aix_canvas_admin`. Plain `admin` is sufficient for most exploration.
- **Migration:** Your existing `sp_widget` records keep working. The Service Portal Bridge embeds them inside `sn_aiux` experiences with no rewrites.

## Caveats

- **The framework is in active development.** The OOB engagement libraries are still on release candidates. Internal table shapes, OOB widget contracts, and `$aiux` method names may change between patches without notice.
- **The runtime can change underneath you.** Anything in the Zurich P9 bundles is fair game for ServiceNow to refactor, rename, or remove in a future patch. Lock in what you can via your own widgets, and treat framework internals as observed-behavior rather than contract.
- **Corrections welcome.** If you spot something wrong — or something that's changed in a newer patch — open an issue or send a pull request on [GitHub](https://github.com/Semaphore-Partners/aiux-docs). The faster a bad page gets fixed, the more useful this stays for everyone.

Start with [Getting Started → Installing](getting-started/installing.md).
