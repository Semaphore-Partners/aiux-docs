# `@servicenow/aiux-components-core`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-core`

Declares 2 elements, 79 functions, 29 constants, 8 classes.

## Elements

### `<AIUXAppLayoutElement>`

Base class, not registered as a tag.

| Event | `detail` |
|---|---|
| `aiux:boot-loader:dismiss` | — |
| `header-config:update` | — |
| `route-change-completed` | `{ path: any; }` |

### `<AIUXWidgetElement>`

Base class, not registered as a tag.

_No public properties, events, or slots declared._

## Functions

```ts
aiuxFetch(url: any, options: {}): Promise<Response>
applyLocale(locale: string): Promise<void>
awaitAllWidgetData(): Promise<{ [x: string]: any; }>
broadcastAction(actionRef: string, args: any): Promise<Array<BroadcastResult>>
buildConfigKey(idChain: Array<string>, propKey: string): string
buildRecordWatcherChannel(table: string, query: string, actionPrefix: string): string
clearServices(): void
clearWidgetData(): void
closeSidePanel(__0: [object Object]): void
config(opts: ConfigOptions): (target: any, key: any) => void
createClientLoaderContext(__0: any): Readonly<{ protocol: string; hostname: string; basePath: any; params: any; query: {}; headers: Readonly<{ cookie: ""; }>; csrfToken: any; pagePath: any; embedded: any; }>
createContext(name: string, defaultValue: T, options: [object Object]): ScopedContext<T> | GlobalContext<T> | [GlobalContext<T>, (value: T) => void]
createRequestScope(): any
createScopedContext(name: string, defaultValue: T): ScopedContext<T>
createTeleport(): HTMLElement
defineRouteView(BaseClass: typeof LitElement): void
dispatchConfigFieldValueChange(el: EventTarget, __1: [object Object]): void
disposeRequestScope(): void
ensureAielLoaded(): Promise<void>
executeAction(actionRef: string, args: any, __2: [object Object]): Promise<any>
externalConfig(options: ConfigOptionsBase & { type: ArrayConstructor; list: ConfigList; } & { key: string; }): (target: any) => any
fetchDataResource(sysId: string, inputValues: Record<string, unknown>, ctx: [object Object], __3: [object Object]): Promise<T>
generateThemeCSS(theme?: ThemeConfig): Array<StyleBlock>
getAction(actionRef: string, __1: [object Object]): ActionEntry
getAielBranding(): any
getAMBService(): AMBService
getContextValues(): any
getDirective(name: string): any
getElementConfigPath(el: Element): { idChain: Array<string>; topLevelTag: string }
getHeaders(_ctx: any): { Content-Type: string }
getImmutableContextValues(): any
getLogger(name: string): Logger
getRequestData(key: string): any
getService(name: string): any
getSnHttp(): any
getSystemProperty(name: string): string
getTelemetryConfig(): any
getThemeMode(): string
getThemePreferenceKey(): string
getUserPreference(name: string): string
hideSidePanel(): boolean
hydrateContexts(data: any): void
initLogging(options: [object Object]): void
installScopeProvider(asyncLocalStorage: AsyncLocalStorage): void
isLoaderPreset(target: any): boolean
isPluginActive(id: string): boolean
isReducedMotionEnabled(): boolean
layout(strings: TemplateStringsArray, values: Array<any>): TemplateResult<ResultType>
listActions(): Array<{ actionRef: string; label: string; metadata: any; }>
listActionsWithOwners(): Array<ActionWithOwners>
measuredOverlayStyles(rect: [object Object]): any
openSidePanel(options: {}): void
pauseAIELContextUpdate(): void
prefetchWidgetData(instances: Array<{ sysId: string; tagName: string; properties: any; }>): void
reducedMotionAware(target: any): any
registerActions(owner: ActionOwnerKey, descriptors: Array<ActionDescriptor>, ownerContext: any, __3: [object Object]): void
registerDefaultServices(): void
registerFetchInterceptor(fn: (config: any, requestFn: (config: any) => Promise<any>) => Promise<any>): void
registerInflightQueueProvider(fn: () => Map<any, any>): void
registerService(name: string, factoryOrInstance: any, options: [object Object]): void
registerUiActions(owner: ActionOwnerKey, surfaces: Record<string, Array<any>>, __2: [object Object]): void
removeAielContext(widgetId: any): void
removeTeleport(teleport: HTMLElement): void
resolveLoaderSelector(target: string, __1: [object Object]): string
resumeAIELContextUpdate(): void
setAMBService(service: any): void
setCloseConfirmation(config: [object Object]): void
setNavigationTabPath(path: string, query: any): void
setRequestData(key: string, value: any): void
setThemeMode(theme: string): Promise<void>
setUserPreference(name: string, value: string): Promise<void>
showSidePanel(): boolean
subscribeToLogs(callback: (record: any) => void): () => void
unregisterActions(owner: ActionOwnerKey): void
updateAielContext(payload: any, signal: any): Promise<void>
updateFavicon(theme: string): void
waitForAielBranding(signal: AbortSignal, timeoutMs: number): Promise<any>
waitForAielReady(signal: any): Promise<any>
whenIdle(fn: () => void): () => void
```

## Constants

| Name | Type |
|---|---|
| `CONFIG_FIELD_VALUE_CHANGE_EVENT` | `"config-field-value-change"` |
| `contexts` | `{}` |
| `DEFAULT_DENSITY` | `"normal"` |
| `defineConfigEditor` | `any` |
| `elementId` | `(element: LitElement, id: string) => DirectiveResult<typeof (Anonymous class)>` |
| `FOCUSABLE_SELECTOR` | `string` |
| `litWidgetOrigin` | `ScopedContext<string> \| GlobalContext<string> \| [GlobalContext<string>, (value: string) => void]` |
| `USER_QUERY` | `"query getCurrentUser {\n GlideDomain_Query {\n user {\n firstName\n lastName\n userName\n fullName\n avatar\n roles: allRoles\n elevatedRoles\n initials\n timeFormat\n dateFormat\n dateTimeFormat\n …` |
| `WithData` | `(superClass: any) => any` |
| `withWidgetContext` | `<T extends typeof import("components/core/src/index").AIUXElement>(Base: T) => T & (new (...args: Array<any>) => WidgetContextMixinShape)` |

```ts
const actionRegistryContext: {
  _fetch?: (ctx: any) => Promise<Array<{ actionRef: string; label: string; metadata: any; }>>;
  _fetcher?: Function;
  _immutable: boolean;
  _name: string;
  _serialize: boolean;
  _value: Array<{ actionRef: string; label: string; metadata: any; }>;
  get: () => Array<{ actionRef: string; label: string; metadata: any; }>;
  set: (value: Array<{ actionRef: string; label: string; metadata: any; }>) => void;
  subscribe: (callback: (value: Array<{ actionRef: string; label: string; metadata: any; }>) => void) => () => void;
}
```

```ts
const appLayoutLoadingStyles: {
  _$cssResult$: boolean;
  _strings: any;
  _styleSheet?: any;
  cssText: string;
  styleSheet: CSSStyleSheet;
  toString: () => string;
}
```

```ts
const capabilityContext: {
  _name: string;
  _registerConsumer: (host: HTMLElement) => () => void;
  _scoped: true;
  _subscribeCollector: (callback: Function) => () => void;
  collect: () => Array<CapabilityRegistry>;
  get: (host: HTMLElement) => CapabilityRegistry;
  getById: (id: string) => CapabilityRegistry;
  provide: (host: HTMLElement, value: CapabilityRegistry, id?: string) => void;
  unprovide: (host: HTMLElement) => void;
}
```

```ts
const decorators: {
  bestFor: (...args: Array<any>) => (cls: any) => any;
  category: (...args: Array<any>) => (cls: any) => any;
  chatCompatible: (...args: Array<any>) => (cls: any) => any;
  demo: (...args: Array<any>) => (cls: any) => any;
  description: (...args: Array<any>) => (cls: any) => any;
  discoverable: (...args: Array<any>) => (cls: any) => any;
  explicitSysId: (...args: Array<any>) => (cls: any) => any;
  global: (...args: Array<any>) => (cls: any) => any;
  interactiveViewCompatible: (...args: Array<any>) => (cls: any) => any;
  name: (...args: Array<any>) => (cls: any) => any;
  protectionPolicy: (...args: Array<any>) => (cls: any) => any;
  roles: (...args: Array<any>) => (cls: any) => any;
  server: (...args: Array<any>) => (cls: any) => any;
  subtitle: (...args: Array<any>) => (cls: any) => any;
  title: (...args: Array<any>) => (cls: any) => any;
}
```

```ts
const DEFAULT_THEME: {
  accent_color: string;
  neutral_colors: Record<string, unknown>;
  primary_color: string;
  shape: [object Object];
}
```

```ts
const DENSITY_MODES: {
  at: (index: number) => string;
  concat: { (...items: Array<ConcatArray<string>>): Array<string>; (...items: Array<string | ConcatArray<string>>): Array<string>; };
  copyWithin: (target: number, start: number, end?: number) => Array<string>;
  entries: () => ArrayIterator<[number, string]>;
  every: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): boolean; };
  fill: (value: string, start?: number, end?: number) => Array<string>;
  filter: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): Array<string>; };
  find: { <S extends string>(predicate: (value: string, index: number, obj: Array<string>) => value is S, thisArg?: any): S; (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any): string; };
  findIndex: (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any) => number;
  flat: <A, D extends number = 1>(this: A, depth?: D) => Array<FlatArray<A, D>>;
  flatMap: <U, This = undefined>(callback: (this: This, value: string, index: number, array: Array<string>) => U | ReadonlyArray<U>, thisArg?: This) => Array<U>;
  forEach: (callbackfn: (value: string, index: number, array: Array<string>) => void, thisArg?: any) => void;
  includes: (searchElement: string, fromIndex?: number) => boolean;
  indexOf: (searchElement: string, fromIndex?: number) => number;
  join: (separator?: string) => string;
  keys: () => ArrayIterator<number>;
  lastIndexOf: (searchElement: string, fromIndex?: number) => number;
  length: number;
  map: <U>(callbackfn: (value: string, index: number, array: Array<string>) => U, thisArg?: any) => Array<U>;
  pop: () => string;
  push: (...items: Array<string>) => number;
  reduce: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reduceRight: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reverse: () => Array<string>;
  shift: () => string;
  slice: (start?: number, end?: number) => Array<string>;
  some: (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any) => boolean;
  sort: (compareFn?: (a: string, b: string) => number) => Array<string>;
  splice: { (start: number, deleteCount?: number): Array<string>; (start: number, deleteCount: number, ...items: Array<string>): Array<string>; };
  toLocaleString: { (): string; (locales: string | Array<string>, options?: NumberFormatOptions & DateTimeFormatOptions): string; };
  toString: () => string;
  unshift: (...items: Array<string>) => number;
  values: () => ArrayIterator<string>;
}
```

```ts
const directives: {
  register: (...args: Array<any>) => void;
}
```

```ts
const EXECUTE_ACTION_TOOL: {
  execute_action: [object Object];
}
```

```ts
const globalStyles: {
  _$cssResult$: boolean;
  _strings: any;
  _styleSheet?: any;
  cssText: string;
  styleSheet: CSSStyleSheet;
  toString: () => string;
}
```

```ts
const KeyboardKey: {
  A: "a";
  ArrowDown: "ArrowDown";
  ArrowLeft: "ArrowLeft";
  ArrowRight: "ArrowRight";
  ArrowUp: "ArrowUp";
  Backspace: "Backspace";
  Delete: "Delete";
  End: "End";
  Enter: "Enter";
  Escape: "Escape";
  Home: "Home";
  Space: " ";
  Spacebar: "Spacebar";
  Tab: "Tab";
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
  getBridge: () => MobileAppBridgeInstance;
  hostElement: HTMLElement;
  init: (hostElement?: HTMLElement) => void;
  initialized: boolean;
  isInitialized: () => boolean;
  isMobileApp: () => boolean;
  requestReAuth: () => boolean;
}
```

```ts
const PAGE_LOADER_TARGETS: {
  CONTENT: "content";
  NONE: "none";
  PAGE: "page";
  STAGE: "stage";
}
```

```ts
const sidePanelContext: {
  _fetch?: (ctx: any) => Promise<{ open: boolean; content: any; title: any; width: string; height: any; anchor: string; closeOnClickOutside: boolean; path: any; query: any; closeConfirmation: any; pendingClose: boolean; pendingOpen: any; }>;
  _fetcher?: Function;
  _immutable: boolean;
  _name: string;
  _serialize: boolean;
  _value: [object Object];
  get: () => { open: boolean; content: any; title: any; width: string; height: any; anchor: string; closeOnClickOutside: boolean; path: any; query: any; closeConfirmation: any; pendingClose: boolean; pendingOpen: any; };
  set: (value: { open: boolean; content: any; title: any; width: string; height: any; anchor: string; closeOnClickOutside: boolean; path: any; query: any; closeConfirmation: any; pendingClose: boolean; pendingOpen: any; }) => void;
  subscribe: (callback: (value: { open: boolean; content: any; title: any; width: string; height: any; anchor: string; closeOnClickOutside: boolean; path: any; query: any; closeConfirmation: any; pendingClose: boolean; pendingOpen: any; }) => void) => () => void;
}
```

```ts
const skipLinkStyles: {
  _$cssResult$: boolean;
  _strings: any;
  _styleSheet?: any;
  cssText: string;
  styleSheet: CSSStyleSheet;
  toString: () => string;
}
```

```ts
const sp: {
  asNumber: (value: string, defaultValue?: number) => number;
  isFalse: (value: string, defaultValue?: boolean) => boolean;
  isTrue: (value: string, defaultValue?: boolean) => boolean;
  withDefault: <T>(value: string, defaultValue: T) => T;
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
const themeService: {
  getThemeMode: () => string;
  setThemeMode: (theme: string) => Promise<void>;
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

## Classes

```ts
class AIUXComposedPage {

}
```

```ts
class AIUXDashboard {

}
```

```ts
class AIUXElement {
  __toBeRemovedGetComponentData(tagName: string): any;
  _maybeSelfRunLoader(): void;
  _resolveLoaderScopeKey(): any;
  connectedCallback(): void;
  disconnectedCallback(): void;
  firstUpdated(changedProperties: Map<PropertyKey, unknown>): void;
  getLayoutData(layoutKey: any): any;
  provideConfigAffordance(): { label: string; url: string; } | Array<{ label: string; url: string; }>;
  scheduleUpdate(): Promise<unknown>;
  setLoaderData(data: any): void;
  trackEvent(name: string, payload: Record<string, unknown>): void;
  trackPage(pathOrOptions: [object Object]): void;
  update(changedProperties: [object Object]): void;
  updated(changedProperties: any): void;
}
```

```ts
class AMBController {
  _activateAll(): void;
  _activateSubscription(channel: any, callback: any): void;
  _active: Array<{ unsubscribe: Function; }>;
  _connected: boolean;
  _deactivateAll(): void;
  _getService(): any;
  _host: ReactiveControllerHost;
  _pending: Array<{ channel: string; callback: Function; }>;
  _service: any;
  hostConnected(): void;
  hostDisconnected(): void;
  setChannels(channels: Array<string>, callback: Function): void;
  setRecordWatchers(watchers: Array<{ table: string; query: string; actionPrefix?: string; }>, callback: Function): void;
  subscribe(channel: string, callback: Function): void;
  subscribeToRecordWatcher(table: string, query: string, callback: Function, actionPrefix: string): void;
}
```

```ts
class CapabilityRegistry {
  has(target: string, capability: string): boolean;
  invoke(target: string, capability: string, args: unknown): unknown;
  register(tagName: string, handlers: CapabilityHandlerMap, role: string): void;
  subscribe(callback: () => void): () => void;
  unregister(tagName: string, handlers: CapabilityHandlerMap, role: string): void;
}
```

```ts
class MobileAppBridgeService {
  destroy(): void;
  getBridge(): MobileAppBridgeInstance;
  init(hostElement: HTMLElement): void;
  isInitialized(): boolean;
  isMobileApp(): boolean;
  requestReAuth(): boolean;
}
```

```ts
class MockAMBService {
  _connectionState: string;
  _eventSubscribers: Map<string, Set<Function>>;
  _loggedIn: boolean;
  _published: Array<{ channel: string; message: any; }>;
  _subscribers: Map<string, Set<Function>>;
  batch(fn: Function): void;
  clearPublished(): void;
  connect(): void;
  disconnect(): void;
  emitEvent(event: string, data: any): void;
  getClient(): any;
  getConnectionState(): string;
  getPublished(): Array<{ channel: string; message: any; }>;
  hasSubscribers(channel: string): boolean;
  isLoggedIn(): boolean;
  publish(channel: string, message: any, callback: Function): void;
  publishAsync(channel: string, message: any, callback: Function): void;
  receiveMessage(channel: string, message: any): void;
  subscribe(channel: string, callback: Function): { unsubscribe: () => void };
  subscribeToEvent(event: string, callback: Function): { unsubscribe: () => void };
  subscribeToRecordWatcher(table: string, query: string, callback: Function, actionPrefix: string): { unsubscribe: () => void };
}
```

```ts
class PageLoaderPlacementController {
  _resolveElement(): Element;
  hostConnected(): void;
  hostDisconnected(): void;
  measure(): void;
}
```


