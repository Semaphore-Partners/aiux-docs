# `@servicenow/aiux-components-page-alert`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-page-alert`

Declares 2 elements, 1 constant.

## Elements

### `<page-alert>`

Class `PageAlert`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `actions` | `Array<PageAlertAction>` | no | no | yes |
| `alertId` | `string` | yes | no | yes |
| `alertTitle` | `string` | yes | no | yes |
| `dismissible` | `boolean` | yes | no | yes |
| `duration` | `number` | yes | no | yes |
| `icon` | `string` | yes | no | yes |
| `message` | `string` | yes | no | yes |
| `type` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `alert-dismiss` | `{ id: string; type: string; }` |

### `<page-alert-host>`

Class `PageAlertHost`.

_No public properties, events, or slots declared._

## Constants

```ts
const PageAlertService: {
  add: (type: "info" | "success" | "warning" | "error" | "critical" | "high" | "moderate" | "positive" | "low" | "ai", message: string, options?: PageAlertOptions) => void;
  ai: (message: string, options?: PageAlertOptions) => void;
  clear: (options?: { id?: string; sourceId?: string; }) => void;
  critical: (message: string, options?: PageAlertOptions) => void;
  error: (message: string, options?: PageAlertOptions) => void;
  high: (message: string, options?: PageAlertOptions) => void;
  info: (message: string, options?: PageAlertOptions) => void;
  low: (message: string, options?: PageAlertOptions) => void;
  moderate: (message: string, options?: PageAlertOptions) => void;
  positive: (message: string, options?: PageAlertOptions) => void;
  success: (message: string, options?: PageAlertOptions) => void;
  warning: (message: string, options?: PageAlertOptions) => void;
}
```


