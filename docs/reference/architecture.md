# Architecture diagrams

Four diagrams, each covering one part of the `sn_aiux` architecture: what mounts inside what, which tables back it, what happens on a page load, and how a widget's server and client halves talk to each other. They render natively on GitHub as Mermaid.

---

## 1. The mounting hierarchy (nested boxes)

**What it shows:** the literal containment — what's inside what — in the spirit of the classic Service Portal CSS docs diagram. Outer to inner: browser → `aiux-app` → `aiux-app-shell` (with its four region slots + the main content area) → `aiux-page` → `page-container` → `layout-container` → containers → widget instances. Every level here is light-DOM rendered into the previous.

```mermaid
flowchart TB
    subgraph BROWSER ["🌐 browser · /aiux/builder/widgets"]
        direction TB
        subgraph APP ["&lt;aiux-app&gt;"]
            direction TB
            subgraph SHELL ["&lt;aiux-app-shell&gt;"]
                direction TB
                H["shell-header → header widget"]
                subgraph MID [" "]
                    direction LR
                    L["shell-start<br/>(sidebar widget)"]
                    subgraph MAIN ["&lt;main class='aiux-main'&gt;"]
                        direction TB
                        subgraph PAGE ["&lt;aiux-page&gt;"]
                            direction TB
                            subgraph PC ["page-container"]
                                direction TB
                                subgraph LC ["layout-container"]
                                    direction TB
                                    subgraph C1 ["container (top-level)<br/><i>sys_aix_container</i>"]
                                        direction TB
                                        subgraph C2 ["nested container<br/><i>row</i>"]
                                            direction LR
                                            subgraph C3 ["nested container<br/><i>column</i>"]
                                                direction TB
                                                W1["widget instance<br/><b>Cool Clock</b>"]
                                            end
                                            subgraph C4 ["nested container<br/><i>column</i>"]
                                                direction TB
                                                W2["widget instance<br/><b>Greetings</b>"]
                                            end
                                        end
                                        W3["widget instance<br/><b>Notifications Tray</b>"]
                                    end
                                end
                            end
                        end
                    end
                    R["shell-end<br/>(side-panel widget)"]
                end
                F["shell-footer → footer widget"]
            end
        end
    end

    classDef browser fill:#fafafa,stroke:#9ca3af,stroke-width:1px,color:#1c1d42
    classDef app     fill:#eef2ff,stroke:#4f52bd,stroke-width:2px,color:#1c1d42
    classDef shell   fill:#dbeafe,stroke:#3b82f6,stroke-width:2px,color:#1c1d42
    classDef page    fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#1c1d42
    classDef pagebox fill:#f0f9ff,stroke:#7dd3fc,stroke-width:1px,color:#1c1d42
    classDef container fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#1c1d42
    classDef widget    fill:#fff,stroke:#92400e,stroke-width:2px,color:#1c1d42

    class BROWSER browser
    class APP app
    class SHELL,MID shell
    class MAIN,PAGE page
    class PC,LC pagebox
    class C1,C2,C3,C4 container
    class W1,W2,W3,H,L,R,F widget
```

> **What to take away:** the framework wraps your widget in five concentric layers — *experience shell* (chrome around every page), *page* (swapped per route), *page-container + layout-container* (style hooks), then your *containers* (which can nest arbitrarily, like rows containing columns) — before you ever get to a widget instance. Each container is a `<div>` with utility classes and a `data-container-id`; nesting is configured by setting `parent_container` on `sys_aix_container` rows. Widget instances are the leaves.

> **How this maps to the SP analogy:** `aiux-app-shell` ≈ the SP portal's outer chrome. `aiux-page` ≈ an `sp_page`. The container/widget nesting is exactly the SP container/row/column pattern, just stored in `sys_aix_container` records and rendered to plain divs with Tailwind/DaisyUI utility classes instead of SP's hard-coded `.container > .row > .col-md-*` Bootstrap grid.

---

## 2. The data model

**What it shows:** which tables back what's on the screen, and how the records reference each other.

```mermaid
erDiagram
    sys_aix_experience ||--o| sys_aix_app_shell : "app_shell"
    sys_aix_experience ||--o| sys_aix_theme : "theme"
    sys_aix_experience ||--o{ sys_aix_experience_properties : "properties"
    sys_aix_experience }o--o{ sys_aix_page : "via experience_page_rel"
    sys_aix_experience ||--o{ sys_aix_url_rewrite_rule : "rewrites"

    sys_aix_app_shell }o--o{ sys_aix_widget : "header / start / end / footer"
    sys_aix_app_shell ||--o| sys_aix_menu : "menu"
    sys_aix_menu ||--o{ sys_aix_menu_item : "items"

    sys_aix_page ||--o{ sys_aix_container : "top-level containers"
    sys_aix_container ||--o{ sys_aix_container : "nested"
    sys_aix_container ||--o{ sys_aix_widget_instance : "holds"
    sys_aix_widget_instance }o--|| sys_aix_widget : "is configured copy of"

    sys_aix_page ||--o{ sys_aix_dashboard_item : "if type=dashboard"
    sys_aix_dashboard_item }o--|| sys_aix_widget : "renders"
    sys_aix_layout ||--o{ sys_aix_layout : "nested"
    sys_aix_layout }o--|| sys_aix_widget : "layout widget"

    sys_aix_experience {
        string url_suffix
        string title
        string landing_path
        ref app_shell
        ref theme
    }
    sys_aix_page {
        string title
        string path_pattern
        string page_specific_css
        string roles
        bool hide_chat
        string type
    }
    sys_aix_container {
        string classes
        ref parent_container
        ref page
        int order
    }
    sys_aix_widget_instance {
        json properties
        string classes
        int order
        ref widget
        ref container
    }
    sys_aix_widget {
        string id
        string name
        string best_for
        text component
        text script
        text style
        json input_schema
        json client_tools
    }
    sys_aix_app_shell {
        string name
        text css
        ref header_widget
        ref start_widget
        ref end_widget
        ref footer_widget
    }
    sys_aix_layout {
        string name
        ref layout_widget
        ref parent_layout
    }
    sys_aix_experience_properties {
        string key
        string value
    }
```

> **What to take away:** an *experience* owns an *app shell* (chrome), a *theme* (color tokens), and a bag of *properties* (config). It points to *pages* through a m2m rel. A page owns a tree of *containers*; containers hold *widget instances*; widget instances are configured copies of *widget records* (the type). Dashboard pages take a different path: *dashboard items* + *layouts* (themselves driven by `sys_aix_widget` records, recursively nestable). The same widget catalog feeds both worlds.

---

## 3. The page-load sequence

**What it shows:** the request-flow timeline from URL hit to widgets rendered. Two multipart/mixed streaming endpoints do almost all the work; per-widget HTTP only happens on explicit refresh.

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant B as Browser
    participant DO as $ai_experience.do
    participant App as aiux-app
    participant Shell as aiux-app-shell
    participant Page as aiux-page
    participant API as sn_aiux API

    U->>B: Navigate /aiux/builder/widgets
    B->>DO: GET $ai_experience.do
    DO-->>B: SPA HTML (sets window.NOW.portal_id = aiuxsp)
    B->>App: mount aiux-app (URLPattern parses experience=builder, page=widgets)
    App->>App: router.init() + initiateOAuth()
    App->>API: GET /api/now/aix/config/builder
    Note over App,API: multipart/mixed stream
    API-->>App: experienceData<br/>(theme, landingPath, properties)
    API-->>App: appShellData<br/>(header/start/end/footer widget tagNames + css)
    API-->>App: urlRewriteRules<br/>(legacy SP/.do redirects)
    App->>Shell: render aiux-app-shell
    Shell->>Shell: lazy-load header/start/end/footer widget chunks
    Shell->>Page: mount aiux-page

    Page->>API: POST /api/now/aix/page/config<br/>{pagePath: '/widgets'}
    Note over Page,API: multipart/mixed stream
    API-->>Page: pageMeta {pageSysId, pageType}
    Page->>Page: dynamic-import /aix/page_bundle/&lt;sysId&gt;.jsdbx
    API-->>Page: pageData {title, css, type, containers, pathParams}
    API-->>Page: widgetData {sysId: server-script output}
    Note over Page: server pre-runs each widget's script,<br/>ships data inline — no N+1
    Page->>Page: renderContainers(containers, widgetData)
    Page->>Page: each instance mounts as a custom element<br/>with .data already populated
    Page-->>App: AIUX_FIRST_PAGE_LOAD_COMPLETE
    App->>App: hide Lottie loader

    rect rgb(248,246,235)
    Note over U,API: After mount — widget refresh
    U->>Page: clicks "Refresh" in a widget
    Page->>API: POST /api/now/aix/widget/&lt;widget.id&gt;<br/>{input, options, context}
    API-->>Page: {data, $$uiNotification}
    Page->>Page: widget.data ← data
    Page->>Page: notifications.processServerNotifications<br/>auto-toasts
    end
```

> **What to take away:** the cold load is two streaming requests. The first carries the experience config + app shell. The second carries the page metadata *plus every widget's pre-rendered data*, inlined as separate parts of the same stream. Per-widget HTTP only kicks in when a widget calls `this.server.refresh()` after the page is mounted. The `$$uiNotification` magic key on any server response surfaces as a toast for free.

---

## 4. The widget interaction model (server ↔ client)

**What it shows:** the SP-doc-style "globals" picture for an sn_aiux widget. Server side at the top, client side at the bottom, two clean arrows showing the request cycle. Same spirit as the classic *server script globals / client script globals* infographic, with the AIUX-specific additions (`$aiux`, `context`, `this.aiContext`, `client_tools`) called out.

```mermaid
flowchart TB
    subgraph SERVER ["🗄️ <b>Server-script globals</b> · Rhino · sys_aix_widget.script"]
        direction LR
        si["📥 <b>input</b> · object<br/>Client payload from this.server.get({...}).<br/>Empty on the initial cold render."]
        so["⚙️ <b>options</b> · object<br/>The widget instance's configured options.<br/>Sourced from sys_aix_widget_instance.properties.<br/>Shape mirrors input_schema."]
        sd["📦 <b>data</b> · object<br/>What you populate; becomes this.data on the client.<br/>Set data.$$uiNotification to auto-toast."]
        sc["🧭 <b>context</b> · object<br/>{ experience, page, params, searchParams }<br/>Resolved server-side from the request."]
        sx["🔧 <b>$aiux</b> · scriptable<br/>getParameter · getPathParameter ·<br/>getSearchParameter · getWidget"]
    end

    subgraph CLIENT ["💻 <b>Client-script globals</b> · AIUXWidgetElement · sys_aix_widget.component"]
        direction LR
        cd["📦 <b>this.data</b> · object<br/>The data the server populated.<br/>Reactive — Lit re-renders on change."]
        co["⚙️ <b>this.&lt;property&gt;</b> · reactive props<br/>Declared in static properties.<br/>Drives the options sent on each call."]
        ca["🤖 <b>this.aiContext</b> · object<br/>State the AI agent reads when prompting.<br/>Update with this.setAiContext(ctx)."]
        ct["🎯 <b>static client_tools</b><br/>UI actions an AI agent can call.<br/>Mirrored in sys_aix_widget.client_tools."]
    end

    CLIENT ==>|"<b>this.server.get({ input })</b> · this.server.update() · this.server.refresh()<br/>POST /api/now/aix/widget/&lt;widget.id&gt;<br/>body: { input, options, context }"| SERVER
    SERVER ==>|"<b>response.result.data → this.data</b><br/>+ response.result.$$uiNotification → auto-toast"| CLIENT

    classDef server fill:#1c1d42,stroke:#4f52bd,stroke-width:2px,color:#fff
    classDef client fill:#eef2ff,stroke:#4f52bd,stroke-width:2px,color:#1c1d42
    classDef sBox fill:#e0e7ff,stroke:#4f52bd,stroke-width:1px,color:#1c1d42
    classDef cBox fill:#fff,stroke:#4f52bd,stroke-width:1px,color:#1c1d42

    class SERVER server
    class CLIENT client
    class si,so,sd,sc,sx sBox
    class cd,co,ca,ct cBox
```

> **What to take away:** every server call is one POST to `/api/now/aix/widget/<widget.id>` carrying three things — `input` (what you sent), `options` (your widget's reactive properties), and `context` (the route info). The server populates `data`, optionally tucks a `$$uiNotification` payload alongside, and the client merges both into a reactive update + a free toast. The four AIUX-specific additions over SP — `$aiux`, `context`, `this.aiContext`, and `static client_tools` — are what make the same widget pattern interoperate with the AI agent.

> **What's the same as Service Portal:** the IIFE signature `(function(data, options, input) { ... })(data, options, input)`. All your `gs.*` and `GlideRecord` knowledge ports over unchanged.

> **What's different:** the **context** parameter is now a first-class server-side global (route info pre-resolved, no `gs.action.getGlideURI()` gymnastics). The **`$aiux`** scriptable is the spiritual successor to `$sp`, with `getWidget()` preserved as the composition primitive. Two brand-new concepts — **`this.aiContext`** on the client and **`static client_tools`** declarations — are how the widget participates in AI conversations. The transport endpoint is `/api/now/aix/widget/<id>` (instead of `/api/sp/widget/<id>`), and notifications use the `$$uiNotification` channel on the response payload (same shape SP uses, kept verbatim for muscle-memory).

---

## Rendering notes

- `<br/>` line breaks inside labels work in both `flowchart` and `sequenceDiagram` blocks.
- `&lt;` / `&gt;` are needed to display literal angle brackets in labels (e.g. `<aiux-widget>` → `&lt;aiux-widget&gt;`).
- The `rect rgb(...)` block in diagram 3 highlights the post-mount interaction phase.
- To render on a dark background, add `%%{init: {'theme':'dark'}}%%` as the first line of a diagram.

## Contributing a diagram

A fifth diagram that would earn its place: the Service Portal bridge — `<aiux-widget>` → `<aiux-angular-element>` → embedded Angular runtime → `sp_widget`. See [CONTRIBUTING](../../CONTRIBUTING.md).
