# `@servicenow/aiux-components-attachment`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-attachment`

Declares 6 elements, 57 functions, 18 types, 21 constants, 1 class.

## Elements

### `<aiux-attachment-notifications>`

Class `AIUXAttachmentNotifications`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `notifications` | `Array<AttachmentNotificationItem>` | no | no | yes |

| Event | `detail` |
|---|---|
| `attachment-notifications:dismiss` | `{ id: number; }` |

### `<aiux-record-core-attachment>`

Class `AIUXRecordCoreAttachment`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `actionConfigId` | `string` | yes | yes | yes |
| `allowedFileTypes` | `string` | yes | yes | yes |
| `classicForm` | `boolean` | yes | yes | yes |
| `customUploadInstruction` | `string` | yes | yes | yes |
| `disableUploadModal` | `boolean` | yes | yes | yes |
| `emptyPanelSize` | `EmptyPanelSize` | yes | yes | yes |
| `enableDocumentManagement` | `boolean` | yes | yes | yes |
| `fileManagementHeader` | `string` | yes | yes | yes |
| `filePreviewItem` | `AttachmentItem \| null` | yes | no | yes |
| `hideFooter` | `boolean` | yes | yes | yes |
| `isFileEditDisabled` | `boolean` | yes | yes | yes |
| `isFileUploadDisabled` | `boolean` | yes | yes | yes |
| `isMultiFileUpload` | `boolean` | yes | yes | yes |
| `isReadOnly` | `boolean` | yes | yes | yes |
| `loadDocViewerIfNecessary` | `boolean` | yes | yes | yes |
| `maxFileSizeAllowed` | `string` | yes | yes | yes |
| `mode` | `"full" \| "compact" \| "custom"` | yes | yes | yes |
| `nowDsDomainId` | `string` | yes | yes | yes |
| `nowDsDomainScope` | `string` | yes | yes | yes |
| `nowDsRecordId` | `string` | yes | yes | yes |
| `nowDsRecordTable` | `string` | yes | yes | yes |
| `overlayContainer` | `string` | yes | yes | yes |
| `previewModalOnUpload` | `boolean` | yes | yes | yes |
| `primaryUpfrontAction` | `string` | yes | yes | yes |
| `recordDisplayValue` | `string` | yes | yes | yes |
| `refreshRequested` | `number` | yes | no | yes |
| `selectedFiles` | `Set<string>` | yes | no | yes |
| `showCompactModeDropZone` | `boolean` | yes | yes | yes |
| `showFilePreview` | `boolean` | yes | no | yes |
| `showMetadata` | `boolean` | yes | yes | yes |
| `showSearch` | `boolean` | yes | yes | yes |
| `showSkeletonLoader` | `boolean` | yes | yes | yes |
| `showThumbnails` | `boolean \| undefined` | yes | no | no |
| `showUploadInstruction` | `string` | yes | yes | yes |
| `skipPreviewForUnsupportedFileTypes` | `boolean` | yes | yes | yes |
| `sysId` | `string \| undefined` | yes | yes | yes |
| `table` | `string \| undefined` | yes | yes | yes |
| `thumbnailSize` | `ThumbnailSize` | yes | yes | yes |
| `view` | `string` | yes | yes | yes |

### `<aiux-record-core-attachment-card>`

Class `AIUXRecordCoreAttachmentCard`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `canCreate` | `boolean` | yes | no | yes |
| `canEdit` | `boolean` | yes | no | yes |
| `displayInProgressBar` | `boolean` | yes | no | yes |
| `dropdownDirection` | `"top" \| "bottom"` | yes | no | yes |
| `isDeleting` | `boolean` | yes | no | yes |
| `isRenaming` | `boolean` | yes | no | yes |
| `isSelected` | `boolean` | yes | no | yes |
| `item` | `AttachmentItem` | yes | no | yes |
| `maxFileNameLength` | `number` | yes | no | yes |
| `mode` | `Mode` | yes | no | yes |
| `primaryUpfrontAction` | `string \| null` | yes | no | yes |
| `showMetadata` | `boolean` | yes | no | yes |
| `showThumbnails` | `boolean` | yes | no | yes |
| `thumbnailSize` | `ThumbnailSize` | yes | no | yes |

| Event | `detail` |
|---|---|
| `checkbox-changed` | `{ checked: boolean; item: AttachmentItem; }` |
| `delete-clicked` | — |
| `download-clicked` | — |
| `preview-clicked` | — |
| `rename-submit` | — |

### `<aiux-record-core-attachment-list>`

Class `AIUXRecordCoreAttachmentList`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `canCreate` | `boolean` | yes | no | yes |
| `canEdit` | `boolean` | yes | no | yes |
| `deletingItemIds` | `Set<string>` | yes | no | yes |
| `dropZoneHeading` | `string` | yes | no | yes |
| `editingItemId` | `string \| null` | yes | no | yes |
| `emptyPanelSize` | `EmptyPanelSize \| undefined` | yes | no | yes |
| `filesNotFound` | `boolean` | yes | no | yes |
| `list` | `Array<AttachmentItem>` | yes | no | yes |
| `loadingList` | `Array<AttachmentItem>` | yes | no | yes |
| `maxFileNameLength` | `number` | yes | no | yes |
| `mode` | `string` | yes | no | yes |
| `primaryUpfrontAction` | `string` | yes | no | yes |
| `renamingItemId` | `string \| null` | yes | no | yes |
| `selectedFiles` | `Set<string>` | yes | no | yes |
| `showCompactModeDropZone` | `boolean` | yes | no | yes |
| `showMetadata` | `boolean` | yes | no | yes |
| `showThumbnails` | `boolean` | yes | no | yes |
| `thumbnailSize` | `ThumbnailSize` | yes | no | yes |
| `uploadProgress` | `{ completed: number; succeeded: number; total: number; } \| null` | yes | no | yes |

| Event | `detail` |
|---|---|
| `select-all` | `{ checked: boolean; }` |
| `upload-clicked` | — |

### `<aiux-record-core-attachment-preview>`

Class `AIUXRecordCoreAttachmentPreview`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `item` | `AttachmentItem \| null` | yes | no | yes |

### `<aiux-record-core-attachment-upload>`

Class `AIUXRecordCoreAttachmentUploadModal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `files` | `Array<File>` | yes | no | yes |
| `isRowEncrypted` | `boolean` | yes | no | yes |
| `maxFileNameLength` | `number` | yes | no | yes |
| `userCryptoModules` | `Array<CryptoModule>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `upload-cancel` | — |
| `upload-confirm` | `{ files: Array<{ file: File; fileName: string; cryptoModuleId: string \| null; }>; }` |
| `validity-change` | `{ isValid: boolean; fileCount: number; }` |

## Functions

```ts
createErrorNotification(message: string): { notifications: Array<{ type: "error"; message: string; contentType: string; }> }
deleteAttachment(sysId: string): Promise<number>
deleteMultipleAttachments(sysIds: Array<string>): Promise<any>
downloadAllAttachments(sysId: string, attachmentIds: Array<string>, table: string): void
downloadAttachment(sysId: string, fileName: string): void
downloadSelectedAttachments(sysId: string, selectedAttachmentIds: Array<string>, table: string): void
fetchAttachments(table: string, sysId: string, fetchDocument: boolean): Promise<any>
formatDate(dateString: string): string
formatFileSize(bytes: number): string
generateId(): string
generateUniqueFileName(fileName: string, existingNames: Array<string>): string
getAttachmentSize(attachmentSize: number): string
getDownloadUrl(sysId: string): string
getExtensionFromFileName(name: string): string
getFileCategoryFromMimeType(type: string): FileCategory
getFileExtensionLabel(fileExtension: string): string
getFileIconColor(type: string): string
getFileIconSvg(type: string, sizeClass: string, thumbnailSize?: IconSize | undefined): TemplateResult
getFileName(item: AttachmentItem): string
getFileNameWithoutExtension(item: AttachmentItem): string
getFileSize(item: AttachmentItem): string
getFormattedFileName(fileData: [object Object]): string
getIcon(key: "SORT" | "SORT_DESC" | "MORE" | "SEARCH" | "UPLOAD" | "DOWNLOAD" | "DELETE" | "CLOSE"): TemplateResult
getIconForFileType(fileName: string): FileIconName
getMaxInputLength(rawExtension: string, maxLength: number): number
getMaxLabelLength(extension: string, maxLength: number): number
getThumbnailUrl(sysId: string, size: string): string
getTruncatedLabelFromFileName(fileName: string, maxLength: number): string
hasExtensionChanged(item: AttachmentItem, newName: string): boolean
isAudioFile(type: string): boolean
isDocumentFile(type: string): boolean
isFileDeleting(item: AttachmentItem): boolean
isFileExtensionAllowed(fileName: string, allowedExtensions: Array<string>): boolean
isFileSizeValid(fileSize: number, maxSize: number): boolean
isFileTypeAllowed(fileType: string, allowedTypes: Array<string>): boolean
isFileUnavailable(item: AttachmentItem): boolean
isFileUploading(item: AttachmentItem): boolean
isImageFile(type: string): boolean
isImageType(type: string): boolean
isPreviewableImageType(type: string): boolean
isTrue(prop: string | boolean): boolean
isVideoFile(type: string): boolean
loadDocumentViewer(): Promise<unknown>
parseAllowedExtensions(extensionsStr: string): Array<string>
readFileAsDataURL(file: File): Promise<string>
readFileAsText(file: File): Promise<string>
renderAttachmentDeleteConfirm(props: DeleteConfirmModalProps): TemplateResult
renderAttachmentDropZone(props: AttachmentDropZoneProps): TemplateResult
renderAttachmentPreview(props: PreviewModalProps): TemplateResult
sanitizeFileName(fileName: string): string
stripExtensionFromFileName(fileName: string): string
toEmbeddableUrl(url: string): string
triggerDownload(url: string, fileName: string): void
truncateAttachmentLabel(value: string, maxLength: number): string
updateAttachment(sysId: string, fileName: string): Promise<any>
uploadAttachment(table: string, sysId: string, file: File, cryptoModuleId: string): Promise<any>
validateFileName(fileName: string, maxLength: number): { error?: string; valid: boolean }
```

## Constants

| Name | Type |
|---|---|
| `ATTACHMENT_ELEMENT` | `"aiux-record-core-attachment"` |
| `DEFAULT_LIST_SIZE` | `3` |
| `DEFAULT_MAX_FILE_SIZE` | `number` |
| `MAX_FILE_NAME_LENGTH` | `255` |

```ts
const ALLOWED_THUMBNAIL: {
  at: (index: number) => string | undefined;
  concat: { (...items: Array<ConcatArray<string>>): Array<string>; (...items: Array<string | ConcatArray<string>>): Array<string>; };
  copyWithin: (target: number, start: number, end?: number | undefined) => Array<string>;
  entries: () => ArrayIterator<[number, string]>;
  every: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): boolean; };
  fill: (value: string, start?: number | undefined, end?: number | undefined) => Array<string>;
  filter: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): Array<string>; };
  find: { <S extends string>(predicate: (value: string, index: number, obj: Array<string>) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any): string | undefined; };
  findIndex: (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any) => number;
  flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => Array<FlatArray<A, D>>;
  flatMap: <U, This = undefined>(callback: (this: This, value: string, index: number, array: Array<string>) => U | ReadonlyArray<U>, thisArg?: This | undefined) => Array<U>;
  forEach: (callbackfn: (value: string, index: number, array: Array<string>) => void, thisArg?: any) => void;
  includes: (searchElement: string, fromIndex?: number | undefined) => boolean;
  indexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  join: (separator?: string | undefined) => string;
  keys: () => ArrayIterator<number>;
  lastIndexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  length: number;
  map: <U>(callbackfn: (value: string, index: number, array: Array<string>) => U, thisArg?: any) => Array<U>;
  pop: () => string | undefined;
  push: (...items: Array<string>) => number;
  reduce: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reduceRight: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reverse: () => Array<string>;
  shift: () => string | undefined;
  slice: (start?: number | undefined, end?: number | undefined) => Array<string>;
  some: (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any) => boolean;
  sort: (compareFn?: ((a: string, b: string) => number) | undefined) => Array<string>;
  splice: { (start: number, deleteCount?: number | undefined): Array<string>; (start: number, deleteCount: number, ...items: Array<string>): Array<string>; };
  toLocaleString: { (): string; (locales: string | Array<string>, options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; };
  toString: () => string;
  unshift: (...items: Array<string>) => number;
  values: () => ArrayIterator<string>;
}
```

```ts
const ATTACHMENT_IMAGE_LOOKUP: {
  archive: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  audio: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  code: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  default: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  document: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  image: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  pdf: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  presentation: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  spreadsheet: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  text: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
  video: "document-outline" | "document-archive-outline" | "document-audio-outline" | "document-blank-outline" | "document-code-outline" | "document-excel-outline" | "document-image-outline" | "document-pdf-outline" | "document-powerpoint-outline" | "document-video-outline";
}
```

```ts
const DELETE_MESSAGES: {
  FAILED_BODY: string;
  FAILED_HEADER: string;
  MULTI_BODY: string;
  MULTI_HEADER: string;
  multiDeleteBody: (count: number) => string;
  multiDeleteConfirm: (count: number) => string;
  multiDeleteTitle: (count: number) => string;
  PARTIAL_HEADER: string;
  partialDeleteBody: (modified: number, total: number) => string;
  SINGLE_BODY: string;
  SINGLE_HEADER: string;
  singleDeleteBody: (name: string) => string;
  singleDeleteConfirm: (name: string) => string;
  singleDeleteTitle: () => string;
}
```

```ts
const EMPTY_PANEL_SIZES: {
  FULL: "full";
  LG: "lg";
  MD: "md";
  SM: "sm";
}
```

```ts
const ERROR_MESSAGES: {
  EMPTY_NAME: string;
  FILE_NAME_MAX_LENGTH: (maxLength: number) => string;
  INVALID_EXTENSION: (oldName: string, newName: string) => string;
  NO_CONFIG: string;
  NOT_AVAILABLE: (fileName: string) => string;
  UPLOADING: string;
}
```

```ts
const EVENTS: {
  ADD_NOTIFICATIONS: string;
  CLIENT_SCRIPT_EXECUTION: string;
  DELETE_SUCCEEDED: string;
  DOWNLOADED: string;
  DOWNLOADED_ALL: string;
  DOWNLOADED_SELECTIVE: string;
  PREVIEWED: string;
  RENAME_SUCCEEDED: string;
  SORT_CHANGED: string;
  STATE_CHANGE: string;
  UPLOAD_SUCCEEDED: string;
}
```

```ts
const FILE_CATEGORIES: {
  ARCHIVE: "archive";
  AUDIO: "audio";
  CODE: "code";
  DEFAULT: "default";
  DOCUMENT: "document";
  IMAGE: "image";
  PDF: "pdf";
  PRESENTATION: "presentation";
  SPREADSHEET: "spreadsheet";
  TEXT: "text";
  VIDEO: "video";
}
```

```ts
const FILE_ICON_COLORS: {
  archive: string;
  audio: string;
  code: string;
  default: string;
  document: string;
  image: string;
  pdf: string;
  presentation: string;
  spreadsheet: string;
  text: string;
  video: string;
}
```

```ts
const FILE_SIZES: {
  at: (index: number) => string | undefined;
  concat: { (...items: Array<ConcatArray<string>>): Array<string>; (...items: Array<string | ConcatArray<string>>): Array<string>; };
  copyWithin: (target: number, start: number, end?: number | undefined) => Array<string>;
  entries: () => ArrayIterator<[number, string]>;
  every: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): boolean; };
  fill: (value: string, start?: number | undefined, end?: number | undefined) => Array<string>;
  filter: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): Array<string>; };
  find: { <S extends string>(predicate: (value: string, index: number, obj: Array<string>) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any): string | undefined; };
  findIndex: (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any) => number;
  flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => Array<FlatArray<A, D>>;
  flatMap: <U, This = undefined>(callback: (this: This, value: string, index: number, array: Array<string>) => U | ReadonlyArray<U>, thisArg?: This | undefined) => Array<U>;
  forEach: (callbackfn: (value: string, index: number, array: Array<string>) => void, thisArg?: any) => void;
  includes: (searchElement: string, fromIndex?: number | undefined) => boolean;
  indexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  join: (separator?: string | undefined) => string;
  keys: () => ArrayIterator<number>;
  lastIndexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  length: number;
  map: <U>(callbackfn: (value: string, index: number, array: Array<string>) => U, thisArg?: any) => Array<U>;
  pop: () => string | undefined;
  push: (...items: Array<string>) => number;
  reduce: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reduceRight: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reverse: () => Array<string>;
  shift: () => string | undefined;
  slice: (start?: number | undefined, end?: number | undefined) => Array<string>;
  some: (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any) => boolean;
  sort: (compareFn?: ((a: string, b: string) => number) | undefined) => Array<string>;
  splice: { (start: number, deleteCount?: number | undefined): Array<string>; (start: number, deleteCount: number, ...items: Array<string>): Array<string>; };
  toLocaleString: { (): string; (locales: string | Array<string>, options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; };
  toString: () => string;
  unshift: (...items: Array<string>) => number;
  values: () => ArrayIterator<string>;
}
```

```ts
const FILE_STATUS: {
  ERROR: string;
  NOT_AVAILABLE: string;
  QUARANTINED: string;
  UPLOADED: string;
  UPLOADING: string;
}
```

```ts
const ICONS: {
  CLOSE: TemplateResult<1>;
  DELETE: TemplateResult<1>;
  DOWNLOAD: TemplateResult<1>;
  MORE: TemplateResult<1>;
  SEARCH: TemplateResult<1>;
  SORT: TemplateResult<1>;
  SORT_DESC: TemplateResult<1>;
  UPLOAD: TemplateResult<1>;
}
```

<details>
<summary><code>const LABELS</code> (93 members)</summary>

```ts
const LABELS: {
  ADD_FILE: string;
  ALLOWED_FILE_SIZE: string;
  andNMoreLabel: (count: number) => string;
  ATTACH_FILES_MOBILE: string;
  ATTACHMENTS: string;
  CANCEL: string;
  CANCEL_ALL: string;
  CLEAR_SEARCH: string;
  COULD_NOT_ATTACH_FILE: string;
  DEFAULT_MAX_FILE_SIZE: string;
  DELETE: string;
  DELETE_ATTACHMENT_TITLE: string;
  DELETE_IN_PROGRESS: string;
  deleteAttachmentsTitleLabel: (count: number) => string;
  DELETING: string;
  DELETING_FILE: string;
  DELETING_FILES: string;
  DISMISS_NOTIFICATION: string;
  DOWNLOAD: string;
  DOWNLOAD_ALL: string;
  DRAG_DROP_COMPACT: string;
  DRAG_DROP_FILES: string;
  DROP_FILES_HERE: string;
  ENCRYPT_TOOLTIP: string;
  ENCRYPT_WITH_MODULE: string;
  ENCRYPTED_FILE: string;
  EXIT_FULLSCREEN: string;
  FILE_DELETED: string;
  FILE_NAME_PLACEHOLDER: string;
  FILE_NAME_REQUIRED: string;
  FILE_NAME_TOOLTIP: string;
  FILE_QUARANTINED: string;
  FILE_RENAMED: string;
  FILE_UNAVAILABLE: string;
  FILES: string;
  FILES_DELETED: string;
  fileSizeExceededReason: (size: string) => string;
  fileSizeLimitLabel: (size: string) => string;
  FULLSCREEN: string;
  invalidFileTypeReason: () => string;
  LOADING_ATTACHMENTS: string;
  LOADING_PLACEHOLDER: string;
  MANAGE_ATTACHMENTS: string;
  maxFileSizeLabel: (size: string) => string;
  MORE_OPTIONS: string;
  multiDeletePermanentLabel: (count: number) => string;
  multipleFilesAddedLabel: (count: number) => string;
  multipleFilesNotUploadedLabel: (count: number) => string;
  multipleSizeFailureLabel: (count: number, limit: string, names: string, overflow: string) => string;
  multipleTypeFailureLabel: (count: number, exts: string, suffix: string) => string;
  NO_ATTACHMENTS: string;
  NO_MATCH_FOUND: string;
  NONE: string;
  NOT_CONFIGURED: string;
  PRESS_ENTER_TO_BROWSE: string;
  PREVIEW: string;
  PREVIEW_LOAD_FAILED: string;
  REMOVE: string;
  REMOVE_SELECTED_FILE: string;
  RENAME: string;
  RENAMING: string;
  SAVE: string;
  SEARCH: string;
  SELECT_ALL: string;
  SELECT_FILE: string;
  SENSITIVE_FILE: string;
  SHOW_LESS: string;
  SHOW_MORE: string;
  showMoreLabel: (count: number) => string;
  singleDeletePermanentLabel: (name: string) => string;
  singleFileAddedLabel: () => string;
  singleFileNotUploadedLabel: () => string;
  singleSizeFailureLabel: (name: string, limit: string) => string;
  singleTypeFailureLabel: (ext: string, suffix: string) => string;
  SORT_BY_NEWEST: string;
  SORT_BY_OLDEST: string;
  supportedFormatsLabel: (types: string) => string;
  supportedTypesSuffix: (types: string) => string;
  TITLE: string;
  UNTITLED: string;
  UPLOAD: string;
  UPLOAD_FILES: string;
  UPLOAD_IN_PROGRESS: string;
  uploadAllLabel: (count: number) => string;
  uploadCompleteLabel: (succeeded: number, total: number) => string;
  UPLOADED_SUCCESSFULLY: string;
  uploadFailedReason: () => string;
  uploadInstructionsLabel: (types: string, size: string) => string;
  uploadMaxSizeLabel: (size: string) => string;
  uploadProgressLabel: (completed: number, total: number) => string;
  USE_FOR_ALL: string;
  VIEW_MORE_ATTACHMENTS: string;
  viewMoreLabel: (count: number) => string;
}
```

</details>

```ts
const MODAL_TYPES: {
  DELETE_CONFIRMATION: string;
  INVALID_TYPE: string;
  RENAME: string;
  UPLOAD_PREVIEW: string;
}
```

```ts
const MODES: {
  COMPACT: "compact";
  CUSTOM: "custom";
  FULL: "full";
}
```

```ts
const PREVIEWABLE_FILE_TYPES: {
  at: (index: number) => string | undefined;
  concat: { (...items: Array<ConcatArray<string>>): Array<string>; (...items: Array<string | ConcatArray<string>>): Array<string>; };
  copyWithin: (target: number, start: number, end?: number | undefined) => Array<string>;
  entries: () => ArrayIterator<[number, string]>;
  every: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): boolean; };
  fill: (value: string, start?: number | undefined, end?: number | undefined) => Array<string>;
  filter: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): Array<string>; };
  find: { <S extends string>(predicate: (value: string, index: number, obj: Array<string>) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any): string | undefined; };
  findIndex: (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any) => number;
  flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => Array<FlatArray<A, D>>;
  flatMap: <U, This = undefined>(callback: (this: This, value: string, index: number, array: Array<string>) => U | ReadonlyArray<U>, thisArg?: This | undefined) => Array<U>;
  forEach: (callbackfn: (value: string, index: number, array: Array<string>) => void, thisArg?: any) => void;
  includes: (searchElement: string, fromIndex?: number | undefined) => boolean;
  indexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  join: (separator?: string | undefined) => string;
  keys: () => ArrayIterator<number>;
  lastIndexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  length: number;
  map: <U>(callbackfn: (value: string, index: number, array: Array<string>) => U, thisArg?: any) => Array<U>;
  pop: () => string | undefined;
  push: (...items: Array<string>) => number;
  reduce: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reduceRight: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reverse: () => Array<string>;
  shift: () => string | undefined;
  slice: (start?: number | undefined, end?: number | undefined) => Array<string>;
  some: (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any) => boolean;
  sort: (compareFn?: ((a: string, b: string) => number) | undefined) => Array<string>;
  splice: { (start: number, deleteCount?: number | undefined): Array<string>; (start: number, deleteCount: number, ...items: Array<string>): Array<string>; };
  toLocaleString: { (): string; (locales: string | Array<string>, options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; };
  toString: () => string;
  unshift: (...items: Array<string>) => number;
  values: () => ArrayIterator<string>;
}
```

```ts
const SORT_DIRECTION: {
  ASCENDING: string;
  DESCENDING: string;
}
```

```ts
const THUMBNAIL_SIZES: {
  LG: "lg";
  MD: "md";
  SM: "sm";
  XS: "xs";
}
```

## Types

```ts
interface AIUXRecordCoreAttachmentModalData {
  data?: DeleteModalData | undefined;
  display: boolean;
  type?: "delete_confirmation" | "rename" | "upload_preview" | undefined;
}
```

```ts
interface AttachmentAction {
  assignmentId?: string;
  handler?: string;
  id: string;
  label: string;
}
```

```ts
interface AttachmentConfig {
  actions?: Array<AttachmentAction>;
  allowedExtensions?: string;
  attachmentHeader?: string;
  isMultiFileUpload?: boolean | undefined;
  isReadOnly?: boolean | undefined;
  maxFileNameLength?: number;
  maxFileSize?: number;
  mode?: Mode | undefined;
  skipPreviewForUnsupportedFileTypes?: boolean | undefined;
  sysId: string;
  table: string;
}
```

```ts
interface AttachmentEventDetail {
  action?: AttachmentAction;
  checked?: boolean | undefined;
  item?: AttachmentItem;
  newName?: string;
  notifications?: Array<AttachmentNotification>;
  value?: string;
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
interface AttachmentNotification {
  contentType?: string;
  id?: number;
  message: string;
  type: "success" | "error" | "warning" | "info";
}
```

```ts
interface AttachmentNotificationItem {
  details?: Array<NotificationDetail>;
  id: number;
  message: string;
  type: "success" | "error" | "warning";
}
```

```ts
interface AttachmentState {
  attachments: Array<AttachmentItem>;
  canCreate: boolean;
  canEdit: boolean;
  deleteInProgress: boolean;
  deletingItemIds: Set<string>;
  editingItemId: string;
  error: Error;
  isInitialized: boolean;
  isLoading: boolean;
  loadingItems: Array<AttachmentItem>;
  modal: AIUXRecordCoreAttachmentModalData;
  notifications: Array<AttachmentNotification>;
  previewItem: AttachmentItem;
  renamingItemId: string;
  searchString: string;
  selectedAttachments: Set<string>;
  showPreview: boolean;
  sortDirection: "ascending" | "descending";
  uploadModal: UploadModalData;
}
```

```ts
interface CryptoModule {
  id: string;
  label: string;
}
```

```ts
type DeleteModalData = {
  isMulti: boolean;
}
```

```ts
interface DeleteMultiModalData {
  isMulti: true;
  items: Array<AttachmentItem>;
}
```

```ts
interface DeleteSingleModalData {
  isMulti: false;
  item: AttachmentItem;
}
```

```ts
type EmptyPanelSize = unknown
```

```ts
type FileCategory = unknown
```

```ts
type Mode = unknown
```

```ts
type ThumbnailSize = unknown
```

```ts
interface UploadFileEntry {
  cryptoModuleId?: string;
  file: File;
  fileName: string;
}
```

```ts
interface UploadModalData {
  display: boolean;
  files: Array<{ file: File; fileName: string; }>;
}
```

## Classes

```ts
class AttachmentController {
  addNotification(type: "success" | "error" | "warning", message: string, details?: Array<NotificationDetail>): number;
  addUploadFailureNotification(failures: Array<NotificationDetail>): void;
  dismissNotification(id: number): void;
  getFilteredAttachments(): Array<AttachmentItem>;
  getInitialState(): AttachmentState;
  getState(): AttachmentState;
  host: ReactiveControllerHost;
  hostConnected(): void;
  hostDisconnected(): void;
  initializeAttachments(): Promise<void>;
  onCheckboxChange(sysId: string): void;
  onCloseModal(): void;
  onDeleteConfirm(): Promise<void>;
  onDeleteMultiRequest(): void;
  onDeleteRequest(item: AttachmentItem): void;
  onDownload(item: AttachmentItem): void;
  onDownloadAll(): void;
  onDownloadSelected(): void;
  onFileSelected(files: Array<File>): void;
  onPreviewClose(): void;
  onPreviewRequest(item: AttachmentItem): void;
  onRenameCancel(): void;
  onRenameRequest(item: AttachmentItem): void;
  onRenameSubmit(item: AttachmentItem, newName: string): Promise<void>;
  onSearchInput(value: string): void;
  onSelectAll(checked: boolean): void;
  onSort(): void;
  onUploadCancel(): void;
  onUploadConfirm(filesData: Array<{ file: File; fileName: string; cryptoModuleId?: string | null | undefined; }>): Promise<void>;
  props: AttachmentControllerProps;
  refreshAttachments(): Promise<void>;
  setState(newState: Partial<AttachmentState>): void;
  state: AttachmentState;
  transformLoadingItem(file: File, fileName: string): AttachmentItem;
  updateProps(props: Partial<AttachmentControllerProps>): void;
  updateUploadProgress(tempId: string, progress: number): void;
  validateFileSize(file: File): boolean;
  validateFileType(file: File): boolean;
}
```


