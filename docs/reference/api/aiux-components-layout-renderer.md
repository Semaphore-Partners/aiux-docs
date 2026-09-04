# `@servicenow/aiux-components-layout-renderer`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-layout-renderer`

Declares 22 elements, 28 functions, 29 types, 20 constants, 2 classes.

## Elements

### `<action-button>`

Class `ActionButton`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `content` | `string` | yes | no | yes |
| `focused` | `boolean` | yes | no | yes |
| `itemId` | `string` | yes | no | yes |
| `locked` | `boolean` | yes | no | yes |
| `mode` | `WidgetActionMode` | yes | no | yes |
| `offsetIndex` | `number` | yes | no | yes |
| `show` | `boolean` | yes | no | yes |

### `<add-content-buttons>`

Class `AddContentButtons`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `itemId` | `string` | yes | no | yes |
| `show` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `SN_LAYOUT_OPEN_POPOVER` | `{ itemId: string; side: "left" \| "right" \| "top" \| "bottom"; }` |

### `<aria-live-announcer>`

Class `AriaLiveAnnouncer`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `clearDelay` | `number` | yes | no | yes |
| `message` | `string` | yes | no | yes |
| `priority` | `"polite" \| "assertive"` | yes | no | yes |

### `<drag-handle>`

Class `DragHandle`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `itemContent` | `string` | yes | no | yes |
| `show` | `boolean` | yes | no | yes |
| `toolbarVisible` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `keyboard-drag-toggle` | — |
| `toolbar-blur` | — |

### `<gap-dropzone>`

Class `GapDropzone`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `gap` | `HorizontalGap` | yes | no | no |
| `gridArea` | `string` | yes | no | yes |
| `isActive` | `boolean` | yes | no | yes |

### `<grid-item-controls>`

Class `GridItemControls`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `canDelete` | `boolean` | yes | no | yes |
| `canEdit` | `boolean` | yes | no | yes |
| `canLock` | `boolean` | yes | no | yes |
| `content` | `string` | yes | no | yes |
| `editMode` | `boolean` | yes | no | yes |
| `isLocked` | `boolean` | yes | no | yes |
| `itemId` | `string` | yes | no | yes |
| `toolbarVisible` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `SN_LAYOUT_DELETE_ITEM` | `{ itemId: string; }` |
| `SN_LAYOUT_FOCUS_COMPONENT` | `{ itemId: string; content: string; }` |
| `SN_LAYOUT_LOCK_ITEM` | `{ itemId: string; }` |
| `SN_LAYOUT_TOGGLE_EDIT_WIDGET` | `{ itemId: string; }` |
| `toolbar-blur` | — |

### `<grid-item-renderer>`

Class `GridItemRenderer`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `canAdd` | `boolean` | yes | no | yes |
| `canDelete` | `boolean` | yes | no | yes |
| `canDrag` | `boolean` | yes | no | yes |
| `canEdit` | `boolean` | yes | no | yes |
| `canLock` | `boolean` | yes | no | yes |
| `canResizeHorizontally` | `boolean` | yes | no | yes |
| `canResizeVertically` | `boolean` | yes | no | yes |
| `columnSections` | `SectionMap` | yes | no | yes |
| `containerStyle` | `any` | yes | no | yes |
| `dragController` | `DragController` | yes | no | no |
| `editMode` | `boolean` | yes | no | yes |
| `elementDropped` | `boolean` | yes | no | yes |
| `gridItemCount` | `Record<number, any>` | yes | no | yes |
| `gridItems` | `Array<GridItem>` | yes | no | yes |
| `horizontalResizeController` | `any` | yes | no | no |
| `isResizingElement` | `string` | yes | no | yes |
| `keyboardDragController` | `KeyboardDragController` | yes | no | no |
| `keyboardDraggedItemIndex` | `number` | yes | no | yes |
| `keyboardDragMode` | `boolean` | yes | no | yes |
| `keyboardDropSide` | `DropSide` | yes | no | yes |
| `keyboardDropTargetIndex` | `number` | yes | no | yes |
| `keyboardHorizontalResizeController` | `any` | yes | no | no |
| `keyboardVerticalResizeController` | `any` | yes | no | no |
| `logger` | `LoggerInterface` | no | no | yes |
| `resizePreviewState` | `{ visible: boolean; top: number; left: number; width: number; height: number; rowHeight: number; isInvalid: boolean; labelText?: string; }` | yes | no | yes |
| `rowSections` | `SectionMap` | yes | no | yes |
| `setGridContainerGetter` | `(getter: () => HTMLDivElement) => void` | yes | no | no |
| `stackedElementArr` | `Record<number, any>` | yes | no | yes |
| `userRoles` | `Array<string>` | yes | no | yes |
| `verticalResizeController` | `any` | yes | no | no |

| Event | `detail` |
|---|---|
| `SN_LAYOUT_ANNOUNCE` | `{ message: "Item picked up. Double-click another item to drop it here."; }` |
| `SN_LAYOUT_UPDATE_STATE` | — |

### `<grid-popover>`

Class `GridPopover`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `availableWidgets` | `Array<any>` | yes | no | yes |
| `engine` | `LayoutEngine` | yes | no | no |
| `gridItems` | `Array<GridItem>` | yes | no | yes |
| `handleClosePopover` | `() => void` | yes | no | yes |
| `horizontalPosition` | `number` | yes | no | yes |
| `logger` | `LoggerInterface` | no | no | yes |
| `openPopover` | `{ itemId: string; side: "left" \| "right" \| "top" \| "bottom"; insertSide?: "left" \| "right" \| "top" \| "bottom"; }` | yes | no | yes |
| `verticalPosition` | `number` | yes | no | yes |

| Event | `detail` |
|---|---|
| `SN_LAYOUT_POPOVER_CLOSED` | `{ reason: "user-closed" \| "component-added"; itemId: string; side: "left" \| "right" \| "top" \| "bottom"; }` |
| `SN_LAYOUT_UPDATE_STATE` | `{ gridItems: Array<GridItem>; elementDropped: true; }` |

### `<gs-edit-sidebar>`

Class `EditSidebar`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `properties` | `Record<string, unknown>` | yes | no | yes |
| `targetElement` | `HTMLElement` | no | no | yes |
| `widgetLabel` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `property-changed` | `{ key: string; value: unknown; }` |
| `sidebar-closed` | — |

### `<gs-widget-toolbar>`

Class `WidgetToolbar`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `canDelete` | `boolean` | yes | no | yes |
| `canEdit` | `boolean` | yes | no | yes |
| `canLock` | `boolean` | yes | no | yes |
| `editMode` | `boolean` | yes | yes | yes |
| `locked` | `boolean` | yes | yes | yes |

### `<history-panel>`

Class `HistoryPanel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `currentIndex` | `number` | yes | no | yes |
| `history` | `Array<HistoryState>` | yes | no | yes |
| `open` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `SN_LAYOUT_HISTORY_JUMP` | `{ targetIndex: number; }` |
| `SN_LAYOUT_TOGGLE_HISTORY_PANEL` | — |

### `<insertion-dropzone>`

Class `InsertionDropzone`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `gridRow` | `number` | yes | no | yes |
| `onDragLeave` | `any` | yes | no | no |
| `onDragOver` | `any` | yes | no | no |
| `onDrop` | `any` | yes | no | no |

### `<layout-toolbar>`

Class `LayoutToolbar`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `canRedo` | `boolean` | yes | yes | yes |
| `canUndo` | `boolean` | yes | yes | yes |
| `editMode` | `boolean` | yes | yes | yes |
| `enableGridStack` | `boolean` | yes | yes | yes |
| `historyPanelOpen` | `boolean` | yes | yes | yes |
| `showGridLines` | `boolean` | yes | yes | yes |

| Event | `detail` |
|---|---|
| `SN_LAYOUT_TOGGLE_EDIT` | `{ editMode: boolean; }` |

### `<lit-modal>`

Class `Modal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `contentFullWidth` | `boolean` | yes | no | yes |
| `footerActions` | `Array<ModalFooterAction>` | yes | no | yes |
| `headerLabel` | `string` | yes | no | yes |
| `headingLevel` | `2 \| 1 \| 3 \| 4 \| 5 \| 6` | yes | no | yes |
| `hideOverlay` | `boolean` | yes | no | yes |
| `hidePadding` | `boolean` | yes | no | yes |
| `opened` | `boolean` | yes | no | yes |
| `size` | `"sm" \| "md" \| "lg"` | yes | no | yes |

| Event | `detail` |
|---|---|
| `footer-action-clicked` | `{ action: ModalFooterAction; }` |
| `modal-closed` | `{ origin: "close-button" \| "esc-key" \| "overlay-click"; }` |

### `<reset-confirmation-modal>`

Class `ResetConfirmationModal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `opened` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `reset-cancelled` | — |
| `reset-confirmed` | — |

### `<resize-bars>`

Class `ResizeBars`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `activeBar` | `"left" \| "right" \| "top" \| "bottom"` | yes | no | yes |
| `canResizeHorizontally` | `boolean` | yes | no | yes |
| `canResizeVertically` | `boolean` | yes | no | yes |
| `disabled` | `boolean` | yes | no | yes |
| `index` | `number` | yes | no | yes |
| `itemId` | `string` | yes | no | yes |
| `keyboardDragMode` | `boolean` | yes | no | yes |
| `keyboardResizeMode` | `boolean` | yes | no | yes |
| `leftBarStyle` | `{}` | yes | no | yes |
| `logger` | `LoggerInterface` | no | no | yes |
| `onResizeMouseDown` | `any` | yes | no | no |
| `onVerticalResizeMouseDown` | `any` | yes | no | no |
| `rightBarStyle` | `{}` | yes | no | yes |
| `toolbarVisible` | `boolean` | yes | no | yes |
| `verticalBarStyle` | `{}` | yes | no | yes |

| Event | `detail` |
|---|---|
| `keyboard-resize-cancel` | `{ bar: "left" \| "right" \| "top" \| "bottom"; }` |
| `keyboard-resize-execute` | `{ bar: "left" \| "right" \| "top" \| "bottom"; direction: string; }` |
| `keyboard-resize-toggle` | `{ bar: "left" \| "right" \| "top" \| "bottom"; }` |
| `toolbar-blur` | — |

### `<resize-preview>`

Class `ResizePreview`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `height` | `number` | yes | no | yes |
| `isInvalid` | `boolean` | yes | no | yes |
| `labelText` | `string` | yes | no | yes |
| `left` | `number` | yes | no | yes |
| `rowHeight` | `number` | yes | no | yes |
| `top` | `number` | yes | no | yes |
| `visible` | `boolean` | yes | no | yes |
| `width` | `number` | yes | no | yes |

### `<sn-gridstack-renderer>`

Class `SnLayoutRendererGridstack`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `actionButton` | `ActionButtonConfig` | yes | no | yes |
| `actionButtonHover` | `boolean` | yes | no | yes |
| `canAdd` | `boolean` | yes | no | yes |
| `canDelete` | `boolean` | yes | no | yes |
| `canDrag` | `boolean` | yes | no | yes |
| `canEdit` | `boolean` | yes | no | yes |
| `canLock` | `boolean` | yes | no | yes |
| `canResize` | `boolean` | yes | no | yes |
| `columns` | `number` | yes | no | yes |
| `configurationEnabled` | `boolean` | yes | no | yes |
| `editMode` | `boolean` | yes | yes | yes |
| `enableDefaultSettingsConfig` | `boolean` | yes | no | yes |
| `enableWidgetToolbar` | `boolean` | yes | no | yes |
| `externalHistoryManager` | `boolean` | yes | no | yes |
| `float` | `boolean` | yes | no | yes |
| `gridItems` | `Array<GridStackWidget>` | yes | no | yes |
| `gridStackOptions` | `GridStackOptions` | yes | no | yes |
| `itemTerm` | `string` | yes | no | yes |
| `logger` | `LoggerInterface` | no | no | yes |
| `reduceMotion` | `boolean` | yes | no | yes |
| `rowHeight` | `number` | yes | no | yes |
| `showGridLines` | `boolean` | yes | yes | yes |

| Event | `detail` |
|---|---|
| `SN_LAYOUT_ITEM_ADDED` | `{ item: { id: string; autoPosition?: boolean; minW?: number; maxW?: number; minH?: number; maxH?: number; noResize?: boolean; noMove?: boolean; locked?: boolea…` |
| `SN_LAYOUT_ITEM_DELETED` | `{ itemId: string; items: Array<GridStackWidget> \| GridStackOptions; }` |
| `SN_LAYOUT_ITEM_MOVED` | `{ sourceId: string; items: Array<GridStackWidget> \| GridStackOptions; }` |
| `SN_LAYOUT_ITEM_RESIZED` | `{ itemId: string; items: Array<GridStackWidget> \| GridStackOptions; }` |
| `SN_LAYOUT_OPEN_WIDGET_SETTINGS` | — |

### `<sn-layout-renderer>`

Class `SnLayoutRenderer`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `actionButton` | `ActionButtonConfig` | yes | no | yes |
| `actionButtonHover` | `boolean` | yes | no | yes |
| `availableWidgets` | `Array<any>` | yes | no | yes |
| `configurationEnabled` | `boolean` | yes | no | yes |
| `defaultEditMode` | `boolean` | yes | no | yes |
| `emptySlotColumns` | `number` | yes | no | yes |
| `emptySlotRows` | `number` | yes | no | yes |
| `enableDefaultSettingsConfig` | `boolean` | yes | no | yes |
| `enableGridStack` | `boolean` | yes | no | yes |
| `enableWidgetToolbox` | `boolean` | yes | no | yes |
| `externalHistoryManager` | `boolean` | yes | no | yes |
| `gridStackOptions` | `GridStackOptions` | yes | no | yes |
| `hideToolbar` | `boolean` | yes | no | yes |
| `instanceId` | `string` | yes | no | yes |
| `isAdapter` | `boolean` | yes | no | yes |
| `loggerProvider` | `LoggerProviderInterface` | yes | no | no |
| `logLevel` | `"debug" \| "info" \| "warn" \| "error"` | yes | no | yes |
| `pageSize` | `PageSize` | yes | no | yes |
| `prefName` | `string` | yes | no | yes |
| `reduceMotion` | `boolean` | yes | no | yes |
| `roleFeatures` | `Record<string, Array<Feature>>` | yes | no | yes |
| `shouldUseUserPref` | `boolean` | yes | no | yes |
| `showGridLines` | `boolean` | yes | no | yes |
| `userRoles` | `Array<string>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `SN_LAYOUT_ITEM_PROPERTIES_CHANGED` | `{ itemId: string; properties: Record<string, unknown>; configurableProperties: Array<string>; }` |
| `SN_LAYOUT_PREFERENCES_LOADED` | `{ preferences: UserPreferences; }` |
| `SN_LAYOUT_SAVED` | `{ gridItems: Array<GridItem>; }` |
| `sn-layout:edit-mode-change` | `{ editMode: boolean; }` |

### `<user-notification>`

Class `Notification`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `notifications` | `Array<NotificationMessage>` | yes | no | yes |
| `onDismiss` | `(_id: string) => void` | yes | no | yes |

### `<widget-toolbox>`

Class `WidgetToolbox`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `editable` | `boolean` | yes | no | yes |
| `libraryLoading` | `boolean` | yes | no | yes |
| `libraryWidgets` | `Array<LibraryWidget>` | yes | no | yes |
| `widgets` | `Array<FormattedWidget>` | yes | no | yes |
| `windowId` | `string` | yes | no | yes |

### `<widget-toolbox-panel>`

Class `WidgetToolboxPanel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `editable` | `boolean` | yes | no | yes |
| `libraryLoading` | `boolean` | yes | no | yes |
| `libraryWidgets` | `Array<LibraryWidget>` | yes | no | yes |
| `onLibraryOpen` | `() => void` | no | no | no |
| `onSearch` | `(query: string) => void` | no | no | no |
| `onToolboxUpdate` | `(w: Array<FormattedWidget>) => void` | no | no | no |
| `onViewChange` | `(title: string) => void` | no | no | no |
| `onWidgetSelect` | `(w: FormattedWidget) => void` | no | no | no |
| `widgets` | `Array<FormattedWidget>` | yes | no | yes |

## Functions

```ts
addQualifyingColumnSections(rowSection: SectionMap, columnSections: SectionMap): SectionMap
buildColumnSectionsMap(gridItems: Array<GridItem>): SectionMap
buildRowSectionsMap(gridItems: Array<GridItem>, columnSections: SectionMap): SectionMap
convertAutoPositionedToPositioned(items: Array<GridItem>, targetItem: GridItem): Array<GridItem>
findConnectedItems(gridItems: Array<GridItem>, perpendicularSections: SectionMap, sourceItem: GridItem, connected: Array<connectedSection>, sectionWidth: number): { connected: Array<connectedSection>; sectionWidth: number }
findDirectSectionNeighbors(sourceItem: GridItem, rowSections: SectionMap, columnSections: SectionMap): { XNeighbors: Array<Section>; YNeighbors: Array<Section> }
findLeftNeighbors(node: GridItem, gridItems: Array<GridItem>): Array<GridItem>
findQualifiedNeighborSection(sourceItem: GridItem, rowSections: SectionMap, columnSections: SectionMap): { direction: "left" | "right" | "up" | "down"; section: Section; sectionId: string; type: "row" | "column" }
findRightNeighbors(node: GridItem, gridItems: Array<GridItem>): Array<GridItem>
findRowSectionNeighbors(sourceSection: Section, rowSections: SectionMap): Array<{ section: Section; sectionId: string; }>
findSectionForItem(item: GridItem, sectionMap: SectionMap): { 0: string; 1: Section; at: (index: number) => string | Section; concat: { (...items: Array<ConcatArray<string | Section>>): Array<string | Section>; (...items: Array<string | Section | ConcatArray<string | Section>>): Array<string | Section>; }; copyWithin: (target: number, start: number, end?: number) => [string, Section]; entries: () => ArrayIterator<[number, string | Section]>; every: { <S extends string | Section>(predicate: (value: string | Section, index: number, array: Array<string | Section>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any): boolean; }; fill: (value: string | Section, start?: number, end?: number) => [string, Section]; filter: { <S extends string | Section>(predicate: (value: string | Section, index: number, array: Array<string | Section>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any): Array<string | Section>; }; find: { <S extends string | Section>(predicate: (value: string | Section, index: number, obj: Array<string | Section>) => value is S, thisArg?: any): S; (predicate: (value: string | Section, index: number, obj: Array<string | Section>) => unknown, thisArg?: any): string | Section; }; findIndex: (predicate: (value: string | Section, index: number, obj: Array<string | Section>) => unknown, thisArg?: any) => number; flat: { <A, D extends number = 1>(this: A, depth?: D): Array<FlatArray<A, D>>; (depth: number): Array<string | Section>; }; flatMap: <U, This = undefined>(callback: (this: This, value: string | Section, index: number, array: Array<string | Section>) => U | ReadonlyArray<U>, thisArg?: This) => Array<U>; forEach: (callbackfn: (value: string | Section, index: number, array: Array<string | Section>) => void, thisArg?: any) => void; includes: (searchElement: string | Section, fromIndex?: number) => boolean; indexOf: (searchElement: string | Section, fromIndex?: number) => number; join: (separator?: string) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: string | Section, fromIndex?: number) => number; length: 2; map: <U>(callbackfn: (value: string | Section, index: number, array: Array<string | Section>) => U, thisArg?: any) => Array<U>; pop: () => string | Section; push: (...items: Array<string | Section>) => number; reduce: { (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section): string | Section; (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section, initialValue: string | Section): string | Section; <U>(callbackfn: (pre /* … truncated; see the package .d.ts */; reduceRight: { (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section): string | Section; (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section, initialValue: string | Section): string | Section; <U>(callbackfn: (pre /* … truncated; see the package .d.ts */; reverse: () => Array<string | Section>; shift: () => string | Section; slice: (start?: number, end?: number) => Array<string | Section>; some: (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any) => boolean; sort: (compareFn?: (a: string | Section, b: string | Section) => number) => [string, Section]; splice: { (start: number, deleteCount?: number): Array<string | Section>; (start: number, deleteCount: number, ...items: Array<string | Section>): Array<string | Section>; }; toLocaleString: { (): string; (locales: string | Array<string>, options?: NumberFormatOptions & DateTimeFormatOptions): string; }; toString: () => string; unshift: (...items: Array<string | Section>) => number; values: () => ArrayIterator<string | Section> }
getConnectedItemsInColumn(gridItems: Array<GridItem>, sourceItem: GridItem, includingSource: boolean): { connectedItems: Array<GridItem>; sectionHeight: number }
getConnectedRow(gridItems: Array<GridItem>, sourceItem: GridItem, columnSections: SectionMap): { connected: Array<connectedSection>; sectionWidth: number }
getGridArea(item: GridItem): string
getGridRows(items: Array<GridItem>): number
getSectionId(twoDimensional: boolean, items?: Array<GridItem>, connectedItems?: Array<{ item?: GridItem; section?: Section; sectionId?: string; type: string; }>): string
gridItemsEqual(a: Array<GridItem>, b: Array<GridItem>): boolean
initializeLayoutAPI(): void
isAutoPositioned(item: GridItem): boolean
overlapsY(item1: GridItem, item2: GridItem): boolean
redistributeToGroupSection(gridItems: Array<GridItem>, sourceItem: GridItem, rowSections: SectionMap, columnSections: SectionMap): Array<GridItem>
removeDuplicateSections(rowSections: SectionMap): SectionMap
removeFillFromSvg(svgString: any): string
rowSectionsWithExactRange(rowSections: SectionMap, sourceSection: Section): SectionMap
sameRowSection(sourceItem: GridItem, targetItem: GridItem, rowSections: SectionMap): boolean
sanitizeGridItems(items: Array<GridItem>): Array<GridItem>
sectionsWithinRange(sections: SectionMap, sourceItemRange: [object Object]): { XNeighbors: Array<Section>; YNeighbors: Array<Section> }
updateSections(gridItems: Array<GridItem>): { newColumnSections: SectionMap; newRowSections: SectionMap }
```

## Constants

| Name | Type |
|---|---|
| `areDirectColumnNeighbors` | `(item1: GridItem, item2: GridItem) => boolean` |
| `areDirectRowNeighbors` | `(item1: GridItem, item2: GridItem) => boolean` |
| `buildOverlappingXGroup` | `(itemsOverlappingY: Array<GridItem>, processedItemIds: Set<string>, rowSections: SectionMap) => Array<Array<Section>>` |
| `distributeEffectiveRowDelta` | `(effectiveRowDelta: number, overlappingXGroups: Array<Array<Section>>) => Array<Array<Section>>` |
| `distributeToNeighborSection` | `(gridItems: Array<GridItem>, sourceItem: GridItem, targetItem: GridItem, rowSections: SectionMap, columnSections: SectionMap) => Array<GridItem>` |
| `findItemsInRow` | `(gridItems: Array<GridItem>, row: number) => Array<GridItem>` |
| `GRID_COLUMNS` | `12` |
| `GRID_MIN_HEIGHT` | `"100px"` |
| `handleNegativeEffectiveRowDelta` | `(effectiveRowDelta: number, overlappingXGroups: Array<Array<Section>>, logger?: LoggerInterface) => boolean` |
| `onLayoutInsert` | `({ observerRef, dispatchEvent, elm, serviceRef }: { observerRef: { current: ResizeObserver; }; dispatchEvent: (_event: CustomEvent<any>) => void; elm: HTMLElement; serviceRef?: { current: ResizeObser…` |
| `onLayoutRemove` | `({ observerRef, serviceRef }: { observerRef: { current: ResizeObserver; }; serviceRef?: { current: ResizeObserverService; }; }) => ({ elm: _elm }: { elm: HTMLElement; }) => void` |
| `redistributeHeightInAdjacentColumns` | `(gridItems: Array<GridItem>, sourceItem: GridItem, targetSectionId: string, columnSectionsInRow: SectionMap, direction: "up" \| "down") => Array<GridItem>` |
| `redistributeHeightInSourceColumn` | `(gridItems: Array<GridItem>, sourceItem: GridItem, itemsInSourceColumn: Array<GridItem>, resizing?: boolean, heightDelta?: number) => Array<GridItem>` |
| `redistributeToNeighbor` | `(gridItems: Array<GridItem>, sourceItem: GridItem, targetSectionId: string, neighborSection: Section, direction: "left" \| "right" \| "up" \| "down") => Array<GridItem>` |
| `redistributeWidthInSourceRow` | `(gridItems: Array<GridItem>, sourceItem: GridItem, itemsInSourceRow: Section) => Array<GridItem>` |
| `reformatSvg` | `(text: any) => any` |
| `removeAndRedistribute` | `(gridItems: Array<GridItem>, sourceItem: GridItem, targetItem: GridItem, rowSections: SectionMap, columnSections: SectionMap, itemsInSourceRow: Section, itemsInSourceColumn: Array<GridItem>) => { new…` |
| `repositionItems` | `(gridItems: Array<GridItem>, predicate: (item: GridItem) => boolean, operation: (item: GridItem) => number) => Array<GridItem>` |
| `sortGridItems` | `(gridItems: Array<GridItem>) => Array<GridItem>` |

```ts
const layoutRegistry: {
  _initLogger: (instance: ILayoutRenderer) => void;
  _instances: Map<string, ILayoutRenderer>;
  _logger: LoggerInterface;
  _loggerService: LoggerService;
  addItem: (instanceId: string, item: NewItemInput) => boolean;
  addItemAt: (instanceId: string, item: NewItemInput, targetId: string, position: Position) => boolean;
  deleteItem: (instanceId: string, itemId: string) => boolean;
  get: (instanceId: string) => ILayoutRenderer;
  getItem: (instanceId: string, itemId: string) => GridItem;
  getItems: (instanceId: string) => Array<GridItem>;
  getRegisteredIds: () => Array<string>;
  has: (instanceId: string) => boolean;
  horizontallyResizeItem: (instanceId: string, itemId: string, delta: number, side: ResizeSide) => { success: boolean; changedIds: Array<string>; };
  moveItem: (instanceId: string, sourceId: string, targetId: string, dropSide: DropSide) => boolean;
  moveItemToNewRow: (instanceId: string, sourceId: string, insertAtRow: number) => boolean;
  register: (instanceId: string, instance: ILayoutRenderer) => void;
  resetItems: (instanceId: string, items: Array<GridItem>) => boolean;
  setConfigurableProperties: (instanceId: string, itemId: string, keys: Array<string>) => boolean;
  setItemLocked: (instanceId: string, itemId: string, locked: boolean) => void;
  setMoveEnabled: (instanceId: string, enabled: boolean) => void;
  setResizeEnabled: (instanceId: string, enabled: boolean) => void;
  setShowGridLines: (instanceId: string, enabled: boolean) => void;
  unregister: (instanceId: string) => void;
  verticallyResizeItem: (instanceId: string, itemId: string, delta: number) => { success: boolean; changedIds: Array<string>; };
}
```

## Types

```ts
type ActionButtonConfig = /* structural type; see the package .d.ts */
```

```ts
interface AddItemResult {
  error?: string;
  id: string;
  position: [object Object];
  success: boolean;
  warnings?: Array<string>;
}
```

```ts
interface AddToPositionResult {
  actualPosition: [object Object];
  changedIds: Array<string>;
  error?: string;
  id: string;
  position: "left" | "right" | "above" | "below";
  success: boolean;
  targetId: string;
  warnings?: Array<string>;
}
```

```ts
type connectedSection = {
  item?: GridItem;
  section?: Section;
  sectionId?: string;
  type: string;
}
```

```ts
interface DeleteItemResult {
  changedIds: Array<string>;
  error?: string;
  itemId: string;
  success: boolean;
  warnings?: Array<string>;
}
```

```ts
type DropSide = unknown
```

```ts
interface FormattedWidget {
  content: string;
  description?: string;
  properties: Record<string, unknown>;
  scope?: string;
}
```

```ts
interface GridItem {
  configurableProperties?: Array<string>;
  content: string;
  h: number;
  hasContainer?: boolean;
  id?: string;
  isFavorite?: boolean;
  isLocked?: boolean;
  minWidth?: string;
  properties?: Record<string, unknown>;
  sysId?: string;
  w: number;
  x?: number;
  y?: number;
}
```

```ts
interface GridStackOptions {
  animate?: boolean;
  cellHeight?: string | number;
  columnOpts?: [object Object];
  columns?: number;
  float?: boolean;
  margin?: string | number;
}
```

```ts
interface GridStackWidget {
  autoPosition?: boolean;
  content?: string;
  h?: number;
  id?: string;
  lazyLoad?: boolean;
  locked?: boolean;
  maxH?: number;
  maxW?: number;
  minH?: number;
  minW?: number;
  noMove?: boolean;
  noResize?: boolean;
  resizeToContentParent?: string;
  sizeToContent?: number | boolean;
  subGridOpts?: GridStackOptions;
  w?: number;
  x?: number;
  y?: number;
}
```

```ts
interface HistoryState {
  actionDescription: string;
  actionType: ActionType;
  affectedItemIds: Array<string>;
  gridItems: Array<GridItem>;
  id: string;
  preferences: UserPreferences;
  timestamp: number;
}
```

```ts
interface HorizontalGap {
  endCol: number;
  itemsAbove: Array<string>;
  itemsBelow: Array<string>;
  row: number;
  startCol: number;
  type: "top" | "bottom" | "between";
}
```

```ts
interface LayoutEngineOptions {
  columns?: number;
  logger?: LoggerInterface;
  maxRows?: number;
}
```

```ts
interface LibraryWidget {
  category: string;
  description: string;
  id: string;
  inputSchema: string;
  name: string;
  scope: string;
  sysId: string;
  tagName: string;
  type: string;
}
```

```ts
interface LoggerInterface {
  debug: (...args: Array<unknown>) => void;
  error: (...args: Array<unknown>) => void;
  fatal?: (...args: Array<unknown>) => void;
  info: (...args: Array<unknown>) => void;
  trace?: (...args: Array<unknown>) => void;
  warn: (...args: Array<unknown>) => void;
}
```

```ts
interface LoggerProviderInterface {
  getLogger: (name: string) => LoggerInterface;
}
```

```ts
interface ModalFooterAction {
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
}
```

```ts
interface MoveItemResult {
  changedIds: Array<string>;
  error?: string;
  sourceId: string;
  success: boolean;
  targetId?: string;
  warnings?: Array<string>;
}
```

```ts
interface MoveToRowResult {
  changedIds: Array<string>;
  error?: string;
  insertAtRow: number;
  sourceId: string;
  success: boolean;
  warnings?: Array<string>;
}
```

```ts
type NewItemInput = unknown
```

```ts
interface NotificationMessage {
  id: string;
  message: string;
  position?: [object Object];
  type: "info" | "error" | "warning" | "success";
}
```

```ts
interface OperationResult {
  error?: string;
  success: boolean;
  warnings?: Array<string>;
}
```

```ts
type PageSize = /* structural type; see the package .d.ts */
```

```ts
type Position = unknown
```

```ts
interface RemoveResult {
  changedIds: Array<string>;
  nodes: Array<GridItem>;
  removedItem: GridItem;
  success: boolean;
}
```

```ts
interface ResizeResult {
  changedIds: Array<string>;
  failedMessage?: string;
  nodes: Array<GridItem>;
  success: boolean;
}
```

```ts
interface Section {
  columnSectionInRow?: SectionMap;
  items: Array<GridItem>;
  totalHeight: number;
  totalWidth: number;
  x: number;
  y: number;
}
```

```ts
type SectionMap = {
  clear: () => void;
  delete: (key: string) => boolean;
  entries: () => MapIterator<[string, Section]>;
  forEach: (callbackfn: (value: Section, key: string, map: Map<string, Section>) => void, thisArg?: any) => void;
  get: (key: string) => Section;
  has: (key: string) => boolean;
  keys: () => MapIterator<string>;
  set: (key: string, value: Section) => SectionMap;
  size: number;
  values: () => MapIterator<Section>;
}
```

```ts
type WidgetActionMode = unknown
```

## Classes

```ts
class LayoutEngine {
  columns: number;
  getColumnItemsInParentRow(columnSection: [object Object], parentRowSection: [object Object], sameAsTarget: Set<string>): Set<string>;
  getColumnSectionById(itemId: string): { 0: string; 1: Section; at: (index: number) => string | Section; concat: { (...items: Array<ConcatArray<string | Section>>): Array<string | Section>; (...items: Array<string | Section | ConcatArray<string | Section>>): Array<string | Section>; }; copyWithin: (target: number, start: number, end?: number) => [string, Section]; entries: () => ArrayIterator<[number, string | Section]>; every: { <S extends string | Section>(predicate: (value: string | Section, index: number, array: Array<string | Section>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any): boolean; }; fill: (value: string | Section, start?: number, end?: number) => [string, Section]; filter: { <S extends string | Section>(predicate: (value: string | Section, index: number, array: Array<string | Section>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any): Array<string | Section>; }; find: { <S extends string | Section>(predicate: (value: string | Section, index: number, obj: Array<string | Section>) => value is S, thisArg?: any): S; (predicate: (value: string | Section, index: number, obj: Array<string | Section>) => unknown, thisArg?: any): string | Section; }; findIndex: (predicate: (value: string | Section, index: number, obj: Array<string | Section>) => unknown, thisArg?: any) => number; flat: { <A, D extends number = 1>(this: A, depth?: D): Array<FlatArray<A, D>>; (depth: number): Array<string | Section>; }; flatMap: <U, This = undefined>(callback: (this: This, value: string | Section, index: number, array: Array<string | Section>) => U | ReadonlyArray<U>, thisArg?: This) => Array<U>; forEach: (callbackfn: (value: string | Section, index: number, array: Array<string | Section>) => void, thisArg?: any) => void; includes: (searchElement: string | Section, fromIndex?: number) => boolean; indexOf: (searchElement: string | Section, fromIndex?: number) => number; join: (separator?: string) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: string | Section, fromIndex?: number) => number; length: 2; map: <U>(callbackfn: (value: string | Section, index: number, array: Array<string | Section>) => U, thisArg?: any) => Array<U>; pop: () => string | Section; push: (...items: Array<string | Section>) => number; reduce: { (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section): string | Section; (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section, initialValue: string | Section): string | Section; <U>(callbackfn: (pre /* … truncated; see the package .d.ts */; reduceRight: { (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section): string | Section; (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section, initialValue: string | Section): string | Section; <U>(callbackfn: (pre /* … truncated; see the package .d.ts */; reverse: () => Array<string | Section>; shift: () => string | Section; slice: (start?: number, end?: number) => Array<string | Section>; some: (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any) => boolean; sort: (compareFn?: (a: string | Section, b: string | Section) => number) => [string, Section]; splice: { (start: number, deleteCount?: number): Array<string | Section>; (start: number, deleteCount: number, ...items: Array<string | Section>): Array<string | Section>; }; toLocaleString: { (): string; (locales: string | Array<string>, options?: NumberFormatOptions & DateTimeFormatOptions): string; }; toString: () => string; unshift: (...items: Array<string | Section>) => number; values: () => ArrayIterator<string | Section> };
  getColumnSections(): SectionMap;
  getNode(id: string): GridItem;
  getParentRowSection(columnSection: [object Object], target: GridItem): { 0: string; 1: Section; at: (index: number) => string | Section; concat: { (...items: Array<ConcatArray<string | Section>>): Array<string | Section>; (...items: Array<string | Section | ConcatArray<string | Section>>): Array<string | Section>; }; copyWithin: (target: number, start: number, end?: number) => [string, Section]; entries: () => ArrayIterator<[number, string | Section]>; every: { <S extends string | Section>(predicate: (value: string | Section, index: number, array: Array<string | Section>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any): boolean; }; fill: (value: string | Section, start?: number, end?: number) => [string, Section]; filter: { <S extends string | Section>(predicate: (value: string | Section, index: number, array: Array<string | Section>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any): Array<string | Section>; }; find: { <S extends string | Section>(predicate: (value: string | Section, index: number, obj: Array<string | Section>) => value is S, thisArg?: any): S; (predicate: (value: string | Section, index: number, obj: Array<string | Section>) => unknown, thisArg?: any): string | Section; }; findIndex: (predicate: (value: string | Section, index: number, obj: Array<string | Section>) => unknown, thisArg?: any) => number; flat: { <A, D extends number = 1>(this: A, depth?: D): Array<FlatArray<A, D>>; (depth: number): Array<string | Section>; }; flatMap: <U, This = undefined>(callback: (this: This, value: string | Section, index: number, array: Array<string | Section>) => U | ReadonlyArray<U>, thisArg?: This) => Array<U>; forEach: (callbackfn: (value: string | Section, index: number, array: Array<string | Section>) => void, thisArg?: any) => void; includes: (searchElement: string | Section, fromIndex?: number) => boolean; indexOf: (searchElement: string | Section, fromIndex?: number) => number; join: (separator?: string) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: string | Section, fromIndex?: number) => number; length: 2; map: <U>(callbackfn: (value: string | Section, index: number, array: Array<string | Section>) => U, thisArg?: any) => Array<U>; pop: () => string | Section; push: (...items: Array<string | Section>) => number; reduce: { (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section): string | Section; (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section, initialValue: string | Section): string | Section; <U>(callbackfn: (pre /* … truncated; see the package .d.ts */; reduceRight: { (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section): string | Section; (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section, initialValue: string | Section): string | Section; <U>(callbackfn: (pre /* … truncated; see the package .d.ts */; reverse: () => Array<string | Section>; shift: () => string | Section; slice: (start?: number, end?: number) => Array<string | Section>; some: (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any) => boolean; sort: (compareFn?: (a: string | Section, b: string | Section) => number) => [string, Section]; splice: { (start: number, deleteCount?: number): Array<string | Section>; (start: number, deleteCount: number, ...items: Array<string | Section>): Array<string | Section>; }; toLocaleString: { (): string; (locales: string | Array<string>, options?: NumberFormatOptions & DateTimeFormatOptions): string; }; toString: () => string; unshift: (...items: Array<string | Section>) => number; values: () => ArrayIterator<string | Section> };
  getRowSectionById(itemId: string): { 0: string; 1: Section; at: (index: number) => string | Section; concat: { (...items: Array<ConcatArray<string | Section>>): Array<string | Section>; (...items: Array<string | Section | ConcatArray<string | Section>>): Array<string | Section>; }; copyWithin: (target: number, start: number, end?: number) => [string, Section]; entries: () => ArrayIterator<[number, string | Section]>; every: { <S extends string | Section>(predicate: (value: string | Section, index: number, array: Array<string | Section>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any): boolean; }; fill: (value: string | Section, start?: number, end?: number) => [string, Section]; filter: { <S extends string | Section>(predicate: (value: string | Section, index: number, array: Array<string | Section>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any): Array<string | Section>; }; find: { <S extends string | Section>(predicate: (value: string | Section, index: number, obj: Array<string | Section>) => value is S, thisArg?: any): S; (predicate: (value: string | Section, index: number, obj: Array<string | Section>) => unknown, thisArg?: any): string | Section; }; findIndex: (predicate: (value: string | Section, index: number, obj: Array<string | Section>) => unknown, thisArg?: any) => number; flat: { <A, D extends number = 1>(this: A, depth?: D): Array<FlatArray<A, D>>; (depth: number): Array<string | Section>; }; flatMap: <U, This = undefined>(callback: (this: This, value: string | Section, index: number, array: Array<string | Section>) => U | ReadonlyArray<U>, thisArg?: This) => Array<U>; forEach: (callbackfn: (value: string | Section, index: number, array: Array<string | Section>) => void, thisArg?: any) => void; includes: (searchElement: string | Section, fromIndex?: number) => boolean; indexOf: (searchElement: string | Section, fromIndex?: number) => number; join: (separator?: string) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: string | Section, fromIndex?: number) => number; length: 2; map: <U>(callbackfn: (value: string | Section, index: number, array: Array<string | Section>) => U, thisArg?: any) => Array<U>; pop: () => string | Section; push: (...items: Array<string | Section>) => number; reduce: { (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section): string | Section; (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section, initialValue: string | Section): string | Section; <U>(callbackfn: (pre /* … truncated; see the package .d.ts */; reduceRight: { (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section): string | Section; (callbackfn: (previousValue: string | Section, currentValue: string | Section, currentIndex: number, array: Array<string | Section>) => string | Section, initialValue: string | Section): string | Section; <U>(callbackfn: (pre /* … truncated; see the package .d.ts */; reverse: () => Array<string | Section>; shift: () => string | Section; slice: (start?: number, end?: number) => Array<string | Section>; some: (predicate: (value: string | Section, index: number, array: Array<string | Section>) => unknown, thisArg?: any) => boolean; sort: (compareFn?: (a: string | Section, b: string | Section) => number) => [string, Section]; splice: { (start: number, deleteCount?: number): Array<string | Section>; (start: number, deleteCount: number, ...items: Array<string | Section>): Array<string | Section>; }; toLocaleString: { (): string; (locales: string | Array<string>, options?: NumberFormatOptions & DateTimeFormatOptions): string; }; toString: () => string; unshift: (...items: Array<string | Section>) => number; values: () => ArrayIterator<string | Section> };
  getRowSections(): SectionMap;
  insertItemAtGap(sourceId: string, gapRow: number, startCol: number, endCol: number, gapType: "top" | "bottom" | "between"): MoveResult;
  insertItemIntoRow(gridItems: Array<GridItem>, sourceItem: GridItem, targetItem: GridItem, dropSide: DropSide): Array<GridItem>;
  insertNewItemIntoRow(gridItems: Array<GridItem>, newItem: Partial<GridItem> & { id: string; content: string; }, targetItemId: string, dropSide: "left" | "right" | "top" | "bottom"): Array<GridItem>;
  invalidateSections(): void;
  logger: LoggerInterface;
  mode: "custom" | "gridstack";
  moveItem(sourceId: string, targetId: string, dropSide: DropSide, insertAtRow?: number): MoveResult;
  removeItem(itemId: string): RemoveResult;
  resizeNodeHorizontalStateless(initialNodes: Array<GridItem>, target: GridItem, delta: number, side: "left" | "right"): ResizeResult;
  resizeNodeVerticalStateless(initialNodes: Array<GridItem>, target: GridItem, rowDelta: number): ResizeResult;
  setNodes(nodes: Array<GridItem>): LayoutEngine;
}
```

```ts
class LayoutRegistry {
  addItem(instanceId: string, item: NewItemInput): boolean;
  addItemAt(instanceId: string, item: NewItemInput, targetId: string, position: Position): boolean;
  deleteItem(instanceId: string, itemId: string): boolean;
  get(instanceId: string): ILayoutRenderer;
  getItem(instanceId: string, itemId: string): GridItem;
  getItems(instanceId: string): Array<GridItem>;
  getRegisteredIds(): Array<string>;
  has(instanceId: string): boolean;
  horizontallyResizeItem(instanceId: string, itemId: string, delta: number, side: ResizeSide): { changedIds: Array<string>; success: boolean };
  moveItem(instanceId: string, sourceId: string, targetId: string, dropSide: DropSide): boolean;
  moveItemToNewRow(instanceId: string, sourceId: string, insertAtRow: number): boolean;
  register(instanceId: string, instance: ILayoutRenderer): void;
  resetItems(instanceId: string, items: Array<GridItem>): boolean;
  setConfigurableProperties(instanceId: string, itemId: string, keys: Array<string>): boolean;
  setItemLocked(instanceId: string, itemId: string, locked: boolean): void;
  setMoveEnabled(instanceId: string, enabled: boolean): void;
  setResizeEnabled(instanceId: string, enabled: boolean): void;
  setShowGridLines(instanceId: string, enabled: boolean): void;
  unregister(instanceId: string): void;
  verticallyResizeItem(instanceId: string, itemId: string, delta: number): { changedIds: Array<string>; success: boolean };
}
```


