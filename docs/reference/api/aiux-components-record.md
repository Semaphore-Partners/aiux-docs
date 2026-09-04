# `@servicenow/aiux-components-record`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-record`

Declares 24 elements, 1 function, 40 types, 4 constants, 5 classes.

## Elements

### `<aiux-activity-stream-filter-set-modal>`

Class `FilterSetModalElement`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `activityAPI` | `IActivityAPI` | yes | no | no |
| `initialFilterSet` | `FilterSet \| undefined` | yes | no | no |
| `open` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `close` | — |

### `<aiux-email-client-attachment-manager>`

Class `AttachmentManager`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `attachments` | `Array<Attachment>` | yes | no | yes |
| `attachmentsOpen` | `boolean` | yes | no | yes |
| `showAttachments` | `boolean` | yes | no | yes |
| `targetRecord` | `string` | yes | no | yes |
| `targetTable` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-email-client:add-from-record` | `{ selectedAttachments: Array<RecordAttachment>; }` |
| `aiux-email-client:alert` | `{ status: AlertStatus; message: string; }` |
| `aiux-email-client:attachments-toggle` | `{ open: boolean; }` |
| `aiux-email-client:browse-record-open` | `{ targetTable: string; targetRecord: string; }` |
| `aiux-email-client:bulk-delete-attachments` | `{ sysIds: Array<string>; }` |
| `aiux-email-client:delete-attachment` | `{ sysId: string; fileName: string; }` |
| `aiux-email-client:rename-attachment` | `{ sysId: string; newName: string; }` |
| `aiux-email-client:upload-files` | `{ files: Array<File>; }` |

### `<aiux-email-client-composer-details>`

Class `ComposerDetails`.

| Event | `detail` |
|---|---|
| `aiux-email-client:mention-recipient-update` | `{ action: "added"; toPills: Array<Recipient>; }` |

### `<aiux-email-client-draft-manager>`

Class `DraftManager`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `currentDraftSysId` | `string` | yes | no | yes |
| `targetRecord` | `string` | yes | no | yes |
| `targetTable` | `string` | yes | no | yes |
| `userSysId` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-email-client:draft-applied` | `{ draftData: DraftData; }` |
| `aiux-email-client:draft-state-change` | `{ showDraftsPanel: boolean; draftsCount: number; draftsList: Array<DraftListItem>; draftsLoading: boolean; selectedDraftPreview: DraftPreviewState \| null; draf…` |
| `aiux-email-client:track-event` | `{ name: "delete_draft"; }` |

### `<aiux-email-client-editor-section>`

Class `EditorSection`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `body` | `string` | yes | no | yes |
| `configMentions` | `Partial<MentionsConfig>` | yes | no | yes |
| `draftSysId` | `string` | yes | no | yes |
| `enableMentions` | `boolean` | yes | no | yes |
| `fitToParent` | `boolean` | yes | no | yes |
| `nacmConfig` | `WwnaNacmConfig \| null` | no | no | yes |
| `preloadMentions` | `Array<MentionItem>` | no | no | yes |
| `ptaSkillConfiguration` | `PTAConfig \| null` | no | no | yes |
| `referringRecordId` | `string` | yes | no | yes |
| `referringTable` | `string` | yes | no | yes |
| `skillConfiguration` | `SkillConfiguration \| null` | no | no | yes |

| Event | `detail` |
|---|---|
| `aiux-email-client:body-change` | `{ value: any; }` |
| `aiux-email-client:editor-blur` | `{ activeElement: Element \| null; }` |
| `aiux-email-client:editor-dblclick` | `{ editor: TinyMCEEditor; }` |
| `aiux-email-client:editor-focus` | — |
| `aiux-email-client:editor-scroll` | `{ editor: TinyMCEEditor; scrollTarget: Document; }` |
| `aiux-email-client:editor-selection-change` | `{ editor: TinyMCEEditor; }` |
| `aiux-email-client:mention-added` | — |
| `aiux-email-client:mention-deleted` | — |
| `aiux-email-client:send-shortcut` | — |
| `aiux-email-client:staged-value-change` | `{ value: any; }` |
| `aiux-email-client:wwna-dialog-closed` | — |
| `aiux-email-client:wwna-insert-recommendation` | `{ wwnaComponentId: "gen_ai_email_response"; value: any; }` |
| `aiux-email-client:wwna-preset-action-clicked` | — |

### `<aiux-email-client-mini-composer>`

Class `NowEmailClientMiniComposerConnected`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `createDraftOnLoad` | `boolean` | yes | no | yes |
| `dirtyFields` | `Array<string>` | yes | no | yes |
| `disableToCcBcc` | `boolean` | yes | no | yes |
| `emailTitle` | `string` | yes | no | yes |
| `emailValidationStatus` | `{ value?: boolean \| undefined; timestamp?: number \| undefined; }` | yes | no | yes |
| `enableMentioningUsers` | `boolean` | yes | no | yes |
| `extraParams` | `string` | yes | no | yes |
| `fitToParent` | `boolean` | yes | yes | yes |
| `forceHorizontalLayout` | `boolean` | yes | no | yes |
| `hideSend` | `boolean` | yes | no | yes |
| `initiateSendEmail` | `boolean` | yes | no | yes |
| `insertLinkInEmail` | `LinkData` | yes | no | yes |
| `loadLatestDraft` | `boolean` | yes | no | yes |
| `popoutIcon` | `string` | yes | no | yes |
| `prefill` | `PrefillData \| undefined` | no | no | no |
| `prePopulatedBcc` | `PrePopulatedInput` | yes | no | yes |
| `prePopulatedCc` | `PrePopulatedInput` | yes | no | yes |
| `prePopulatedTo` | `PrePopulatedInput` | yes | no | yes |
| `replyId` | `string` | yes | no | yes |
| `replyType` | `string` | yes | no | yes |
| `sendEmailButtonColor` | `ButtonColor` | yes | no | yes |
| `sendEmailButtonModifier` | `ButtonModifier \| undefined` | yes | no | no |
| `sendEmailButtonSize` | `ButtonSize` | yes | no | yes |
| `sendEmailButtonVariant` | `string` | yes | no | yes |
| `showAttachments` | `boolean` | yes | no | yes |
| `showCcBcc` | `boolean` | yes | no | yes |
| `showCreateNewEmail` | `boolean` | yes | no | yes |
| `showDiscardDraft` | `boolean` | yes | no | yes |
| `showEmailDetails` | `boolean` | yes | no | yes |
| `showEmailTemplates` | `boolean` | yes | no | yes |
| `showPopOut` | `boolean` | yes | no | yes |
| `showQuickMessages` | `boolean` | yes | no | yes |
| `showRecentDrafts` | `boolean` | yes | no | yes |
| `showResponseTemplates` | `boolean` | yes | no | yes |
| `showSendButtonAsIcon` | `boolean` | yes | no | yes |
| `showViewDrafts` | `boolean` | yes | no | yes |
| `sysId` | `string` | yes | no | yes |
| `targetRecord` | `string` | yes | no | yes |
| `targetTable` | `string` | yes | no | yes |
| `templateDetails` | `TemplateDetailsData` | yes | no | yes |
| `templateMessage` | `TemplateMessageData` | yes | no | yes |
| `templateSysId` | `string` | yes | no | yes |
| `updateEmailSendDraftConfig` | `Array<DraftConfigUpdate>` | yes | no | yes |

### `<aiux-email-client-pill>`

Class `AIUXEmailClientPill`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `ariaLabel` | `string` | yes | no | yes |
| `avatarProps` | `PillAvatarProps` | yes | no | yes |
| `canDismiss` | `boolean` | yes | no | yes |
| `disabled` | `boolean` | yes | no | yes |
| `icon` | `string` | yes | no | yes |
| `id` | `string` | yes | no | yes |
| `invalid` | `boolean` | yes | no | yes |
| `invalidReason` | `string` | yes | no | yes |
| `label` | `string` | yes | no | yes |
| `manageSelected` | `boolean` | yes | no | yes |
| `selected` | `boolean` | yes | no | yes |
| `showContactCard` | `boolean` | yes | no | yes |
| `size` | `PillSize` | yes | no | yes |
| `tooltip` | `string` | yes | no | yes |
| `userData` | `PillUserData` | no | no | yes |

| Event | `detail` |
|---|---|
| `aiux-email-client:pill-click` | `{}` |
| `aiux-email-client:pill-dismiss` | `{}` |

### `<aiux-email-client-reply-to-field>`

Class `ReplyToField`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `value` | `string` | yes | no | yes |
| `visible` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-email-client:reply-to-change` | `{ value: string; isValid: boolean; }` |

### `<aiux-email-client-security-options>`

Class `SecurityOptions`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `digitallySign` | `boolean` | yes | no | yes |
| `encrypt` | `boolean` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-email-client:security-change` | `{ field: string; value: boolean; }` |

### `<aiux-email-client-send-flow>`

Class `SendFlow`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `attachments` | `Array<Attachment>` | yes | no | yes |
| `bccPills` | `Array<Recipient>` | yes | no | yes |
| `body` | `string` | yes | no | yes |
| `ccPills` | `Array<Recipient>` | yes | no | yes |
| `draftSysId` | `string` | yes | no | yes |
| `editorStagedValue` | `string` | yes | no | yes |
| `fromChoices` | `Array<FromChoice>` | yes | no | yes |
| `fromValue` | `string` | yes | no | yes |
| `getEditor` | `(() => any) \| null` | no | no | yes |
| `important` | `boolean` | yes | no | yes |
| `replyToValue` | `string` | yes | no | yes |
| `smimeController` | `SmimeController` | no | no | no |
| `subject` | `string` | yes | no | yes |
| `targetRecord` | `string` | yes | no | yes |
| `targetTable` | `string` | yes | no | yes |
| `templateSysId` | `string` | yes | no | yes |
| `toOptional` | `boolean` | yes | no | yes |
| `toPills` | `Array<Recipient>` | yes | no | yes |
| `userName` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-email-client:alert` | `{ status: AlertStatus; message: string; }` |

### `<aiux-email-client-template-manager>`

Class `TemplateManager`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `targetRecord` | `string` | yes | no | yes |
| `targetTable` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `aiux-email-client:alert` | `{ status: string; message: string; }` |
| `aiux-email-client:template-applied` | `{ tab: TemplateTab; subject: string \| undefined; bodyContent: string; insertMode: string; templateSysId: string; templateName: string; to: string \| undefined; …` |
| `aiux-email-client:template-state-change` | `{ showTemplatesPanel: boolean; activeTemplateTab: TemplateTab; emailTemplates: Array<{ sysId: string; name: string; }>; responseTemplates: Array<{ sysId: strin…` |

### `<aiux-email-client-typeahead>`

Class `AiuxEmailClientTypeahead`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `active` | `boolean` | yes | no | yes |
| `availableItems` | `Array<TypeaheadAvailableItem>` | yes | no | yes |
| `dataState` | `string` | yes | no | yes |
| `draftId` | `string` | yes | no | yes |
| `encryptionEnabled` | `boolean` | yes | no | yes |
| `invalidCertificateEmails` | `Array<string>` | no | no | yes |
| `label` | `string` | yes | no | yes |
| `labelClass` | `string` | yes | no | yes |
| `onBatchPaste` | `((items: Array<TypeaheadAvailableItem>) => void) \| undefined` | no | no | no |
| `onBlur` | `((detail: { dataState: string; }) => void) \| undefined` | no | no | no |
| `onClose` | `((source: TypeaheadCloseSource, inputValue: string) => void) \| undefined` | no | no | no |
| `onCopy` | `((pills: Array<TypeaheadPillItem>) => void) \| undefined` | no | no | no |
| `onCut` | `(() => void) \| undefined` | no | no | no |
| `onDragStart` | `((pillIndices: Array<number>) => void) \| undefined` | no | no | no |
| `onDrop` | `((detail: DropDetail) => void) \| undefined` | no | no | no |
| `onEdit` | `((pill: TypeaheadPillItem) => void) \| undefined` | no | no | no |
| `onFocus` | `((detail: { dataState: string; }) => void) \| undefined` | no | no | no |
| `onInput` | `((detail: { dataState: string; value: string; }) => void) \| undefined` | no | no | no |
| `onOpen` | `((source: TypeaheadOpenSource) => void) \| undefined` | no | no | no |
| `onPaste` | `((detail: { dataState: string; count: number; totalCount: number; }) => void) \| undefined` | no | no | no |
| `onPillRemove` | `((index: number) => void) \| undefined` | no | no | no |
| `onSelect` | `((item: TypeaheadAvailableItem, isManual?: boolean \| undefined) => void) \| undefined` | no | no | no |
| `opened` | `boolean` | yes | no | yes |
| `pillItems` | `Array<TypeaheadPillItem>` | yes | no | yes |
| `placeholder` | `string` | yes | no | yes |
| `required` | `boolean` | yes | no | yes |
| `useApiSearch` | `boolean` | yes | no | yes |

### `<aiux-email-client-view-drafts-modal>`

Class `AIUXEmailClientViewDraftsModal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `draftManager` | `DraftManager \| null` | no | no | yes |

| Event | `detail` |
|---|---|
| `aiux-email-client:manage-modal-closed-with-deletion` | — |

### `<aiux-form-editable-section-label>`

Class `AIUXFormEditableSectionLabel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `label` | `string` | yes | no | yes |
| `onRename` | `(e: InputEvent) => void` | no | no | no |

### `<aiux-list-activity>`

Class `ListActivity`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `headerLabel` | `string` | yes | no | yes |
| `query` | `string` | yes | no | yes |
| `table` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `LIST_ACTIVITY#CLOSE_BUTTON_CLICKED` | `{ keyboardActivated: boolean; }` |
| `LIST_ACTIVITY#OPEN_RECORD_CLICKED` | `{ table: string; sysId: string; }` |

### `<aiux-record-activity-attachment>`

Class `AIUXRecordActivityAttachment`.

_No public properties, events, or slots declared._

### `<aiux-record-activity-audit>`

Class `AIUXRecordActivityAudit`.

_No public properties, events, or slots declared._

### `<aiux-record-activity-relation>`

Class `AIUXRecordActivityRelationship`.

_No public properties, events, or slots declared._

### `<aiux-record-activity-stream-attachment-card>`

Class `AIUXRecordActivityStreamAttachmentCard`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `inlinePreview` | `boolean` | yes | no | yes |
| `item` | `AttachmentItem` | yes | no | yes |

### `<aiux-record-form-modal>`

Class `AIUXRecordFormModal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `formProps` | `Partial<Pick<AIUXRecordForm, "layoutVariant" \| "labelValueLayout" \| "alwaysDisplayFirstSection" \| "editMode" \| "variant" \| "displayEmptyFields" \| "hideSectionH…` | no | no | no |
| `reportResult` | `((result: FormModalResult) => void) \| undefined` | no | no | no |
| `showRelatedLists` | `boolean` | yes | no | yes |
| `sysId` | `string` | yes | no | yes |
| `table` | `string` | yes | no | yes |
| `view` | `string \| undefined` | yes | no | no |

### `<aiux-record-provider>`

Class `AIUXRecordProvider`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `collectionKey` | `string` | yes | no | yes |
| `collectionRelatedField` | `string` | yes | no | yes |
| `collectionRelationship` | `string` | yes | no | yes |
| `contextId` | `string` | yes | no | yes |
| `data` | `RecordFetchResult \| undefined` | no | no | no |
| `disablePresence` | `boolean` | yes | no | yes |
| `exposeActionsToChat` | `boolean` | yes | no | yes |
| `forcedViewName` | `string` | yes | no | yes |
| `formHandlers` | `RecordHandlers` | no | no | yes |
| `ignoreUserViewPreference` | `boolean` | yes | no | yes |
| `isCoreUI` | `boolean` | yes | no | yes |
| `linkCollection` | `string` | yes | no | yes |
| `notifications` | `NotificationsConfig \| undefined` | no | no | no |
| `onOpenList` | `(table: string, query?: string \| undefined) => void` | no | no | yes |
| `onOpenRecord` | `(table: string, sysId: string) => void` | no | no | yes |
| `parentRecordSysId` | `string` | yes | no | yes |
| `parentTable` | `string` | yes | no | yes |
| `query` | `string` | yes | no | yes |
| `requiredAPIs` | `Array<RecordAPIKey> \| undefined` | no | no | no |
| `showErrorDetails` | `boolean` | yes | no | yes |
| `sysId` | `string` | yes | no | yes |
| `table` | `string` | yes | no | yes |
| `view` | `string` | yes | no | yes |

### `<aiux-timeago>`

Class `AIUXTimeAgo`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `timestamp` | `string` | yes | no | yes |
| `verbose` | `boolean` | yes | no | yes |

### `<aiux-translation-panel>`

Class `AIUXRecordTranslationPanel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `isLoading` | `boolean \| undefined` | no | no | no |
| `onClose` | `(() => void) \| undefined` | no | no | no |
| `onRetry` | `(() => void) \| undefined` | no | no | no |
| `response` | `{ data?: TranslationData \| undefined; errors?: Record<string, TranslationError> \| undefined; } \| undefined` | no | no | no |

### `<now-field-selector-modal>`

Class `FieldSelectorModalElement`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `availableFields` | `Array<FilterOption>` | yes | no | yes |
| `error` | `string` | yes | no | yes |
| `loading` | `boolean` | yes | no | yes |
| `open` | `boolean` | yes | no | yes |
| `selectedFields` | `Array<FilterOption>` | yes | no | yes |
| `table` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `close` | — |
| `save` | `{ selectedFields: Array<FilterOption>; }` |

## Functions

```ts
withRecordContext(superClass: T): Constructor<RecordContextMixinInterface> & RecordContextMixinStatics & T
```

## Constants

| Name | Type |
|---|---|
| `createGraphQLClient` | `(httpClient?: IHttpClient) => IGraphQLClient` |
| `createHttpClient` | `() => IHttpClient` |
| `DEFAULT_VIEW_NAME` | `"Default view"` |

```ts
const RecordContext: {
  _name: string;
  _registerConsumer: (host: HTMLElement) => () => void;
  _scoped: true;
  _subscribeCollector: (callback: Function) => () => void;
  collect: () => Array<RecordContextValue>;
  get: (host: HTMLElement) => RecordContextValue;
  getById: (id: string) => RecordContextValue;
  provide: (host: HTMLElement, value: RecordContextValue, id?: string | undefined) => void;
  unprovide: (host: HTMLElement) => void;
}
```

## Types

```ts
interface Attachment {
  attachment: [object Object];
  attachmentId: string;
  contentDisposition: string;
  draftId: string;
  sysId: string;
  uploading?: boolean | undefined;
}
```

```ts
interface AttachmentItem {
  canDelete?: boolean | undefined;
  canEditName?: boolean | undefined;
  document?: [object Object];
  isEncrypted?: boolean | undefined;
  isLoading?: boolean | undefined;
  name: string;
  readonly?: boolean | undefined;
  sensitive?: boolean | undefined;
  size: string | number;
  state?: string;
  sysId: string;
  tempId?: string;
  thumbnailUrl?: string;
  type: string;
  uploadProgress?: number;
}
```

```ts
type ButtonColor = unknown
```

```ts
type ButtonSize = unknown
```

```ts
interface DataLookupField {
  definitions: Array<DataLookupDefinition>;
  field: string;
}
```

```ts
interface DraftConfigUpdate {
  key: string;
  value: string | number | boolean | object | null;
}
```

```ts
interface FilterOption {
  eventTable: string;
  group?: FilterGroup | undefined;
  isAI?: boolean | undefined;
  journal: boolean;
  label: string;
  name: string;
  selected: boolean;
  specialField: boolean;
  subType: string;
}
```

```ts
interface FromChoice {
  id: number;
  label: string;
}
```

```ts
type HttpMethod = unknown
```

```ts
type HttpRequestParams = unknown
```

```ts
type HttpResponseFormat = unknown
```

<details>
<summary><code>interface IActivityAPI</code> (49 members)</summary>

```ts
interface IActivityAPI {
  addEvent: (event: ActivityEvent) => void;
  applyFieldSelectorSave: (selectedFields: Array<FilterOption>) => void;
  applyFilterSet: (filterSet: FilterSet) => void;
  availableFields: Array<FilterOption>;
  buildSupplementalPayload: (key: string, value: number | boolean | Record<string, any>, isForDocument: boolean) => string;
  clearAllFilters: (group: FilterGroup) => Promise<void>;
  clearLiveEventIds: () => void;
  deleteFilterSet: (id: string) => Promise<void>;
  eventCounts: ActivityEventCounts;
  events: Array<ActivityEvent>;
  fetchEmailAttachments: (event: ActivityEvent) => Promise<Array<EmailAttachment>>;
  fetchFilterSets: () => Promise<void>;
  fetchFullContent: (eventSysId: string) => Promise<void>;
  fieldSelectorError: string;
  filterOptions: [object Object];
  filterSets: Array<FilterSet>;
  findEventById: (sysId: string) => ActivityEvent | undefined;
  getAccentColor: (event: ActivityEvent) => AccentColor;
  getAvatarUrl: (avatar: string) => string;
  getBackgroundColor: (event: ActivityEvent) => AccentColor | undefined;
  getDynamicTranslationData: (eventSysId: string) => DynamicTranslationData | undefined;
  getFieldSelectorData: () => Promise<void>;
  getIconColor: (event: ActivityEvent) => AccentColor;
  getSortDirection: () => SortDirectionValue;
  getSupplementalValue: (key: string, getFromTable: boolean, defaultValue?: number | boolean | Record<string, any> | undefined) => number | boolean | Record<string, any> | undefined;
  getTranslationResponse: (activityEvent: ActivityEvent) => Promise<TranslationResponse>;
  getUserFilterOptions: () => Array<FilterOption>;
  getUserInfo: (user: string) => UserReference;
  isDynamicTranslationEnabled: () => boolean;
  isFieldSelectorLoading: boolean;
  isFiltering: boolean;
  isFlaggedOnly: boolean;
  isInlinePreviewEnabled: boolean;
  liveEventIds: Set<string>;
  persistToSupplemental: (payload: string, eventId: string, isForDocument: boolean, isForAllUsers: boolean) => Promise<void>;
  reload: () => Promise<void>;
  resetAllFilters: () => Promise<void>;
  saveFilterSet: (filterSet: FilterSet) => Promise<void>;
  selectAllFilters: (group: FilterGroup) => Promise<void>;
  selectedFields: Array<FilterOption>;
  setDynamicTranslationData: (eventSysId: string, data: DynamicTranslationData) => void;
  setEventFavorite: (eventSysId: string, favoriteValue: boolean) => void;
  setEventFlag: (eventSysId: string, flagValue: boolean) => void;
  setFlagged: (value: boolean) => void;
  setSelectedFilter: (group: FilterGroup, name: string, selected: boolean) => void;
  setSortDirection: (direction: SortDirectionValue) => void;
  state: ActivityState;
  supplemental: SupplementalMap;
  userFilters: Record<string, UserFilterState>;
}
```

</details>

```ts
interface IAMBService {
  subscribe: <T extends object>(name: string, callback: MessageCallback<T>) => AMBSubscription;
  subscribeToRecordWatcher: <T extends object>(table: string, query: string, callback: MessageCallback<T>, actionPrefix?: string | undefined) => AMBSubscription;
}
```

```ts
interface ICommonAPI {
  closeModal: () => void;
  notifications: INotificationsAPI;
  onModalEvent: (event: ModalEventType, callback: () => void) => () => void;
  openAlertModal: (options: AlertModalOptions) => Promise<void>;
  openConfirmDestroyModal: (options: ConfirmModalOptions) => Promise<boolean>;
  openConfirmModal: (options: ConfirmModalOptions) => Promise<boolean>;
  openContentModal: (options: ContentModalOptions) => Promise<boolean>;
  openFieldsModal: (options: ShowFieldsModalOptions) => Promise<ShowFieldsModalResult>;
  openFormModal: (options: FormModalOptions) => Promise<FormModalResult>;
  openIframeModal: (options: ShowFrameModalOptions) => Promise<boolean>;
  openList: (table: string, query?: string | undefined) => void;
  openRecord: (table: string, sysId: string) => void;
  openRichTextModal: (options: RichTextModalOptions) => Promise<boolean>;
  openWidgetModal: (options: WidgetModalOptions) => Promise<ModalWidgetResult>;
  setModalContent: (content: unknown) => void;
  setModalSize: (size: ModalSizeType) => void;
  setModalTitle: (title: string) => void;
  setWidgetProps: (props: Record<string, unknown>) => void;
  state: Record<string, unknown>;
}
```

<details>
<summary><code>interface IFormAPI</code> (46 members)</summary>

```ts
interface IFormAPI {
  addFormMessage: (formMessage: FormMessage) => void;
  annotations: Annotations;
  applyTemplateValue: (fieldName: string, value: unknown, displayValue?: string | Array<string> | undefined) => void;
  canPersonalize: boolean;
  changeView: (view: string) => Promise<void>;
  clearAllFormMessages: () => void;
  clearCursorPosition: (fieldName: string) => void;
  clearFormMessage: (index: number) => void;
  clearFormMessages: (type: FormMessageType) => void;
  clearTransactionScope: () => void;
  clearValue: (fieldName: string) => void;
  dataLookup: DataLookupData;
  disableAttachments: boolean;
  encodedRecord: string;
  fields: Record<string, FormField>;
  formMessages: Array<FormMessage>;
  getCursorPosition: (fieldName: string) => number | null;
  getDirtyFields: () => Record<string, boolean>;
  getDisplayValue: (fieldName: string) => unknown;
  getField: (fieldName: string) => FormField | null;
  getValue: (fieldName: string) => unknown;
  header: RecordHeaderData;
  insertContentAtCursor: (fieldName: string, content: string) => void;
  isAiCreatedRecord: boolean;
  isDirty: () => boolean;
  isNewRecord: boolean;
  isValidRecord: boolean;
  layout: FormLayoutData;
  preferences: FormPersonalization;
  reload: () => Promise<void>;
  save: () => Promise<void>;
  sections: Array<FormSection>;
  serializedChanges: Array<FormField>;
  setCursorPosition: (fieldName: string, position: number) => void;
  setTransactionScope: (scopeId: string | null) => void;
  setValue: (fieldName: string, value: string, displayValue?: string | Array<string> | undefined) => void;
  setVisible: (fieldName: string, visibility: boolean) => void;
  state: FormState;
  submit: (submitActionName?: string | undefined) => Promise<void>;
  sysId: string;
  table: string;
  transactionScope: string;
  validate: () => Promise<boolean>;
  validators: ValidatorsData;
  view: string;
  viewData: ViewData;
}
```

</details>

```ts
interface IGraphQLClient {
  mutate: <T = unknown>(mutation: string, variables?: Record<string, unknown> | undefined, options?: GraphQLRequestOptions | undefined) => Promise<GraphQLResponse<T>>;
  query: <T = unknown>(query: string, variables?: Record<string, unknown> | undefined, options?: GraphQLRequestOptions | undefined) => Promise<GraphQLResponse<T>>;
}
```

```ts
interface IHttpClient {
  applyResponseInterceptors: (response: unknown, options?: HttpClientRequestOptions | undefined, context?: HttpResponseContext | undefined) => void;
  delete: <T = unknown>(url: string, options?: Partial<{ headers: Record<string, string>; credentials: RequestCredentials; params: HttpRequestParams; responseFormat: HttpResponseFormat; enableSessionMessages: boolean; }> | undefined) => Promise<T>;
  get: <T = unknown>(url: string, options?: Partial<{ headers: Record<string, string>; credentials: RequestCredentials; params: HttpRequestParams; responseFormat: HttpResponseFormat; enableSessionMessages: boolean; }> | undefined) => Promise<T>;
  post: <T = unknown>(url: string, body: BodyInit, options?: Partial<{ headers: Record<string, string>; credentials: RequestCredentials; params: HttpRequestParams; responseFormat: HttpResponseFormat; enableSessionMessages: boolean; }> | undefined) => Promise<T>;
  put: <T = unknown>(url: string, body: BodyInit, options?: Partial<{ headers: Record<string, string>; credentials: RequestCredentials; params: HttpRequestParams; responseFormat: HttpResponseFormat; enableSessionMessages: boolean; }> | undefined) => Promise<T>;
  request: <T = unknown>(url: string, method: HttpMethod, options?: HttpClientRequestOptions | undefined) => Promise<T>;
  requestSync: <T = unknown>(url: string, method: HttpMethod, options?: HttpClientRequestOptions | undefined) => T | null;
  withRequestInterceptor: (interceptor: RequestInterceptor) => IHttpClient;
  withResponseInterceptor: (interceptor: ResponseInterceptor) => IHttpClient;
}
```

```ts
interface IPresenceAPI {
  getPresenceUserDetails: (userId: string) => Promise<PresenceUserDetails | null>;
  onViewersChanged: (callback: ListenerCallback) => { unsubscribe(): void; };
  state: Record<string, unknown>;
}
```

```ts
interface LinkData {
  actionInfo?: [object Object];
  direction?: string;
  message?: [object Object];
  timestamp?: number;
}
```

```ts
interface MentionItem {
  avatar: string;
  id: string;
  name: string;
  secondary: string;
  value: string;
}
```

```ts
interface MentionsConfig {
  enableMentions: boolean;
  fetch: (query: string | { term: string; }) => Promise<Array<MentionItem>>;
}
```

```ts
interface PillAvatarProps {
  imageSrc?: string;
  presence?: string;
  userName?: string;
}
```

```ts
type PillSize = unknown
```

```ts
interface PillUserData {
  avatarLink?: string;
  displayName?: string;
  emailAddress?: string;
  id?: string;
  recipientSource?: string;
  recipientSourceTable?: string;
}
```

```ts
type PrePopulatedInput = /* structural type; see the package .d.ts */
```

```ts
interface PresenceAMBMessage {
  session_id: string;
  status: PresenceStatus;
  sys_id: string;
  table: string;
  user_avatar: string;
  user_display_name: string;
  user_id: string;
  user_initial: string;
}
```

```ts
interface PresenceUser {
  avatar: string;
  displayName: string;
  initials: string;
  status: PresenceStatus;
  sysId: string;
}
```

```ts
interface Recipient {
  additionalFields?: Array<NameValuePair>;
  avatar?: string;
  displayName: string;
  emailAddress: string;
  id?: string;
  invalidReason?: string;
  isValid?: boolean | undefined;
  recipientSource?: string;
  recipientSourceTable?: string;
  recipientType?: string;
  sysId?: string;
}
```

```ts
interface RecordAPIs {
  actions: IActionsAPI;
  activity: IActivityAPI;
  citation: ICitationAPI;
  common: ICommonAPI;
  compose: IComposeAPI;
  domain: IDomainAPI;
  email: IRecordEmailAPI;
  form: IFormAPI;
  presence: IPresenceAPI;
  relatedList: IRelatedListsAPI;
  user: IUserAPI;
}
```

```ts
interface RecordConfig {
  collectionKey?: string;
  collectionRelatedField?: string;
  collectionRelationship?: string;
  forcedViewName?: string;
  ignoreUserViewPreference?: boolean | undefined;
  isCoreUI?: boolean | undefined;
  linkCollection?: string;
  parentRecordSysId?: string;
  parentTable?: string;
  query?: string;
  sysId: string;
  table: string;
  view?: string;
}
```

```ts
interface RecordContextValue {
  apis: RecordAPIs;
  error: Error;
  loading: boolean;
  registerAPIs: (apiKeys: Array<RecordAPIKey>) => void;
  reload: () => Promise<void>;
  scripting: Readonly<ScriptingAPIs>;
  services: RecordServices;
}
```

```ts
type RecordFetchResult = unknown
```

```ts
interface RecordHandlers {
  onChange?: OnChangeHandler;
  onChanged?: OnChangedHandler;
  onLiveUpdated?: OnLiveUpdatedHandler;
  onPropertyChange?: OnPropertyChangeHandler;
  onStateChange?: OnStateChangeHandler;
  onSubmit?: OnSubmitHandler;
  onSubmitFailed?: OnSubmitFailedHandler;
  onSubmitSucceeded?: OnSubmitSucceededHandler;
  onSubmitted?: OnSubmittedHandler;
  onUserChange?: OnChangeHandler;
}
```

```ts
type RecordHeaderData = {
  recordDisplayValue?: string;
  tableDisplayValue?: string;
}
```

```ts
interface RelatedListDefinition {
  count: number;
  field: string;
  fixedQuery: string;
  heading: string;
  id: string;
  label: string;
  omitIfEmpty?: boolean | undefined;
  parentRecordSysId: string;
  parentTable: string;
  relatedListName: string;
  table: string;
  value: string;
  view: string;
  visible: boolean;
}
```

```ts
interface TemplateDetailsData {
  body?: string;
  bodyHtml?: string;
  name?: string;
  subject?: string;
  sys_id?: string;
  templateSysId?: string;
  templateTable?: string;
  templateTitle?: string;
  timestamp?: number;
}
```

```ts
interface TemplateMessageData {
  actionType?: string;
  bodyText?: string;
  contentPlacement?: string;
}
```

```ts
interface TypeaheadAvailableItem {
  avatar?: string;
  displayName: string;
  emailAddress: string;
  recipientSource?: string;
  recipientSourceTable?: string;
}
```

```ts
interface TypeaheadPillItem {
  avatar?: string;
  displayName?: string;
  emailAddress?: string;
  id?: string;
  invalidReason?: string;
  isValid?: boolean | undefined;
  recipientSource?: string;
  recipientSourceTable?: string;
}
```

```ts
interface UIAction {
  actionName: string;
  disabled: boolean;
  formStyle?: UIActionStyle | undefined;
  hint?: string;
  id: string;
  isClient: boolean;
  name: string;
  onClick?: string;
  order: number;
  script?: string;
  visible: boolean;
}
```

## Classes

```ts
class AIUXRecordCompose {
  bare: boolean;
  firstUpdated(_changedProperties: [object Object]): void;
  focusComposer(): Promise<void>;
  isSideBySide(): boolean;
  main: boolean;
  onEditorChange(field: FormField): (e: Event) => void;
  onEditorFocusOut(field: FormField): (e: FocusEvent) => void;
  onEditorStagedValueChange(field: FormField): (e: Event) => void;
  onPost(field: FormField): () => void;
  onTabChange(field: FormField): () => void;
  render(): TemplateResult<1>;
  renderCompactView(): TemplateResult<1>;
  renderSettings(): TemplateResult<1>;
  renderStackedView(): TemplateResult<1>;
  renderTab(field: FormField): TemplateResult<1>;
  toggleSideBySide(): () => void;
  toggleView(): () => void;
  updated(_changedProperties: [object Object]): void;
  useDropdown: boolean;
}
```

```ts
class AIUXRecordElement {

}
```

```ts
class FormValidationError {

}
```

```ts
class HttpError {
  data: T;
  status: number;
}
```

```ts
class RecordDataManager {

}
```


