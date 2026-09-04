# `@servicenow/aiux-components-code-editor`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-code-editor`

Declares 1 element, 2 types.

## Elements

### `<aiux-code-editor>`

Class `CodeEditor`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `autocomplete` | `AutocompleteConfig` | yes | no | yes |
| `autoresizeLineLimit` | `number` | yes | no | yes |
| `height` | `string` | yes | no | yes |
| `hideToolbar` | `boolean` | yes | yes | yes |
| `isClientScript` | `boolean` | yes | no | yes |
| `language` | `string` | yes | no | yes |
| `linting` | `LintingConfig` | yes | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `recordType` | `string` | yes | no | yes |
| `scope` | `string` | yes | no | yes |
| `scriptField` | `string` | yes | no | yes |
| `scrollBeyondLastLine` | `boolean` | yes | no | yes |
| `sysId` | `string` | yes | no | yes |
| `value` | `string` | yes | no | yes |
| `width` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `AIUX_CODE_EDITOR#CONTENT_CHANGED` | — |
| `AIUX_CODE_EDITOR#FULLSCREEN_TOGGLED` | — |
| `AIUX_CODE_EDITOR#TEXT_EDITOR_FOCUS_CHANGED` | — |

## Types

```ts
interface AutocompleteConfig {
  customCompletions?: string;
  disabled?: boolean | undefined;
  lazyLoad?: boolean | undefined;
}
```

```ts
interface LintingConfig {
  disabled?: boolean | undefined;
  lintConfig?: Record<string, any>;
}
```


