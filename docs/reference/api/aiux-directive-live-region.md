# `@servicenow/aiux-directive-live-region`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-directive-live-region`

Declares 3 constants, 1 class.

## Constants

| Name | Type |
|---|---|
| `liveRegion` | `() => DirectiveResult<typeof LiveRegionDirective>` |
| `liveRegionAssertive` | `(options?: Omit<LiveRegionOptions, never> \| undefined) => any` |
| `liveRegionPolite` | `(options?: Omit<LiveRegionOptions, never> \| undefined) => any` |

## Classes

```ts
class LiveRegionDirective {
  apply(politeness: AriaLivePoliteness, options: LiveRegionOptions): void;
  element: null;
  prevOptions: null;
  prevPoliteness: null;
  render(): { description: string; toString: () => string; valueOf: () => symbol };
  update(part: ElementPart, __1: [object Object]): void;
}
```


