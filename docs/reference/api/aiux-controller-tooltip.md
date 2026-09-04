# `@servicenow/aiux-controller-tooltip`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-controller-tooltip`

Declares 7 functions, 1 class.

## Functions

```ts
getExistingTooltipElement(root: [object Object]): HTMLElement
getTooltipElement(root: [object Object]): HTMLElement
hideTooltipElement(tooltipEl: HTMLElement): void
positionTooltip(tooltipEl: HTMLElement, triggerEl: HTMLElement, positions: Array<string | { target: string; content?: string | undefined; }>, offset: number): void
schedule(id: string, fn: () => void, delay: number): void
showTooltipElement(tooltipEl: HTMLElement, triggerEl: HTMLElement, content: string, positions: Array<string | { target: string; content?: string | undefined; }>, offset: number): void
unschedule(id: string): void
```

## Classes

```ts
class TooltipController {
  _getOrCreateTooltipEl(): HTMLElement;
  _hide(): void;
  _onHide(): void;
  _onKeydown(e: any): void;
  _onShow(e: Event): void;
  _onTooltipEnter(): void;
  _onTooltipLeave(): void;
  _onTriggerMutation(records: Array<MutationRecord>): void;
  _resolveOptions(el: HTMLElement): { content: string; offset: number; positions: Array<any> };
  _show(triggerEl: HTMLElement): void;
  addTrigger(el: HTMLElement, overrides: TooltipOptions): void;
  destroy(): void;
  hide(delay: number): void;
  hostConnected(): void;
  hostDisconnected(): void;
  removeTrigger(el: HTMLElement): void;
  show(triggerEl: HTMLElement, delay: number): void;
}
```


