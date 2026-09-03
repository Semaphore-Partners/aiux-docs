# App Shells & Themes

The chrome around an `sn_aiux` experience — header, navigation, footer, page-level CSS — lives in two records: **`sys_aix_app_shell`** and **`sys_aix_theme`**. Together they let you ship multiple branded experiences without rebuilding the header for each one.

## App Shells (`sys_aix_app_shell`)

A level above the experience. An app shell wraps one or more experiences with shared chrome: a header bar, navigation menus, a footer, and any layout that should persist across pages and across experiences.

This is the one architectural idea `sn_aiux` borrowed from UI Builder that Service Portal never had. SP expected you to handle shared chrome inside each portal's theme and header widgets, which led to a lot of copy-paste across portals. A dedicated record for it is the right call, especially if you're going to ship more than one experience under a single brand.

Notable fields:

| Field | Meaning |
|---|---|
| name | Human-readable name. |
| menu | Reference to a `sys_aix_menu` record — the navigation menu shown in the shell. |
| header_config | JSON for header behavior (sticky, logo placement, search visibility). |
| footer_config | JSON for footer content. |
| css | Shell-level CSS injected on every page that uses this shell. |

Reference the shell from an `sys_aix_experience` record via the `app_shell` field. All pages in that experience render inside it.

## Themes (`sys_aix_theme`)

Tokens — colors, typography, spacing — that drive the DaisyUI-prefixed utility classes (`aiux-bg-base-100`, `aiux-card`, `aiux-badge-primary`, etc.) and the pre-built `<aiux-*>` components.

Notable fields:

| Field | Meaning |
|---|---|
| name | Human-readable name. |
| primary, secondary, accent | Brand colors. |
| base_100, base_200, base_300 | Background layers. |
| color_scheme | `"light"` or `"dark"`. Drives the default mode. |
| custom_css | Raw CSS injected at the experience level. |

Reference the theme from an experience via the `theme` field. The theme cascades to every page and widget in the experience.

## Color swatches (`sys_aix_color_swatch`)

Reusable color values that themes can reference. If you've got a brand palette with twenty colors, store them here once and reuse them across themes instead of duplicating hex values.

## How shells, themes, and pages fit together

```
sys_aix_app_shell
   ├── menu  (sys_aix_menu)
   ├── header / footer config
   └── shell-level CSS

sys_aix_theme
   ├── color tokens
   ├── color_scheme (light/dark)
   └── custom CSS

sys_aix_experience
   ├── app_shell  → references a shell
   ├── theme      → references a theme
   └── pages      → multiple sys_aix_page rows (via sys_aix_experience_page_rel)

sys_aix_page
   └── page_specific_css  (overrides for this page only)
```

A typical real-world setup:

- One **app shell** per brand. Multiple experiences within a brand share the shell.
- One **theme** per shell, or multiple themes if you support light + dark variants of the same brand.
- Page-level CSS only for layout tweaks you can't express through the shell or theme.

## Menus (`sys_aix_menu`, `sys_aix_menu_item`, `sys_aix_menu_item_category`)

The navigation tree shown in the app shell. Three tables:

- `sys_aix_menu` — the menu record. Referenced by `sys_aix_app_shell.menu`.
- `sys_aix_menu_item` — individual menu items. Each has a label, an icon, and a target (either a path within the experience or an external URL).
- `sys_aix_menu_item_category` — groupings used to render menu sections.

Menus are tree-structured (items can have parents) and support role-based visibility through user criteria.

## Page-specific CSS

Each `sys_aix_page` record has a `page_specific_css` field that's injected only when that page is rendered. Use it sparingly — it's the right tool for page-unique layout (`.page-container { padding: 0; }`) but the wrong tool for anything reusable. If you find yourself writing the same CSS on multiple pages, hoist it to the theme or the app shell.

Example from the OOB Knowledge page:

```css
.page-container {
  background: var(--surface-primary, #fff);
  padding-block-start: calc(var(--spacing) * 14) !important;
  border-radius: var(--radius-3xl, 1.5rem);
}

.layout-container {
  max-width: var(--container-4xl);
  margin: auto;
}
```

Notice the theme tokens (`--surface-primary`, `--spacing`, `--radius-3xl`, `--container-4xl`) — page CSS can reference theme variables, so even page-unique styling stays brand-consistent.

## Distinguishing from the `sp_portal` sidecar

The `sp_portal` record with `url_suffix=aiuxsp` is a *theming sidecar* for embedded SP widgets, not the source of theming for `sn_aiux` itself. `sn_aiux` widgets are styled by `sys_aix_theme` and the DaisyUI bundle. The sidecar's `sp_theme` is only consulted when an `<aiux-angular-element>` bridges in an Angular SP widget that needs SP-era theme variables.

If you want consistent styling between native `sn_aiux` widgets and bridged SP widgets, make sure the `sp_theme` attached to the `aiuxsp` `sp_portal` carries equivalent CSS variables to the `sys_aix_theme` driving your experience. Otherwise bridged widgets can look subtly off-brand.
