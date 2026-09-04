# `@servicenow/aiux-directives`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-directives`

Declares 2 functions, 6 constants, 4 classes.

## Functions

```ts
formatTimeAgo(timeData: [object Object]): string
getTimeAgo(timestamp: [object Object]): { isFuture: boolean; isJustNow: boolean; unit: string; value: number }
```

## Constants

| Name | Type |
|---|---|
| `liveRegion` | `() => DirectiveResult<typeof LiveRegionDirective>` |
| `liveRegionAssertive` | `(options?: Omit<LiveRegionOptions, never> \| undefined) => any` |
| `liveRegionPolite` | `(options?: Omit<LiveRegionOptions, never> \| undefined) => any` |
| `provideOrigin` | `(...values: Array<unknown>) => DirectiveResult<typeof ProvideOriginDirective>` |
| `spreadProps` | `(_spreadData: Record<string, unknown>) => DirectiveResult<typeof SpreadPropsDirective>` |
| `timeAgo` | `(timestamp?: any, options?: {} \| undefined) => DirectiveResult<typeof TimeAgoDirective>` |

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

```ts
class ProvideOriginDirective {
  disconnected(): void;
  update(part: any, __1: [object Object]): { description: string; toString: () => string; valueOf: () => symbol };
}
```

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

```ts
class TimeAgoDirective {
  __options: {};
  __part: null;
  __subscribeToTimer(timestamp: any): void;
  __timestamp: null;
  __unsubscribe: null;
  disconnected(): void;
  render(timestamp: any, options: {}): any;
  update(part: any, __1: [object Object]): any;
}
```


