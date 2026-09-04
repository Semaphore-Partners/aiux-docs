# `@servicenow/aiux-services`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-services`

Declares 13 functions, 15 constants, 6 classes.

## Functions

```ts
computeOnlineStatus(lastOn: number, now: number, pollInterval: number): "online" | "offline"
createKeydownHandler(__0: [object Object]): (e: KeyboardEvent) => void
getExperienceProperties(): any
getThemeMode(): string
hashToolContext(toolContext: any): string
initAppShellBridge(): void
initUserPreferences(preferences: Record<string, string>): void
isMac(): boolean
isModifierKeyPressedWithKey(event: KeyboardEvent, forPlatform: boolean | undefined): boolean
isWindowsOrLinux(): boolean
resolveShortcut(definition: ShortcutDefinition, componentRegistry: ComponentRegistry): { actionKey: string; element: HTMLElement; handler: Function; name: string }
setExperienceProperties(properties: {}): void
setThemeMode(theme: string): Promise<void>
```

## Constants

| Name | Type |
|---|---|
| `locationService` | `Readonly<{ [k: string]: (...args: Array<any>) => any; }>` |
| `notifications` | `any` |
| `notificationService` | `any` |

```ts
const ariaLive: {
  announce: (message: string, politeness?: "polite" | "assertive" | "off" | undefined, _options?: AnnounceOptions | undefined) => void;
  announceAssertive: (message: string, options?: AnnounceOptions | undefined) => void;
  announcePolite: (message: string, options?: AnnounceOptions | undefined) => void;
  clear: () => void;
  destroy: () => void;
  initialize: () => void;
  isInitialized: () => boolean;
}
```

```ts
const i18n: {
  getMessage: (messageKey: string | { code: string; message: string; } | null, ...args: Array<any>) => string | null;
  loadMessage: (messageKey: string, messageValue: string) => string;
  loadMessages: (newMessages: Record<string, string>) => Record<string, string>;
}
```

```ts
const mobileAppBridgeContext: {
  __context__: MobileAppBridgeInstance;
}
```

```ts
const mobileAppBridgeService: {
  bridge: MobileAppBridgeInstance;
  bridgeProvider: ContextProvider<{ __context__: MobileAppBridgeInstance; }, HTMLElement>;
  destroy: () => void;
  getBridge: () => MobileAppBridgeInstance | null;
  hostElement: HTMLElement;
  init: (hostElement?: HTMLElement | undefined) => void;
  initialized: boolean;
  isInitialized: () => boolean;
  isMobileApp: () => boolean;
  requestReAuth: () => boolean;
}
```

```ts
const NOTIFICATION_TYPES: {
  ERROR: string;
  INFO: string;
  SUCCESS: string;
  WARNING: string;
}
```

```ts
const pinnedWidgetCache: {
  _db: IDBDatabase;
  _dbPromise: any;
  _getDb: () => Promise<any>;
  _handleDbClose: () => void;
  _txn: (mode: any) => Promise<any>;
  clear: () => Promise<any>;
  close: () => void;
  delete: (toolContext: any) => Promise<any>;
  get: (toolContext: any) => Promise<any>;
  getAll: () => Promise<any>;
  getWithMetadata: (toolContext: any) => Promise<any>;
  markAsViewed: (toolContext: any) => Promise<any>;
  set: (toolContext: any, widget: any, { isNewPin }?: { isNewPin?: boolean | undefined; }) => Promise<any>;
}
```

```ts
const RECORD_WATCHER_EVENTS: {
  LIST_UPDATED: string;
  RECORD_UPDATED: string;
}
```

```ts
const recordWatcherService: {
  _initWatcher: (table: string, sysId?: string | undefined, query?: string | undefined) => { unsubscribe: Function; } | null;
  _isBlockedTable: (table: string) => boolean;
  _parseQueryString: (search: string) => Record<string, string>;
  createReactiveWatcher: (host: ReactiveControllerHost, table: string, filter: string, callbackFn: Function) => AMBController | undefined;
  init: () => { unsubscribe: Function; } | null;
  initChannel: (table: string, filter: string, callbackFn?: Function | undefined) => { unsubscribe: Function; } | null;
  initList: (table: string, query?: string | undefined, callback?: Function | undefined) => { unsubscribe: Function; } | null;
  initRecord: (table: string, sysId: string, callback?: Function | undefined) => { unsubscribe: Function; } | null;
  initTaskList: (list: Array<string>, prevChannel?: { unsubscribe: Function; } | undefined) => { unsubscribe: Function; } | null;
  subscribe: (table: string, filter: string, callbackFn: Function) => Function | null;
  watch: (table: string, filter: string) => { subscribe: Function; unsubscribeAll: Function; listenerCount: number; };
}
```

```ts
const themeContext: {
  _fetch?: (ctx: any) => Promise<string>;
  _fetcher?: Function;
  _immutable: boolean;
  _name: string;
  _serialize: boolean;
  _value: string;
  get: () => string;
  set: (value: string) => void;
  subscribe: (callback: (value: string) => void) => () => void;
}
```

```ts
const userPreferencesContext: {
  _fetch?: (ctx: any) => Promise<Record<string, string>>;
  _fetcher?: Function;
  _immutable: boolean;
  _name: string;
  _serialize: boolean;
  _value: Record<string, string>;
  get: () => Record<string, string>;
  set: (value: Record<string, string>) => void;
  subscribe: (callback: (value: Record<string, string>) => void) => () => void;
}
```

```ts
const userPreferencesService: {
  attachUserPreferencesContext: (_host: ReactiveControllerHost) => () => void;
  fetchLanguages: () => Promise<{ items: Array<any>; selectedItem: string; }>;
  getBooleanPreferenceValue: (preference: string, defaultValue?: boolean | undefined) => boolean;
  getUserPreference: (name: string, defaultValue?: any) => any;
  getUserPreferences: () => Map<string, any>;
  isReduceMotionEnabled: () => boolean;
  saveUserPreference: (name: string, value: string) => Promise<void>;
  setUserPreference: (name: string, value: any) => void;
  subscribe: (name: string, callback: (newValue: any, oldValue: any, name: string) => void) => () => void;
  updateLanguage: (language: string) => Promise<void>;
}
```

```ts
const widgetPinningService: {
  _abortController: AbortController;
  _loading: boolean;
  cancel: () => void;
  isLoading: boolean;
  pinWidget: ({ widget, toolContext, experienceConfig, gridProps, dimensions }: { widget: Object; toolContext: Object; experienceConfig: Object; gridProps?: Object | undefined; dimensions?: { width: number; height: number; } | undefined; }) => Promise<{ success: boolean; error?: string | undefined; }>;
}
```

## Classes

```ts
class ComponentRegistry {
  _components: Map<string, Set<{ element: HTMLElement; actionMap: object; }>>;
  clear(): void;
  deregister(element: HTMLElement): void;
  findByActionKey(actionKey: string): Array<{ element: HTMLElement; actionMap: object; }>;
  getByTagName(tagName: string): Array<{ element: HTMLElement; actionMap: object; }>;
  getRegisteredTags(): Array<string>;
  has(tagName: string): boolean;
  register(element: HTMLElement, actionMap: object): void;
}
```

```ts
class KeyboardShortcutController {
  _actionMap: object;
  _host: ReactiveControllerHost;
  _shortcuts: Array<ShortcutDefinition>;
  hostConnected(): void;
  hostDisconnected(): void;
  updateActionMap(actionMap: object): void;
}
```

```ts
class KeyboardShortcutService {
  _enabled: boolean;
  _initialized: boolean;
  _keydownHandler: ((e: KeyboardEvent) => void) | null;
  _listeners: Set<(detail: object) => void>;
  componentRegistry: ComponentRegistry;
  destroy(): void;
  init(): void;
  onShortcutTriggered(callback: (detail: object) => void): () => void;
  setEnabled(enabled: boolean): void;
  shortcutRegistry: ShortcutRegistry;
}
```

```ts
class OnlineStatusService {
  _applyPresenceArray(result: any): void;
  _authorSysIds: Set<string>;
  _connected: boolean;
  _host: ReactiveControllerHost;
  _poll(): Promise<void>;
  _polling: boolean;
  _pollTimer: Timeout | null;
  _pruneStaleStatuses(): boolean;
  _sameAuthors(next: Set<string>): boolean;
  _scheduleNextPoll(): void;
  _startPolling(): void;
  _statuses: Map<string, "online" | "offline">;
  _stopPolling(): void;
  connect(authorSysIds: Array<string>): void;
  getStatus(sysId: string): "online" | "offline" | undefined;
  hostConnected(): void;
  hostDisconnected(): void;
}
```

```ts
class ShortcutRegistry {
  _macComboIndex: Map<string, string>;
  _shortcuts: Map<string, ShortcutDefinition>;
  _winComboIndex: Map<string, string>;
  clear(): void;
  deregister(actionKey: string): void;
  deregisterAll(actionKeys: Array<string>): void;
  findAllByEvent(event: KeyboardEvent): Array<ShortcutDefinition>;
  findByEvent(event: KeyboardEvent): ShortcutDefinition;
  get(actionKey: string): ShortcutDefinition;
  getAll(): Array<ShortcutDefinition>;
  register(definition: ShortcutDefinition): void;
  registerAll(definitions: Array<ShortcutDefinition>): void;
}
```

```ts
class WidgetPinningService {
  cancel(): void;
  pinWidget(__0: [object Object]): Promise<{ success: boolean; error?: string | undefined; }>;
}
```


