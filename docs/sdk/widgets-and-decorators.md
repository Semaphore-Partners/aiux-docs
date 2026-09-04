# Widgets & decorators

On the SDK path a widget is a folder under `widgets/` with an `index.js` and, optionally, a `server-script.js`. The build turns the folder into one `sys_aix_widget` row. This page covers what has to be in that file for the build to recognise it, and how the AIUX decorators map to columns.

> Version note: `@servicenow/aiux` 22.42.3, `@servicenow/sdk` 4.11.0. See [Overview](overview.md).

## Decorators, briefly

A decorator is the `@something(...)` line directly above a class or field. It runs at definition time and records or changes something about what follows. Two different families appear in an AIUX project, and telling them apart matters:

| Decorator | From | What it does |
|---|---|---|
| `@customElement`, `@property`, `@state` | Lit (`lit/decorators.js`) | Change runtime behaviour: register the tag, declare reactive properties. |
| `@name`, `@bestFor`, `@server`, … | AIUX (`decorators` in `aiux-components-core`) | Record **metadata that the build harvests into columns**. |

The AIUX decorators are **no-ops at runtime**. Each is literally `(...args) => cls => cls`. The build extracts their arguments by parsing your source as an AST, which has one practical consequence: **arguments must be literals.** `@bestFor(SOME_CONSTANT)` or `@roles(computeRoles())` will compile and do nothing.

### The full set

Fifteen decorators ship in `@servicenow/aiux` 22.42.3, grouped by what they decorate.

| Decorator | Applies to | Becomes | Notes |
|---|---|---|---|
| `@name('...')` | widget | `sys_aix_widget.name` | Display name in the Builder catalog |
| `@description('...')` | widget | `description` | |
| `@bestFor('...')` | widget | `best_for` | The text an agent reads when deciding to place the widget. Defaults to `''`. |
| `@server('./server-script.js')` | widget | `script` | Path resolved relative to the widget file; compiled to the IIFE. Build error if the file doesn't exist. |
| `@discoverable(true)` | widget | drives `category` | See below |
| `@category('...')` | widget | `category` | Only honoured when `@discoverable(true)` and the value is valid; otherwise `custom` |
| `@chatCompatible(true)` | widget | `chat_compatible` | May render inside the chat surface |
| `@interactiveViewCompatible(true)` | widget | `interactive_view_compatible` | May render in the interactive view |
| `@demo(true)` | widget | `demo_install` | Install demo data |
| `@explicitSysId('...')` | widget, page | `sys_id` | Pin the record's sys_id across installs |
| `@roles(['...'])` | page | `sys_aix_page.roles` | One `@roles` drives the page gate and, for extension apps, the `sys_aix_page_route_map.roles` row gate |
| `@protectionPolicy('...')` | page | `sys_policy` on the page **and** its page-widget | e.g. `read` / `protected` |
| `@global(false)` | page | couples the page to the experience | Requires a `basename` in `aiux.json`; the default is global |
| `@title('...')`, `@subtitle('...')` | page, dashboard | page title fields | Default title is the tag name |

The orientation material this section started from knew about five of these. The table above is read from the package's own type definitions and metadata generator.

## What you write

AIUX ships its decorators inside one object, so you destructure the ones you need:

```js
// widgets/hello-world/index.js
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AIUXWidgetElement, decorators } from '@servicenow/aiux/aiux-components-core';

const { name, description, bestFor, server, discoverable } = decorators;

@customElement('aiux-hello-world')            // Lit: register the tag
@name('Hello World')                          // AIUX: metadata ↓
@description('A simple greeting widget.')
@bestFor('Displaying a greeting on the home page.')
@server('./server-script.js')
@discoverable(true)
export default class HelloWorldWidget extends AIUXWidgetElement {
  static properties = {
    _greeting: { type: String, state: true },
  };

  constructor() {
    super();
    this._greeting = 'Hello from AIUX!';      // defaults only, no side effects
  }

  render() {
    const greeting = this.data?.greeting || this._greeting;   // server value, local fallback
    return html`<p class="aiux-text-lg">${greeting}</p>`;
  }
}
```

## What lands on the instance

```
dist-metadata/aiux-json/sys_aix_widget_aiux-widget_aiux-hello-world.json
```

```json
{
  "table": "sys_aix_widget",
  "fields": {
    "name":            { "...": "← @name" },
    "description":     { "...": "← @description" },
    "best_for":        { "...": "← @bestFor" },
    "script":          { "...": "← @server, compiled to the IIFE" },
    "category":        { "..." : "" },
    "chat_compatible": { "..." : "" },
    "input_schema":    { "..." : "" },
    "component":       { "...": "← the browser bundle" }
  }
}
```

Real columns on a real table. `@bestFor` is not a code comment. It is the text a model reads when deciding whether to place your widget on a page or in a chat surface. Write it like a product description aimed at an AI, because that is what it is. The conventions on the [AI Integration](../widgets/ai-integration.md) page apply verbatim.

## What makes a file a widget

The build walks `widgets/**` looking for a class that extends `AIUXWidgetElement` **or** `AIUXElement`. For each one it finds:

| Condition | If missing |
|---|---|
| Class is the file's `default export` | **Build error**: "widget class must be default exported" |
| `@customElement('tag-name')` present | **Build error**: "widget is missing @customElement" |
| Tag is lowercase and hyphenated (`[a-z][a-z0-9]*(-[a-z0-9]+)+`) | **Build error** |
| `@discoverable(true)` | Record is created with `category: 'internal'`, so it exists but is hidden from the Builder catalog and from AI placement |
| `@bestFor('...')` | `best_for` is empty; the widget is discoverable but agents have nothing to match on |

So the rule of thumb "default export + `@customElement` + `@discoverable(true)` + `@bestFor`" is right for *a widget people can find*. Two of the four are hard errors, two degrade silently.

A widget does **not** need a server script. `@server` is optional, and a widget extending plain `AIUXElement` with no `@server` is a legitimate presentational widget.

## Base classes replace `LitElement`

Never extend `LitElement` directly.

| Extend | For | Adds |
|---|---|---|
| `AIUXElement` | Pages, layouts, components | Platform integration, no server data |
| `AIUXWidgetElement` | Widgets with a server script | `this.server`, `this.data`, `this.aiContext` |

Get it wrong and `this.server` is simply `undefined`. The instance members are the same ones documented on the Builder-side [Component](../widgets/component.md#instance-members-this) page.

## The server script as an ES module

```js
// widgets/hello-world/server-script.js — runs ON THE INSTANCE, not in Node
export default function server(data, _options, _input) {
  data.greeting = 'Hello from AIUX!';
  data.timestamp = new GlideDateTime().getDisplayValue();
}
```

Authored as an ES module; the build wraps it into the IIFE the Glide runtime wants, the same `(function(data, options, input) { ... })(data, options, input)` shape described on [Server Script](../widgets/server-script.md). You mutate `data`; you don't return. Whatever you hang off `data` arrives on the client as `this.data`.

The full Glide API is available here (`GlideRecordSecure`, `gs`, `GlideAggregate`, `$aiux`), and the eslint config declares those globals for this path only. **This is the only place in an SDK project where you write server-side Glide code.** Reaching for `gs` anywhere else is a lint error and, at runtime, undefined.

## Reactive properties: declare, then assign

Lit re-renders when a *declared* property changes. Assigning to an undeclared field does nothing visible, silently. It is the most common Lit bug and it shows up constantly in AIUX widgets.

```js
// Plain-JS form, common in widgets:
static properties = {
  _greeting: { type: String, state: true },   // state: true = internal, no attribute
};

// Decorator form, common in components:
@property({ type: String }) title = '';       // public input, mirrored to an attribute
@state() _open = false;                       // private
```

Lit compares by identity. Mutating an array in place won't re-render; reassign it.

## Passing data into a component: `attr=` vs `.prop=`

HTML attributes are strings, always. To pass an object, array, number, or function you need Lit's property binding, a leading dot:

```js
<aiux-list-connected
  table="incident"                    // attribute — a string
  .data=${data}                       // property — a real object
  .pageSize=${10}                     // property — a real number
  .listOptions=${{ heading: 'Open incidents', showCount: true }}
></aiux-list-connected>
```

Forget the dot on `.pageSize` and the component receives the string `"10"`. HTML also lowercases attribute names, so camelCase inputs are safer passed as properties.

## `nothing`

Lit's "render absolutely nothing" sentinel. Use it instead of `''`, `null`, or `false`, which can leave stray text nodes or empty attributes:

```js
${this.href && this.linkLabel
  ? html`<a href="${this.href}">${this.linkLabel}</a>`
  : nothing}
```

## See also

- [Pages, loaders & SSR](pages-loaders-and-ssr.md): the same rules for pages, plus the loader hook widgets don't have.
- [Lit](../widgets/lit.md): the Lit surface reference.
