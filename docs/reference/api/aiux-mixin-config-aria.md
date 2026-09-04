# `@servicenow/aiux-mixin-config-aria`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-mixin-config-aria`

Declares 2 functions, 1 constant.

## Functions

```ts
filterAriaAttributes(obj: Record<string, unknown>, key: string): Record<string, string>
isAriaAttribute(attr: string): boolean
```

## Constants

| Name | Type |
|---|---|
| `ConfigAriaMixin` | `<T extends LitElement>(superClass: new (...args: Array<any>) => T) => new (...args: Array<any>) => T & { configAria: ConfigAriaValue; }` |


