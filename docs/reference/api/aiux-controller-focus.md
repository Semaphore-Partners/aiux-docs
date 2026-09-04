# `@servicenow/aiux-controller-focus`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-controller-focus`

Declares 3 functions, 1 constant, 3 classes.

## Functions

```ts
getDeepActiveElement(): HTMLElement
getFocusablesDeep(root: [object Object]): Array<HTMLElement>
restoreFocusToElement(el: HTMLElement): void
```

## Constants

| Name | Type |
|---|---|
| `FOCUSABLE_SELECTOR` | `string` |

## Classes

```ts
class FocusController {
  _applyAriaHidden(): void;
  _onHostFocus(e: FocusEvent): void;
  _onKeydown(e: KeyboardEvent): void;
  _removeAriaHidden(): void;
  _syncTrapState(): void;
  destroy(): void;
  hostConnected(): void;
  hostDisconnected(): void;
}
```

```ts
class FocusTrapController {
  activate(overrides?: FocusTrapActivateOverrides): void;
  deactivate(): void;
  hostConnected(): void;
  hostDisconnected(): void;
}
```

```ts
class TriggerFocusStack {
  capture(explicitTrigger?: HTMLElement): void;
  clear(): void;
  restore(fallback?: HTMLElement): void;
}
```


