# `@servicenow/aiux-directive-time-ago`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-directive-time-ago`

Declares 2 functions, 2 constants, 1 class.

## Functions

```ts
formatTimeAgo(timeData: [object Object]): string
getTimeAgo(timestamp: [object Object]): { isFuture: boolean; isJustNow: boolean; unit: string; value: number }
```

## Constants

| Name | Type |
|---|---|
| `timeAgo` | `(timestamp?: any, options?: {} \| undefined) => DirectiveResult<typeof TimeAgoDirective>` |

```ts
const timeAgoTimer: {
  _interval: number;
  _startTimer: () => void;
  _stopTimer: () => void;
  _subscribers: Set<any>;
  _timer: Timeout;
  getSubscriberCount: () => number;
  subscribe: (callback: Function) => Function;
}
```

## Classes

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


