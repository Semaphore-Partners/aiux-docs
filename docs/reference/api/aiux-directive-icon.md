# `@servicenow/aiux-directive-icon`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-directive-icon`

Declares 1 function, 2 constants, 1 class.

## Functions

```ts
parseIconName(iconName: IconNameWithVariant): { baseName: string; variant: IconVariant }
```

## Constants

| Name | Type |
|---|---|
| `icon` | `(options: IconOptions) => DirectiveResult<typeof IconDirective>` |

```ts
const ICON_SIZES: {
  1x: [object Object];
  2x: [object Object];
  3x: [object Object];
  lg: [object Object];
  md: [object Object];
  sm: [object Object];
  xl: [object Object];
  xs: [object Object];
}
```

## Classes

```ts
class IconDirective {
  render(options: IconOptions): { toString: (() => string) | (() => string); valueOf: (() => symbol) | (() => Object) };
}
```


