# Worked example — Impersonation widget

Porting a Service Portal widget I wrote when SP launched: a user impersonation panel with a record picker, a "Return to me" link if currently impersonating, and a recent-impersonations list. Native sn_aiux / Lit, plus AI integration so an agent can fire `impersonate("abel.tuter")` from a chat prompt.

## What changes vs. the SP original

| Concern | Service Portal | sn_aiux native |
|---|---|---|
| Reference picker | `<sn-reference-picker>` (Angular directive) | `<record-picker>` — the OOB `sys_aix_widget` with `id="record-picker"` |
| HTTP | `$http.get/post` | `snHttp.get` from `@servicenow/aiux-utils` for the GET; plain `fetch` for the POST (the impersonate endpoint returns 201, which `snHttp` rejects — see note below) |
| Errors | local `$scope.showError` | `notifications.addErrorNotification(msg)` |
| Redirect | `$window.location.href = $scope.portal.url_suffix` | `window.location.href = options.afterRedirect \|\| '/'` |
| Templating | Angular `ng-repeat / ng-if / ng-click` | Lit `html` template + `@click` |
| Server script | `$sp` scriptable | `$aiux` scriptable, identical `gs.*` and `GlideImpersonate` |
| AI integration | — | `static client_tools` exposes `impersonate({user})` and `endImpersonation()` |
| Styling | Bootstrap (`panel`, `list-group-item`) | DaisyUI (`aiux-card`, `aiux-btn-ghost`) |

The server-side scripting is essentially unchanged. The client gets rewritten because Angular templates don't survive the port.

## The widget record

Create a `sys_aix_widget`:

- **Custom element name (id):** `impersonation`
- **Widget name:** Impersonation
- **Description:** Pick a user and impersonate them, with a Recent Impersonations list. Drop-in replacement for the Service Portal Impersonation widget.
- **Suggested use case (best_for):** *Switch the current session to impersonate another ServiceNow user, with type-ahead search and a recent-impersonations list. Use on admin or support experiences when you need to view the platform as someone else for troubleshooting. Exposes `impersonate(user)` and `endImpersonation()` client tools so AI agents can switch users from a conversation prompt.*
- **Category:** custom

## Server script

```js
(function(data, options, input) {
  var imp = new GlideImpersonate();
  data.isImpersonating       = imp.isImpersonating();
  data.realUser              = gs.getImpersonatingUserName();
  data.realUserDisplayName   = gs.getImpersonatingUserDisplayName();
  data.afterRedirectFallback = options.afterRedirect || '/aiux/' + ($aiux.getParameter('experience') || '');
})(data, options, input);
```

Functionally identical to the SP version, with one addition: a server-resolved fallback redirect target so the widget can default to *this* experience's home if no `afterRedirect` option is set on the instance.

## Component (Lit)

Plain inline card. The widget renders inside whatever container its consumer chooses — a `sys_aix_page`, a `<aiux-sidebar-tray>` opened from a menu item, anywhere. No internal dialog logic needed.

```js
import { html, nothing } from 'lit';
import { AIUXWidgetElement } from '@servicenow/aiux-components-core';
import { snHttp } from '@servicenow/aiux-utils';
import { notifications } from '@servicenow/aiux-services';

class ImpersonationWidget extends AIUXWidgetElement {
  static properties = {
    placeholder:   { type: String },
    afterRedirect: { type: String },
    _recent:       { type: Array,   state: true },
    _loading:      { type: Boolean, state: true },
  };

  static client_tools = {
    impersonate: {
      definition: function (args) { this._impersonate(args && args.user); },
      description: '[IMMEDIATE ACTION - UI CONTROL] Start impersonating a specific user. Use when the user wants to impersonate, log in as, switch to, or view as another user. Accepts either a username (e.g. "abel.tuter") or a sys_user sys_id. Keywords: impersonate, log in as, switch to, view as.',
      arguments: [
        { name: 'user', type: 'string', description: 'Username or sys_user sys_id to impersonate', required: true }
      ]
    },
    endImpersonation: {
      definition: function () {
        if (this.data && this.data.realUser) this._impersonate(this.data.realUser);
      },
      description: '[IMMEDIATE ACTION - UI CONTROL] End the current impersonation and return to the original user. Use when the user wants to stop impersonating, exit impersonation, or go back to themselves. Keywords: stop impersonating, end impersonation, return to me, exit.',
      arguments: []
    }
  };

  createRenderRoot() { return this; }

  constructor() {
    super();
    this.placeholder   = 'Search for user';
    this.afterRedirect = '';
    this._recent       = [];
    this._loading      = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadRecent();
  }

  async _loadRecent() {
    this._loading = true;
    try {
      const res = await snHttp.get('/api/now/ui/impersonate/recent');
      this._recent = (res && res.data && res.data.result) || [];
    } catch (e) {
      console.error('Failed to load recent impersonations', e);
    } finally {
      this._loading = false;
    }
  }

  // /api/now/ui/impersonate/<id> returns HTTP 201 on success.
  // snHttp treats non-200 as an error, so use plain fetch and check response.ok
  // (which is true for any 2xx). Without this, the session flips server-side
  // but the redirect never fires because snHttp throws.
  async _impersonate(userOrId) {
    if (!userOrId) return;
    try {
      const res = await fetch(
        `/api/now/ui/impersonate/${encodeURIComponent(userOrId)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type':  'application/json',
            'X-UserToken':   window.g_ck || '',
            'Accept':        'application/json',
          },
          body: '{}',
        }
      );
      if (!res.ok) {
        let msg = `Impersonation failed (${res.status})`;
        try {
          const body = await res.json();
          msg = body?.error?.message || msg;
        } catch {}
        notifications.addErrorNotification(msg);
        return;
      }
      // Session has flipped. Hard-reload so every server context resets.
      const target = this.afterRedirect
        || (this.data && this.data.afterRedirectFallback)
        || '/';
      window.location.href = target;
    } catch (e) {
      notifications.addErrorNotification(e?.message || 'Impersonation failed');
    }
  }

  // record-picker emits `record-selected` with this detail shape:
  //   { record: {…outputFields}, newValue: sys_id, oldValue, displayValue,
  //     field: { value: sys_id, displayValue } }
  _onRecordSelected(e) {
    const sysId = e?.detail?.newValue || e?.detail?.field?.value;
    if (sysId) this._impersonate(sysId);
  }

  render() {
    const isImp     = !!(this.data && this.data.isImpersonating);
    const hasRecent = this._recent && this._recent.length > 0;

    return html`
      <div class="aiux-card aiux-card-bordered aiux-bg-base-100 aiux-shadow-sm">
        <div class="aiux-card-body">
          <h3 class="aiux-card-title">Impersonate user</h3>

          <record-picker
            tableName="sys_user"
            displayField="name"
            outputFields="sys_id,user_name,name"
            placeholder=${this.placeholder}
            filters="active=true^locked_out=false^ORlocked_outISEMPTY^web_service_access_only=false^ORweb_service_access_onlyISEMPTY"
            @record-selected=${this._onRecordSelected}
          ></record-picker>

          ${isImp || hasRecent ? html`
            <div class="aiux-divider aiux-mt-4">Recent</div>
            <ul class="aiux-menu aiux-menu-sm aiux-bg-base-200 aiux-rounded-box">
              ${isImp ? html`
                <li>
                  <button class="aiux-justify-start"
                          @click=${() => this._impersonate(this.data.realUser)}>
                    ← Return to ${this.data.realUserDisplayName}
                  </button>
                </li>` : nothing}
              ${this._recent.map(r => html`
                <li>
                  <button class="aiux-justify-start"
                          @click=${() => this._impersonate(r.user_sys_id)}>
                    ${r.user_display_value}
                  </button>
                </li>`)}
            </ul>` : nothing}
        </div>
      </div>`;
  }
}
```

### Why plain `fetch` instead of `snHttp` for the POST

`snHttp` is the right call for almost every server interaction in an AIUX widget — it adds the `X-UserToken` header for you, handles abort signals cleanly, and runs through the framework's HTTP plumbing. But it validates against HTTP 200 specifically, and `/api/now/ui/impersonate/<id>` answers with **201 Created**. `snHttp` throws on 201, the widget lands in the `catch` block, the redirect never fires — but the impersonation has *already happened* server-side. The user sees a generic error toast while their session has silently flipped.

The framework also writes "Error touching session" to the console as part of that flow — `snHttp` falling through to its session-touch handler treats the 201 as a session validation failure and logs.

Plain `fetch` with `response.ok` (true for any 2xx) sidesteps both behaviors. The `X-UserToken` header is supplied manually from `window.g_ck` — same header `snHttp` would add. This is the only place in the widget we deviate from `snHttp` and it's a targeted workaround for a single endpoint's status code.

If a future patch changes the impersonation endpoint to return 200 (or fixes `snHttp` to accept any 2xx), this becomes one line back to `await snHttp.post(...)`.

### How to consume it

**Inline card on a page** — drop onto any `sys_aix_page`:

```html
<aiux-impersonation></aiux-impersonation>
```

**Sidebar-tray popover via a menu item** — point a `sys_aix_menu_item` at the widget (`target_type='widget'`, `target_widget=<sys_id>`). The OOB `employee-sidebar` will open `<aiux-sidebar-tray>` with `<aiux-impersonation>` rendered inside it on click. No widget changes needed.

**AI-driven, no UI** — an agent calls `impersonate({ user: 'abel.tuter' })` directly from a chat prompt. Session flips, redirect fires, page reloads. No picker, no tray, no click.

## Input schema

```json
{
  "placeholder":   { "type": "String",  "description": "Placeholder text in the user search field" },
  "afterRedirect": { "type": "String",  "description": "Path to navigate to after a successful impersonation. Defaults to the current experience's root." }
}
```

## What you get with the rewrite

- **Same UX** as the SP widget — pick a user, click them, the session flips, you're redirected.
- **No more Angular dependency** — the widget is pure Lit, no Bootstrap classes, themes through DaisyUI.
- **AI integration for free** — a chat prompt like *"impersonate abel.tuter"* fires the `impersonate` tool with the username, the server flips the session, the page reloads, and the agent's context refreshes against the new identity. *"Stop impersonating"* fires `endImpersonation` and returns you.
- **Error toasts** — bad impersonation attempts (locked-out user, missing permissions, etc.) come back through the standard notifications service, same as every other widget.

The widget can now be dropped onto any `sys_aix_page` — admin home, support tools, a `/impersonate` standalone — and reused as-is.

---

## How to invoke it from the menu (the SP-header equivalent)

In Service Portal, this widget was usually wired into the header menu as an "Impersonate" entry. In sn_aiux you have three reasonable options, ranked by closeness to the SP pattern:

### Option 1 — Menu item with `target_type='widget'` *(recommended)*

The cleanest path on the OOB `employee-sidebar`. Create a `sys_aix_menu_item`:

```
Menu:           <your sys_aix_menu sys_id>
Title:          Impersonate
Icon:           user-outline  (or user-secret-outline, key-outline — any icon from the OOB set)
Order:          900
Active:         true
target_type:    widget
target_widget:  <sys_id of the aiux-impersonation sys_aix_widget record>
target_url:     (leave null)
```

When the user clicks the item, `employee-sidebar`'s `_handleNavClick` opens `<aiux-sidebar-tray>` as a popover and mounts `<aiux-impersonation>` inside it. The tray handles outside-click close, ESC, focus management, and slide animations — exactly the SP "menu modal" experience, no additional widget code.

Common gotchas:

- **If `target_type='url'` and `target_widget` is populated**, the menu data carries the widget but the click handler hits the URL branch (`navigate(null)`) and does nothing. Has to be `widget`.
- **The `tagName` resolved from `target_widget`** is read from `sys_aix_widget.id`. Make sure it matches the custom-element name your widget registers as (case- and dash-sensitive — `aiux-impersonation`, not `aiuximpersonation` or `Impersonation`).
- **The widget must register itself** via the framework's auto-loader, which happens on first import. The `aiux-sidebar-tray` does `document.createElement(tagName)` — if the element isn't registered yet, you see an empty tray.

### Option 2 — Dedicated `/impersonate` page

If you'd rather not deal with a hidden launcher, just give it a page:

1. Create a `sys_aix_page` with `path_pattern = "/impersonate"`, `title = "Impersonate"`, roles restricted to `impersonator` (or whatever your role gate is).
2. Drop a single `sys_aix_widget_instance` of `impersonation` onto its top-level container.
3. Create a `sys_aix_menu_item` whose action is `navigate` to the path `/impersonate`.

Now the menu entry routes you to `/aiux/<experience>/impersonate`, the page renders, you pick a user, the session flips, redirect. The full SP flow with a URL you can deep-link.

### Option 3 — Side-panel widget

If impersonation is something admins use constantly, put the widget directly in the `shell-end` slot (the side-panel slot on `sys_aix_app_shell`). It's always one click away — no menu, no modal. Best for admin-only experiences.

### Menu item record (for options 1 and 2)

```
Name:            Impersonate
Menu:            <your sys_aix_menu>
Order:           100
Roles:           impersonator  (or admin)
Action type:     (option 1) custom event "aiux-impersonation:open"
                 (option 2) navigate to "/impersonate"
Icon:            user-secret  (or whichever from the icon set)
```

The exact field names on `sys_aix_menu_item` depend on the menu schema — open the record in the platform UI and pick the closest action type. The two reliable patterns are "navigate to path" (option 2) and "dispatch event" (option 1, if your version of the framework supports custom-event menu actions; otherwise option 2 is the fallback).

---

## Notes on the `<record-picker>` we're embedding

I read the OOB widget's source while writing this — a few things worth knowing if you're consuming it:

- **Event payload (confirmed from source):**

  ```js
  // 'record-selected' detail
  {
    record:        { ...outputFields },        // { sys_id, user_name, name }
    newValue:      <sys_id>,                    // direct sys_id, no nesting
    oldValue:      <previous sys_id> | '',
    displayValue:  <displayField value>,
    field: {
      value:        <sys_id>,
      displayValue: <displayField value>
    }
  }
  ```

  There's also a `record-cleared` event with `{ oldValue, field: { value: '', displayValue: '' } }` when the user hits the clear button. We don't listen for it here — clearing the picker doesn't end impersonation.

- **`field` prop for initial selection** uses camelCase keys: `{ sysId, name }`. If you ever want the picker to start pre-populated, that's the shape.

- **It uses Shadow DOM** — the only place in the AIUX framework I've seen that does. Means you can't reach in with utility classes to restyle the dropdown. Treat it as a sealed component; configure via props.

- **Filter sanitization** strips `<`, `>`, `'`, `"`, `;`, `` ` `` and validates against a permissive whitelist. Our impersonation filter is all alphanumerics + `=` + `^`, which passes. If you ever pass a richer query (joins, dot-walked references with `.`), the widget will silently drop it. Keep filters simple.

- **Pagination + abort + debounce are built in.** Type-ahead is debounced 300ms; in-flight requests are cancelled with `AbortController`; results paginate 20 at a time on scroll. You're getting a lot of behavior for two property bindings.

If you want a deep-dive on Lit + AIUX patterns, this is the OOB widget I'd point a reader at to study — it does Shadow DOM, portal-based dropdowns, accessibility (combobox/listbox roles, keyboard nav, live regions), abort controllers, debouncing, position-update RAF loops, and focus management. Roughly 600 lines of "this is what production Lit looks like."

## Menu-item action types in `sys_aix_menu_item`

The set of available action types (`navigate`, custom event, modal, external URL) varies by patch. Option 2 ("navigate to path") is the safest — it works against any standard menu schema. Try Option 1 first if you want the modal-style SP experience, fall back to Option 2 if your menu schema doesn't expose a custom-event or open-modal action.

The widget itself is independent of either choice — it works on a page, in a modal, or in the side panel without modification.
