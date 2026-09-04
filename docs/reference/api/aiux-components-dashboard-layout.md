# `@servicenow/aiux-components-dashboard-layout`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-dashboard-layout`

Declares 3 elements, 4 constants, 1 class.

## Elements

### `<aiux-dashboard-layout>`

Class `DashboardLayout`.

| Event | `detail` |
|---|---|
| `aiux-omnibar-visibility-change` | `{ hidden: any; }` |
| `dashboard:refresh-request` | — |

### `<aiux-dashboard-widget-selector>`

Class `WidgetSelector`.

| Event | `detail` |
|---|---|
| `widget-selector:close` | — |
| `widget-selector:widgets-selected` | `{ widgets: any; }` |

### `<aiux-pinned-widget>`

Class `PinnedWidget`.

_No public properties, events, or slots declared._

## Constants

| Name | Type |
|---|---|
| `isCanvasItem` | `(item: any) => boolean` |
| `parseLayoutProps` | `(layoutProps: string \| Object) => Object` |

```ts
const DEFAULT_LAYOUT_OPTIONS: {
  cellHeight: number;
  columnOpts: [object Object];
  columns: number;
  margin: number;
}
```

```ts
const ItemCategory: {
  LIBRARY: string;
  LOCKED: string;
  UNLOCKED: string;
}
```

## Classes

<details>
<summary><code>class SnLayoutRendererAdapter</code> (41 members)</summary>

```ts
class SnLayoutRendererAdapter {
  _calculateWidgetWidth(): number;
  _ensureRenderer(): HTMLElement;
  _findRenderer(): void;
  _getRegistry(): Object;
  _handleEditModeChange(_event: CustomEvent<any>): void;
  _handleItemAdded(event: CustomEvent<any>): void;
  _handleItemDeleted(event: CustomEvent<any>): void;
  _handleItemMoved(event: CustomEvent<any>): void;
  _handleItemResized(event: CustomEvent<any>): void;
  _syncPositionsFromGsItems(gsItems: Array<any>): void;
  _transformItem(item: Object): Object;
  addWidget(element: any, options: any): void;
  applyWidgetAttributes(element: HTMLElement, options: any): void;
  clearWidgetFocus(): void;
  destroy(): void;
  enableMove(enabled: boolean): void;
  enableResize(enabled: boolean): void;
  findElement(itemId: string): Object;
  getCanvasContainer(): HTMLElement;
  getContainerClass(): string;
  getGridItems(): Array<any>;
  getInstanceId(): string;
  getItemClass(): string;
  getItemContentClass(): string;
  getItems(): Array<any>;
  getLayout(): Array<any>;
  getTransformedItems(): Array<any>;
  getUserRoles(): Array<any>;
  getWidgetId(elementOrItem: [object Object]): string;
  init(options: any): void;
  makeWidget(_element: any): void;
  off(_event: any, _callback: any): void;
  on(_event: any, _callback: any): void;
  removeAllWidgets(): void;
  removeWidget(elementOrId: [object Object]): void;
  renderLayout(_onSave: any, onItemDeleted: Function, onRecordAction: Function): TemplateResult<ResultType>;
  resetToConfig(): void;
  resetToSnapshot(items: Array<any>): void;
  setInstanceId(instanceId: string): void;
  setShowGridLines(enabled: boolean): void;
  updateWidget(elementOrId: [object Object], updates: any): void;
}
```

</details>


