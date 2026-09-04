# `@servicenow/aiux-components-condition-builder`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-condition-builder`

Declares 76 elements, 2 functions, 87 types, 2 constants, 1 class.

## Elements

### `<aiux-condition-builder>`

Class `AIUXConditionBuilder`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `encodedQuery` | `string` | yes | no | yes |
| `filterOptions` | `ConditionBuilderFilterOptions` | yes | no | yes |
| `fixedEncodedQuery` | `string` | yes | no | yes |
| `fixedQueryMode` | `FixedQueryMode` | yes | no | yes |
| `initialData` | `ConditionBuilderInitialData \| null` | no | no | yes |
| `isSimple` | `boolean` | yes | yes | yes |
| `showSavedFilters` | `boolean` | yes | no | yes |
| `tableName` | `string` | yes | no | yes |
| `useSharedStores` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-encoded-query-updated` | `CbEncodedQueryUpdatedDetail` |

### `<cb-add-filter-button>`

Class `CbAddFilterButton`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `items` | `Array<TypeaheadItem>` | yes | no | yes |
| `value` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-add-filter-button:input` | `CbAddFilterButtonInputDetail` |
| `cb-add-filter-button:select` | `CbAddFilterButtonSelectDetail` |

### `<cb-breadcrumbs>`

Class `CbBreadcrumbs`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `items` | `Array<BreadcrumbItem>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-breadcrumbs-item-click` | `CbBreadcrumbsItemClickDetail` |

### `<cb-button>`

Class `CbButton`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `accessibleLabel` | `string` | yes | no | yes |
| `btnStyle` | `"primary" \| "ghost" \| "outline" \| "soft" \| "dash" \| "link"` | yes | no | yes |
| `color` | `"neutral" \| "primary" \| "secondary" \| "accent" \| "info" \| "success" \| "warning" \| "error"` | yes | no | yes |
| `disabled` | `boolean` | yes | yes | yes |
| `label` | `string` | yes | no | yes |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | yes | no | yes |
| `value` | `string` | yes | no | yes |
| `variant` | `"error" \| "default"` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-button-click` | `CbButtonClickDetail` |

### `<cb-calendar>`

Class `CbCalendar`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `max` | `string` | yes | no | yes |
| `min` | `string` | yes | no | yes |
| `placeholder` | `string` | yes | no | yes |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `value` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-calendar-change` | `CbCalendarChangeDetail` |

### `<cb-calendar-panel>`

Class `CbCalendarPanel`.

| Event | `detail` |
|---|---|
| `cb-calendar-panel-change` | `CbCalendarPanelChangeDetail` |

### `<cb-conditions>`

Class `CbConditions`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `fixedQueryMode` | `FixedQueryMode` | yes | no | yes |
| `globalErrorMessages` | `Array<ErrorMessage>` | no | no | yes |
| `includeExcludedOperators` | `boolean` | yes | no | yes |
| `includeExtendedOperators` | `boolean` | yes | no | yes |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `showLabels` | `boolean` | yes | no | yes |
| `showReferenceLookup` | `boolean` | yes | no | yes |
| `showTagLookup` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |
| `useVariableRow` | `boolean` | yes | no | yes |
| `variablesSource` | `VariablesSource \| undefined` | no | no | no |

| Event | `detail` |
|---|---|
| `cb-global-error-dismiss` | `{ id: string \| undefined; }` |

### `<cb-default-filters>`

Class `CbDefaultFilters`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `encodedQuery` | `string` | yes | no | yes |
| `fixedEncodedQuery` | `string` | yes | no | yes |
| `tableName` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-encoded-query-updated` | `CbEncodedQueryUpdatedDetail` |

### `<cb-default-filters-pill>`

Class `CbDefaultFiltersPill`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `fixedItems` | `Array<DefaultFilterItem>` | no | no | yes |
| `items` | `Array<DefaultFilterItem>` | no | no | yes |
| `originalCount` | `number` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-default-filters-pill:delete` | `CbDefaultFiltersPillDeleteDetail` |
| `cb-default-filters-pill:restore` | — |

### `<cb-drill-down>`

Class `CbDrillDown`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `categories` | `Array<DrillDownCategory>` | no | no | yes |
| `disabled` | `boolean` | yes | no | yes |
| `selectedCategoryId` | `string` | yes | no | yes |
| `selectedItemId` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-drill-down-select` | `CbDrillDownSelectDetail` |

### `<cb-dropdown>`

Class `CbDropdown`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `open` | `boolean` | yes | yes | yes |
| `placeholder` | `string` | yes | no | yes |
| `size` | `string` | yes | no | yes |
| `value` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-dropdown-toggle` | `CbDropdownToggleDetail` |

### `<cb-error-message>`

Class `CbErrorMessage`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `message` | `ErrorMessage \| undefined` | yes | no | no |

### `<cb-field-wrapper>`

Class `CbFieldWrapper`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `componentTagName` | `string` | yes | no | yes |
| `panelItemMapper` | `PanelItemMapper \| undefined` | no | no | no |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `selectedField` | `SelectedField` | yes | no | yes |
| `showLabels` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-field-updated` | `CbFieldUpdatedDetail` |

### `<cb-filter-overview>`

Class `CbFilterOverview`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `encodedQuery` | `string` | yes | no | yes |
| `fixedEncodedQuery` | `string` | yes | no | yes |
| `isSimple` | `boolean` | yes | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `showCopyQuery` | `boolean` | yes | no | yes |
| `showMenu` | `boolean` | yes | no | yes |
| `showOpenEditor` | `boolean` | yes | no | yes |
| `showOpenNewWindow` | `boolean` | yes | no | yes |
| `tableName` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-copy-query` | `EncodedQueries` |
| `cb-editor-opened` | `CbEditorOpenedDetail` |
| `cb-encoded-query-updated` | `CbEncodedQueryUpdatedDetail` |

### `<cb-filter-overview-pill>`

Class `CbFilterOverviewPill`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `deleteAllAfterPreview` | `boolean` | yes | no | yes |
| `showCopyQuery` | `boolean` | yes | no | yes |
| `showMenu` | `boolean` | yes | no | yes |
| `showOpenEditor` | `boolean` | yes | no | yes |
| `showOpenNewWindow` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-filter-pill:menu-action` | `CbFilterOverviewPillMenuActionDetail` |
| `cb-filter-pill:menu-item-hover` | `CbFilterOverviewPillMenuItemHoverDetail` |
| `cb-filter-pill:menu-item-hover-end` | `CbFilterOverviewPillMenuItemHoverDetail` |

### `<cb-filter-pill>`

Class `CbFilterPill`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `dismissible` | `boolean` | yes | no | yes |
| `isOrCondition` | `boolean` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `locked` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-filter-pill:dismiss` | `CbFilterPillDismissDetail` |

### `<cb-filter-pill-typeahead>`

Class `CbFilterPillTypeahead`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `items` | `Array<TypeaheadItem>` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `loading` | `boolean` | yes | no | yes |
| `placeholder` | `string` | yes | no | yes |
| `selectedItem` | `SelectedItem \| null` | no | no | yes |
| `showDelete` | `boolean` | yes | no | yes |
| `showTotalCount` | `boolean` | yes | no | yes |
| `totalCount` | `number` | yes | no | yes |
| `value` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-filter-pill-typeahead:clear` | `CbFilterPillTypeaheadClearDetail` |
| `cb-filter-pill-typeahead:delete` | `CbFilterPillTypeaheadDeleteDetail` |
| `cb-filter-pill-typeahead:input` | `CbFilterPillTypeaheadInputDetail` |
| `cb-filter-pill-typeahead:open` | — |
| `cb-filter-pill-typeahead:select` | `CbFilterPillTypeaheadSelectDetail` |

### `<cb-filter-pill-typeahead-multi>`

Class `CbFilterPillTypeaheadMulti`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `items` | `Array<TypeaheadItem>` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `loading` | `boolean` | yes | no | yes |
| `placeholder` | `string` | yes | no | yes |
| `selectedItems` | `Array<SelectItem>` | no | no | yes |
| `showDelete` | `boolean` | yes | no | yes |
| `showTotalCount` | `boolean` | yes | no | yes |
| `totalCount` | `number` | yes | no | yes |
| `value` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-filter-pill-typeahead-multi:apply` | `CbFilterPillTypeaheadMultiApplyDetail` |
| `cb-filter-pill-typeahead-multi:clear` | `CbFilterPillTypeaheadMultiClearDetail` |
| `cb-filter-pill-typeahead-multi:delete` | `CbFilterPillTypeaheadMultiDeleteDetail` |
| `cb-filter-pill-typeahead-multi:input` | `CbFilterPillTypeaheadMultiInputDetail` |
| `cb-filter-pill-typeahead-multi:open` | — |
| `cb-filter-pill-typeahead-multi:select` | `CbFilterPillTypeaheadMultiSelectDetail` |

### `<cb-filter-section>`

Class `CbFilterSection`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `icon` | `"" \| IconNameWithVariant` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `last` | `boolean` | yes | no | yes |
| `variant` | `"default" \| "drill-in"` | yes | no | yes |

### `<cb-fixed-filters>`

Class `CbFixedFilters`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `conditions` | `Array<Condition>` | no | no | yes |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `showLabels` | `boolean` | yes | no | yes |
| `showModeIndicator` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |

### `<cb-group-by>`

Class `CbGroupBy`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `fieldExclusions` | `FieldFilterMap \| undefined` | no | no | no |
| `fieldInclusions` | `FieldFilterMap \| undefined` | no | no | no |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `presets` | `Array<GroupByPresetOption> \| undefined` | no | no | no |
| `readOnly` | `boolean` | yes | no | yes |
| `showLabels` | `boolean` | yes | no | yes |
| `showNoneOption` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |
| `view` | `"condition-builder" \| "simple-filters"` | yes | no | yes |

### `<cb-group-by-presets>`

Class `CbGroupByPresets`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `currentDisplayValue` | `string` | yes | no | yes |
| `currentValue` | `string` | yes | no | yes |
| `presets` | `Array<GroupByPresetOption>` | no | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `showNoneOption` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-group-by-preset-selected` | `CbGroupByPresetSelectedDetail` |

### `<cb-input>`

Class `CbInput`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `debounce` | `number` | yes | no | yes |
| `disabled` | `boolean` | yes | no | yes |
| `inputAriaActiveDescendant` | `string` | no | no | yes |
| `inputAriaAutoComplete` | `string` | yes | no | yes |
| `inputAriaControls` | `string` | no | no | yes |
| `inputAriaExpanded` | `boolean \| undefined` | no | no | no |
| `inputAriaHasPopup` | `string` | yes | no | yes |
| `inputAriaLabel` | `string` | no | no | yes |
| `inputAriaRole` | `string` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `min` | `number \| undefined` | yes | no | no |
| `placeholder` | `string` | yes | no | yes |
| `readOnly` | `boolean` | yes | yes | yes |
| `showLabel` | `boolean` | yes | no | yes |
| `type` | `"number" \| "text"` | yes | no | yes |
| `value` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-input-change` | `CbInputChangeDetail` |

### `<cb-loading>`

Class `CbLoading`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `label` | `string` | yes | no | yes |

### `<cb-operator-wrapper>`

Class `CbOperatorWrapper`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `operatorOptions` | `Array<SelectItem>` | yes | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `selectedOperator` | `SelectedOperator` | yes | no | yes |
| `showLabels` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-operator-updated` | `CbOperatorUpdatedDetail` |

### `<cb-quick-filter-bar>`

Class `CbQuickFilterBar`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `addFilterDisabled` | `boolean` | yes | no | yes |
| `addFilterItems` | `Array<TypeaheadItem>` | no | no | yes |
| `addFilterValue` | `string` | yes | no | yes |
| `defaultEncodedQuery` | `string` | yes | no | yes |
| `defaultFixedEncodedQuery` | `string` | yes | no | yes |
| `groupByDisabled` | `boolean` | yes | no | yes |
| `groupByPresets` | `Array<GroupByPresetOption> \| undefined` | no | no | no |
| `hideAddFilter` | `boolean` | yes | no | yes |
| `hideGroupBy` | `boolean` | yes | no | yes |
| `hideSortBy` | `boolean` | yes | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `sortByDisabled` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-quick-filter-bar:add-filter` | `CbQuickFilterBarAddFilterDetail` |
| `cb-quick-filter-bar:show-more` | `CbQuickFilterBarShowMoreDetail` |

**Slots**

- Filter pill components (cb-filter-pill-typeahead, cb-filter-pill-typeahead-multi)

### `<cb-radio>`

Class `CbRadio`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `checked` | `boolean` | yes | no | yes |
| `disabled` | `boolean` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `name` | `string` | yes | no | yes |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-radio-change` | `CbRadioChangeDetail` |

### `<cb-record-count>`

Class `CbRecordCount`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `auto` | `boolean` | yes | no | yes |
| `encodedQuery` | `string` | yes | no | yes |
| `readonly` | `boolean` | yes | no | yes |
| `tableName` | `string` | yes | no | yes |

### `<cb-related-list-conditions>`

Class `CbRelatedListConditions`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `includeExcludedOperators` | `boolean` | yes | no | yes |
| `includeExtendedOperators` | `boolean` | yes | no | yes |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `showAddConditionSet` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |

### `<cb-row>`

Class `CbRow`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `customRowRenderer` | `CustomRowRenderer \| undefined` | no | no | no |
| `disableDelete` | `boolean` | yes | no | yes |
| `disableOr` | `boolean` | yes | no | yes |
| `fieldPanelItemMapper` | `PanelItemMapper \| undefined` | no | no | no |
| `includeExcludedOperators` | `boolean` | yes | no | yes |
| `includeExtendedOperators` | `boolean` | yes | no | yes |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `resolver` | `CbRowResolver` | no | no | yes |
| `rowMetadata` | `Record<string, string>` | no | no | yes |
| `selectedField` | `{ internalValue: string; displayValue: string; type: string; dotWalkPath: Array<DotWalkPathEntry>; }` | yes | no | yes |
| `selectedOperator` | `{ internalValue: string; displayValue: string; }` | yes | no | yes |
| `selectedValue` | `EditorValue` | yes | no | yes |
| `showLabels` | `boolean` | yes | no | yes |
| `showReferenceLookup` | `boolean` | yes | no | yes |
| `showTagLookup` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-row-add-condition` | `CbRowAddConditionDetail` |
| `cb-row-delete` | `CbRowDeleteDetail` |
| `cb-row-updated` | `CbRowUpdatedDetail` |

### `<cb-saved-filters>`

Class `CbSavedFilters`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `encodedQuery` | `string` | yes | no | yes |
| `tableName` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-saved-filter-applied` | `CbSavedFilterAppliedDetail` |

### `<cb-select>`

Class `CbSelect`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `items` | `Array<SelectItem>` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `placeholder` | `string` | yes | no | yes |
| `readOnly` | `boolean` | yes | yes | yes |
| `showLabel` | `boolean` | yes | no | yes |
| `value` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-select-change` | `CbSelectChangeDetail` |

### `<cb-simple-filter-boolean>`

Class `CbSimpleFilterBoolean`.

_No public properties, events, or slots declared._

### `<cb-simple-filter-choice>`

Class `CbSimpleFilterChoice`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `items` | `Array<ChoiceOption>` | yes | no | yes |
| `source` | `string` | yes | no | yes |

### `<cb-simple-filter-date>`

Class `CbSimpleFilterDate`.

_No public properties, events, or slots declared._

### `<cb-simple-filter-reference>`

Class `CbSimpleFilterReference`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `showReferenceLookup` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |

### `<cb-simple-filters>`

Class `CbSimpleFilters`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `filterOptions` | `ConditionBuilderFilterOptions` | no | no | yes |
| `fixedQuery` | `string` | yes | no | yes |
| `headerTitle` | `string` | yes | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-close-simple-filter` | — |
| `cb-encoded-query-updated` | `EncodedQueries` |

### `<cb-sort-by>`

Class `CbSortBy`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `showLabels` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |
| `view` | `"condition-builder" \| "simple-filters"` | yes | no | yes |

### `<cb-sort-direction>`

Class `CbSortDirection`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `readOnly` | `boolean` | yes | yes | yes |
| `value` | `OrderByType` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-sort-direction-change` | `CbSortDirectionChangeDetail` |

### `<cb-tabs>`

Class `CbTabs`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `activeTab` | `string` | yes | no | yes |
| `promotedTabId` | `string \| undefined` | yes | no | no |
| `tabs` | `Array<TabItem>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-tab-change` | `CbTabChangeDetail` |

### `<cb-tag-list-picker>`

Class `CbTagListPicker`.

| Event | `detail` |
|---|---|
| `tag-picker:row-selected` | `TagPickerRowSelectedDetail` |

### `<cb-textarea>`

Class `CbTextarea`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `debounce` | `number` | yes | no | yes |
| `disabled` | `boolean` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `placeholder` | `string` | yes | no | yes |
| `readOnly` | `boolean` | yes | yes | yes |
| `showLabel` | `boolean` | yes | no | yes |
| `value` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-textarea-change` | `CbTextareaChangeDetail` |

### `<cb-toggle>`

Class `CbToggle`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `checked` | `boolean` | yes | no | yes |
| `disabled` | `boolean` | yes | no | yes |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-toggle-change` | `CbToggleChangeDetail` |

### `<cb-toolbar-dropdown>`

Class `CbToolbarDropdown`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `iconName` | `"" \| IconNameWithVariant` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `panelContent` | `TemplateResult \| typeof nothing` | no | no | yes |
| `panelWidth` | `number` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-toolbar-dropdown:close` | `CbToolbarDropdownCloseDetail` |
| `cb-toolbar-dropdown:open` | `CbToolbarDropdownOpenDetail` |

### `<cb-typeahead>`

Class `CbTypeahead`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `container` | `HTMLElement \| null` | no | no | yes |
| `disabled` | `boolean` | yes | no | yes |
| `inputAriaLabel` | `string` | no | no | yes |
| `items` | `Array<TypeaheadItem>` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `loading` | `boolean` | yes | no | yes |
| `multiSelect` | `boolean` | yes | no | yes |
| `placeholder` | `string` | yes | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `recentItems` | `Array<TypeaheadItem>` | yes | no | yes |
| `selectedItems` | `Array<TypeaheadItem>` | yes | no | yes |
| `showLabel` | `boolean` | yes | no | yes |
| `totalCount` | `number` | yes | no | yes |
| `value` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-typeahead-focus` | — |
| `cb-typeahead-input` | `CbTypeaheadInputDetail` |
| `cb-typeahead-select` | `CbTypeaheadSelectDetail` |

### `<cb-undo-redo-buttons>`

Class `CbUndoRedoButtons`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `activeTab` | `UndoRedoTabId` | yes | no | yes |

### `<cb-value-between>`

Class `CbValueBetween`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `selectedOperator` | `{ displayValue: string; internalValue: string; }` | yes | no | yes |

### `<cb-value-boolean>`

Class `CbValueBoolean`.

_No public properties, events, or slots declared._

### `<cb-value-choice>`

Class `CbValueChoice`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `selectedOperator` | `{ internalValue: string; displayValue: string; }` | yes | no | yes |

### `<cb-value-choice-dynamic>`

Class `CbValueChoiceDynamic`.

_No public properties, events, or slots declared._

### `<cb-value-choice-field-names>`

Class `CbValueChoiceFieldNames`.

_No public properties, events, or slots declared._

### `<cb-value-currency>`

Class `CbValueCurrency`.

_No public properties, events, or slots declared._

### `<cb-value-currency-fx>`

Class `CbValueCurrencyFx`.

_No public properties, events, or slots declared._

### `<cb-value-date-choice>`

Class `CbValueDateChoice`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `hasTime` | `boolean` | yes | no | yes |
| `selectedOperator` | `{ displayValue: string; internalValue: string; }` | yes | no | yes |
| `type` | `string` | yes | no | yes |

### `<cb-value-date-comparative>`

Class `CbValueDateComparative`.

_No public properties, events, or slots declared._

### `<cb-value-date-equivalent>`

Class `CbValueDateEquivalent`.

_No public properties, events, or slots declared._

### `<cb-value-date-relative>`

Class `CbValueDateRelative`.

_No public properties, events, or slots declared._

### `<cb-value-date-trend>`

Class `CbValueDateTrend`.

_No public properties, events, or slots declared._

### `<cb-value-duration>`

Class `CbValueDuration`.

_No public properties, events, or slots declared._

### `<cb-value-dynamic-attribute-choice>`

Class `CbValueDynamicAttributeChoice`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `selectedOperator` | `{ internalValue: string; displayValue: string; }` | yes | no | yes |

### `<cb-value-hierarchy-reference>`

Class `CbValueHierarchyReference`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `selectedOperator` | `{ internalValue: string; displayValue: string; }` | yes | no | yes |
| `showReferenceLookup` | `boolean` | yes | no | yes |

### `<cb-value-number>`

Class `CbValueNumber`.

_No public properties, events, or slots declared._

### `<cb-value-reference>`

Class `CbValueReference`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `encodedRecord` | `string` | yes | no | yes |
| `ignoreReferenceQualifier` | `boolean` | yes | no | yes |
| `serializedChanges` | `string` | yes | no | yes |
| `showReferenceLookup` | `boolean` | yes | no | yes |
| `sysId` | `string` | yes | no | yes |

### `<cb-value-string>`

Class `CbValueString`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `placeholderText` | `string` | yes | no | yes |

### `<cb-value-tag>`

Class `CbValueTag`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `showTagLookup` | `boolean` | yes | no | yes |

### `<cb-value-textarea>`

Class `CbValueTextarea`.

_No public properties, events, or slots declared._

### `<cb-value-variable-choice>`

Class `CbValueVariableChoice`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `selectedOperator` | `{ internalValue: string; displayValue: string; }` | yes | no | yes |

### `<cb-value-wrapper>`

Class `CbValueWrapper`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `componentTagName` | `string` | yes | no | yes |
| `fieldContext` | `ItemContext \| undefined` | no | no | no |
| `initialSource` | `string` | yes | no | yes |
| `metadata` | `MetadataState \| null` | no | no | yes |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `selectedOperator` | `{ internalValue: string; displayValue: string; }` | yes | no | yes |
| `selectedValue` | `EditorValue` | yes | no | yes |
| `showLabels` | `boolean` | yes | no | yes |
| `showReferenceLookup` | `boolean` | yes | no | yes |
| `showTagLookup` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-value-updated` | `CbValueUpdatedDetail` |

### `<cb-value-yes-no>`

Class `CbValueYesNo`.

_No public properties, events, or slots declared._

### `<cb-variable-row-content>`

Class `CbVariableRowContent`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `input` | `CustomRowRenderInput` | no | no | no |

| Event | `detail` |
|---|---|
| `cb-field-updated` | `{ displayValue: string; dotWalkPath: Array<DotWalkPathEntry>; internalValue: string; source: string; type: string; }` |

### `<dot-walk>`

Class `DotWalk`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `customSearchTerm` | `string` | yes | no | yes |
| `dotWalkPath` | `Array<DotWalkPathEntry>` | yes | no | yes |
| `enableSearchAutofocus` | `boolean` | yes | no | yes |
| `initialPanelSource` | `string` | yes | no | yes |
| `isLoading` | `boolean` | yes | no | yes |
| `isLoadingMore` | `boolean` | yes | no | yes |
| `panelItems` | `Array<DwPanelItem>` | yes | no | yes |
| `showLoadMore` | `boolean` | yes | no | yes |
| `showSearch` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `dw-load-more` | `DwLoadMoreDetail` |
| `dw-panel-request` | `DwPanelRequestDetail` |
| `dw-path-updated` | `DotWalkPathUpdatedDetail` |

### `<dot-walk-dropdown>`

Class `DotWalkDropdown`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | no | yes |
| `displayValue` | `string` | yes | no | yes |
| `dotWalkPath` | `Array<DotWalkPathEntry>` | yes | no | yes |
| `filterOptions` | `Pick<ConditionBuilderFilterOptions, "useVariableRow"> \| undefined` | no | no | no |
| `internalValue` | `string` | yes | no | yes |
| `isLocked` | `boolean` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `panelItemMapper` | `PanelItemMapper \| undefined` | no | no | no |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `readOnly` | `boolean` | yes | no | yes |
| `showLabels` | `boolean` | yes | no | yes |
| `size` | `"sm" \| "md"` | yes | no | yes |
| `source` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `dw-dropdown-path-updated` | `DotWalkDropdownPathUpdatedDetail` |

### `<dw-breadcrumbs>`

Class `DwBreadcrumbs`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `activePanelIndex` | `number` | yes | no | yes |
| `dotWalkPath` | `Array<DotWalkPathItem>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `dw-breadcrumbs-click` | `DwBreadcrumbsClickDetail` |

### `<dw-panel>`

Class `DwPanel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `isLoading` | `boolean` | yes | no | yes |
| `isLoadingMore` | `boolean` | yes | no | yes |
| `listboxLabel` | `string` | yes | no | yes |
| `panelItems` | `Array<DwPanelItem>` | yes | no | yes |
| `selectedInternalValue` | `string` | yes | no | yes |
| `showLoadMore` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `dw-panel-backward` | — |
| `dw-panel-dot-walk` | `DwPanelDotWalkDetail` |
| `dw-panel-item-select` | `DwPanelItemSelectDetail` |
| `dw-panel-load-more` | — |

### `<dw-search>`

Class `DwSearch`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `enableSearchAutofocus` | `boolean` | yes | no | yes |
| `searchFilter` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `dw-search-input` | `DwSearchInputDetail` |

### `<ValueEditorBase>`

Base class, not registered as a tag.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `fieldContext` | `ItemContext \| undefined` | no | no | no |
| `initialSource` | `string` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `metadata` | `MetadataState \| null` | no | no | yes |
| `popoverContainer` | `HTMLElement \| null` | no | no | yes |
| `readOnly` | `boolean` | yes | yes | yes |
| `selectedValue` | `EditorValue` | yes | no | yes |
| `showLabels` | `boolean` | yes | no | yes |
| `source` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `cb-value-set` | `CbValueSetDetail` |

## Functions

```ts
fetchConditionBuilderInitialData(params: FetchConditionBuilderDataParams): Promise<ConditionBuilderInitialData>
fetchRowCount(table: string, query: string): Promise<number>
```

## Constants

| Name | Type |
|---|---|
| `fieldOperatorRelationship` | `FieldOperatorRelationship` |
| `ROW_COUNT_QUERY` | `"query ($table: String!, $query: String!) {\n\tGlideAggregateRecord_Query(tableName: $table, queryConditions: $query) {\n\t\trowCount: aggregates {\n\t\t\tcount\n\t\t}\n\t}\n}"` |

## Types

```ts
interface BreadcrumbItem {
  clickable?: boolean | undefined;
  hideLabel?: boolean | undefined;
  icon?: string;
  label: string;
}
```

```ts
interface CbAddFilterButtonInputDetail {
  value: string;
}
```

```ts
interface CbAddFilterButtonSelectDetail {
  item: TypeaheadItem;
}
```

```ts
interface CbBreadcrumbsItemClickDetail {
  index: number;
  item: BreadcrumbItem;
}
```

```ts
interface CbButtonClickDetail {
  value: string;
}
```

```ts
interface CbCalendarChangeDetail {
  value: string;
}
```

```ts
interface CbCalendarPanelChangeDetail {
  value: string;
}
```

```ts
interface CbDefaultFiltersPillDeleteDetail {
  id: string;
}
```

```ts
interface CbDrillDownSelectDetail {
  category: DrillDownCategory;
  item: DrillDownItem;
}
```

```ts
interface CbDropdownToggleDetail {
  open: boolean;
}
```

```ts
interface CbEditorOpenedDetail {

}
```

```ts
interface CbEncodedQueryUpdatedDetail {
  combinedEncodedQuery: string;
  encodedQuery: string;
  fixedEncodedQuery: string;
}
```

```ts
interface CbFieldUpdatedDetail {
  displayValue: string;
  dotWalkPath: Array<DotWalkPathEntry>;
  internalValue: string;
  source?: string;
  type?: string;
}
```

```ts
interface CbFilterOverviewPillMenuActionDetail {
  action: CbFilterOverviewPillMenuActionType;
  label: string;
}
```

```ts
interface CbFilterOverviewPillMenuItemHoverDetail {
  action: CbFilterOverviewPillMenuActionType;
  label: string;
}
```

```ts
interface CbFilterPillDismissDetail {
  label: string;
}
```

```ts
interface CbFilterPillTypeaheadClearDetail {
  label: string;
}
```

```ts
interface CbFilterPillTypeaheadDeleteDetail {
  label: string;
}
```

```ts
interface CbFilterPillTypeaheadInputDetail {
  value: string;
}
```

```ts
interface CbFilterPillTypeaheadMultiApplyDetail {
  items: Array<SelectItem>;
}
```

```ts
interface CbFilterPillTypeaheadMultiClearDetail {
  label: string;
}
```

```ts
interface CbFilterPillTypeaheadMultiDeleteDetail {
  label: string;
}
```

```ts
interface CbFilterPillTypeaheadMultiInputDetail {
  value: string;
}
```

```ts
interface CbFilterPillTypeaheadMultiSelectDetail {
  item: TypeaheadItem;
}
```

```ts
interface CbFilterPillTypeaheadSelectDetail {
  item: TypeaheadItem;
}
```

```ts
interface CbGroupByPresetSelectedDetail {
  internalValue: string;
}
```

```ts
interface CbInputChangeDetail {
  value: string;
}
```

```ts
interface CbOperatorUpdatedDetail {
  displayValue: string;
  internalValue: string;
}
```

```ts
interface CbQuickFilterBarAddFilterDetail {
  item: TypeaheadItem;
}
```

```ts
interface CbQuickFilterBarShowMoreDetail {
  expanded: boolean;
}
```

```ts
interface CbRadioChangeDetail {
  checked: boolean;
}
```

```ts
interface CbRowAddConditionDetail {
  conditionType: ConditionType.AND | ConditionType.OR;
  fieldReadOnly: boolean;
}
```

```ts
type CbRowDeleteDetail = unknown
```

```ts
type CbRowResolver = unknown
```

```ts
interface CbRowUpdatedDetail {
  selectedField: [object Object];
  selectedOperator: [object Object];
  selectedValue: [object Object];
}
```

```ts
interface CbSavedFilterAppliedDetail {
  encodedQuery: string;
  filter: SavedFilter;
}
```

```ts
interface CbSelectChangeDetail {
  item: SelectItem;
}
```

```ts
interface CbSortDirectionChangeDetail {
  value: OrderByType;
}
```

```ts
interface CbTabChangeDetail {
  tab: TabItem;
}
```

```ts
interface CbTextareaChangeDetail {
  value: string;
}
```

```ts
interface CbToggleChangeDetail {
  checked: boolean;
}
```

```ts
interface CbToolbarDropdownCloseDetail {
  id: string;
}
```

```ts
interface CbToolbarDropdownOpenDetail {
  id: string;
}
```

```ts
interface CbTypeaheadInputDetail {
  value: string;
}
```

```ts
interface CbTypeaheadSelectDetail {
  item: TypeaheadItem;
}
```

```ts
interface CbValueSetDetail {
  value: EditorValue;
}
```

```ts
interface CbValueUpdatedDetail {
  displayValue: string;
  dotwalkPath?: Array<DotWalkPath>;
  internalValue: string;
}
```

```ts
interface ChoiceOption {
  label: string;
  value: string;
}
```

```ts
interface Condition {
  conditionMetadata: Record<string, string>;
  conditionType: ConditionType;
  field: Field;
  hidden?: boolean | undefined;
  id: string;
  operator: Operator;
  value: Value;
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
interface ConditionBuilderInitialData {
  decodedQueryResponse: GetDecodedQueryResponse;
}
```

```ts
type ConditionBuilderModes = unknown
```

```ts
type ConditionBuilderProps = {
  encodedQuery?: string;
  filterOptions?: ConditionBuilderFilterOptions;
  fixedEncodedQuery?: string;
  fixedQueryMode?: FixedQueryMode | undefined;
  initialData?: ConditionBuilderInitialData;
  tableName: string;
}
```

```ts
interface CustomFieldOperator {
  componentTag?: string;
  displayValue?: string;
  hidden?: boolean | undefined;
  internalValue: string;
  replace?: boolean | undefined;
}
```

```ts
type CustomFieldOperatorRelationship = unknown
```

```ts
interface CustomFieldTypeConfig {
  operators: Array<CustomFieldOperator>;
  replace?: boolean | undefined;
}
```

```ts
interface CustomRowRenderInput {
  disableDelete: boolean;
  disableOr: boolean;
  fieldContext?: ItemContext;
  fieldPanelItemMapper?: PanelItemMapper;
  metadata: MetadataState;
  popoverContainer: HTMLElement;
  readOnly: boolean;
  resolution: RowResolution;
  rowMetadata: Record<string, string>;
  selectedField: [object Object];
  selectedOperator: [object Object];
  selectedValue: EditorValue;
  showLabels: boolean;
  showReferenceLookup: boolean;
  showTagLookup: boolean;
  source: string;
  variablesSource?: VariablesSource;
}
```

```ts
interface DefaultFilterItem {
  id: string;
  isOr: boolean;
  label: string;
}
```

```ts
interface DotWalkDropdownPathUpdatedDetail {
  displayValue: string;
  dotWalkPath: Array<DotWalkPathEntry>;
  internalValue: string;
}
```

```ts
interface DotWalkPathEntry {
  displayValue: string;
  excludeFromPath?: boolean | undefined;
  internalValue: string;
  precedingSeparatorTerm?: string;
  reference?: string;
  source: string;
}
```

```ts
interface DotWalkPathItem {
  displayValue: string;
}
```

```ts
interface DotWalkPathUpdatedDetail {
  combinedPath: string;
  path: Array<DotWalkPathEntry>;
}
```

```ts
interface DrillDownCategory {
  children: Array<DrillDownItem>;
  id: string;
  label: string;
}
```

```ts
interface DwBreadcrumbsClickDetail {
  panelIndex: number;
}
```

```ts
interface DwLoadMoreDetail {
  searchTerm: string;
  source: string;
}
```

```ts
interface DwPanelDotWalkDetail {
  pathData: DwPanelPathData;
}
```

```ts
interface DwPanelItem {
  description?: string;
  displayValue: string;
  excludeFromPath?: boolean | undefined;
  initialPanelOnly?: boolean | undefined;
  internalValue: string;
  itemType?: string;
  precedingSeparatorTerm?: string;
  reference?: string;
  secondaryLabel?: string;
  selectable?: boolean | undefined;
}
```

```ts
interface DwPanelItemSelectDetail {
  pathData: DwPanelPathData;
}
```

```ts
interface DwPanelRequestDetail {
  searchTerm: string;
  source: string;
}
```

```ts
interface DwSearchInputDetail {
  searchFilter: string;
}
```

```ts
interface EditorValue {
  displayValue: string;
  dotwalkPath?: Array<DotWalkPath>;
  internalValue: string;
}
```

```ts
interface EncodedQueries {
  combinedEncodedQuery: string;
  encodedQuery: string;
  fixedEncodedQuery: string;
}
```

```ts
interface ErrorMessage {
  content: string;
  id: string;
  status: ErrorMessageStatus;
}
```

```ts
interface FetchConditionBuilderDataParams {
  ctx: SSRLoaderContext;
  encodedQuery: string;
  fixedEncodedQuery?: string;
  isSimple?: boolean | undefined;
  tableName: string;
}
```

```ts
interface FieldOperator {
  componentTag?: string;
  displayValue: string;
  internalValue: string;
}
```

```ts
type FieldOperatorRelationship = unknown
```

```ts
interface FieldTypeDefinition {
  operators: Array<FieldOperator>;
}
```

```ts
type FixedQueryMode = unknown
```

```ts
interface GroupByPresetOption {
  displayValue: string;
  internalValue: string;
}
```

```ts
type OrderByType = unknown
```

```ts
interface SelectedField {
  displayValue: string;
  dotWalkPath: Array<DotWalkPathEntry>;
  internalValue: string;
  type: string;
}
```

```ts
interface SelectedOperator {
  displayValue: string;
  internalValue: string;
}
```

```ts
interface SelectItem {
  id: string;
  label: string;
}
```

```ts
interface TabItem {
  id: string;
  label: string;
}
```

```ts
interface TagPickerRowSelectedDetail {
  displayValue: string;
  sysId: string;
}
```

```ts
interface TypeaheadItem {
  icon?: IconNameWithVariant | undefined;
  id: string;
  label: string;
  sublabel?: string;
}
```

```ts
type UndoRedoTabId = unknown
```

## Classes

```ts
class ValueEditorInterface {
  dispatchValueSet(internalValue: string, displayValue: string, dotwalkPath?: Array<DotWalkPath>): void;
  label: string;
  readOnly: boolean;
  selectedValue: EditorValue;
  showLabels: boolean;
}
```


