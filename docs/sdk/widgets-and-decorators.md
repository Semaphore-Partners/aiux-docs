# Widgets & decorators

On the SDK path a widget is a folder under `widgets/` with an `index.js` and, optionally, a `server-script.js`. The build turns the folder into one `sys_aix_widget` row. This page covers what has to be in that file for the build to recognise it, and how the AIUX decorators map to columns.

> Version note: `@servicenow/aiux` 22.42.3, `@servicenow/sdk` 4.11.0. See [Overview](overview.md).

## Decorators, briefly

A decorator is the `@something(...)` line directly above a class or field. It runs at definition time and records or changes something about what follows. Two different families appear in an AIUX project, and telling them apart matters:

| Decorator | From | What it does |
|---|---|---|
| `@customElement`, `@property`, `@state` | Lit (`lit/decorators.js`) | Change runtime behaviour: register the tag, declare reactive properties. |
| `@name`, `@description`, `@bestFor`, `@server`, `@discoverable` | AIUX (`decorators` in `aiux-components-core`) | Record **metadata that the build harvests into columns**. |

The Lit ones are the same as in any Lit project. The AIUX ones are the point of this page.

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

## The four things that make a file a widget

A file is treated as an AIUX widget only when it has **all four**:

1. A `default export` extending `AIUXWidgetElement`
2. `@customElement('...')`
3. `@discoverable(true)`
4. `@bestFor('...')`

Miss one and it silently isn't a widget. No error, no record, nothing in the Builder catalog.

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
