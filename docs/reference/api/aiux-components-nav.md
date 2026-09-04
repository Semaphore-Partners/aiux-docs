# `@servicenow/aiux-components-nav`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-nav`

Declares 26 elements, 24 functions, 9 constants, 3 classes.

## Elements

### `<aiux-chrome-primary-items>`

Class `ChromePrimaryItems`.

| Event | `detail` |
|---|---|
| `chrome-tools:navigate` | `{ href: any; }` |

### `<aiux-chrome-screen-content-links>`

Class `ChromeScreenContentLinks`.

_No public properties, events, or slots declared._

### `<aiux-elevate-role>`

Class `ElevateRole`.

_No public properties, events, or slots declared._

### `<aiux-favorite-popup>`

Class `FavoritePopup`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `deleteFavorite` | `boolean` | yes | no | yes |
| `favoriteGroups` | `Array<any>` | no | no | yes |
| `itemName` | `string` | yes | no | yes |
| `open` | `boolean` | yes | no | yes |
| `targetElement` | `null` | no | no | yes |

### `<aiux-horizontal-nav>`

Class `HorizontalNav`.

| Event | `detail` |
|---|---|
| `horizontal-nav:favorite-toggle` | `{ currentlyFavorited: boolean; anchorEl: any; }` |
| `horizontal-nav:menu-tray-open` | `{ menuId: any; triggerLeft: any; triggerBottom: any; }` |
| `horizontal-nav:utility-action` | `{ action: any; }` |

### `<aiux-impersonate-user>`

Class `ImpersonateUser`.

_No public properties, events, or slots declared._

### `<aiux-intelligent-concourse-picker>`

Class `ScopePicker`.

_No public properties, events, or slots declared._

### `<aiux-intelligent-tree-item>`

Class `TreeItem`.

_No public properties, events, or slots declared._

### `<aiux-keyboard-shortcuts-modal>`

Class `AIUXKeyboardShortcutsModal`.

| Event | `detail` |
|---|---|
| `keyboard-shortcuts-modal:close` | — |
| `keyboard-shortcuts-modal:edit-request` | `{ shortcut: any; }` |
| `keyboard-shortcuts-modal:overrides-changed` | — |

### `<aiux-nav-help-panel>`

Class `NavHelpPanel`.

| Event | `detail` |
|---|---|
| `aiux-ha:start-guidance` | `{ src: any; }` |
| `nav-help-panel:hidden` | — |
| `nav-help-panel:shown` | — |

### `<aiux-nav-preferences>`

Class `NavPreferences`.

_No public properties, events, or slots declared._

### `<aiux-nav-sidebar>`

Class `NavSidebar`.

| Event | `detail` |
|---|---|
| `aiux-navigate` | `{ path: string; }` |
| `aiux:kbs-favorite-current-page` | — |
| `aiux:kbs-instance-toolbar` | — |
| `nav-app-group-toggle-collapse` | `{ groupId: any; }` |
| `nav-item-click` | `{ item: { action: { type: string; name: any; }; }; }` |
| `nav-section-reorder` | `{ draggedSection: any; targetSection: any; position: any; newOrder: any; }` |
| `nav-sidebar:menu-tray-changed` | `{ menuId: any; }` |
| `nav-tabs-reordered` | `{ tabs: any; }` |
| `nav-tabs-toggle-collapse` | — |
| `nav:favorite-edit-modal-requested` | — |
| `nav:menu-data-updated` | — |
| `sidebar-toggle` | `{ collapsed: boolean; }` |
| `workspace-bridge-load-viewport` | `{ experienceId: any; id: any; label: any; group: any; routeInfo: any; viewportInfo: any; }` |
| `workspace-bridge-navigate` | `{ path: string; }` |

### `<aiux-preferences-modal>`

Class `AIUXPreferencesModal`.

_No public properties, events, or slots declared._

### `<aiux-sn-nav-favorite-edit-modal>`

Class `SnNavFavoriteEditModal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `menuItems` | `Array<any>` | yes | no | yes |
| `open` | `boolean` | yes | no | yes |
| `prefill` | `null` | no | no | yes |

### `<aiux-ui16-frame>`

Class `UI16Frame`.

_No public properties, events, or slots declared._

### `<aiux-user-preferences>`

Class `UserPreferences`.

_No public properties, events, or slots declared._

### `<content-toolbar>`

Class `ContentToolbar`.

_No public properties, events, or slots declared._

### `<horizontal-contextual-nav>`

Class `HorizontalContextualNav`.

| Event | `detail` |
|---|---|
| `horizontal-contextual-nav:toggle-favorite` | `{ favorited: boolean; anchorEl: any; }` |
| `horizontal-contextual-nav:toggle-tab` | `{ active: boolean; }` |

### `<nav-filter-input>`

Class `NavFilterInput`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `autoFocus` | `boolean` | yes | no | yes |
| `debounce` | `number` | yes | no | yes |
| `placeholder` | `string` | yes | no | yes |
| `value` | `string` | yes | no | yes |

### `<nav-global-overflow>`

Class `NavGlobalOverflow`.

| Event | `detail` |
|---|---|
| `nav-global-overflow:close` | — |
| `nav-global-overflow:item-click` | `{ item: any; }` |

### `<nav-l3>`

Class `NavL3`.

_No public properties, events, or slots declared._

### `<nav-metadata>`

Class `NavMetadata`.

_No public properties, events, or slots declared._

### `<notification-settings>`

Class `NotificationSettings`.

_No public properties, events, or slots declared._

### `<notification-toast>`

Class `NotificationToast`.

_No public properties, events, or slots declared._

### `<notifications-menu>`

Class `NotificationsMenu`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `csrfToken` | `any` | yes | no | no |
| `notifications` | `Array<any>` | yes | no | yes |
| `open` | `boolean` | yes | no | yes |
| `pinnable` | `boolean` | yes | no | yes |
| `pinned` | `boolean` | yes | no | yes |
| `showBadgeCount` | `boolean` | yes | no | yes |
| `timeZoneOffset` | `any` | yes | no | no |
| `unreadCount` | `number` | yes | no | yes |

### `<sn-aiux-content-tree>`

Class `ContentTree`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `configAria` | `{}` | yes | no | no |
| `dragdropConfig` | `{ enableDrag: boolean; enableDrop: boolean; effect: string; }` | yes | no | no |
| `expandedItems` | `Array<any>` | yes | no | no |
| `highlightSelectedParent` | `boolean` | yes | no | no |
| `items` | `Array<any>` | yes | no | no |
| `loadingItems` | `Array<any>` | yes | no | no |
| `overflow` | `string` | yes | no | no |
| `searchTerm` | `string` | yes | no | no |
| `select` | `string` | yes | no | no |
| `selectedItems` | `Array<any>` | yes | no | no |
| `showActionsOnHover` | `boolean` | yes | no | no |
| `showDividers` | `boolean` | yes | no | no |
| `size` | `string` | yes | no | no |
| `triggerIcon` | `string` | yes | no | no |

| Event | `detail` |
|---|---|
| `content-tree-action-clicked` | — |
| `content-tree-actionable-item-clicked` | — |
| `content-tree-dragdrop-end` | — |
| `content-tree-expanded-items-set` | — |
| `content-tree-item-clicked` | — |
| `content-tree-item-right-clicked` | — |
| `content-tree-loading-cancelled` | — |
| `content-tree-loading-requested` | — |
| `content-tree-selected-items-set` | — |

## Functions

```ts
addNavItem(item: Object, __1: [object Object]): void
appendL3Nav(targetPath: string, l3Nav: Array<any>): void
buildHelpAppContext(target: string, search: string): { app_route?: string; page: string; params?: object; type: "classic" | "custom" }
closeChat(): void
createCurrentPageTab(options: {}): void
getExperienceEnabled(): boolean
isInScope(basePath: string): boolean
notifyConcoursePickerStale(picker: any): void
openChat(opts: [object Object]): void
postElevateRoles(roles: any): Promise<void>
postImpersonate(sysId: any): Promise<void>
prependL3Nav(targetPath: string, l3Nav: Array<any>): void
putApplicationChange(appId: any): Promise<void>
putUpdateSetChange(sysId: any): Promise<void>
removeL3Nav(targetPath: string, paths: Array<any>): void
removeNavItem(l1Path: string): void
requestSkillExecution(payload: object): void
resolveHorizontalNavState(__0: [object Object]): { active: boolean; userToggleEnabled: boolean }
sanitizeLogoUrl(value: string): string
setHeaderConfig(host: HTMLElement, detail: Object): void
setHorizontalNavTitle(host: HTMLElement, title: string): void
setL3Nav(targetPath: string, l3Nav: Array<any>): void
setPageActions(host: HTMLElement, actions: Array<any>): void
toBool(value: unknown): boolean
```

## Constants

| Name | Type |
|---|---|
| `chatModeContext` | `ScopedContext<{ mode: string; omniPadding: boolean; }> \| GlobalContext<{ mode: string; omniPadding: boolean; }> \| [GlobalContext<{ mode: string; omniPadding: boolean; }>, (value: { mode: string; omni…` |
| `EXPERIENCE` | `false` |
| `menuDataContext` | `ScopedContext<{ menuData: {}; workspaces: Array<never>; admin: Array<never>; }> \| GlobalContext<{ menuData: {}; workspaces: Array<never>; admin: Array<never>; }> \| [GlobalContext<{ menuData: {}; work…` |
| `navLayoutContext` | `ScopedContext<any> \| GlobalContext<any> \| [GlobalContext<any>, (value: any) => void]` |
| `toolbarDebugContext` | `ScopedContext<boolean> \| GlobalContext<boolean> \| [GlobalContext<boolean>, (value: boolean) => void]` |

```ts
const HNAV_FLAGS: {
  instance: "aiux.ainpx.isolated_nav.instance_enabled";
  userPref: "aiux.ainpx.isolated_nav.enabled";
  userToggle: "aiux.ainpx.isolated_nav.user_toggle_enabled";
}
```

```ts
const SERVICENOW_LOGO_FULL: {
  _$litType$: 1;
  strings: TemplateStringsArray;
  values: Array<unknown>;
}
```

```ts
const SERVICENOW_LOGO_ICON: {
  _$litType$: 1;
  strings: TemplateStringsArray;
  values: Array<unknown>;
}
```

```ts
const SESSION_ENDPOINTS: {
  APPLICATION_PICKER: "/api/now/ui/concoursepicker/application";
  ELEVATE_ROLES: "/api/now/ui/impersonate/role";
  IMPERSONATE: "/api/now/ui/impersonate";
  UPDATE_SET_PICKER: "/api/now/ui/concoursepicker/updateset";
}
```

## Classes

<details>
<summary><code>class ChatController</code> (42 members)</summary>

```ts
class ChatController {
  _cleanupEventListeners(): void;
  _closeInteractiveView(): void;
  _dispatchChatModeChange(): void;
  _getDeploymentMetadata(): { deploymentDocumentId: any; deploymentDocumentTable: any; enabled: any; nowAssistDeploymentId: any };
  _initializeConversationServerHost(): void;
  _isHomePageChatEvent(event: any): any;
  _registerLinkHandlers(): void;
  _resolveBranding(): void;
  _retrieveChatModeFromHash(fallbackMode: string): void;
  _setupEventListeners(): void;
  cleanup(): void;
  closeChat(): void;
  deferIfResponding(action: () => void): void;
  getAiexMode(): string;
  handleChatEvent: (event: any) => void;
  handleChatVisibilityChange: (event: any) => void;
  handleCloseChat: () => void;
  handleCloseInteractiveView: (event: any) => void;
  handleOmnibarVisibilityChange: (event: any) => void;
  handleOpenChat: (event: any) => void;
  handleRequestSkillExecution: (event: any) => void;
  handleShowInteractiveView: (event: any) => void;
  handleSidePanelChange(open: any): void;
  hostConnected(): Promise<void>;
  hostDisconnected(): void;
  initialize(): Promise<void>;
  isReady(): boolean;
  navigateToChat(conversationId: any): void;
  navigateToChatOnClick(): void;
  onNavigate(path: any): void;
  openChat(__0: [object Object]): void;
  overrideChatNavigation(): void;
  remountChat(): void;
  renderChat(): DirectiveResult<{ new (_partInfo: PartInfo): Keyed<TemplateResult<1>>; prototype: Keyed<any>; }>;
  renderChatContainer(): TemplateResult<1>;
  requestSkillExecution(__0: object): void;
  setEventTarget(element: any): void;
  setExperienceConfig(config: any): void;
  shouldHideAIEX(): boolean;
  shouldHideChat(): boolean;
  switchLBFMode(mode: string): void;
  switchMode(newMode: any): void;
}
```

</details>

```ts
class NavLayout {
  _applyHomeChatManifestOverride(): void;
  _applyLayoutOverrides(): void;
  _clientHydrated: boolean;
  _drainPendingPageState(): void;
  _ensureActiveTabFromCurrentRoute(): void;
  _getTransformedUserMeta(): object;
  _handleOnboardingComplete(): void;
  _handleResizeToggleCollapse(): void;
  _hydrateActiveTabMetadata(): void;
  _initChat(): Promise<void>;
  _isSearchResultsIV: boolean;
  _loadChatController(): Promise<void>;
  _notificationSettingsOutsideAnchors(): Array<any>;
  _notificationsPanel: any;
  _notificationsSidebarCollapsed: boolean;
  _onboardingStep: null;
  _pendingBackButton: boolean;
  _resolveLoaderSelector(): string;
  _restoreTabsFromStorage(): Promise<void>;
  _showBackButton: boolean;
  _tabActivatedByUser: boolean;
  _tailwindCssUrl: string;
  connectedCallback(): Promise<void>;
  disconnectedCallback(): void;
  firstUpdated(changedProperties: any): Promise<void>;
  getNavigableMenuItems(): Promise<Array<{ title: string; url: string; }>>;
  onNavigateEnd(path: any, page: any, options: any): void;
  onNavigateStart(): void;
  render(): TemplateResult<1>;
  renderAsideStart(hnavState: [object Object], enavState: [object Object]): TemplateResult<1>;
  renderGuidanceModal(): TemplateResult<1>;
  renderLayout(): TemplateResult<1>;
  renderPage(): any;
  renderSkipLink(): any;
  updated(changedProperties: any): void;
  willUpdate(changedProperties: any): void;
}
```

```ts
class SessionActionError {

}
```


