# `@servicenow/aiux-controller-roving-tabindex`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-controller-roving-tabindex`

Declares 1 class.

## Classes

```ts
class RovingTabIndexController {
  _activate(index: number, moveFocus: boolean | undefined): void;
  _applyTabIndexes(): void;
  _onFocusin(e: FocusEvent): void;
  _onKeydown(e: KeyboardEvent): void;
  _queryItems(): void;
  _restoreTabIndexes(): void;
  destroy(): void;
  focus(index: number): void;
  hostConnected(): void;
  hostDisconnected(): void;
  refresh(): void;
}
```


