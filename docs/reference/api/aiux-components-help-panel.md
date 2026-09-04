# `@servicenow/aiux-components-help-panel`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-help-panel`

Declares 12 elements.

## Elements

### `<aiux-help-panel>`

Class `HelpPanel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `enableAttachDetach` | `boolean` | yes | no | yes |
| `enableHelpAssistant` | `boolean` | yes | no | yes |
| `enableWhatsNew` | `boolean` | yes | no | yes |
| `heading` | `string` | yes | no | yes |
| `heightDetached` | `number` | yes | no | yes |
| `hideTabs` | `boolean` | yes | no | yes |
| `left` | `number` | yes | no | yes |
| `pinned` | `boolean` | yes | no | yes |
| `position` | `string` | yes | no | yes |
| `right` | `number` | yes | no | yes |
| `setInitialFocusInPanel` | `boolean` | yes | no | yes |
| `showBackButton` | `boolean` | yes | no | yes |
| `top` | `number` | yes | no | yes |
| `visible` | `boolean` | yes | no | yes |
| `widthDetached` | `number` | yes | no | yes |

| Event | `detail` |
|---|---|
| `help-panel:attach-clicked` | — |
| `help-panel:detach-clicked` | — |
| `help-panel:metric` | `{ eventName: any; payload: any; }` |
| `help-panel:visibility-changed` | `{ value: any; }` |

### `<guided-tour-alert>`

Class `SnGuidedTourAlert`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `items` | `Array<any>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `guided-tour-alert:action` | `{ id: any; action: any; }` |
| `guided-tour-alert:dismiss` | `{ id: any; }` |

### `<guided-tours>`

Class `SnGuidedTours`.

_No public properties, events, or slots declared._

### `<hp-doc>`

Class `HpDoc`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `content` | `string` | yes | no | yes |
| `enableAttachDetach` | `boolean` | yes | no | yes |
| `isAIGenerated` | `boolean` | yes | no | yes |
| `isAttached` | `boolean` | yes | no | yes |
| `showBack` | `boolean` | yes | no | yes |
| `sysId` | `string` | yes | no | yes |
| `table` | `null` | yes | no | yes |

| Event | `detail` |
|---|---|
| `help-panel:metric` | `{ eventName: any; payload: any; }` |

### `<hp-doc-list>`

Class `HpDocList`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `contents` | `undefined` | yes | no | yes |
| `documents` | `undefined` | yes | no | yes |
| `hasTours` | `boolean` | yes | no | yes |

### `<hp-doc-popover-content>`

Class `HpDocPopoverContent`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `content` | `string` | yes | no | yes |

### `<hp-doc-resource>`

Class `HpDocResource`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `config` | `{}` | yes | no | yes |
| `isExpanded` | `boolean` | yes | no | yes |

### `<hp-empty>`

Class `HpEmpty`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `content` | `string` | yes | no | yes |

### `<hp-feedback>`

Class `HpFeedback`.

_No public properties, events, or slots declared._

### `<hp-ha-launcher>`

Class `HpHaLauncher`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `isLoading` | `boolean` | yes | no | yes |

### `<hp-tour-list>`

Class `HpTourList`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `tours` | `Array<any>` | yes | no | yes |
| `toursEnabled` | `boolean` | yes | no | yes |

### `<hp-tour-progress>`

Class `HpTourProgress`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `currentStep` | `number` | yes | no | yes |
| `totalSteps` | `number` | yes | no | yes |
| `tourId` | `string` | yes | no | yes |
| `tourName` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `hp-tour-progress:end-tour` | `{ userAction: string; tourId: string; }` |

