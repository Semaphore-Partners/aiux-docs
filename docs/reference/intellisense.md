# sn_aiux API Reference

Compiled from the canonical intellisense definitions shipped with the AIUX code editor (`wb-code-intellisense`, consumed via `window.NOW.aiux.ac`). This is the surface the Builder's autocomplete knows about, which is the closest thing to documentation that ships with the framework.

Everything below is grouped by domain. The first three sections (Lit, Base Classes, AIUX Services) are AIUX-specific. The Server section starts with `$aiux` (the AIUX-specific scriptable) and then covers the standard ServiceNow APIs available inside a widget's server script.

---

## 1. Lit (client-side templating)

Imports from `lit` and `lit/directives/*`.

| Symbol | Kind | Signature | Returns | From |
|---|---|---|---|---|
| `html` | function | `` html`...` `` | `TemplateResult` | `lit` |
| `css` | function | `` css`...` `` | `CSSResult` | `lit` |
| `svg` | function | `` svg`...` `` | `SVGTemplateResult` | `lit` |
| `nothing` | constant | — | sentinel | `lit` |
| `repeat` | function | `repeat(items, keyFn, template)` | `DirectiveResult` | `lit/directives/repeat.js` |
| `classMap` | function | `classMap(classInfo)` | `DirectiveResult` | `lit/directives/class-map.js` |
| `styleMap` | function | `styleMap(styleInfo)` | `DirectiveResult` | `lit/directives/style-map.js` |
| `ifDefined` | function | `ifDefined(value)` | `DirectiveResult` | `lit/directives/if-defined.js` |
| `guard` | function | `guard(deps, valueFn)` | `DirectiveResult` | `lit/directives/guard.js` |
| `until` | function | `until(...values)` | `DirectiveResult` | `lit/directives/until.js` |
| `unsafeHTML` | function | `unsafeHTML(value)` | `DirectiveResult` | `lit/directives/unsafe-html.js` |
| `ContextConsumer` | class | `new ContextConsumer(host, {context, subscribe?, callback})` | `ContextConsumer` | `lit` |

---

## 2. Base classes

Imports from `@servicenow/aiux-components-core`.

| Symbol | Kind | Purpose |
|---|---|---|
| `AIUXWidgetElement` | class | Base for widget components — adds `this.server.*`, `this.aiContext`, `this.deps`, `this.trackEvent`, `this.logger` on top of `LitElement` |
| `AIUXElement` | class | Base for design-system components (no server data binding) |
| `WithData` | mixin function | `WithData(BaseClass)` — opt-in server-data binding for custom base classes |
| `UxKitElement` | class | Low-level base (from `ux_kit/core`) |

---

## 3. Services

Top-level singletons exported from `@servicenow/aiux-services`, `@servicenow/aiux-utils`, and `@servicenow/aiux-context`. Import the service name to use any of its methods.

### 3.1 `i18n` — translations

`import { i18n } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| `i18n.getMessage(key, args?)` | `string` | Get a translated string. `key` is a message key or `{message, code, comment}` object. |
| `i18n.loadMessages()` | `Promise<void>` | Bulk-load translations. |
| `i18n.loadMessage(key)` | `Promise<string>` | Load a single message by key. |

### 3.2 `notifications` — toast notifications

`import { notifications } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| `notifications.add(notification)` | `string` (id) | Add a custom notification `{type, message, duration?, actions?}`. |
| `notifications.addInfoNotification(msg)` | `string` (id) | Info toast. |
| `notifications.addSuccessNotification(msg)` | `string` (id) | Success toast. |
| `notifications.addWarningNotification(msg)` | `string` (id) | Warning toast. |
| `notifications.addErrorNotification(msg)` | `string` (id) | Error toast. |
| `notifications.remove(id)` | `void` | Remove by id. |
| `notifications.clear()` | `void` | Clear all active notifications. |
| `notifications.getNotifications()` | `Array` | Get all active. |
| `notifications.subscribe(callback)` | `Unsubscribe` | Watch notification state changes. |

### 3.3 `locationService` — routing

`import { locationService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| `locationService.navigate(path, opts?)` | `void` | Navigate to a path. `opts: {replace?, state?}` |
| `locationService.path()` | `string` | Current path. |
| `locationService.fullPath()` | `string` | Full path including experience prefix. |
| `locationService.url()` | `string` | Current URL. |
| `locationService.absUrl()` | `string` | Absolute URL. |
| `locationService.experience()` | `string` | Current experience name. |
| `locationService.page()` | `string` | Current page name. |
| `locationService.param(key)` | `string\|null` | Single URL parameter. |
| `locationService.params()` | `Object` | All route parameters as an object. |
| `locationService.search()` | `string` | Search string. |
| `locationService.searchParam(key)` | `string\|null` | Get a search param. |
| `locationService.hasSearchParam(key)` | `boolean` | Check for a search param. |
| `locationService.updateSearchParams(params)` | `void` | Merge search params. |
| `locationService.setSearchParams(params)` | `void` | Replace all search params. |
| `locationService.removeSearchParam(key)` | `void` | Remove one. |
| `locationService.hash()` | `string` | URL hash. |
| `locationService.setHash(hash)` | `void` | Set hash. |
| `locationService.clearHash()` | `void` | Clear hash. |
| `locationService.replace(path)` | `void` | Replace URL without adding history. |
| `locationService.back()` | `void` | Go back. |
| `locationService.subscribe(callback)` | `Unsubscribe` | Watch for route changes. |
| `locationService.onBeforeNavigate(callback)` | `Unsubscribe` | Hook before navigation; return `false` to cancel. |

### 3.4 `recordWatcherService` — reactive GlideRecord

`import { recordWatcherService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| `recordWatcherService.createReactiveWatcher(host, table, filter, cb)` | `Watcher` | Live-watch a table/filter; callback fires on insert/update/delete. |

### 3.5 `themeService` — dark/light mode

`import { themeService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| `themeService.getThemeMode()` | `string` | Current mode. |
| `themeService.setThemeMode(mode)` | `void` | `"dark"` or `"light"`. |

### 3.6 `mobileAppBridgeService` — native mobile bridge

`import { mobileAppBridgeService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| `mobileAppBridgeService.isMobileApp()` | `boolean` | Running inside the native ServiceNow mobile app? |
| `mobileAppBridgeService.isInitialized()` | `boolean` | Bridge ready? |
| `mobileAppBridgeService.getBridge()` | `Object` | Bridge instance. |
| `mobileAppBridgeService.init()` | `void` | Initialize. |
| `mobileAppBridgeService.destroy()` | `void` | Destroy. |

### 3.7 `userPreferencesService` — user preferences

`import { userPreferencesService } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| `userPreferencesService.isReduceMotionEnabled()` | `boolean` | Reduced-motion preference. |
| `userPreferencesService.getUserPreference(name, default?)` | `any` | Read a preference value. |
| `userPreferencesService.setUserPreference(name, value)` | `void` | Set in memory. |
| `userPreferencesService.saveUserPreference(name, value)` | `Promise<Object>` | Persist to server. |
| `userPreferencesService.getBooleanPreferenceValue(name, default?)` | `boolean` | Read as boolean. |
| `userPreferencesService.subscribe(name, callback)` | `Unsubscribe` | Watch a preference. |
| `userPreferencesService.getUserPreferences()` | `Map` | All preferences. |
| `userPreferencesService.fetchLanguages()` | `Promise` | Available languages. |

### 3.8 `ariaLive` — screen-reader announcements

`import { ariaLive } from '@servicenow/aiux-services'`

| Method | Returns | Description |
|---|---|---|
| `ariaLive.announce(message, politeness?, options?)` | `void` | Announce. `politeness: "polite" \| "assertive" \| "off"`. |
| `ariaLive.announcePolite(message, options?)` | `void` | Polite announcement. |
| `ariaLive.announceAssertive(message, options?)` | `void` | Urgent announcement. |
| `ariaLive.clear()` | `void` | Clear pending. |
| `ariaLive.isInitialized()` | `boolean` | Ready? |
| `ariaLive.initialize()` | `void` | Initialize. |
| `ariaLive.destroy()` | `void` | Destroy. |

### 3.9 `snHttp` — HTTP client

`import { snHttp } from '@servicenow/aiux-utils'`

| Method | Returns | Description |
|---|---|---|
| `snHttp.get(url, config?)` | `Promise<Response>` | GET. `config: {headers?, signal?, responseType?, batch?}`. |
| `snHttp.post(url, body?, config?)` | `Promise<Response>` | POST. |
| `snHttp.put(url, body?, config?)` | `Promise<Response>` | PUT. |
| `snHttp.delete(url, config?)` | `Promise<Response>` | DELETE. |
| `snHttp.patch(url, body?, config?)` | `Promise<Response>` | PATCH. |

### 3.10 Standalone utilities

`import { ... } from '@servicenow/aiux-utils'`

| Symbol | Returns | Description |
|---|---|---|
| `getUser()` | `{roles, userId, firstName, lastName, name, departmentID} \| null` | Current user info. |
| `getSessionLanguage()` | `string` | Session language code (e.g. `"en"`). |
| `setAiuxGlobal(key, value)` | `void` | Write to `window.NOW.aiux`. |
| `getAiuxGlobal(key, default?)` | `any` | Read from `window.NOW.aiux`. |
| `CHAT_CHANNEL` | constant | Chat channel name. |

---

## 4. Lit contexts

For use with `ContextConsumer` to read framework state.

`import { ... } from '@servicenow/aiux-context'`

| Context | Holds |
|---|---|
| `routeContext` | Current route info |
| `experienceContext` | Current experience config |
| `userPreferencesContext` | User preferences |
| `widgetRenderingContext` | Widget origin tracking |
| `mobileAppBridgeContext` | Mobile bridge state |

---

## 5. Component side

### 5.1 Instance members (`this.*`)

Available on any `AIUXWidgetElement`.

| Member | Kind | Description |
|---|---|---|
| `this.data` | property | Server script output payload. |
| `this.server.get(request)` | method | Call server script with `{action, data}`. |
| `this.server.update()` | method | Update server data. |
| `this.server.refresh()` | method | Refresh server data. |
| `this.aiContext` | property | Current AI context object. |
| `this.setAiContext(ctx)` | method | Update AI context. |
| `this.logger` | property | Framework logger. |
| `this.trackEvent(name, data?)` | method | Track analytics event. |
| `this.deps.services` | property | Dependency-injected services. |
| `this.deps.directives` | property | Dependency-injected directives. |
| `this.renderRoot` | property | Render root (light or shadow DOM). |
| `this.shadowRoot` | property | Shadow root. |
| `this.updateComplete` | property | `Promise<boolean>` resolved after update. |
| `this.isConnected` | property | In-DOM flag. |
| `this.requestUpdate(name?, oldValue?)` | method | Force re-render. |
| `this.dispatchEvent(event)` | method | Dispatch a custom event. |
| `this.querySelector(selector)` | method | Query light DOM child. |

### 5.2 Lifecycle hooks

| Hook | When |
|---|---|
| `connectedCallback()` | Element added to DOM. |
| `disconnectedCallback()` | Element removed. |
| `render()` | Return `TemplateResult` (required). |
| `firstUpdated(changedProperties)` | After first render. |
| `updated(changedProperties)` | After every render. |
| `willUpdate(changedProperties)` | Before update/render. |
| `shouldUpdate(changedProperties)` | Return `false` to skip the next render. |
| `performUpdate()` | Override to batch/defer. |
| `getUpdateComplete()` | Override to await child updates. |
| `createRenderRoot()` | Override to change render target (e.g. `return this` for light DOM). |
| `attributeChangedCallback(name, old, value)` | Raw attribute change. |
| `adoptedCallback()` | Element moved to a new document. |
| `onDataChange(newData, oldData)` | AIUX-specific — fires when server `data` updates. |

### 5.3 Static class members

```js
static properties = { propName: { type: String } };
static styles = css`...`;
static dependencies = { services: [...], directives: [...] };
// or shorthand for services-only:
static dependencies = ['i18n', 'notifications'];
static client_tools = { toolName: { definition, description, arguments } };
```

---

## 6. Directives (`@servicenow/aiux-directives`)

Lit directives specific to AIUX.

| Symbol | Kind | Signature | Description |
|---|---|---|---|
| `spreadProps` | directive | `` ${spreadProps(obj)} `` | Spread an object of properties/attributes onto an element. |
| `timeAgo` | directive | `` ${timeAgo(timestamp, options?)} `` | Auto-updating relative time. `options: {live?, formatter?}`. |
| `liveRegionPolite` | directive | `` ${liveRegionPolite(options?)} `` | ARIA polite live region. |
| `liveRegionAssertive` | directive | `` ${liveRegionAssertive(options?)} `` | ARIA assertive live region. |
| `getTimeAgo` | function | `getTimeAgo(timestamp)` | Returns `{value, unit, isFuture, isJustNow}`. |
| `formatTimeAgo` | function | `formatTimeAgo(timeData)` | Format a `getTimeAgo` result as a string. |

---

## 7. Pre-built web components (`<aiux-*>`)

All registered globally; just use the tag. Side-effect import: `import '@servicenow/aiux-components-core/aiux-alert-message'` etc. (where needed).

### `<aiux-accordion-group>`
| Attr/Property | Type | Description |
|---|---|---|
| `.items` | Array | `{title, content, open?}` |
| `multiple` | boolean | Allow multiple open items |
| `icon` | string | `"arrow"` \| `"plus"` |
| `bordered` | boolean | Show item borders |
| `onchange` | string | Callback code; detail `{index, title, open}` |

### `<aiux-alert-message>`
| Attr/Property | Type | Description |
|---|---|---|
| `type` | string | `"info" \| "success" \| "warning" \| "error" \| "primary" \| "accent"` |
| `message` | string | Body text |
| `alert-title` | string | Optional title |
| `dismissible` | boolean | Show dismiss button |
| `icon` | string | Custom icon name (overrides default) |
| `duration` | number | Auto-dismiss ms (`0` = none) |
| `autofocus-controls` | boolean | Autofocus dismiss button |

### `<aiux-calendar-component>`
| Attr/Property | Type | Description |
|---|---|---|
| `.currentDate` | Object | Displayed month `{month, year}` |
| `.selectedDate` | Object | Selected date |

### `<aiux-carousel-slider>`
| Attr/Property | Type | Description |
|---|---|---|
| `.items` | Array | Slide content items |
| `show-navigation` | boolean | Prev/next buttons |
| `show-indicators` | boolean | Dot indicators |
| `autoplay` | number | Autoplay interval ms (`0` = off) |
| `alignment` | string | Slide alignment |
| `vertical` | boolean | Vertical orientation |
| `onchange` | string | Callback; detail `{index, previousIndex}` |

### `<aiux-dialog>`
| Attr/Property | Type | Description |
|---|---|---|
| `open` | boolean | Dialog is open |
| `size` | string | `"sm" \| "md" \| "lg" \| "xl" \| "fullscreen"` |
| `is-modal` | boolean | Render as modal |
| `show-close-button` | boolean | Show close button |
| `close-on-escape` | boolean | Close on Escape |
| `close-on-backdrop-click` | boolean | Close on backdrop click |
| `prevent-scroll` | boolean | Prevent body scroll when modal open |
| `resizable` | boolean | Drag-to-resize |
| `hide-padding` | boolean | Remove header/body/footer padding |
| `dialog-label` | string | `aria-label` |
| `.customSize` | Object | `{width, height}` |

### `<aiux-icon>`
| Attr/Property | Type | Description |
|---|---|---|
| `name` | string | Icon name in kebab-case (e.g. `"play-fill"`) |
| `size` | string | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` |
| `.configAria` | Object | `{role, label}` |

### `<aiux-live-region>`
| Attr/Property | Type | Description |
|---|---|---|
| `mode` | string | `"polite" \| "assertive" \| "off"` |
| `atomic` | boolean | `aria-atomic` |
| `relevant` | string | `aria-relevant` |
| `visually-hidden` | boolean | Invisible but still announced |
| `region-role` | string | Override role |

### `<aiux-loader>`
| Attr/Property | Type | Description |
|---|---|---|
| `size` | string | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` |
| `label` | string | Accessible loading label |
| `.animationConfig` | Object | Lottie config |
| `show-footer` | boolean | Show footer logo |

### `<aiux-pagination-nav>`
| Attr/Property | Type | Description |
|---|---|---|
| `current-page` | number | Active page (1-based) |
| `total-pages` | number | Total pages |
| `max-buttons` | number | Max page buttons |
| `show-prev-next` | boolean | Prev/next arrows |
| `show-first-last` | boolean | First/last arrows |
| `size` | string | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` |
| `onchange` | string | Callback; detail `{page, previousPage, totalPages}` |

### `<aiux-tab-group>`
| Attr/Property | Type | Description |
|---|---|---|
| `.tabs` | Array | `{label, id, content?, disabled?}` |
| `active-tab` | string | Active tab id |
| `variant` | string | `"boxed" \| "bordered" \| "lifted"` |
| `placement` | string | `"top" \| "bottom"` |
| `size` | string | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` |
| `name` | string | Group name |
| `stretch` | boolean | Stretch to fill width |
| `onchange` | string | Callback; detail `{id, label, index}` |

### `<aiux-toast-notification>`
| Attr/Property | Type | Description |
|---|---|---|
| `type` | string | `"info" \| "success" \| "warning" \| "error"` |
| `message` | string | Body text |
| `position` | string | Screen position |
| `dismissible` | boolean | Show dismiss button |
| `icon` | string | Custom icon name |
| `duration` | number | Auto-dismiss ms |
| `visible` | boolean | Show/hide |
| `ondismiss` | string | Callback on dismiss |

### `<aiux-time-selector>`
| Attr/Property | Type | Description |
|---|---|---|
| `is-12-hour` | boolean | 12-hour format with AM/PM toggle (default `true`) |
| `value` | string | Initial time in `HH:MM` (24-hour) |
| `disabled` | boolean | Disable all inputs |
| `size` | string | `"sm" \| "md" \| "lg"` |

---

## 8. Server side

### 8.1 `$aiux` — the AIUX scriptable

The widget server-script context. Pure JS (not a Rhino-bridged Java object — `getClass()` will fail, `for...in` returns nothing). Four documented methods:

| Method | Returns | Description |
|---|---|---|
| `$aiux.getParameter(name)` | `string\|null` | Walks precedence: **experience → page → path → search → request**. The "give me whatever's there" lookup. |
| `$aiux.getPathParameter(name)` | `string\|null` | URL path parameter only (e.g. `:sys_id` in `/record/:table/:sys_id`). |
| `$aiux.getSearchParameter(name)` | `string\|null` | URL query-string parameter only. |
| `$aiux.getWidget(widgetId, options?)` | `{properties, tagName}` | Fetch another widget's fully-populated server data — the composition primitive (Service Portal's `$sp.getWidget` analog). |

### 8.2 Server-script globals

| Symbol | Description |
|---|---|
| `data` | Output object — populated server-side, becomes `this.data` on the client. |
| `options` | Widget options from the parent / page configuration. |
| `input` | Client-supplied payload (from `this.server.get({action, data})`). |
| `$aiux` | The AIUX scriptable (above). |
| `gs` | `GlideSystem`. |
| `GlideRecord`, `GlideRecordSecure`, `GlideQuery`, `GlideAggregate`, `GlideDateTime`, etc. | All standard server APIs. |

### 8.3 `gs` — GlideSystem

#### Logging
| Method | Description |
|---|---|
| `gs.info(msg, ...args)` | Info log. |
| `gs.warn(msg, ...args)` | Warning. |
| `gs.error(msg, ...args)` | Error. |
| `gs.debug(msg, ...args)` | Debug. |
| `gs.log(msg, source?)` | Generic log with optional source. |

#### User / session
| Method | Returns |
|---|---|
| `gs.getUser()` | `GlideUser` |
| `gs.getUserID()` | sys_id string |
| `gs.getUserName()` | login name |
| `gs.getDisplayName()` / `gs.getUserDisplayName()` | display name |
| `gs.hasRole(role)` | `boolean` |
| `gs.isInteractive()` | `boolean` |
| `gs.isLoggedIn()` | `boolean` |
| `gs.isMobile()` | `boolean` |
| `gs.isDebugging()` | `boolean` |
| `gs.isPaused()` | `boolean` |
| `gs.getSession()` | `GlideSession` |
| `gs.getPreference(key, default?)` | string |

#### System properties
| Method | Description |
|---|---|
| `gs.getProperty(key, default?)` | Read system property. |
| `gs.setProperty(key, value, description?)` | Set system property. |

#### Messages (UI session messages)
| Method | Description |
|---|---|
| `gs.getMessage(id, ...args)` | Translated UI message. |
| `gs.addInfoMessage(msg)` | Add info message to session. |
| `gs.addErrorMessage(msg)` | Add error message to session. |
| `gs.flushMessages()` | Flush queued messages. |

#### Date / time helpers
All return `string`.

`gs.now()`, `gs.nowDate()`, `gs.nowTime()`,
`gs.beginningOfToday()`, `gs.endOfToday()`,
`gs.beginningOfThisWeek()` / `endOfThisWeek()`,
`gs.beginningOfLastWeek()` / `endOfLastWeek()`,
`gs.beginningOfNextWeek()` / `endOfNextWeek()`,
`gs.beginningOfThisMonth()` / `endOfThisMonth()`,
`gs.beginningOfLastMonth()` / `endOfLastMonth()`,
`gs.beginningOfNextMonth()` / `endOfNextMonth()`,
`gs.beginningOfThisYear()` / `endOfThisYear()`,
`gs.beginningOfLastYear()` / `endOfLastYear()`,
`gs.beginningOfNextYear()` / `endOfNextYear()`,
`gs.daysAgo(n)`, `gs.daysAgoStart(n)`, `gs.daysAgoEnd(n)`,
`gs.hoursAgo(n)`, `gs.hoursAgoStart(n)`, `gs.hoursAgoEnd(n)`,
`gs.minutesAgo(n)`, `gs.minutesAgoStart(n)`, `gs.minutesAgoEnd(n)`,
`gs.monthsAgo(n)`, `gs.monthsAgoStart(n)`, `gs.monthsAgoEnd(n)`,
`gs.quartersAgoStart(n)`, `gs.quartersAgoEnd(n)`,
`gs.yearsAgo(n)`

#### Instance info
| Method | Returns |
|---|---|
| `gs.getInstanceName()` | Instance name |
| `gs.getCurrentScopeName()` | Current scope |
| `gs.getCurrentApplicationId()` | Current application sys_id |
| `gs.getCallerScopeName()` | Caller scope |
| `gs.tableExists(name)` | `boolean` |

#### Utilities
| Method | Description |
|---|---|
| `gs.generateGUID()` | New GUID |
| `gs.nil(x)` / `gs.notNil(x)` | Null/empty checks |
| `gs.urlEncode(s)` / `gs.urlDecode(s)` | URL coding |
| `gs.base64Encode(s)` / `gs.base64Decode(s)` | Base64 coding |
| `gs.xmlToJSON(xml)` | Parse XML to object |
| `gs.eventQueue(name, record, p1?, p2?)` | Fire an event |
| `gs.sleep(ms)` | Pause execution |
| `gs.include(name)` | Include a Script Include (global scope) |
| `gs.setRedirect(url)` | Redirect after processing |
| `gs.setReturn(url)` | Cancel-button return URL |
| `gs.getUrlOnStack()` | URL from top of stack |
| `gs.getMaxSchemaForProperty()` | Max schema length |

### 8.4 `GlideRecord`

| Method | Description |
|---|---|
| `gr.initialize()` | Init for insert. |
| `gr.get(field_or_id, value?)` | Get by sys_id or `field=value`. |
| `gr.query()` | Execute. |
| `gr.next()` / `gr.hasNext()` | Iterate. |
| `gr.insert()` | Insert; returns sys_id. |
| `gr.update(reason?)` | Update current. |
| `gr.deleteRecord()` | Delete current. |
| `gr.deleteMultiple()` | Delete all in result set (no business rules). |
| `gr.updateMultiple()` | Update all in result set. |
| `gr.getValue(field)` | Raw string. |
| `gr.setValue(field, value)` | Set field. |
| `gr.getDisplayValue(field?)` | Display value. |
| `gr.getElement(field)` | `GlideElement`. |
| `gr.getUniqueValue()` | sys_id. |
| `gr.getTableName()` / `gr.getRecordClassName()` / `gr.getLabel()` | Table info. |
| `gr.getLink(noStack?)` | URL to record. |
| `gr.isValid()` / `gr.isValidField(f)` / `gr.isValidRecord()` / `gr.isNewRecord()` | Existence checks. |
| `gr.changes()` | Has any field changed? |
| `gr.addQuery(field, op_or_value, value?)` | AND condition. |
| `gr.addOrCondition(field, op_or_value, value?)` | OR condition. |
| `gr.addEncodedQuery(query)` | Encoded query. |
| `gr.addNullQuery(field)` / `addNotNullQuery(field)` | NULL checks. |
| `gr.addActiveQuery()` | `active=true`. |
| `gr.addJoinQuery(joinTable, primaryField?, joinField?)` | Join. |
| `gr.setLimit(n)` | Result limit. |
| `gr.chooseWindow(first, last, forceCount?)` | Pagination. |
| `gr.orderBy(field)` / `gr.orderByDesc(field)` | Sort. |
| `gr.getRowCount()` | Count. |
| `gr.getEncodedQuery()` | Current encoded query. |
| `gr.canRead()` / `canWrite()` / `canCreate()` / `canDelete()` | ACLs. |
| `gr.setWorkflow(enable)` | Toggle business rules. |
| `gr.autoSysFields(enable)` | Toggle auto sys fields. |
| `gr.setAbortAction(abort)` | Abort current DML. |
| `gr.setCategory(category)` | Logging category. |

`GlideRecordSecure(tableName)` — same API, ACLs enforced on every operation.

### 8.5 `GlideQuery` — fluent API

| Method | Description |
|---|---|
| `new GlideQuery(table)` | Constructor. |
| `gq.where(field, op_or_value, value?)` | AND condition. |
| `gq.whereNull(field)` / `whereNotNull(field)` | NULL checks. |
| `gq.select(...fields)` | Execute → `Stream`. |
| `gq.selectOne(...fields)` | First match → `Optional`. |
| `gq.get(sysId, ...fields)` | By sys_id → `Optional`. |
| `gq.insert(fields)` | Insert; returns `Optional`. |
| `gq.update(fields)` | Update matching. |
| `gq.deleteMultiple()` | Delete matching. |
| `gq.limit(n)` | Limit. |
| `gq.orderBy(field)` / `orderByDesc(field)` | Sort. |
| `gq.count()` | Count. |
| `gq.toArray(limit?)` | Execute → `Array`. |

### 8.6 `GlideAggregate`

| Method | Description |
|---|---|
| `new GlideAggregate(table)` | Constructor. |
| `ga.addAggregate(type, field?)` | `"COUNT" \| "SUM" \| "AVG" \| "MIN" \| "MAX"`. |
| `ga.getAggregate(type, field?)` | Result. |
| `ga.groupBy(field)` | Group. |
| `ga.orderByAggregate(type, field)` | Sort by aggregate. |
| `ga.addQuery(field, op_or_value, value?)` | Condition. |
| `ga.addEncodedQuery(query)` | Encoded query. |
| `ga.query()` / `ga.next()` | Execute / iterate. |

### 8.7 `GlideDateTime`

Constructor: `new GlideDateTime(dateTime?)` — string `"yyyy-MM-dd HH:mm:ss"`, another `GlideDateTime`, or omit for now.

| Method | Description |
|---|---|
| `gdt.getValue()` | UTC `"yyyy-MM-dd HH:mm:ss"`. |
| `gdt.setValue(dateTime)` | Set from string or ms. |
| `gdt.getDisplayValue()` / `getDisplayValueInternal()` | Display values. |
| `gdt.setDisplayValue(s)` / `setDisplayValueInternal(s)` | Set from display values. |
| `gdt.getDate()` / `getLocalDate()` | `GlideDate`. |
| `gdt.getTime()` / `getLocalTime()` | `GlideTime`. |
| `gdt.add(ms)` | Add milliseconds. |
| `gdt.addDaysLocalTime(n)` / `addDaysUTC(n)` | Add days. |
| `gdt.addMonthsLocalTime(n)` / `addMonthsUTC(n)` | Add months. |
| `gdt.addYearsLocalTime(n)` / `addYearsUTC(n)` | Add years. |
| `gdt.addWeeksLocalTime(n)` / `addWeeksUTC(n)` | Add weeks. |
| `gdt.addSeconds(n)` | Add seconds. |
| `gdt.subtract(a, b?)` | Subtract — accepts a `GlideDateTime` (returns `GlideDuration`) or `(other, this)` form. |
| `gdt.before(other)` / `after()` / `onOrBefore()` / `onOrAfter()` / `equals()` / `compareTo()` | Comparisons. |
| `gdt.getNumericValue()` | Epoch ms. |
| `gdt.setGlideDateTime(other)` | Copy from another. |
| `gdt.getDayOfWeekLocalTime()` / `getDayOfWeekUTC()` | 1=Mon..7=Sun. |
| `gdt.getDayOfMonthLocalTime()` / `getDayOfMonthUTC()` | Day of month. |
| `gdt.getMonthLocalTime()` / `getMonthUTC()` | Month (1-12). |
| `gdt.getYearLocalTime()` / `getYearUTC()` | Year. |
| `gdt.isValid()` / `getErrorMsg()` | Validity. |
| `gdt.getTZOffset()` | TZ offset ms. |
| `gdt.hashCode()` / `toString()` | — |

### 8.8 `GlideAjax`

Constructor: `new GlideAjax(scriptIncludeName)`.

| Method | Description |
|---|---|
| `ga.addParam(name, value)` | Add parameter. Use `"sysparm_name"` for method name. |
| `ga.getXMLAnswer()` | Sync execute, get answer string. |
| `ga.getAnswer()` | Get answer node value. |
| `ga.getXML(callback?)` | Get full XML; async if callback. |
| `ga.setScope(scope)` | Application scope. |

### 8.9 `GlideDuration`

Constructor: `new GlideDuration(value?)` — string `"days HH:mm:ss"` or ms.

| Method | Description |
|---|---|
| `gd.getValue()` / `getDisplayValue()` / `getDurationValue()` | Read. |
| `gd.setValue(value)` | Set. |
| `gd.add(other)` / `subtract(other)` | Arithmetic. |
| `gd.getDayPart()` / `getRoundedDayPart()` | Days portion. |
| `gd.getByFormat(format)` | Custom format. |

### 8.10 `GlideElement`

| Method | Description |
|---|---|
| `ge.getValue()` / `setValue(value)` / `getDisplayValue()` / `toString()` | Value access. |
| `ge.nil()` | Null/empty? |
| `ge.changes()` / `changesFrom(v)` / `changesTo(v)` | Change checks. |
| `ge.getReferenceTable()` / `getRefRecord()` | For reference fields. |
| `ge.getED()` | `GlideElementDescriptor` (field metadata). |
| `ge.getLabel()` / `getName()` / `getTableName()` | Identity. |

### 8.11 `GlideSession`

(From `gs.getSession()`.)

| Method | Description |
|---|---|
| `session.getClientData(key)` / `putClientData(key, value)` | Per-session storage. |
| `session.getClientIP()` | Client IP. |
| `session.getCurrentDomainID()` | Current domain. |
| `session.getLanguage()` | Language code. |
| `session.getTimeZoneName()` | Timezone name. |
| `session.getSessionToken()` | CSRF token. |
| `session.getUrlOnStack()` | URL from stack. |
| `session.isLoggedIn()` / `isInteractive()` | Status. |

### 8.12 `GlideUser`

(From `gs.getUser()`.)

| Method | Returns |
|---|---|
| `user.getID()` | sys_id |
| `user.getName()` | login name |
| `user.getDisplayName()` | display name |
| `user.getEmail()` | email |
| `user.getFirstName()` / `getLastName()` | name parts |
| `user.getDomainID()` | domain sys_id |
| `user.getCompanyID()` | company sys_id |
| `user.getDepartmentID()` | department sys_id |
| `user.getManagerID()` | manager sys_id |
| `user.hasRole(role)` | `boolean` |
| `user.getRoles()` | `string[]` |
| `user.isMemberOf(group)` | `boolean` |
| `user.getMyGroups()` | `string[]` |
| `user.getPreference(name)` / `savePreference(name, value)` | Preferences |

### 8.13 `GlideDate` and `GlideTime`

`GlideDate` — date only (`yyyy-MM-dd`). `GlideTime` — time only (`HH:mm:ss`).

Methods: `getValue` / `setValue`, `getDisplayValue` / `setDisplayValue`, `getByFormat(format)`, plus on `GlideDate`: `getDayOfMonthNoTZ()`, `getMonthNoTZ()`, `getYearNoTZ()`; on `GlideTime`: `getHourLocalTime()`, `getHourUTC()`, `getHourOfDayLocalTime()`, `getHourOfDayUTC()`, `getDisplayValueInternal()`.

### 8.14 `GlideQueryCondition`

Returned by `gr.addQuery()`. Methods: `addCondition(field, op_or_value, value?)` (AND), `addOrCondition(field, op_or_value, value?)` (OR).

### 8.15 `GlideSysAttachment`

| Method | Description |
|---|---|
| `att.write(record, fileName, contentType, data)` | Attach string content. |
| `att.writeBase64(record, fileName, contentType, base64)` | Attach base64 data. |
| `att.writeContentStream(record, fileName, contentType, inputStream)` | From Java `InputStream`. |
| `att.getContent(sysId)` / `getContentBase64(sysId)` | Read content. |
| `att.copy(srcTable, srcId, tgtTable, tgtId)` | Copy attachments between records. |
| `att.deleteAttachment(sysId)` | Delete. |
| `att.getAttachments(tableName, sysId)` | List as `GlideRecord`. |

### 8.16 `GlideFilter`

`GlideFilter.checkRecord(gr, filter, matchAll?)` → `boolean`. Tests whether a `GlideRecord` matches an encoded query. `matchAll`: `true` = AND across conditions (default), `false` = OR.

### 8.17 `GlidePluginManager`

`new GlidePluginManager()`, then `pm.isActive(pluginId)` → `boolean`.

### 8.18 `GlideSchedule`

Constructor: `new GlideSchedule(sysId?, timeZone?)`.

| Method | Description |
|---|---|
| `sched.getName()` | Schedule name. |
| `sched.isInSchedule(dateTime)` | Datetime is within schedule? |
| `sched.duration(startDT, endDT)` | Working duration → `GlideDuration`. |
| `sched.whenNext(dateTime, timeZone?)` | Next active time after `dateTime`. |
| `sched.load(sysId, timeZone?, excludeSpanId?)` | Load by sys_id. |
| `sched.setTimeZone(timeZone)` | Set timezone. |
| `sched.isValid()` | Loaded successfully? |

### 8.19 `GlideEncrypter`

`new GlideEncrypter()`, then `enc.encrypt(value)` / `enc.decrypt(value)`.

### 8.20 `GlideSecurityUtils`

| Method | Description |
|---|---|
| `GlideSecurityUtils.cleanURL(url)` | Sanitize URL. |
| `GlideSecurityUtils.enforceRelativeURL(url)` | Force relative (prevent open redirect). |
| `GlideSecurityUtils.escapeScript(value)` | Escape for script context. |
| `GlideSecurityUtils.isURLWhiteListed(url)` | Whitelist check. |

### 8.21 `GlideStringUtil`

| Method | Description |
|---|---|
| `GlideStringUtil.escapeHTML(str)` / `unescapeHTML(str)` | HTML entity coding. |
| `GlideStringUtil.escapeNonPrintable(str)` | Escape non-printable chars. |
| `GlideStringUtil.escapeQueryTermSeparator(str)` | Escape `^` in encoded queries. |
| `GlideStringUtil.getHTMLValue(str)` | Convert to HTML entities. |
| `GlideStringUtil.getNumeric(str)` | Extract numerics. |
| `GlideStringUtil.isBase64(str)` | Base64 check. |
| `GlideStringUtil.isEligibleSysID(str)` | Valid 32-char sys_id? |
| `GlideStringUtil.newLinesToBreaks(str)` | `\n` → `<br/>`. |
| `GlideStringUtil.dotToUnderBar(str)` | `.` → `_`. |

### 8.22 `GlideTableHierarchy`

Constructor: `new GlideTableHierarchy(tableName)`.

| Method | Returns |
|---|---|
| `th.getTables()` | All tables in hierarchy (self + parents) |
| `th.getTableExtensions()` | Direct child tables |
| `th.getAllExtensions()` | All descendant tables |
| `th.getName()` | Table name |
| `th.getRoot()` | Root of hierarchy |
| `th.getBase()` | Direct parent |
| `th.isBaseClass()` | Is root? |
| `th.isSoloClass()` | No extensions? |
| `th.hasExtensions()` | Has children? |

### 8.23 `GlideScopedEvaluator`

| Method | Description |
|---|---|
| `new GlideScopedEvaluator()` | Constructor. |
| `ev.evaluateScript(gr, scriptField, variables?)` | Evaluate script from a record field with injected variables. |
| `ev.getVariable(name)` / `putVariable(name, value)` | Get/set variables. |

---

## Appendix: source

This reference was extracted from the `wb-code-intellisense` widget shipped with the AIUX framework. The widget is consumed by `wb-ds-code-editor` and provides the Builder's autocomplete, hover tooltips, and signature help.
