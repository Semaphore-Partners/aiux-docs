# `@servicenow/aiux-components-action`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-action`

Declares 3 elements, 2 functions, 5 types.

## Elements

### `<aiux-action-bar>`

Class `AIUXActionBar`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `ariaLabel` | `string` | yes | no | yes |
| `columns` | `Array<Column>` | yes | no | yes |
| `hostRoot` | `HTMLElement \| undefined` | no | no | no |
| `orientation` | `Orientation` | yes | no | yes |
| `size` | `Size` | yes | no | yes |
| `tabNavigation` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `actionbar-dropdown-opened` | `{ id: string; }` |

### `<aiux-flyout-menu>`

Class `AIUXFlyoutMenu`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `configAria` | `FlyoutMenuAriaConfig \| null` | yes | no | yes |
| `constrain` | `FlyoutMenuConstrain` | yes | no | yes |
| `items` | `Array<FlyoutMenuItem \| FlyoutMenuSection>` | yes | no | yes |
| `listHeader` | `FlyoutMenuListHeader \| undefined` | yes | no | yes |
| `opened` | `boolean` | yes | no | yes |
| `placement` | `"top" \| "top-left" \| "top-right" \| "bottom" \| "bottom-left" \| "bottom-right" \| "left" \| "left-top" \| "left-bottom" \| "right" \| "right-top" \| "right-bottom"` | yes | no | yes |
| `selectedItems` | `Array<string>` | yes | no | yes |
| `size` | `FlyoutMenuSize` | yes | no | yes |

| Event | `detail` |
|---|---|
| `flyout-menu:item-clicked` | — |
| `flyout-menu:list-hidden` | `{}` |
| `flyout-menu:list-visible` | `{}` |
| `flyout-menu:opened-set` | `{ value: true; }` |
| `flyout-menu:selected-items-set` | `{ value: any; }` |

**Slots**

- trigger - Content that triggers the flyout menu

### `<aiux-flyout-menu-list>`

Class `AIUXFlyoutMenuList`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `configAria` | `FlyoutMenuAriaConfig \| null` | yes | no | yes |
| `constrain` | `FlyoutMenuConstrain \| null` | yes | no | yes |
| `items` | `Array<FlyoutMenuItem \| FlyoutMenuSection>` | yes | no | yes |
| `keyboardNavigation` | `boolean` | yes | no | yes |
| `listHeader` | `FlyoutMenuListHeader \| null` | yes | no | yes |
| `nested` | `boolean` | yes | no | yes |
| `opened` | `boolean` | yes | yes | yes |
| `selectedItems` | `Array<string>` | yes | no | yes |
| `size` | `FlyoutMenuSize` | yes | no | yes |

| Event | `detail` |
|---|---|
| `flyout-menu-list:active-item-set` | — |
| `flyout-menu-list:input-type-change` | `{ usingKeyboard: boolean; }` |
| `flyout-menu-list:item-clicked` | `{ item: FlyoutMenuItem; }` |
| `flyout-menu-list:opened-set` | `{ value: boolean; closeParents: boolean; }` |
| `flyout-menu-list:selected-items-set` | `{ value: Array<string>; }` |

## Functions

```ts
toActionButton(input: Omit<ButtonNode, "type">): ButtonNode
toActionColumns(actions: Array<Omit<ButtonNode, "type">>, options: [object Object]): Array<Column>
```

## Types

```ts
type Column = {
  id: string;
  items: Array<ActionNode | DividerNode>;
  overflow?: boolean | undefined;
  overflowButtonConfig?: ButtonNode;
  styles?: StylesObject;
}
```

```ts
interface FlyoutMenuConstrain {
  height?: number | "target" | undefined;
  maxHeight?: number | "target" | undefined;
  maxWidth?: number | "target" | undefined;
  minHeight?: number | "target" | undefined;
  minWidth?: number | "target" | undefined;
  width?: number | "target" | undefined;
}
```

```ts
type FlyoutMenuSize = unknown
```

```ts
type Orientation = unknown
```

```ts
type Size = unknown
```


