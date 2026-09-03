# Overview

An *experience* in `sn_aiux` is what a *portal* is in Service Portal — a top-level container with a URL, a theme, a set of pages, and a collection of widget instances laid out on those pages. Experiences live in **`sys_aix_experience`**.

This page covers the schema, the URL pattern, the relationship to Service Portal (especially the `sp_portal` sidecar), and the framework-level config endpoint.

## The URL pattern

Every `sn_aiux` experience is addressable through the same path shape:

```
/aiux/<experience_url_suffix>/<page_path>
```

`/aiux/` is the constant vhost prefix. `<experience_url_suffix>` is the `url_suffix` field on the `sys_aix_experience` record. `<page_path>` matches a `path_pattern` from a `sys_aix_page` row scoped to the experience.

Examples:

- `/aiux/builder/widgets` — the OOB Builder experience, its Widgets page.
- `/aiux/builder/edit/widget/<sys_id>` — the Builder's widget editor.
- `/aiux/<your-experience-suffix>/<your-page>` — anything you build.

This pattern is enforced in the runtime bundle:

```js
DEFAULT_PATTERN = new URLPattern({
  pathname: `/${vHostSiteName}/:experience/:page*`
});
```

`vHostSiteName` is the constant `"aiux"`. The SPA reads `window.location.pathname` against this pattern and extracts the experience and page segments. There is no query-string escape hatch — the experience comes from the URL pathname only.

## The `sys_aix_experience` record

The portal-equivalent record. Notable fields:

| Field | Meaning |
|---|---|
| url_suffix | The path segment between `/aiux/` and the page path. Must be unique. |
| title | Display name. |
| landing_path | Default page path when no path is specified (e.g. `/home`). |
| app_shell | Reference to a `sys_aix_app_shell` record — chrome/header/navigation. See [App Shells & Themes](app-shells-and-themes.md). |
| theme | Reference to a `sys_aix_theme` record. |
| properties | Per-experience config blob. |

## The `sp_portal` sidecar

There's an `sp_portal` record with sys_id `7cf6e70a3f123210860f2248001f8b63`, title "AIUX Portal", url_suffix `aiuxsp`. It is **not** where `sn_aiux` experiences live — `sn_aiux` does not run on Service Portal.

What the `aiuxsp` record actually does: it's a sidecar that carries the theme used to reskin embedded SP widgets when they get bridged into `sn_aiux` pages (so an Angular catalog widget renders against Tailwind/DaisyUI tokens instead of Bootstrap defaults), and it provides the portal-scoped `$sp` context for server scripts that ask for it. Pure-Lit widgets that don't bridge to Service Portal never touch the sidecar.

This shows up in the OOB Activity Stream widget's server script:

```js
const AIUX_PORTAL_ID = "7cf6e70a3f123210860f2248001f8b63";  // sp_portal "aiuxsp"
var sp = new GlideSPScriptable(AIUX_PORTAL_ID);
```

If you need a portal-scoped `$sp` in your widget's server script, this is how — bound to the AIUX sidecar.

For the embedding mechanism that consumes the sidecar's theming, see [Widgets → Service Portal Bridge](../widgets/service-portal-bridge.md).

## The config endpoint

Every experience can be queried at runtime through:

```
GET /api/now/aix/config/<url_suffix>
Accept: multipart/mixed
```

The endpoint returns the full experience config payload as multipart-mixed JSON:

```json
{
  "experienceData": {
    "urlSuffix": "builder",
    "sysId": "ae39471d0308af6773e916898961feaf",
    "title": "SN AIUX Builder",
    "landingPath": "/home",
    "appShell": "...",
    "theme": "...",
    "telemetryConfig": { ... },
    "applicationContextTableName": "sys_aix_experience"
  },
  "appShellData": { "css": "..." },
  "urlRewriteRules": { "globalRules": [...], "experienceRules": [...] }
}
```

The SPA fetches this on every navigation that lands on a new experience. Hitting it directly is a fast way to confirm an experience's config without opening the Builder.

Common responses:

| URL suffix | Status | Meaning |
|---|---|---|
| (empty) | 400 — "Requested URI does not represent any resource" | Missing path segment. |
| `aiuxsp` | 400 — "Experience not found" | The SP sidecar record's url_suffix. Not a real experience. |
| `builder` | 200 + payload | Valid experience. |
| Unknown suffix | 400 — "Experience not found" | No matching `sys_aix_experience` row. |

## The `$ai_experience.do` entry point

The legacy URL `https://<instance>/$ai_experience.do` is a parameter-less bootstrap servlet that always serves the same HTML — it does *not* select an experience. The SPA inside reads `window.location.pathname` for the experience, not query parameters. Hitting `$ai_experience.do` without a `/aiux/<suffix>/` segment in the URL results in an empty experience id, a failed config call, and the 404 page (which renders as a playable Breakout game — see [Pages & Routing](pages-and-routing.md)).

The OAuth flow lands users on `$ai_experience.do` after authentication, and the runtime is expected to then route into a real `/aiux/<suffix>/...` URL. Bookmarking `$ai_experience.do` directly is not useful.

## The `applicationContextTableName`

Worth highlighting from the config payload: the experience identifies its own backing table as `sys_aix_experience`. This is the smoking-gun confirmation that experiences are first-class records in their own table, not synthetic projections of `sp_portal`. If you're scoping ACLs, building dashboards, or writing reporting against the framework, target `sys_aix_experience` directly.

## What to read next

- [Pages & Routing](pages-and-routing.md) — how individual pages within an experience are defined and routed.
- [App Shells & Themes](app-shells-and-themes.md) — the chrome around your experience.
- [URL Rewrites](url-rewrites.md) — the migration mechanism for legacy Service Portal URLs.
