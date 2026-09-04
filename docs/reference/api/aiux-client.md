# `@servicenow/aiux-client`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-client`

Declares 48 functions, 4 constants, 1 class.

## Functions

```ts
browserNavigate(url: string): Promise<boolean>
buildQueryString(query: any): string
clear(key: string): void
clearAll(): void
clearPrefetchCache(): void
clearRouteDataCache(): void
consumePrefetchedData(route: string, basePath: string): any
createClientLoaderContext(__0: any): Readonly<{ protocol: string; hostname: string; basePath: any; params: any; query: {}; headers: Readonly<{ cookie: ""; }>; csrfToken: any; pagePath: any; embedded: any; }>
createRouter(options: [object Object]): { browserNavigate: (url: string) => Promise<boolean>; currentPath: any; currentQueryString: string; destroy: () => void; init: () => void; isNavigating: boolean; navigate: (path: string, options?: NavigateOptions) => Promise<boolean>; onBeforeNavigate: (callback: (targetPath: string, currentPath: string, state: any, ctx?: { signal: AbortSignal; }) => string | boolean | void) => () => void; setNavigationInterceptor: (fn: (url: string, options?: { isFromAngularWidget?: boolean; }) => boolean) => void; silentReplace: (fullPath: string, routerPath: string) => void }
executePendingLoaders(ctx: any, routeTags: Set<string>, options: [object Object]): Promise<{ componentData: any; layoutData: any; }>
fetchComponentConfigs(__0: [object Object]): Promise<Record<string, Record<string, unknown>>>
fetchRouteData(path: string, basePath: string, signal: AbortSignal): Promise<any>
findAnchor(target: any): any
getEntries(): ReadonlyMap<string, DirtyEntry>
getExperiencePath(): any
getGlobalRouter(): any
getPagePath(): string
getPendingLoaders(routeTags: Set<string>, __1: [object Object]): Array<{ tagName: string; loader: Function; dataKey: string; isLayout: boolean; }>
handleRouteMapNavigation(url: string, isSpUrl: boolean, __2: [object Object]): boolean
initCSRTelemetry(): void
initIslands(): IslandController
installNavigationGuards(): () => void
isDirty(): boolean
isGuardInstalled(): boolean
isNavigableUrl(url: any, currentOrigin: any): boolean
isRegistered(key: string): boolean
loadBundle(bundleUrl: any): Promise<any>
markLoaderExecuted(tagName: string): void
matchRoute(path: string, manifest: any): { page: any; params: any }
navigate(path: string, options: NavigateOptions): Promise<boolean>
onChange(callback: (entries: ReadonlyMap<string, DirtyEntry>) => void): () => void
parseQueryString(search: string): Record<string, string>
register(key: string, options: [object Object]): void
registerLoader(tagName: string, loaderFn: Function, dataKey: string, isLayout: boolean): void
removeNavigationGuards(): void
reportCSRComplete(durationMs: any): void
resolveNavigationBundles(page: any, appManifest: any, componentManifest: any, basePath: string, pagesPrefix: string): Array<string>
resolveRoutePath(pattern: string, params: Record<string, string>): string
setConfirmationHandler(handler: ConfirmationHandler): void
setData(path: any, data: any, __2: [object Object]): void
setGlobalRouter(router: any): void
setStaleData(path: any, data: any, __2: [object Object]): void
setupPrefetchHover(element: HTMLElement): Function
shouldNavigate(event: any): boolean
startPrefetch(manifest: Array<{ route: string; bundles: Array<string>; prefetchData: boolean; cachePolicy?: string; }>, basePath: string, signal: AbortSignal): void
stripBasePath(pathname: any, base: any): any
subscribeToLoaderData(component: LitElement, overrideKey: string, __2: [object Object]): Function
waitForExpectedLoaders(timeoutMs: number): Promise<void>
```

## Constants

| Name | Type |
|---|---|
| `AIUX_CLIENT_VERSION` | `"1.0.0"` |
| `hydrate` | `(rootValue: unknown, container: Element \| DocumentFragment, options?: Partial<RenderOptions>) => void` |

```ts
const dirtyState: {
  clear: (key: string) => void;
  clearAll: () => void;
  confirmNavigation: () => Promise<boolean>;
  getEntries: () => ReadonlyMap<string, DirtyEntry>;
  installNavigationGuards: () => () => void;
  isDirty: () => boolean;
  isGuardInstalled: () => boolean;
  isRegistered: (key: string) => boolean;
  onChange: (callback: (entries: ReadonlyMap<string, DirtyEntry>) => void) => () => void;
  register: (key: string, options?: { message?: string; silent?: boolean; }) => void;
  removeNavigationGuards: () => void;
  setConfirmationHandler: (handler: ConfirmationHandler) => void;
}
```

```ts
const fieldTranslations: {
  clear: () => void;
  get: (table: string, sysId: string, field: string, defaultValue?: string) => string;
  load: (data: Record<string, Record<string, Record<string, string>>>) => void;
}
```

## Classes

```ts
class IslandController {
  _activate(el: Element, tagName: string): Promise<void>;
  _findElements(root: [object Object], tagName: string): Array<Element>;
  _importBundle(url: string): Promise<any>;
  _importWithRetry(bundleUrl: string, tagName: string): Promise<true | Error>;
  _setupIdle(el: any, activate: any): void;
  _setupInteraction(el: any, activate: any): void;
  _setupVisible(el: any, activate: any): void;
  scan(root: [object Object]): void;
  setupTrigger(el: Element, tagName: string): void;
  teardown(): void;
}
```


