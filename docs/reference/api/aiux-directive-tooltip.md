# `@servicenow/aiux-directive-tooltip`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-directive-tooltip`

Declares 7 functions, 1 constant, 1 class.

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

## Constants

| Name | Type |
|---|---|
| `tooltip` | `(_options?: any) => DirectiveResult<typeof TooltipDirective>` |

## Classes

```ts
class TooltipDirective {
  _attach(): void;
  _detach(): void;
  _getOrCreateTooltipEl(): HTMLElement;
  _hide(): void;
  _isVisible(): boolean;
  _onHide(): void;
  _onKeydown(e: any): void;
  _onShow(): void;
  _onTooltipEnter(): void;
  _onTooltipLeave(): void;
  _opt(key: any, fallback: any): any;
  _resolveOptions(): { content: any; offset: any; positions: any };
  _resolveOptionsFrom(opts: any): { content: any; offset: any; positions: any };
  _show(): void;
  disconnected(): void;
  hide(delay: number): void;
  reconnected(): void;
  render(_options: any): void;
  show(delay: number): void;
  update(part: any, __1: [object Object]): void;
}
```


