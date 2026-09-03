# Lit

sn_aiux widgets are Lit web components — specifically, classes that extend `AIUXWidgetElement` (which itself extends `LitElement`). This page covers the raw Lit surface that any widget author needs: the `html` and `css` tagged templates, the standard directives, and the `ContextConsumer` integration. For the AIUX-specific additions (services, lifecycle extras, `client_tools`, the framework's own directives) see [Component](component.md).

If you've never written Lit before, the [official documentation](https://lit.dev) is the canonical reference. The cheat sheet here is just the surface that ships in the sn_aiux bundle, with the import paths you'll actually need inside a widget.

---

## Templating: `html`, `css`, `svg`

`import { html, css, svg, nothing } from 'lit'`

| Symbol | Kind | Signature | Returns |
|---|---|---|---|
| html | function |  html...  | TemplateResult |
| css | function |  css...  | CSSResult |
| svg | function |  svg...  | SVGTemplateResult |
| nothing | constant | — | Sentinel for "render nothing" |

Use `html` inside `render()`, `css` inside `static styles`, and `nothing` as a conditional-render escape hatch:

```js
render() {
  return html`
    <h2>${this.title}</h2>
    ${this.showDetails ? html`<p>${this.body}</p>` : nothing}
  `;
}
```

---

## Standard directives

Each directive is imported from its own submodule. All return `DirectiveResult` and are interpolated into an `html` template the same way as values.

| Directive | Import | Signature | Description |
|---|---|---|---|
| repeat | lit/directives/repeat.js | repeat(items, keyFn, template) | Keyed list rendering. keyFn returns an identity key per item. |
| classMap | lit/directives/class-map.js | classMap(classInfo) | Toggle classes from an object of {className: boolean}. |
| styleMap | lit/directives/style-map.js | styleMap(styleInfo) | Inline styles from an object of {cssProp: value}. |
| ifDefined | lit/directives/if-defined.js | ifDefined(value) | Removes the attribute if value is undefined. |
| guard | lit/directives/guard.js | guard(deps, valueFn) | Re-evaluate valueFn only when one of deps changes. |
| until | lit/directives/until.js | until(...values) | Render promises in resolution order; last value wins. |
| unsafeHTML | lit/directives/unsafe-html.js | unsafeHTML(value) | Inject raw HTML. Sanitize first. |

Example combining `repeat` and `classMap`:

```js
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';

render() {
  return html`
    <ul>
      ${repeat(this.items, item => item.sysId, item => html`
        <li class=${classMap({ active: item.sysId === this.selectedId })}>
          ${item.label}
        </li>`)}
    </ul>`;
}
```

---

## `ContextConsumer` — read context state

`import { ContextConsumer } from 'lit'`

A `ContextConsumer` lets your widget read state published by another part of the tree. Combine with the [Lit contexts](component.md#lit-contexts) the framework exposes — `routeContext`, `experienceContext`, etc.

```js
new ContextConsumer(host, {
  context: routeContext,
  subscribe: true,
  callback: (value) => { /* called on every change */ },
})
```

| Argument | Type | Description |
|---|---|---|
| host | LitElement | The element that owns the consumer (usually this). |
| context | Context | The context object to read from. |
| subscribe? | boolean | If true, re-fire callback on every change. |
| callback | function | Receives the context value. |

---

## Reactive properties

Declared via `static properties` on your class:

```js
class MyWidget extends AIUXWidgetElement {
  static properties = {
    title:        { type: String  },
    count:        { type: Number  },
    enabled:      { type: Boolean },
    items:        { type: Array   },
    config:       { type: Object  },
  };
}
```

Any change to a declared property schedules a re-render. Use `this.requestUpdate(name?, oldValue?)` to force one manually.

---

## Lifecycle (Lit-side)

The standard Lit lifecycle is available on every widget. For the AIUX-specific addition `onDataChange`, see [Component](component.md#lifecycle-hooks).

| Hook | When |
|---|---|
| connectedCallback() | Element added to the DOM. |
| disconnectedCallback() | Element removed. |
| render() | Return a TemplateResult (required). |
| firstUpdated(changedProperties) | After the first render. |
| updated(changedProperties) | After every render. |
| willUpdate(changedProperties) | Before update / render. |
| shouldUpdate(changedProperties) | Return false to skip the next render. |
| performUpdate() | Override to batch / defer. |
| getUpdateComplete() | Override to await child updates. |
| createRenderRoot() | Override to change render target. return this opts out of Shadow DOM. |
| attributeChangedCallback(name, old, value) | Raw attribute change. |
| adoptedCallback() | Element moved to a new document. |
