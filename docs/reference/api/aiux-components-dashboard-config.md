# `@servicenow/aiux-components-dashboard-config`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-dashboard-config`

Declares 5 elements.

## Elements

### `<aiux-dashboard-admin-toolbar>`

Class `DashboardAdminToolbar`.

_No public properties, events, or slots declared._

### `<aiux-dashboard-config>`

Class `DashboardConfig`.

_No public properties, events, or slots declared._

### `<aiux-dashboard-config-widget-selector>`

Class `DashboardConfigWidgetSelector`.

| Event | `detail` |
|---|---|
| `dashboard-config:selector-close` | — |
| `dashboard-config:widgets-selected` | `{ widgets: any; }` |

### `<aiux-dashboard-props-pane>`

Class `DashboardPropsPane`.

| Event | `detail` |
|---|---|
| `close` | — |
| `dashboard-config:delete-widget` | `{ itemId: any; }` |
| `dashboard-config:props-changed` | `{ itemId: any; properties: {}; }` |
| `dashboard-config:props-close` | — |
| `dashboard-config:validation-state-changed` | `{ hasErrors: boolean; errors: Array<{ key: string; error: any; }>; itemId: any; }` |
| `delete-widget` | — |
| `props-changed` | — |
| `validation-state-changed` | — |

### `<aiux-dashboard-user-preview>`

Class `DashboardUserPreview`.

| Event | `detail` |
|---|---|
| `dashboard-config:exit-preview` | — |
| `dashboard-config:role-selected` | `{ role: any; }` |
| `dashboard-config:user-selected` | `{ user: any; }` |

