# `@servicenow/aiux-components-nacm`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-nacm`

Declares 4 elements, 28 types, 1 constant.

## Elements

### `<aiux-nacm>`

Class `AiuxNacm`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `additionalAnalyticsAttributes` | `Record<string, unknown>` | yes | no | yes |
| `additionalConfig` | `AdditionalConfig` | yes | no | yes |
| `ambChannelName` | `string` | yes | no | yes |
| `buttonProps` | `ButtonProps` | yes | no | yes |
| `caller` | `CallerType` | yes | no | yes |
| `documentSysId` | `string` | yes | no | yes |
| `documentTableName` | `string` | yes | no | yes |
| `draftedText` | `string` | yes | no | yes |
| `feedbackProps` | `FeedbackProps` | yes | no | yes |
| `nacmConfig` | `Record<string, unknown>` | yes | no | yes |
| `openPromptConfig` | `Record<string, string>` | yes | no | yes |
| `payload` | `WwnaPayload` | yes | no | yes |
| `recommendationDialogProps` | `RecommendationDialogProps` | yes | no | yes |
| `renderDisabledSkeleton` | `boolean` | yes | no | yes |
| `selectedText` | `string` | yes | no | yes |
| `skillConfigSysId` | `string` | yes | no | yes |
| `skillId` | `string` | yes | no | yes |
| `timeoutErrorMessage` | `string` | yes | no | yes |
| `wwnaComponentId` | `string` | yes | no | yes |

### `<aiux-nacm-multi-skill-content-container>`

Class `AiuxNacmMultiSkillContentContainer`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `actionCommand` | `string` | yes | no | yes |
| `actionItem` | `Record<string, unknown> \| null` | yes | no | yes |
| `additionalConfig` | `AdditionalConfig` | yes | no | yes |
| `configObject` | `Record<string, unknown>` | yes | no | yes |
| `ctaLabelsMapping` | `Array<{ sysId?: string \| undefined; label?: string \| undefined; }>` | yes | no | yes |
| `documentSysId` | `string` | yes | no | yes |
| `documentTableName` | `string` | yes | no | yes |
| `draftedText` | `string` | yes | no | yes |
| `enforceRerenderTime` | `number` | yes | no | yes |
| `excludedActions` | `ExcludedActions` | yes | no | yes |
| `isFixedVariant` | `boolean` | yes | no | yes |
| `isInlineVariant` | `boolean` | yes | no | yes |
| `isPopoverVariant` | `boolean` | yes | no | yes |
| `onNestedDropdownOpenChange` | `((isOpen: boolean) => void) \| null` | yes | no | yes |
| `payload` | `Record<string, unknown>` | yes | no | yes |
| `renderSingleSectionConfig` | `RenderSingleSectionConfig` | yes | no | yes |
| `section` | `Section` | yes | no | yes |
| `selectedText` | `string` | yes | no | yes |

### `<aiux-nacm-multi-skill-wrapper>`

Class `AiuxNacmMultiSkillWrapper`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `additionalConfig` | `AdditionalConfig` | yes | no | yes |
| `ambChannelName` | `string` | yes | no | yes |
| `caller` | `string` | yes | no | yes |
| `configObject` | `RawSkillConfig \| null` | yes | no | yes |
| `documentSysId` | `string` | yes | no | yes |
| `documentTableName` | `string` | yes | no | yes |
| `draftedText` | `string` | yes | no | yes |
| `enableAIGradient` | `boolean` | yes | no | yes |
| `excludeActions` | `ExcludedActionsMap` | yes | no | yes |
| `feedbackProps` | `FeedbackProps` | yes | no | yes |
| `forceDisabled` | `boolean` | yes | no | yes |
| `nacmComponentId` | `string` | yes | no | yes |
| `openPromptConfig` | `Record<string, string>` | yes | no | yes |
| `payload` | `Record<string, unknown>` | yes | no | yes |
| `recommendationDialogProps` | `RecommendationDialogProps` | yes | no | yes |
| `reTriggerActions` | `Array<{ [key: string]: unknown; sectionId: string; }>` | yes | no | yes |
| `sectionsConfig` | `Array<SectionOverride>` | yes | no | yes |
| `selectedText` | `string` | yes | no | yes |
| `triggerProps` | `TriggerProps` | yes | no | yes |
| `varset` | `VariableSet \| null` | yes | no | yes |

### `<aiux-nacm-open-prompt>`

Class `AiuxNacmOpenPrompt`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `disabled` | `boolean` | yes | yes | yes |
| `enableSpeech` | `boolean` | yes | no | yes |
| `inlineDropdown` | `boolean` | yes | no | yes |
| `items` | `Array<DropdownItem>` | yes | no | yes |
| `maxlength` | `number` | yes | no | yes |
| `placeholder` | `string` | yes | no | yes |
| `progressiveInput` | `boolean` | yes | no | yes |
| `readonly` | `boolean` | yes | yes | yes |
| `retainValueOnSubmit` | `boolean` | yes | no | yes |
| `showItemsOnFocus` | `boolean` | yes | no | yes |
| `speechLang` | `string` | yes | no | yes |
| `value` | `string` | yes | yes | yes |

| Event | `detail` |
|---|---|
| `{CustomEvent}` | `aiux-nacm-open-prompt:value-changed` |
| `aiux-nacm-open-prompt:item-selected` | `{ item: DropdownItem; value: string; }` |
| `aiux-nacm-open-prompt:submit` | `{ value: string; }` |
| `aiux-nacm-open-prompt:value-changed` | `{ value: string; }` |

**Slots**

- start - Replaces the default sparkle icon on the left.

## Constants

```ts
const NACM_EVENT: {
  AI_STATUS_CARD_STATE: "aiux-nacm-ai-status-card-state-wwna";
  AI_STATUS_CARD_STATE_CHANGED: "aiux-nacm-ai-status-card-state-changed";
  AMB_MESSAGE_RECEIVED: "aiux-nacm-amb-message-received";
  CALL_TO_ACTION_CLICKED: "aiux-nacm-call-to-action-clicked";
  CLOSE_OTHER_DIALOGS: "aiux-nacm-close-other-dialogs";
  CLOSE_RESPONSE_WINDOW: "aiux-nacm-close-response-window";
  COMPONENT_RENDERED: "aiux-nacm-component-rendered";
  CTA_CLICKED: "aiux-nacm-cta-clicked";
  DIALOG_CLOSED: "aiux-nacm-dialog-closed";
  FEEDBACK_SUBMITTED: "aiux-nacm-feedback-submitted";
  FLYOUT_CTA_CLICKED: "aiux-nacm-flyout-cta-clicked";
  FLYOUT_ITEM_CLICKED: "aiux-nacm-flyout-item-clicked";
  FLYOUT_REFINE_CLICKED: "aiux-nacm-flyout-refine-clicked";
  MENU_ACTION_CLICKED: "aiux-nacm-menu-action-clicked";
  MULTI_SKILL_CARD_RESPONDED: "aiux-nacm-multi-skill-card-responded";
  PRESET_ACTION_SELECTED: "aiux-nacm-preset-action-selected";
  RECOMMENDATION_DIALOG_CLOSED: "aiux-nacm-recommendation-dialog-closed";
  REFINE_ACTION_CLICKED: "aiux-nacm-refine-action-clicked";
  REFRESH_BUTTON_CLICKED: "aiux-nacm-refresh-button-clicked-wwna";
  REFRESH_BUTTON_CLICKED_SECTION: "aiux-nacm-refresh-button-clicked";
  REGENERATE_RECOMMENDATION_CLICKED: "aiux-nacm-regenerate-recommendation-clicked";
  RW_MESSAGE_RECEIVED: "aiux-nacm-rw-message-received";
  SHOW_COPY_FAILED: "aiux-nacm-show-copy-failed";
  WWNA_AMB_MESSAGE_RECEIVED: "aiux-nacm-wwna-amb-message-received";
}
```

## Types

```ts
interface AdditionalConfig {
  openPromptActionInterceptor?: (context: OpenPromptActionContext) => OpenPromptActionResult | Promise<OpenPromptActionResult>;
  preInvokeActionHandler?: (payload: Record<string, unknown>) => Record<string, unknown> | Promise<Record<string, unknown>>;
}
```

```ts
interface AIStatusCardMetadata {
  actions?: Array<unknown>;
  description?: string;
  title?: string;
}
```

```ts
interface AMBMessageData {
  ai-status-card-metadata?: AIStatusCardMetadata;
  errorMessage?: string;
  features?: Record<string, { [key: string]: unknown; mainFeature?: boolean | undefined; result?: ResponseData | undefined; }>;
  followupActions?: Array<FollowupAction>;
  loadingMessage?: string;
  logId?: string;
  messageForDialog?: string;
  status?: "success" | "error" | "loading" | "cancelled" | undefined;
  successMessage?: string;
}
```

```ts
interface ButtonProps {
  autoTriggerDefaultAction?: boolean | undefined;
  enableAIGradient?: boolean | undefined;
  fitToParent?: string | boolean | undefined;
  hideButtonOnDialog?: boolean | undefined;
  hidePrimaryIcon?: boolean | undefined;
  icon?: string;
  label?: string;
  minSelectedWordCount?: number;
  size?: string;
  tooltipContent?: string;
  variant?: string;
}
```

```ts
type CallerType = unknown
```

```ts
interface CallToAction {
  commandName?: string;
  icon?: string;
  isDisabled?: boolean | undefined;
  label: string;
  name: string;
  order?: number;
  sys_id: string;
  variant?: string;
}
```

```ts
interface DropdownItem {
  id: string;
  label: string;
  sublabel?: string;
}
```

```ts
interface ExcludedActions {
  cta?: Array<string>;
  refine?: Array<string>;
}
```

```ts
interface ExcludedActionsMap {
  cta?: Array<string>;
  defaultAction?: Array<{ [key: string]: unknown; sectionId?: string | undefined; sysId?: string | undefined; disabled?: boolean | undefined; isHidden?: boolean | undefined; }>;
  refine?: Array<string>;
  secondaryCTA?: Array<string>;
}
```

```ts
interface FeedbackProps {
  enabled?: boolean | undefined;
  endpoint?: string;
  negativeFeedback?: GranularFeedbackDetails;
  positiveFeedback?: GranularFeedbackDetails;
}
```

```ts
interface OpenPromptConfig {
  disabled?: boolean | undefined;
  enableSpeech?: string;
  hidden?: boolean | undefined;
  items?: Array<DropdownItem>;
  openPromptAutoFocus?: string;
  placeholder?: string;
  progressiveInput?: string;
  showItemsOnFocus?: boolean | undefined;
  speechLang?: string;
  value?: string;
}
```

```ts
interface ProcessedNacmConfig {
  channelName: string;
  configObject: RawSkillConfig;
  enableAIGradient: boolean;
  excludeActions: Record<string, unknown>;
  feedbackConfigState: FeedbackProps;
  mergedButtonProps: ButtonProps;
  mergedDialogProps: RecommendationDialogProps;
  reTriggerActions: Array<{ [key: string]: unknown; sectionId: string; }>;
  sectionsConfig: Array<unknown>;
  shouldNacmRenderForSelectedText: boolean;
}
```

```ts
interface RawSkillConfig {
  active?: boolean | undefined;
  additional_config?: unknown;
  formfieldsMapper?: Record<string, unknown>;
  formFieldsSkillMapping?: Record<string, unknown>;
  in_mobile_active?: boolean | undefined;
  in_mobile_roles?: string;
  in_product_active?: boolean | undefined;
  in_product_roles?: unknown;
  is_wwna_active?: boolean | undefined;
  isError?: boolean | undefined;
  isInMobileRolesSatisfied?: boolean | undefined;
  isInProductRolesSatisfied?: boolean | undefined;
  isNewConfig?: boolean | undefined;
  nacm_skill_id?: string;
  name?: string;
  nap_active?: boolean | undefined;
  skill_config_id?: string;
  skill_description?: string;
  skill_id?: string;
  skill_name?: string;
  skill_table_name?: string;
  sys_id?: string;
  user_sys_id?: string;
  variable_sets?: Array<VariableSet>;
}
```

```ts
interface RecommendationDialogProps {
  additionalInfoTooltip?: string;
  closeButtonTooltip?: string;
  ctaLabelsMapping?: Array<{ sysId: string; label: string; }>;
  ctaVariant?: string;
  enableDrag?: boolean | undefined;
  enableMultipleDialogs?: boolean | undefined;
  enableResize?: boolean | undefined;
  fixedVariantInitialLineCount?: number;
  fixedVariantShowMoreLineCount?: number;
  footerLabel?: string;
  headerActions?: string;
  headerInitialLabel?: string;
  headerLoadedIcon?: string;
  headerLoadedLabel?: string;
  headerLoadingLabel?: string | Array<string> | undefined;
  height?: number;
  hideFooter?: boolean | undefined;
  hideInsertButton?: boolean | undefined;
  insertButtonLabel?: string;
  isCopyButtonHidden?: boolean | undefined;
  isDialogHoisted?: boolean | undefined;
  isRefreshDisabled?: boolean | undefined;
  isRefreshHidden?: boolean | undefined;
  manageRefresh?: boolean | undefined;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  offsetLeft?: number;
  offsetTop?: number;
  primaryCTATooltip?: string;
  refineCount?: string;
  refreshSummaryButtonText?: string;
  refreshSummaryHelperText?: string;
  secondaryCTAVariant?: string;
  width?: number;
}
```

```ts
interface RefineAction {
  commandName?: string;
  icon?: string;
  isDisabled?: boolean | undefined;
  label: string;
  name: string;
  order?: number;
  sys_id: string;
}
```

```ts
interface RenderSingleSectionConfig {
  ctas?: Array<CallToAction>;
  isOpenPromptActive?: boolean | undefined;
  maxHeight?: number;
  renderSingleSection?: boolean | undefined;
  secondaryCTAs?: Array<CallToAction>;
}
```

```ts
interface ResponseEntry {
  citations?: Array<Citation>;
  feedback: "THUMBS_UP" | "THUMBS_DOWN" | null;
  followupActions?: Array<FollowupAction>;
  hasMessageForDialog?: boolean | undefined;
  icon?: string;
  isError?: boolean | undefined;
  logId: string;
  response: string;
  synthesizedResponse?: string;
  unSynthesizedResponse?: string;
}
```

```ts
interface Section {
  props: SectionProps;
}
```

```ts
interface SectionConfig {
  loadingMessages?: Array<string>;
  maxHeight?: number;
  showCopy?: boolean | undefined;
  showFeedback?: boolean | undefined;
  showPagination?: boolean | undefined;
  showRefresh?: boolean | undefined;
}
```

```ts
interface SectionOverride {
  ctaVariant?: string;
  enableAIGradient?: boolean | undefined;
  renderSingleSection?: boolean | undefined;
  secondaryCTAVariant?: string;
  sectionId?: string;
}
```

```ts
interface SectionProps {
  ambChannelName: string;
  call_to_action?: CallToAction | Array<CallToAction> | undefined;
  default_preset_action?: DefaultPresetAction;
  feedbackProps?: FeedbackProps;
  open_prompt_action?: OpenPromptAction;
  refine_actions?: Array<RefineAction>;
  section_config?: string;
  sys_id: string;
}
```

```ts
interface SkillConfigApiResponse {
  result?: [object Object];
}
```

```ts
interface SkillConfigObj {
  config_type?: string;
  isNewConfig?: boolean | undefined;
  name?: string;
  order?: string;
  props?: [object Object];
  skill_id?: string;
  skillConfigId?: string;
  title?: string;
}
```

```ts
interface SkillSection {
  ambChannelName?: string;
  config_type?: string;
  enforceRerenderTime?: number;
  name?: string;
  order?: string;
  override_sets?: Array<unknown>;
  props: [object Object];
  title?: string;
}
```

```ts
interface TriggerProps {
  additionalInfoOnTrigger?: string;
  autoTriggerDefaultAction?: boolean | undefined;
  enableAIGradient?: boolean | undefined;
  fitToParent?: string | boolean | undefined;
  hasShadow?: boolean | undefined;
  hideButtonOnDialog?: boolean | undefined;
  hidePrimaryIcon?: boolean | undefined;
  icon?: string;
  isButtonEmbedded?: boolean | undefined;
  isCaretForDropdown?: boolean | undefined;
  label?: string;
  minSelectedWordCount?: number;
  openPromptAutoFocus?: boolean | undefined;
  openPromptInputPlaceholder?: string;
  openPromptInputRows?: number;
  openPromptWidth?: number;
  size?: string;
  strictlyUseDefaultPresetAction?: boolean | undefined;
  tooltipContent?: string;
  variant?: string;
}
```

```ts
interface VariableSet {
  config_type?: string;
  isNewConfig?: boolean | undefined;
  name?: string;
  order?: string;
  override_sets?: Array<unknown>;
  props?: VariableSetProps;
  skill_id?: string;
  skillConfigId?: string;
  title?: string;
}
```

```ts
type WrapperVariant = unknown
```

```ts
interface WwnaPayload {
  excludeActions?: Record<string, unknown>;
  reTriggerActions?: Array<{ [key: string]: unknown; sectionId: string; }>;
  sectionsConfig?: Array<{ [key: string]: unknown; sectionId?: string | undefined; renderSingleSection?: boolean | undefined; enableAIGradient?: boolean | undefined; ctaVariant?: string | undefined; secondaryCTAVariant?: string | undefined; }>;
}
```


