# `@servicenow/aiux-directive-lottie`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-directive-lottie`

Declares 1 function, 2 constants, 2 classes.

## Functions

```ts
fetchAnimation(slug: string, opts: [object Object]): Promise<object | null>
```

## Constants

| Name | Type |
|---|---|
| `animatedIcon` | `(...values: Array<unknown>) => DirectiveResult<typeof AnimatedIconDirective>` |
| `lottieAnimation` | `(...values: Array<unknown>) => DirectiveResult<typeof LottieDirective>` |

## Classes

```ts
class AnimatedIconDirective {
  _applyAria(aria: LottieOptions): void;
  _applyCurrentColor(): void;
  update(part: any, __1: [object Object]): void;
}
```

```ts
class LottieDirective {
  _applyAria(aria: any): void;
  _destroy(): void;
  _init(options: any): Promise<void>;
  disconnected(): void;
  loop(enable: boolean): void;
  pause(): void;
  play(): void;
  reconnected(): void;
  reverse(): void;
  update(part: any, __1: [object Object]): void;
}
```


