# `@servicenow/aiux-components-visual-board`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visual-board`

Declares 9 elements, 13 types.

## Elements

### `<aiux-vb-card>`

Class `AIUXVBCard`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `data` | `KanbanCardData` | yes | no | yes |

### `<aiux-vb-lane-header>`

Class `AIUXVBLaneHeader`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `controls` | `Record<string, unknown>` | yes | no | yes |
| `data` | `Record<string, unknown>` | yes | no | yes |

### `<aiux-vb-reorder-list>`

Class `AIUXVBReorderList`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `activeItemId` | `string` | yes | no | yes |
| `items` | `Array<ReorderItem>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-vb-reorder-list:reorder` | — |

### `<aiux-vb-reorder-modal>`

Class `AIUXVBReorderModal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `activeItemId` | `string` | yes | no | yes |
| `items` | `Array<ReorderItem>` | yes | no | yes |
| `modalTitle` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `VB_REORDER#CANCEL` | — |
| `VB_REORDER#COMMIT` | — |

### `<aiux-vb-swimlane-header>`

Class `AIUXVBSwimlaneHeader`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `collapsed` | `boolean` | yes | no | yes |
| `data` | `Record<string, unknown>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `swimlane-toggle` | `{ id: unknown; collapsed: boolean; }` |

### `<aiux-visual-board>`

Class `AIUXVisualBoard`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `boardStyles` | `BoardStyles` | yes | no | yes |
| `cardConfig` | `CardConfig` | yes | no | yes |
| `cards` | `Array<Card>` | yes | no | yes |
| `cellHeaders` | `Array<CellHeader>` | yes | no | yes |
| `cellHeaderTag` | `string` | yes | no | yes |
| `cloneMode` | `boolean` | yes | no | yes |
| `laneConfig` | `LaneConfig` | yes | no | yes |
| `lanes` | `Array<Lane>` | yes | no | yes |
| `swimlaneConfig` | `SwimlaneConfig` | yes | no | yes |
| `swimlanes` | `Array<Swimlane>` | yes | no | yes |

### `<board-layout>`

Class `BoardLayout`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `boardStyles` | `BoardStyles` | yes | no | yes |
| `cards` | `Array<Card>` | yes | no | yes |
| `cellHeaders` | `Array<CellHeader>` | yes | no | yes |
| `cellHeaderTag` | `string` | yes | no | yes |
| `cloneMode` | `boolean` | yes | yes | yes |
| `lanes` | `Array<Lane>` | yes | no | yes |
| `swimlanes` | `Array<Swimlane>` | yes | no | yes |

### `<vb-card-clone>`

Class `CardClone`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `config` | `CardConfig` | no | no | yes |
| `data` | `CardCloneData` | yes | no | yes |

### `<vb-lane-clone>`

Class `VBLaneClone`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `data` | `LaneCloneData` | yes | no | yes |

## Types

```ts
interface BoardStyles {
  board?: Record<string, string>;
  card-wrapper?: Record<string, string>;
  lanes-header-container?: Record<string, string>;
}
```

```ts
interface Card {
  id: string;
  laneId: string;
  order: number;
  swimlaneId?: string;
  title: string;
}
```

```ts
interface CardCloneData {
  allCards: Array<Card>;
  cardId: string;
  height: number;
  width: number;
}
```

```ts
interface CardConfig {
  draggable?: boolean;
  dragPlaceholderTag?: string;
  dropPlaceholderTag?: string;
  sortEnabled?: boolean;
  sortPlaceholderText?: string;
  tag?: string;
}
```

```ts
interface CellHeader {
  laneId: string;
  styles?: Record<string, Record<string, string>>;
  swimlaneId: string;
}
```

```ts
interface KanbanCardData {
  assignedTo: string;
  assignedToImage?: string;
  id: string;
  laneId: string;
  number: string;
  shortDescription: string;
  swimlaneId?: string;
  title: string;
}
```

```ts
interface Lane {
  hideTooltip?: boolean;
  id: string;
  styles?: Record<string, Record<string, string>>;
  subHeader?: [object Object];
  title: string;
}
```

```ts
interface LaneCloneData {
  boardEl: HTMLElement & { renderRoot?: ParentNode; };
  boardStyles: BoardStyles;
  cardConfig: CardConfig;
  cards: Array<Card>;
  cellHeaders: Array<CellHeader>;
  cellHeaderTag: string;
  height: number;
  laneConfig: LaneConfig;
  laneId: string;
  lanes: Array<Lane>;
  swimlaneConfig: SwimlaneConfig;
  swimlanes: Array<Swimlane>;
}
```

```ts
interface LaneConfig {
  draggable?: boolean;
  dragPlaceholderTag?: string;
  dropPlaceholderTag?: string;
  footerTag?: string;
  headerTag?: string;
}
```

```ts
interface ReorderItem {
  id: string;
  selected?: boolean;
  title: string;
}
```

```ts
interface RowLaneHeaderConfig {
  id: string;
  styles?: Record<string, Record<string, string>>;
  title: string;
}
```

```ts
interface Swimlane {
  collapsed?: boolean;
  id: string;
  styles?: Record<string, Record<string, string>>;
  title: string;
}
```

```ts
interface SwimlaneConfig {
  draggable?: boolean;
  dragPlaceholderTag?: string;
  dropPlaceholderTag?: string;
  headerCloneTag?: string;
  headerTag?: string;
  rowLaneHeaderConfig?: RowLaneHeaderConfig;
  rowLaneHeaderTag?: string;
  showAsRow?: boolean;
}
```


