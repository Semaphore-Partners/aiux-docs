# `@servicenow/aiux-components-list`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-list`

Declares 36 elements, 4 functions, 45 types, 3 constants, 1 class.

## Elements

### `<aiux-gallery-list>`

Class `AIUXGalleryListLit`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `actionConfig` | `ActionConfig \| undefined` | yes | no | no |
| `activeRowKey` | `string \| undefined` | yes | no | no |
| `columnDefinitions` | `Array<ColumnDefinition>` | yes | no | yes |
| `galleryConfig` | `GalleryConfig` | yes | no | yes |
| `groupConfig` | `GroupConfig \| undefined` | yes | no | no |
| `listConfig` | `ListConfig` | yes | no | yes |
| `rowDefinitions` | `Array<AnyRow>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-gallery-list:card-deselected` | — |
| `aiux-gallery-list:card-selected` | — |
| `aiux-gallery-list:cell-link-clicked` | — |
| `aiux-gallery-list:context-action-clicked` | — |
| `aiux-gallery-list:group-toggle` | — |

### `<aiux-hierarchical-panel>`

Class `AIUXHierarchicalPanel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `props` | `Record<string, unknown>` | no | no | yes |

### `<aiux-list>`

Class `AIUXList`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `actionConfig` | `ActionConfig` | yes | no | yes |
| `columnDefinitions` | `Array<ColumnDefinition>` | yes | no | yes |
| `columnFilterValues` | `Record<string, string> \| undefined` | yes | no | no |
| `groupConfig` | `GroupConfig \| undefined` | yes | no | no |
| `listConfig` | `ListConfig` | yes | no | yes |
| `overlayDefinition` | `OverlayDefinition \| null` | no | no | yes |
| `popoverDefinition` | `PopoverDefinition \| null` | no | no | yes |
| `rowDefinitions` | `Array<AnyRow>` | yes | no | yes |
| `selectionConfig` | `SelectionConfig` | yes | no | yes |
| `shadeAlternateRows` | `ShadeAlternateRows` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list:cell-double-clicked` | `{ rowKey: string; columnKey: string; groupKey: string \| undefined; typeOfAction: string; targetElement: HTMLElement; additionalRowKeys: Array<string> \| undefin…` |
| `aiux-list:cell-edit-submitted` | — |
| `GROUP_SHOW_ALL` | — |
| `GROUP_TOGGLE` | — |

### `<aiux-list-aggregate-picker-connected>`

Class `AIUXListAggregatePickerConnected`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `column` | `ColumnDefinition \| null` | no | no | yes |
| `open` | `boolean` | yes | no | yes |
| `selected` | `ReadonlyArray<AggregateFunction>` | no | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list-aggregate-picker:apply` | — |
| `aiux-list-aggregate-picker:cancel` | — |
| `LIST_CONTROLLER#AGGREGATE_PICKER_TOGGLE` | — |

### `<aiux-list-cell-editor-boolean>`

Class `AIUXListCellEditorBoolean`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:submitted` | `{ value: boolean; displayValue: string; }` |
| `aiux-list-cell-editor:value-changed` | `{ value: boolean; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-choice>`

Class `AIUXListCellEditorChoice`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:cascade-refresh` | `{ parentColumnKey: string; newParentValue: string; childColumnKey: string; }` |
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-datetime>`

Class `AIUXListCellEditorDatetime`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-duration>`

Class `AIUXListCellEditorDuration`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:submitted` | `{ value: string; displayValue: string; }` |
| `aiux-list-cell-editor:value-changed` | `{ errorMessage?: string \| undefined; value: string; displayValue: string; isDirty: boolean; validity: string; }` |

### `<aiux-list-cell-editor-encrypted>`

Class `AIUXListCellEditorEncrypted`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:submitted` | `{ value: string; displayValue: string; }` |
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-float>`

Class `AIUXListCellEditorFloat`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:submitted` | `{ value: string; displayValue: string; }` |
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-glide-list-connected>`

Class `AIUXListCellEditorGlideListConnected`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-html>`

Class `AIUXListCellEditorHtml`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-integer>`

Class `AIUXListCellEditorInteger`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:submitted` | `{ value: string; displayValue: string; }` |
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; validity: string; errorMessage: string \| undefined; }` |

### `<aiux-list-cell-editor-password>`

Class `AIUXListCellEditorPassword`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:submitted` | `{ value: string; displayValue: string; }` |
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-percent-complete>`

Class `AIUXListCellEditorPercentComplete`.

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:submitted` | — |
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; validity: string; errorMessage: string; }` |

### `<aiux-list-cell-editor-reference-connected>`

Class `AIUXListCellEditorReferenceConnected`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-string>`

Class `AIUXListCellEditorString`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |
| `journalMode` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:submitted` | `{ value: string; displayValue: string; }` |
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; }` |

### `<aiux-list-cell-editor-table-name>`

Class `AIUXListCellEditorTableName`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |
| `serviceConfig` | `TableNameGqlServiceConfig \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor:submitted` | `{ value: string; displayValue: string; }` |
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; validity: string; errorMessage: string \| undefined; }` |

### `<aiux-list-cell-editor-tags-connected>`

Class `AIUXListCellEditorTagsConnected`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |
| `hostList` | `Element \| undefined` | no | no | no |
| `serviceConfig` | `TagGqlServiceConfig \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `aiux-list-cell-editor-tags-connected:view-records` | — |
| `aiux-list-cell-editor:submitted` | `{ value: string; displayValue: string; close: true; }` |
| `aiux-list-cell-editor:value-changed` | `{ value: string; displayValue: string; isDirty: boolean; tagOps: TagEditorOps; }` |

### `<aiux-list-choice-menu>`

Class `AIUXListChoiceMenu`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `choices` | `Array<{ key: string; label: string; }>` | no | no | yes |
| `columnKey` | `string` | yes | no | yes |
| `selectedValue` | `string` | yes | no | yes |
| `width` | `number` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list-choice-menu:close` | — |
| `aiux-list:choice-selected` | `{ columnKey: string; choiceLabel: string; }` |

### `<aiux-list-connected>`

Class `AIUXListConnected`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `columns` | `string` | yes | no | yes |
| `customActions` | `CustomActionConfiguration \| undefined` | yes | no | yes |
| `data` | `GqlListResponse \| null` | no | no | yes |
| `enableHighlightedValues` | `boolean` | yes | no | yes |
| `exposeActionsToChat` | `boolean` | yes | no | yes |
| `filterOptions` | `ConditionBuilderFilterOptions` | yes | no | yes |
| `fixedQuery` | `string` | yes | no | yes |
| `groupSort` | `string` | yes | no | yes |
| `layoutConfig` | `LayoutConfig \| undefined` | yes | no | no |
| `layouts` | `LayoutType \| Array<LayoutType> \| "all" \| ["all"] \| undefined` | yes | no | no |
| `listOptions` | `ListOptions` | no | no | yes |
| `notifications` | `NotificationsConfig` | no | no | no |
| `pageSize` | `number` | yes | no | yes |
| `parentRecordSysId` | `string \| undefined` | no | no | no |
| `parentTable` | `string \| undefined` | no | no | no |
| `popoverDefinition` | `PopoverDefinition \| null` | no | no | yes |
| `preferenceKey` | `string` | yes | no | yes |
| `query` | `string` | yes | no | yes |
| `relatedListName` | `string \| undefined` | yes | no | no |
| `showLinks` | `boolean` | yes | no | yes |
| `table` | `string` | yes | no | yes |
| `view` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list-connected:reference-link-clicked` | `{ title: string \| undefined; listTable: string \| undefined; listSysId: any; referenceTable: any; referenceSysId: any; isPrimaryClick: boolean; metadata: any; }` |
| `aiux-list-connected:save-column-width` | — |
| `aiux-list-connected:selection-changed` | — |
| `LIST_CONTROLLER#ACTION_NODE_CLICKED` | `{ action: { id: string \| undefined; }; }` |
| `LIST_CONTROLLER#AGGREGATE_PICKER_APPLY` | — |
| `LIST_CONTROLLER#AGGREGATE_PICKER_CANCEL` | — |
| `LIST_CONTROLLER#APPLY_COLUMN_FILTERS` | `{ columnFilters: Record<string, string>; }` |
| `LIST_CONTROLLER#CHOICE_LIST_DROPDOWN_OPENED` | — |
| `LIST_CONTROLLER#CLEAR_ALL_COLUMN_AGGREGATES` | — |
| `LIST_CONTROLLER#CLOSE_COLUMN_PICKER` | — |
| `LIST_CONTROLLER#COLLAPSE_ALL_GROUPS` | — |
| `LIST_CONTROLLER#EXPAND_ALL_GROUPS` | — |
| `LIST_CONTROLLER#OPEN_COLUMN_PICKER` | — |
| `LIST_CONTROLLER#REFRESH_ACTIVE_LAYOUT` | — |
| `LIST_CONTROLLER#REORDER_COLUMNS` | `{ columnOrder: Array<string>; }` |
| `LIST_CONTROLLER#RESET_ALL` | — |
| `LIST_CONTROLLER#RESET_COLUMNS` | — |
| `LIST_CONTROLLER#RESET_WIDTHS` | — |
| `LIST_CONTROLLER#SAVE_COLUMN_WIDTH` | — |
| `LIST_CONTROLLER#SAVE_COLUMNS` | `{ columns: Array<string>; }` |
| `LIST_CONTROLLER#SELECTION_CHANGED` | — |
| `LIST_CONTROLLER#SET_ACTIVE_LAYOUT` | `{ layout: "kanban"; }` |
| `LIST_CONTROLLER#SET_GROUP_SORT` | `{ groupSort: string; }` |
| `LIST_CONTROLLER#SET_PAGE` | `{ page: number; }` |
| `LIST_CONTROLLER#SET_PAGE_SIZE` | `{ pageSize: number; }` |
| `LIST_CONTROLLER#SET_QUERY` | `{ query: string; }` |
| `LIST_CONTROLLER#SORT_BY_COLUMN` | `{ columnKey: string; }` |
| `LIST_CONTROLLER#SWITCH_LAYOUT` | `{ layout: LayoutType; }` |
| `LIST_CONTROLLER#TOGGLE_GROUP` | `{ groupKey: string; isExpanding: boolean; }` |
| `LIST_CONTROLLER#ZING_SEARCH` | `{ query: string; }` |
| `list-controller:cell-edit-requested` | `CellEditRequestedDetail` |

### `<aiux-list-context-menu>`

Class `AIUXListContextMenu`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `context` | `ActionContext \| null` | no | no | yes |
| `menuItems` | `Array<VisibleAction>` | no | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list-context-menu:close` | — |
| `aiux-list:context-action-clicked` | — |

### `<aiux-list-page>`

Class `AIUXRecordListPage`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `filterOptions` | `ConditionBuilderFilterOptions` | yes | no | yes |
| `fixedQuery` | `string` | yes | no | yes |
| `groupSort` | `string` | yes | no | yes |
| `layoutConfig` | `LayoutConfig \| undefined` | no | no | no |
| `layouts` | `LayoutType \| Array<LayoutType> \| "all" \| undefined` | no | no | no |
| `listOptions` | `ListOptions \| undefined` | no | no | no |
| `pageSize` | `number` | yes | no | yes |
| `query` | `string` | yes | no | yes |
| `table` | `string` | yes | no | yes |
| `view` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `load-complete` | — |
| `load-error` | — |
| `load-start` | — |

### `<aiux-list-popover>`

Class `AIUXListPopover`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `definition` | `PopoverDefinition \| null` | no | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list-popover:closed` | — |
| `aiux-list:cell-edit-apply` | `{ tagOps?: TagEditorOps \| undefined; multiFieldValues: Array<{ column: string; value: string; displayValue: string; }> \| undefined; close?: true \| undefined; v…` |
| `aiux-list:cell-edit-cancel` | — |
| `aiux-list:cell-edit-retry` | — |

### `<aiux-list-record-preview>`

Class `AIUXListRecordPreview`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `currentView` | `string` | yes | no | yes |
| `displayValue` | `string` | yes | no | yes |
| `sysId` | `string` | yes | no | yes |
| `tableName` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list-connected:reference-link-clicked` | `{ referenceTable: string; referenceSysId: string; isPrimaryClick: true; }` |
| `aiux-list-record-preview:close` | — |

### `<aiux-list-reference-connected>`

Class `AIUXListReferenceConnected`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `chars` | `string` | yes | no | yes |
| `encodedRecord` | `string` | yes | no | yes |
| `field` | `string` | yes | no | yes |
| `fixedQuery` | `string` | yes | no | yes |
| `ignoreRefQualifier` | `boolean` | yes | no | yes |
| `listEditRefQualTag` | `string` | yes | no | yes |
| `pageSize` | `number` | yes | no | yes |
| `query` | `string` | yes | no | yes |
| `referenceKey` | `string` | yes | no | yes |
| `searchOperator` | `string` | yes | no | yes |
| `serializedChanges` | `string` | yes | no | yes |
| `skipRecent` | `boolean` | yes | no | yes |
| `sortBy` | `string` | yes | no | yes |
| `sortDescending` | `boolean` | yes | no | yes |
| `sysId` | `string` | yes | no | yes |
| `sysparmAdditionalQual` | `string` | yes | no | yes |
| `sysparmExactMatch` | `boolean` | yes | no | yes |
| `sysparmRefOverride` | `string` | yes | no | yes |
| `table` | `string` | yes | no | yes |

### `<aiux-list-row-menu>`

Class `AIUXListRowMenu`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `context` | `ActionContext \| null` | no | no | yes |
| `menuItems` | `Array<VisibleAction>` | no | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list-row-menu:close` | — |
| `aiux-list:context-action-clicked` | — |

### `<aiux-list-tag-details-dialog>`

Class `AIUXListTagDetailsDialog`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cellEditContext` | `CellEditorContext \| undefined` | no | no | no |
| `open` | `boolean` | yes | no | yes |
| `serviceConfig` | `TagGqlServiceConfig \| undefined` | no | no | no |
| `tagId` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-list-tag-details-dialog:close` | — |
| `aiux-list-tag-details-dialog:save` | `{ tagId: string; name: unknown; viewableBy: unknown; }` |
| `aiux-list-tag-details-dialog:view-records` | `{ tagId: string; name: string; }` |

### `<aiux-pagination>`

Class `AIUXPagination`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `hasMore` | `boolean` | yes | no | yes |
| `hideGoToFirst` | `boolean` | yes | no | yes |
| `hideGoToLast` | `boolean` | yes | no | yes |
| `hideGoToNext` | `boolean` | yes | no | yes |
| `hideGoToPrevious` | `boolean` | yes | no | yes |
| `hideInlinePadding` | `boolean` | yes | no | yes |
| `hidePageNumbers` | `boolean` | yes | no | yes |
| `hidePageSizeControl` | `boolean` | yes | no | yes |
| `hideRange` | `boolean` | yes | no | yes |
| `pageControlType` | `"input" \| "buttons"` | yes | no | yes |
| `pageSizeLabel` | `string \| undefined` | yes | no | no |
| `pageSizes` | `Array<number>` | yes | no | yes |
| `pagesOverride` | `number \| undefined` | yes | no | no |
| `rangeLabel` | `string \| undefined` | yes | no | no |
| `rowsPerGroup` | `number` | yes | no | yes |
| `selectedPage` | `number` | yes | no | yes |
| `selectedPageSize` | `number` | yes | no | yes |
| `total` | `number` | yes | no | yes |
| `visiblePages` | `number` | yes | no | yes |

| Event | `detail` |
|---|---|
| `{PaginationEvent<'AIUX_PAGINATION#PAGE_CHANGED'>}` | `AIUX_PAGINATION#PAGE_CHANGED` |
| `{PaginationEvent<'AIUX_PAGINATION#PAGE_SIZE_CHANGED'>}` | `AIUX_PAGINATION#PAGE_SIZE_CHANGED` |
| `AIUX_PAGINATION#PAGE_CHANGED` | `{ value: number; }` |
| `AIUX_PAGINATION#PAGE_SIZE_CHANGED` | `{ value: number; }` |

### `<aiux-record-form-panel>`

Class `AIUXRecordFormPanel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `onCancel` | `(() => void) \| undefined` | no | no | no |
| `onSaveFailed` | `((error: string) => void) \| undefined` | no | no | no |
| `onSaveSuccess` | `(() => void) \| undefined` | no | no | no |
| `sysId` | `string` | yes | no | yes |
| `table` | `string` | yes | no | yes |
| `title` | `string` | yes | no | yes |
| `view` | `string` | yes | no | yes |

### `<aiux-record-list-header>`

Class `AIUXRecordListHeader`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `actionNodes` | `Array<Node>` | yes | no | yes |
| `activityPanelOpen` | `boolean` | yes | no | yes |
| `areColumnsPersonalized` | `boolean` | yes | no | yes |
| `conditionBuilderOpen` | `boolean` | yes | no | yes |
| `count` | `number` | yes | no | yes |
| `currencyToggle` | `{ mode: string; } \| null` | no | no | yes |
| `enableGrouping` | `boolean` | yes | no | yes |
| `enableSorting` | `boolean` | yes | no | yes |
| `enableTitleWrap` | `boolean` | yes | no | yes |
| `groupSortConfig` | `GroupSortConfig` | yes | no | yes |
| `headerAlertConfig` | `HeaderAlertConfig \| null` | yes | no | yes |
| `headerSize` | `HeaderSize` | yes | no | yes |
| `heading` | `string` | yes | no | yes |
| `layoutOptionsConfig` | `LayoutOptionsConfig` | yes | no | yes |
| `listId` | `string` | yes | no | yes |
| `loading` | `boolean` | yes | no | yes |
| `query` | `string` | yes | no | yes |
| `readableFixedQuery` | `string` | yes | no | yes |
| `showActionBar` | `boolean` | yes | no | yes |
| `showActivityPanelButton` | `boolean` | yes | no | yes |
| `showAiFilterAssist` | `boolean` | yes | no | yes |
| `showBackButton` | `boolean` | yes | no | yes |
| `showConditionBuilderButton` | `boolean` | yes | no | yes |
| `showCount` | `boolean` | yes | no | yes |
| `showEditColumnsButton` | `boolean` | yes | no | yes |
| `showFilterOverview` | `boolean` | yes | no | yes |
| `showHeading` | `boolean` | yes | no | yes |
| `showInlinePadding` | `boolean` | yes | no | yes |
| `showLoadFilter` | `boolean` | yes | no | yes |
| `showPlusSign` | `boolean` | yes | no | yes |
| `showRefreshButton` | `boolean` | yes | no | yes |
| `showSubtitle` | `boolean` | yes | no | yes |
| `showToggle` | `boolean` | yes | no | yes |
| `showZingSearch` | `boolean` | yes | no | yes |
| `subtitle` | `string` | yes | no | yes |
| `table` | `string` | yes | no | yes |
| `toggleNote` | `string` | yes | no | yes |
| `toggleOn` | `boolean` | yes | no | yes |
| `updatesCount` | `number` | yes | no | yes |
| `zingSearchQuery` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `AIUX_RECORD_LIST_HEADER#ACTIONBAR_DROPDOWN_OPENED` | `{ id: string; }` |
| `AIUX_RECORD_LIST_HEADER#ACTIVITY_PANEL_BUTTON_CLICKED` | `{ open: boolean; keyboardActivated: boolean; }` |
| `AIUX_RECORD_LIST_HEADER#BACK_BUTTON_CLICKED` | — |
| `AIUX_RECORD_LIST_HEADER#CONDITION_BUILDER_BUTTON_CLICKED` | `{ open: boolean; }` |
| `AIUX_RECORD_LIST_HEADER#CURRENCY_MODE_SELECTED` | `{ mode: any; }` |
| `AIUX_RECORD_LIST_HEADER#EDIT_COLUMNS_BUTTON_CLICKED` | — |
| `AIUX_RECORD_LIST_HEADER#ENCODED_QUERY_UPDATED` | `{ encodedQuery: string; }` |
| `AIUX_RECORD_LIST_HEADER#GROUP_SORT_UPDATED` | `{ id: any; }` |
| `AIUX_RECORD_LIST_HEADER#HEADER_ALERT_ACTION_CLICKED` | — |
| `AIUX_RECORD_LIST_HEADER#HEADER_TOGGLE_SET` | `{ toggleOn: boolean; }` |
| `AIUX_RECORD_LIST_HEADER#LIST_LAYOUT_ITEM_SET` | `{ layoutId: any; }` |
| `AIUX_RECORD_LIST_HEADER#REFRESH_BUTTON_CLICKED` | — |
| `AIUX_RECORD_LIST_HEADER#ZING_SEARCH_INPUT` | `{ query: string; }` |
| `AIUX_RECORD_LIST_HEADER#ZING_SEARCH_SUBMIT` | `{ query: string; }` |

### `<aiux-timeline>`

Class `AiuxTimeline`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `columnDefinitions` | `Array<ColumnDefinition>` | yes | no | yes |
| `listProps` | `Record<string, unknown>` | yes | no | yes |
| `rowDefinitions` | `Array<StandardRow>` | yes | no | yes |
| `timelineConfig` | `TimelineConfig` | yes | no | yes |

### `<aiux-workflow-cell>`

Class `AIUXWorkflowCell`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `context` | `CustomCellContext \| undefined` | no | no | no |
| `data` | `Record<string, unknown> \| undefined` | no | no | no |

### `<column-picker-dialog>`

Class `ColumnPickerDialog`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `columnLabels` | `Record<string, string>` | yes | no | yes |
| `error` | `string` | yes | no | yes |
| `hasAggregates` | `boolean` | yes | no | yes |
| `hasPersonalizedColumns` | `boolean` | yes | no | yes |
| `hasPersonalizedWidths` | `boolean` | yes | no | yes |
| `open` | `boolean` | yes | no | yes |
| `preferenceKey` | `string` | yes | no | yes |
| `saving` | `boolean` | yes | no | yes |
| `selectedColumns` | `Array<string>` | yes | no | yes |
| `showExtendedFields` | `boolean` | yes | no | yes |
| `table` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `column-picker-close` | — |
| `column-picker-save` | `{ columns: Array<string>; }` |
| `column-picker:clear-aggregates` | — |
| `column-picker:reset-all` | — |
| `column-picker:reset-columns` | — |
| `column-picker:reset-widths` | — |

### `<kanban-config-panel>`

Class `KanbanConfigPanel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `cardLimit` | `number` | yes | no | yes |
| `fields` | `Array<KanbanFieldDescriptor>` | yes | no | yes |
| `fieldSelection` | `KanbanFieldSelection \| null` | no | no | yes |
| `hiddenLaneIds` | `Set<string>` | no | no | yes |
| `hiddenSwimlaneIds` | `Set<string>` | no | no | yes |
| `lanes` | `Array<KanbanLane>` | yes | no | yes |
| `loading` | `boolean` | yes | no | yes |
| `swimlanes` | `Array<KanbanSwimlane>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `kanban-config-apply` | — |
| `kanban-config-close` | — |

### `<kanban-field-modal>`

Class `KanbanFieldModal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `fields` | `Array<KanbanFieldDescriptor>` | yes | no | yes |
| `loading` | `boolean` | yes | no | yes |
| `open` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `kanban-field-cancel` | — |
| `kanban-field-confirm` | `{ laneField: string; swimlaneField: string \| undefined; }` |

## Functions

```ts
getPreferenceKeyForTable(table: string): PreferenceKeyConfig
getRegisteredTables(): Array<string>
hasPreferenceKey(table: string): boolean
registerPreferenceKey(table: string, config: PreferenceKeyConfig): void
```

## Constants

```ts
const listContext: {
  get: () => ListContextValue | null;
  set: (value: ListContextValue | null) => void;
}
```

```ts
const RecordListContext: {
  _name: string;
  _registerConsumer: (host: HTMLElement) => () => void;
  _scoped: true;
  _subscribeCollector: (callback: (values: Array<RecordListContextValue>) => void) => () => void;
  collect: () => Array<RecordListContextValue>;
  get: (host: HTMLElement) => RecordListContextValue;
  getById: (id: string) => RecordListContextValue;
  provide: (host: HTMLElement, value: RecordListContextValue, id?: string | undefined) => void;
  unprovide: (host: HTMLElement) => void;
}
```

```ts
const TimelineEvents: {
  TASK_BAR_CLICKED: "aiux-timeline:task-bar-clicked";
}
```

## Types

```ts
interface ActionConfig {
  actionDefinitions?: Record<string, ActionDefinition>;
  cellMenuActions?: MenuActionsConfig;
  columnHeaderActions?: ColumnHeaderActionsConfig;
  groupActions?: GroupActionsConfig;
  rowActions?: RowActionsConfig;
}
```

```ts
type AggregateFunction = unknown
```

```ts
type AIIndicatorData = unknown
```

```ts
interface AIIndicatorState {
  aiIndicatorData: AIIndicatorData;
  aiIndicatorLoading: boolean;
}
```

```ts
interface AIRecordActivity {
  aiModifiedFields: Array<string>;
  isAiCreatedRow: boolean;
  isAiModifiedRow: boolean;
}
```

```ts
type AnyRow = {
  key: string;
  type?: "aggregate" | "grouped" | "hierarchical" | "insertRow" | "customRow" | undefined;
}
```

```ts
interface CellEditRequestedDetail {
  additionalRowKeys?: Array<string>;
  columnKey: string;
  groupKey?: string;
  rowKey: string;
  targetElement?: HTMLElement;
  typeOfAction: string;
}
```

```ts
interface ColumnDefinition {
  alignment?: "center" | "default" | "inverse" | undefined;
  cellEditingDisabled?: boolean | undefined;
  choices?: Array<{ key: string; label: string; }>;
  clickable?: boolean | undefined;
  columnFilterDisabled?: boolean | undefined;
  config?: ColumnTypeConfig | undefined;
  headerCellAlignment?: "center" | "default" | "inverse" | undefined;
  headerIcon?: HeaderIconConfig;
  highlightedValueMap?: Record<string, HighlightedValueConfig>;
  key: string;
  label: string;
  meta?: [object Object];
  multiline?: boolean | undefined;
  numericFieldFormat?: boolean | undefined;
  selectedAggregates?: ReadonlyArray<"sum" | "avg" | "min" | "max">;
  showLink?: boolean | undefined;
  type: string;
  width?: string;
}
```

```ts
type ConditionBuilderFilterOptions = {
  conditionCountMode?: "none" | "manual" | "auto" | undefined;
  disableDotwalking?: boolean | undefined;
  enableOptionalFeatures?: boolean | undefined;
  fieldOperatorRelationship?: CustomFieldOperatorRelationship;
  filterOverview?: [object Object];
  groupBy?: [object Object];
  includeExcludedOperators?: boolean | undefined;
  includeExtendedOperators?: boolean | undefined;
  mode?: ConditionBuilderModes | undefined;
  popoverContainer?: HTMLElement;
  readOnly?: boolean | undefined;
  showAddConditionSet?: boolean | undefined;
  showFiltersOnLoad?: boolean | undefined;
  showGroupBy?: boolean | undefined;
  showLabelsToggle?: boolean | undefined;
  showReferenceLookup?: boolean | undefined;
  showRelatedListConditions?: boolean | undefined;
  showSavedFilters?: boolean | undefined;
  showSortBy?: boolean | undefined;
  showTagLookup?: boolean | undefined;
  showUndoRedo?: boolean | undefined;
  simpleFilter?: [object Object];
  useVariableRow?: boolean | undefined;
  variablesSource?: VariablesSource;
}
```

```ts
interface DataLoadParams {
  apiBaseUrl?: string;
  columns?: string;
  fixedQuery?: string;
  groupSort?: string;
  includeMetadataActions?: boolean | undefined;
  includeUIActions?: boolean | undefined;
  isEmbeddedList?: boolean | undefined;
  limit?: number;
  offset?: number;
  preferenceKey?: string;
  query?: string;
  runHighlightedValuesQuery?: boolean | undefined;
  table: string;
  view?: string;
}
```

```ts
interface GalleryConfig {
  fields?: GalleryFields;
  options?: GalleryOptions;
}
```

```ts
interface GalleryField {
  column: string;
  options?: GalleryFieldSlotOptions;
}
```

```ts
interface GalleryFields {
  bodyText?: GalleryField;
  caption?: GalleryField;
  footer?: GalleryField;
  heading?: GalleryField;
  media?: GalleryField;
  metadata?: GalleryField;
  supplementaryFields?: Array<GalleryField>;
  tagline?: GalleryField;
}
```

```ts
interface GalleryFieldSlotOptions {
  aspectRatio?: string;
  fit?: "cover" | "contain" | undefined;
  fullWidth?: boolean | undefined;
  position?: "start" | "end" | "top" | "bottom" | undefined;
  textAlign?: "start" | "end" | "center" | undefined;
}
```

```ts
interface GalleryOptions {
  cardSize?: string;
  cardType?: "default" | "hero" | "thumbnail" | undefined;
  compact?: boolean | undefined;
  fullWidth?: boolean | undefined;
  showLabel?: boolean | undefined;
}
```

```ts
interface GroupSortConfig {
  items: Array<GroupSortOption>;
  selected: string;
}
```

```ts
type HeaderSize = unknown
```

```ts
interface KanbanFieldDescriptor {
  label: string;
  name: string;
  type: string;
}
```

```ts
interface KanbanLane {
  id: string;
  title: string;
}
```

```ts
interface KanbanSwimlane {
  collapsed?: boolean | undefined;
  id: string;
  title: string;
}
```

```ts
interface LayoutConfig {
  gallery?: GalleryConfig;
  kanban?: KanbanConfig;
  list?: Record<string, never>;
}
```

```ts
interface LayoutOptionsConfig {
  items: Array<LayoutOption>;
  selected: string;
}
```

```ts
type LayoutType = unknown
```

```ts
interface ListConfig {
  cellEditingEnabled?: boolean | undefined;
  cellEditingManaged?: boolean | undefined;
  clickableTextEnabled?: boolean | undefined;
  columnResizeMaxWidth?: number;
  columnResizeMinWidth?: number;
  columnResizingEnabled?: boolean | undefined;
  enableColumnFiltering?: boolean | undefined;
  enableColumnReordering?: boolean | undefined;
  expandGroups?: boolean | undefined;
  locale?: string;
  maxCharacters?: number;
  timeZone?: string;
  wrapCellContent?: boolean | undefined;
  wrapLineCount?: number;
}
```

```ts
interface ListOptions {
  coreUIPage?: boolean | undefined;
  disableNlq?: boolean | undefined;
  enableColumnCalculation?: boolean | undefined;
  enableColumnFiltering?: boolean | undefined;
  enableColumnReordering?: boolean | undefined;
  enableHierarchicalLists?: boolean | undefined;
  expandGroups?: boolean | undefined;
  headerSize?: HeaderSize | undefined;
  heading?: string;
  hierarchicalLists?: boolean | undefined;
  isEmbeddedList?: boolean | undefined;
  listEditInsertRow?: boolean | undefined;
  listEditRefQualTag?: string;
  listEditType?: string;
  maxCharacters?: number;
  omitColumnsIfEmpty?: boolean | undefined;
  omitDrilldownLink?: boolean | undefined;
  omitIfEmpty?: boolean | undefined;
  selectAllEnabled?: boolean | undefined;
  selectionEnabled?: boolean | undefined;
  showActivityPanelButton?: boolean | undefined;
  showActivityPanelOnLoad?: boolean | undefined;
  showAiFilterAssist?: boolean | undefined;
  showConditionBuilderButton?: boolean | undefined;
  showCount?: boolean | undefined;
  showEditColumnsButton?: boolean | undefined;
  showEditRowAction?: boolean | undefined;
  showGroupSortButton?: boolean | undefined;
  showHeader?: boolean | undefined;
  showLinks?: boolean | undefined;
  showPagination?: boolean | undefined;
  showReadableFixedQuery?: boolean | undefined;
  showReferenceLinks?: boolean | undefined;
  showRefreshButton?: boolean | undefined;
  showSubtitle?: boolean | undefined;
  showZingSearch?: boolean | undefined;
  subtitle?: string;
  useUIActions?: boolean | undefined;
  wrapLineCount?: number;
}
```

```ts
type Node = {
  ariaConfiguration?: Record<string, string>;
  disabled?: boolean | undefined;
  displayOption?: DisplayOption | undefined;
  icon?: string;
  id: string;
  label?: string;
  tooltip?: string;
  type: "button" | "dropdown" | "split-button" | "divider";
  variant?: "primary" | "secondary" | "destructive" | "tertiary" | "bare" | undefined;
}
```

```ts
type NotificationsConfig = unknown
```

```ts
interface PopoverDefinition {
  cellContext?: CellContext;
  config: PopoverConfig;
  content: [object Object];
  metadata?: Record<string, unknown>;
  target: HTMLElement;
}
```

```ts
interface RecordListContextValue {
  api: [object Object];
  state: [object Object];
}
```

```ts
interface SelectionConfig {
  disabledRows?: Array<string>;
  selectAllEnabled?: boolean | undefined;
  selectionEnabled?: boolean | undefined;
}
```

```ts
type ShadeAlternateRows = unknown
```

```ts
interface StandardRow {
  cells: Record<string, CellData>;
  detailRow?: [object Object];
  displayValue?: string;
  key: string;
  referenceKeyValue?: string;
  tags?: Array<{ name: string; sysId: string; canEdit: boolean; viewableBy: string; labelEntry: string; }>;
  type?: undefined;
}
```

```ts
interface TaskBarPosition {
  height: number;
  left: number;
  top: number;
  width: number;
}
```

```ts
interface TimelineBar {
  color?: string;
  end: Date;
  id: string;
  indicators?: Array<TimelineIndicator>;
  label: string;
  meta?: Record<string, unknown>;
  progress?: number;
  segments?: Array<TimelineSegment>;
  start: Date;
}
```

```ts
interface TimelineBarInput {
  color?: string;
  end?: string | Date | undefined;
  id?: string;
  indicators?: Array<TimelineIndicator>;
  label?: string;
  meta?: Record<string, unknown>;
  progress?: number;
  segments?: Array<TimelineSegment>;
  start: [object Object];
}
```

```ts
interface TimelineCell {
  endDate: Date;
  label: string;
  left: number;
  startDate: Date;
  width: number;
}
```

```ts
interface TimelineConfig {
  fields?: TimelineFieldMapping;
  options?: TimelineOptions;
}
```

```ts
interface TimelineFieldMapping {
  barLabel: string;
  barsField?: string;
  color?: [object Object];
  endDate: string;
  progress?: string;
  startDate: string;
}
```

```ts
interface TimelineIndicator {
  date: [object Object];
  icon: string;
  label?: string;
  meta?: Record<string, unknown>;
  tooltip?: string;
}
```

```ts
type TimelineLayout = unknown
```

```ts
interface TimelineOptions {
  layout?: TimelineLayout | undefined;
}
```

```ts
interface TimelineRange {
  dayWidth: number;
  endDate: Date;
  startDate: Date;
  totalWidth: number;
}
```

```ts
interface TimelineRow {
  $bars: Array<TimelineBar>;
  cells: Record<string, CellData>;
  detailRow?: [object Object];
  displayValue?: string;
  key: string;
  referenceKeyValue?: string;
  tags?: Array<{ name: string; sysId: string; canEdit: boolean; viewableBy: string; labelEntry: string; }>;
  type?: undefined;
}
```

```ts
interface TimelineSegment {
  color: string;
  end: [object Object];
  label?: string;
  meta?: Record<string, unknown>;
  start: [object Object];
  tooltip?: string;
}
```

```ts
interface VisibleAction {
  actionDef: ActionDefinition;
  enabled: boolean;
}
```

## Classes

```ts
class DataLoadController {
  extractScriptingData(response: GqlListResponse): ListScriptingData;
  hostConnected(): void;
  hostDisconnected(): void;
  hostUpdate(): void;
  hostUpdated(): void;
  initializeState(listState: MappedListState): void;
  initService(): void;
  loadData(): Promise<MappedListState | null>;
  markScriptingInitialized(): void;
  setInitialExpandedGroupsResolver(fn: (rows: Array<AnyRow>) => Array<string>): void;
  setListOptions(opts: ListOptions): void;
  setScriptingDataHandler(fn: (data: ListScriptingData) => void): void;
  transformData(gqlData: GqlNowListLitData): MappedListState;
}
```


