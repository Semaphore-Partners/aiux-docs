# `@servicenow/aiux-directive-spread`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-directive-spread`

Declares 1 constant, 1 class.

## Constants

| Name | Type |
|---|---|
| `spreadProps` | `(_spreadData: Record<string, unknown>) => DirectiveResult<typeof SpreadPropsDirective>` |

## Classes

```ts
class SpreadPropsDirective {
  apply(data: any): void;
  element: any;
  groom(data: any): void;
  host: any;
  prevData: {};
  render(_spreadData: Record<string, unknown>): { description: string; toString: () => string; valueOf: () => symbol };
  update(part: any, __1: [object Object]): void;
}
```


