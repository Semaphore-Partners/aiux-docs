# `@servicenow/aiux-components-playbook`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-playbook`

Declares 17 elements, 10 functions, 10 constants, 3 classes.

## Elements

### `<aiux-playbook>`

Class `PlaybookExperience`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `config` | `{ layout: "vertical-all-stacked"; activityWidth: "full"; }` | yes | no | yes |
| `experienceId` | `string` | yes | no | yes |
| `parentSysId` | `string` | yes | no | yes |
| `parentTable` | `string` | yes | no | yes |
| `prefetch` | `boolean` | yes | no | yes |
| `preFetchedData` | `null` | no | no | yes |
| `processDefinitionId` | `string` | yes | no | yes |

### `<aiux-playbook-actions>`

Class `PlaybookActions`.

| Event | `detail` |
|---|---|
| `playbook-internal:execute-action` | — |

### `<aiux-playbook-activity-picker>`

Class `PlaybookActivityPicker`.

| Event | `detail` |
|---|---|
| `playbook:select` | — |

### `<aiux-playbook-activity-viewer>`

Class `PlaybookActivityViewer`.

| Event | `detail` |
|---|---|
| `activity-action` | — |

### `<aiux-playbook-context-selector>`

Class `PlaybookContextSelector`.

| Event | `detail` |
|---|---|
| `playbook-internal:select` | — |

### `<aiux-playbook-item-picker>`

Class `PlaybookItemPicker`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `addToEventDetails` | `{}` | yes | no | yes |
| `altModeActive` | `boolean` | yes | no | yes |
| `altModeConfig` | `any` | yes | no | no |
| `emptyMessage` | `string` | yes | no | yes |
| `flushAltFrame` | `boolean` | yes | no | yes |
| `items` | `Array<any>` | yes | no | yes |
| `itemStyles` | `{}` | yes | no | yes |
| `loading` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-item-picker:select-item` | `{ itemId: any; meta: any; }` |

### `<aiux-playbook-modal>`

Class `PlaybookModal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `config` | `null` | no | no | yes |

### `<aiux-playbook-stage-actions>`

Class `PlaybookStageActions`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `stageContextId` | `string` | yes | no | yes |
| `stageTitle` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `playbook-internal:execute-action` | — |

### `<aiux-playbook-stage-picker>`

Class `PlaybookStagePicker`.

| Event | `detail` |
|---|---|
| `playbook:select` | — |

### `<aiux-playbook-stage-picker-horizontal>`

Class `PlaybookStagePickerHorizontal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `orientation` | `"horizontal"` | yes | no | yes |

### `<aiux-playbook-stepper>`

Class `PlaybookStepper`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `items` | `Array<any>` | no | no | yes |
| `orientation` | `"horizontal"` | yes | no | yes |
| `selectedItemId` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `stepper:activity-select` | `{ itemId: any; activityContextId: any; altOf: any; meta: any; }` |
| `stepper:cancel-add-activity` | — |
| `stepper:item-select` | `{ itemId: any; }` |

### `<aiux-playbook-vertical-selector>`

Class `PlaybookVerticalSelector`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `orientation` | `"vertical"` | yes | no | yes |
| `showActivities` | `boolean` | yes | no | yes |
| `showOnlySelectedPlaybook` | `boolean` | yes | no | yes |
| `showStages` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `playbook:select` | — |

### `<playbook-asset-lifecycle-list>`

Class `PlaybookAssetLifecycleList`.

| Event | `detail` |
|---|---|
| `LIST_CONTROLLER#REFRESH_LIST` | — |
| `playbook-internal:renderer-update` | `{ confirmComplete: () => Promise<any>; }` |

### `<playbook-card>`

Class `PlaybookCard`.

| Event | `detail` |
|---|---|
| `activity-action` | — |
| `playbook-internal:view-mode-change` | `{ expanded: false; }` |

### `<playbook-data-provider>`

Class `PlaybookDataProvider`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `deepLinkParams` | `null` | no | no | yes |
| `experienceId` | `string` | yes | no | yes |
| `parentSysId` | `string` | yes | no | yes |
| `parentTable` | `string` | yes | no | yes |
| `prefetch` | `boolean` | yes | no | yes |
| `preFetchedData` | `null` | no | no | yes |
| `processDefinitionId` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `playbook-experience:error` | `{ error: any; }` |
| `playbook-experience:open-record` | `{ table: any; sysId: any; source: string; payload: any; }` |
| `playbook-experience:record-generated` | `{ table: string; sysId: string; }` |

### `<playbook-guided-card>`

Class `PlaybookGuidedCard`.

_No public properties, events, or slots declared._

### `<playbook-guided-panel>`

Class `PlaybookGuidedPanel`.

_No public properties, events, or slots declared._

## Functions

```ts
dynamicWidgetRenderer(__0: [object Object]): TemplateResult<1>
fetchPlaybookContexts(__0: [object Object]): Promise<{ provider: string | null; ambChannel: string | null; playbooksByContextId: object; playbookContextIdsInOrder: Array<string>; error: string | null; }>
getCardTagline(card: any): any
getInitialContextIndex(contexts: any): any
getInitialLaneIndex(lanes: any): number
getStateBadgeClass(stateValue: any): "aiux-badge-success" | "aiux-badge-info" | "aiux-badge-ghost"
getTargetState(action: any): any
getVisibleCards(cards: any): any
getVisibleLanes(lanes: any): any
hasCardWithState(lanes: any, stateValue: any): any
```

## Constants

| Name | Type |
|---|---|
| `PLAYBOOK_EXPERIENCE_ID` | `"98e09a560f2200102920c912d4767e1a"` |
| `playbookActivityContext` | `ScopedContext<null> \| GlobalContext<null> \| [GlobalContext<null>, (value: null) => void]` |
| `playbookContext` | `ScopedContext<null> \| GlobalContext<null> \| [GlobalContext<null>, (value: null) => void]` |
| `withPlaybookContext` | `(Base: any) => typeof (Anonymous class)` |
| `withPlaybookFormContext` | `(Base: any) => typeof (Anonymous class)` |

```ts
const ACTION_TO_STATE: {
  cancel: string;
  complete: string;
  skip: string;
  start: string;
}
```

```ts
const ACTIVITY_VIEW_MODES: {
  FOCUSED: "focused";
  GUIDED: "guided";
  STACKED: "stacked";
}
```

```ts
const ORIENTATIONS: {
  HORIZONTAL: "horizontal";
  HORIZONTAL_WITH_ACTIVITY_DRAWER: "horizontal-with-activity-drawer";
  VERTICAL: "vertical";
}
```

```ts
const PLAYBOOK_LAYOUT: {
  GUIDED: "guided";
  HORIZONTAL_FOCUSED: "horizontal-focused";
  HORIZONTAL_FOCUSED_WITH_DRAWER: "horizontal-focused-with-drawer";
  HORIZONTAL_STACKED: "horizontal-stacked";
  VERTICAL_ALL_STACKED: "vertical-all-stacked";
  VERTICAL_FOCUSED: "vertical-focused";
  VERTICAL_STACKED: "vertical-stacked";
}
```

```ts
const TERMINAL_ACTIVITY_STATES: {
  add: (value: "COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR") => Set<"COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR">;
  clear: () => void;
  delete: (value: "COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR") => boolean;
  entries: () => SetIterator<["COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR", "COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR"]>;
  forEach: (callbackfn: (value: "COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR", value2: "COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR", set: Set<"COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR">) => void, thisArg?: any) => void;
  has: (value: "COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR") => boolean;
  keys: () => SetIterator<"COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR">;
  size: number;
  values: () => SetIterator<"COMPLETE" | "SKIPPED" | "CANCELLED" | "ERROR">;
}
```

## Classes

```ts
class PlaybookBasicForm {
  _pushWidgetContext(): void;
  connectedCallback(): void;
  render(): TemplateResult<1>;
  updated(changedProperties: any): void;
}
```

```ts
class PlaybookCardController {
  _subscribe(): void;
  hostDisconnected(): void;
  hostUpdate(): void;
}
```

```ts
class PlaybookController {
  hostDisconnected(): void;
  hostUpdate(): void;
}
```


