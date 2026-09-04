# Component

An sn_aiux widget's `component` field holds a Lit web-component class that extends `AIUXWidgetElement`. This page covers the AIUX-specific authoring surface: the base classes, the framework-injected instance members, the lifecycle hooks, the static declarations, the services available via import, and the framework's Lit contexts and directives.

For raw Lit (`html`, `css`, `repeat`, etc.) see the [Lit](lit.md) page. For the pre-built `<aiux-*>` web components see [Daisy](daisy.md). For the server side see [Server Script](server-script.md).

---

## Base classes

Imports from `@servicenow/aiux-components-core`.

> **Builder vs SDK import paths.** The bare package names on this page (`@servicenow/aiux-components-core`, `@servicenow/aiux-services`, …) are what the Builder editor and the OOB widgets use in the browser. In an SDK project the same modules are subpaths of one package: `@servicenow/aiux/aiux-components-core`. Same symbols, same behaviour. See [Building with the SDK](../sdk/overview.md#import-paths-the-one-that-will-bite-builder-users-first).

| Symbol | Kind | Purpose |
|---|---|---|
| AIUXWidgetElement | class | Base for widget components — adds this.server.*, this.aiContext, this.deps, this.trackEvent, this.logger on top of LitElement. |
| AIUXElement | class | Base for design-system components (no server data binding). |
| WithData | mixin function | WithData(BaseClass) — opt-in server-data binding for custom base classes. |
| UxKitElement | class | Low-level base from ux_kit/core. |

Minimal widget skeleton:

```js
import { html } from 'lit';
import { AIUXWidgetElement } from '@servicenow/aiux-components-core';

class MyWidget extends AIUXWidgetElement {
  static properties = {
    title: { type: String },
  };
  createRenderRoot() { return this; }
  render() {
    return html`<h2>${this.title}</h2>`;
  }
}
```

---

## Instance members (`this.*`)

Available on any `AIUXWidgetElement`.

| Member | Kind | Description |
|---|---|---|
| this.data | property | Server script output payload. |
| this.server.get(request) | method | Call server script with {action, data}. Returns Promise<Response>. |
| this.server.update() | method | Update server data. |
| this.server.refresh() | method | Re-run server script and refresh this.data. |
| this.aiContext | property | Current AI context object. |
| this.setAiContext(ctx) | method | Update AI context. |
| this.logger | property | Framework logger. |
| this.trackEvent(name, data?) | method | Track analytics event. |
| this.deps.services | property | Dependency-injected services. |
| this.deps.directives | property | Dependency-injected directives. |
| this.renderRoot | property | Render root (light or shadow DOM). |
| this.shadowRoot | property | Shadow root. |
| this.updateComplete | property | Promise<boolean> resolved after the next update. |
| this.isConnected | property | In-DOM flag. |
| this.requestUpdate(name?, oldValue?) | method | Force a re-render. |
| this.dispatchEvent(event) | method | Dispatch a custom event. |
| this.querySelector(selector) | method | Query a light-DOM child. |

---

## Lifecycle hooks

| Hook | When |
|---|---|
| connectedCallback() | Element added to the DOM. |
| disconnectedCallback() | Element removed. |
| render() | Return a TemplateResult (required). |
| firstUpdated(changedProperties) | After the first render. |
| updated(changedProperties) | After every render. |
| willUpdate(changedProperties) | Before update / render. |
| shouldUpdate(changedProperties) | Return false to skip the next render. |
| performUpdate() | Override to batch / defer updates. |
| getUpdateComplete() | Override to await child updates. |
| createRenderRoot() | Override to change render target. return this opts out of Shadow DOM and into light DOM. |
| attributeChangedCallback(name, old, value) | Raw attribute change. |
| adoptedCallback() | Element moved to a new document. |
| onDataChange(newData, oldData) | AIUX-specific — fires when server data updates. |

---

## Static class members

```js
class MyWidget extends AIUXWidgetElement {
  // Reactive properties — same as Lit
  static properties = {
    sysId: { type: String },
    count: { type: Number },
  };

  // Component-scoped CSS (alternative to the widget record's `style` field)
  static styles = css`
    :host { display: block; }
  `;

  // Inject framework services / directives
  static dependencies = { services: ['i18n', 'notifications'], directives: [] };
  // Shorthand for services-only:
  static dependencies = ['i18n', 'notifications'];

  // AI client tools — see the AI Integration section
  static client_tools = {
    refresh: {
      definition: function() { this.server.refresh(); },
      description: '[UI CONTROL] Reload the widget data.',
      arguments: [],
    },
  };
}
```

---

## Services

Top-level singletons exported from `@servicenow/aiux-services`, `@servicenow/aiux-utils`, and `@servicenow/aiux-context`. Import the service name to use any of its methods.

### `i18n` — translations

`import { i18n } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| i18n.getMessage(key, args?) | string | Get a translated string. key is a message key or {message, code, comment} object. |
| i18n.loadMessages() | Promise<void> | Bulk-load translations. |
| i18n.loadMessage(key) | Promise<string> | Load a single message by key. |

### `notifications` — toast notifications

`import { notifications } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| notifications.add(notification) | string (id) | Add a custom notification {type, message, duration?, actions?}. |
| notifications.addInfoNotification(msg) | string (id) | Info toast. |
| notifications.addSuccessNotification(msg) | string (id) | Success toast. |
| notifications.addWarningNotification(msg) | string (id) | Warning toast. |
| notifications.addErrorNotification(msg) | string (id) | Error toast. |
| notifications.remove(id) | void | Remove by id. |
| notifications.clear() | void | Clear all active notifications. |
| notifications.getNotifications() | Array | Get all active. |
| notifications.subscribe(callback) | Unsubscribe | Watch notification state changes. |

### `locationService` — routing

`import { locationService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| locationService.navigate(path, opts?) | void | Navigate to a path. opts: {replace?, state?} |
| locationService.path() | string | Current path. |
| locationService.fullPath() | string | Full path including experience prefix. |
| locationService.url() | string | Current URL. |
| locationService.absUrl() | string | Absolute URL. |
| locationService.experience() | string | Current experience name. |
| locationService.page() | string | Current page name. |
| locationService.param(key) | string\|null | Single URL parameter. |
| locationService.params() | Object | All route parameters as an object. |
| locationService.search() | string | Search string. |
| locationService.searchParam(key) | string\|null | Get a search param. |
| locationService.hasSearchParam(key) | boolean | Check for a search param. |
| locationService.updateSearchParams(params) | void | Merge search params. |
| locationService.setSearchParams(params) | void | Replace all search params. |
| locationService.removeSearchParam(key) | void | Remove one. |
| locationService.hash() | string | URL hash. |
| locationService.setHash(hash) | void | Set hash. |
| locationService.clearHash() | void | Clear hash. |
| locationService.replace(path) | void | Replace URL without adding history. |
| locationService.back() | void | Go back. |
| locationService.subscribe(callback) | Unsubscribe | Watch for route changes. |
| locationService.onBeforeNavigate(callback) | Unsubscribe | Hook before navigation; return false to cancel. |

### `recordWatcherService` — reactive GlideRecord

`import { recordWatcherService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| recordWatcherService.createReactiveWatcher(host, table, filter, cb) | Watcher | Live-watch a table/filter; callback fires on insert/update/delete. |

### `themeService` — dark/light mode

`import { themeService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| themeService.getThemeMode() | string | Current mode. |
| themeService.setThemeMode(mode) | void | "dark" or "light". |

### `mobileAppBridgeService` — native mobile bridge

`import { mobileAppBridgeService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| mobileAppBridgeService.isMobileApp() | boolean | Running inside the native ServiceNow mobile app? |
| mobileAppBridgeService.isInitialized() | boolean | Bridge ready? |
| mobileAppBridgeService.getBridge() | Object | Bridge instance. |
| mobileAppBridgeService.init() | void | Initialize. |
| mobileAppBridgeService.destroy() | void | Destroy. |

### `userPreferencesService` — user preferences

`import { userPreferencesService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| userPreferencesService.isReduceMotionEnabled() | boolean | Reduced-motion preference. |
| userPreferencesService.getUserPreference(name, default?) | any | Read a preference value. |
| userPreferencesService.setUserPreference(name, value) | void | Set in memory. |
| userPreferencesService.saveUserPreference(name, value) | Promise<Object> | Persist to server. |
| userPreferencesService.getBooleanPreferenceValue(name, default?) | boolean | Read as boolean. |
| userPreferencesService.subscribe(name, callback) | Unsubscribe | Watch a preference. |
| userPreferencesService.getUserPreferences() | Map | All preferences. |
| userPreferencesService.fetchLanguages() | Promise | Available languages. |

### `ariaLive` — screen-reader announcements

`import { ariaLive } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| ariaLive.announce(message, politeness?, options?) | void | Announce. politeness: "polite" \| "assertive" \| "off". |
| ariaLive.announcePolite(message, options?) | void | Polite announcement. |
| ariaLive.announceAssertive(message, options?) | void | Urgent announcement. |
| ariaLive.clear() | void | Clear pending. |
| ariaLive.isInitialized() | boolean | Ready? |
| ariaLive.initialize() | void | Initialize. |
| ariaLive.destroy() | void | Destroy. |

### `snHttp` — HTTP client

`import { snHttp } from '@servicenow/aiux-utils'`

| Method | Returns | Description |
|---|---|---|
| snHttp.get(url, config?) | Promise<Response> | GET. config: {headers?, signal?, responseType?, batch?}. |
| snHttp.post(url, body?, config?) | Promise<Response> | POST. |
| snHttp.put(url, body?, config?) | Promise<Response> | PUT. |
| snHttp.delete(url, config?) | Promise<Response> | DELETE. |
| snHttp.patch(url, body?, config?) | Promise<Response> | PATCH. |

### Standalone utilities

`import { ... } from '@servicenow/aiux-utils'`

| Symbol | Returns | Description |
|---|---|---|
| getUser() | {roles, userId, firstName, lastName, name, departmentID} \| null | Current user info (client-side). |
| getSessionLanguage() | string | Session language code (e.g. "en"). |
| setAiuxGlobal(key, value) | void | Write to window.NOW.aiux. |
| getAiuxGlobal(key, default?) | any | Read from window.NOW.aiux. |
| CHAT_CHANNEL | constant | Chat channel name. |

---

## Lit contexts

For use with `ContextConsumer` (see [Lit](lit.md)) to read framework state.

`import { ... } from '@servicenow/aiux-context'`

| Context | Holds |
|---|---|
| routeContext | Current route info. |
| experienceContext | Current experience config. |
| userPreferencesContext | User preferences. |
| widgetRenderingContext | Widget origin tracking. |
| mobileAppBridgeContext | Mobile bridge state. |

Example:

```js
import { ContextConsumer } from 'lit';
import { experienceContext } from '@servicenow/aiux-context';

class MyWidget extends AIUXWidgetElement {
  experienceCtx = new ContextConsumer(this, {
    context: experienceContext,
    subscribe: true,
    callback: (value) => { this.experience = value; this.requestUpdate(); },
  });
}
```

---

## AIUX-specific directives

Lit directives specific to sn_aiux.

`import { ... } from '@servicenow/aiux-directives'`

| Symbol | Kind | Signature | Description |
|---|---|---|---|
| spreadProps | directive |  ${spreadProps(obj)}  | Spread an object of properties/attributes onto an element. |
| timeAgo | directive |  ${timeAgo(timestamp, options?)}  | Auto-updating relative time. options: {live?, formatter?}. |
| liveRegionPolite | directive |  ${liveRegionPolite(options?)}  | ARIA polite live region. |
| liveRegionAssertive | directive |  ${liveRegionAssertive(options?)}  | ARIA assertive live region. |
| getTimeAgo | function | getTimeAgo(timestamp) | Returns {value, unit, isFuture, isJustNow}. |
| formatTimeAgo | function | formatTimeAgo(timeData) | Format a getTimeAgo result as a string. |
