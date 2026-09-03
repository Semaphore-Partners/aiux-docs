# AI Integration

`sn_aiux` is the first ServiceNow portal framework where widgets are first-class participants in conversational AI flows. Two widget-record fields and two runtime APIs do most of the work:

- `best_for` — natural-language hint the AI agent reads to decide *when* to invoke the widget.
- `client_tools` — JSON manifest of UI actions the widget exposes to the agent at runtime.
- `this.aiContext` / `setAiContext(ctx)` — per-instance AI context the widget can write into.
- `$aiux.getWidget(widgetId, options?)` — server-side composition primitive that lets one widget pull another widget's fully-populated data, enabling widget orchestration.

This page covers each in turn.

## `best_for`

A field on the `sys_aix_widget` record. It's a free-text description engineered for the agent's decision-making, not the developer's — written so an LLM reading the field list can match a user's intent to the right widget.

Example, from the OOB Activity Stream widget:

> *Displaying ticket or record activity history with comments, work notes, and attachments in a chronological timeline. Ideal for case management, incident tracking, and any record that needs a conversation-style activity feed with the ability to post new entries.*

Write `best_for` the way you'd write a tool description for an agent prompt: be concrete about what the widget shows, what kind of records it works on, and when an agent should reach for it instead of something else.

## `client_tools`

A JSON field on the widget record that declares a set of UI actions the widget exposes to AI agents. Each tool has a `description` (read by the LLM to decide whether to call it), an `arguments` schema, and a JS handler bound to the widget instance.

Example, from Activity Stream:

```json
{
  "postComment": {
    "description": "[IMMEDIATE ACTION - UI CONTROL] Posts a comment to the activity stream. EXECUTE THIS TOOL when user wants to add a comment, note, or message to the ticket/record. This posts to the journal field (comments or work notes depending on configuration). Keywords: comment, post, add note, reply, respond, message.",
    "arguments": [
      { "name": "input", "type": "string", "description": "The comment text to post to the activity stream", "required": true }
    ]
  }
}
```

The widget's Lit class registers a matching `static client_tools` entry so the framework can dispatch the call into a real JS method when the agent fires it:

```js
class ActivityStream extends AIUXWidgetElement {
  static client_tools = {
    postComment: {
      definition: ActivityStream.prototype.post,
      description: '[IMMEDIATE ACTION - UI CONTROL] Posts a comment to the activity stream. EXECUTE THIS TOOL when user wants to add a comment, note, or message to the ticket/record.',
      arguments: [
        { name: 'input', type: 'string', description: 'The comment text to post', required: true }
      ]
    }
  };
}
```

### Description conventions

OOB widgets share a few writing patterns worth copying:

- **`[IMMEDIATE ACTION - UI CONTROL]`** prefix when the agent should call the tool eagerly, without confirmation.
- **Keyword list** at the end (`Keywords: comment, post, add note, reply, respond, message.`) — explicit triggers the LLM can match against user phrasing.
- **EXECUTE THIS TOOL when ...** — capitalized, imperative, action-trigger phrasing.

### What OOB widgets expose

A non-exhaustive tour of `client_tools` declarations across the OOB library:

| Widget | Tools |
|---|---|
| Activity Stream | postComment |
| Add attachments | parameters, properties |
| Breakout Game | reset-game, pause-game, get-game-state, set-difficulty |
| Employee Profile Card | loadProfileDetails |
| People Card | showOrgChart, refresh |

The Breakout Game is a deliberate teaching example — four tools that map cleanly to natural user requests ("reset the game", "pause the game", "what's the score?", "make it harder") and the implementation is small enough to read in one sitting.

## `this.aiContext` and `setAiContext(ctx)`

Each widget instance gets an `aiContext` slot the framework reads when constructing agent prompts. Use `this.setAiContext(ctx)` to write a structured object describing the widget's current state.

```js
firstUpdated() {
  this.setAiContext({
    record: { table: 'incident', sys_id: this.sysId },
    state: this.data?.state,
    assignee: this.data?.assignee?.display_value,
  });
}
```

When the agent has access to the widget, that context is part of the prompt — letting the LLM make better decisions about which `client_tools` to invoke and with what arguments. Update the context whenever the widget's state changes.

## `$aiux.getWidget` — server-side composition

The composition primitive that Service Portal had as `$sp.getWidget`, preserved and renamed for the new framework. Inside a widget's server script:

```js
const childData = $aiux.getWidget('people-card', {
  user_sys_id: gs.getUserID(),
});
// childData = { properties: {...}, tagName: 'people-card' }
```

`$aiux.getWidget` executes another widget's server script with the supplied options and returns its `data` and rendered `properties`. You can then either:

- Render the returned `tagName` directly in your Lit template, or
- Use the returned `properties` to compose a custom UI that includes the other widget's data without rendering its template.

This is how the AIUX equivalent of `<sp-widget>` works under the hood. It also lets agentic widgets orchestrate other widgets server-side without round-tripping through the client.

## Worked example: the `$aiux` showcase

A small native widget that exercises every piece of the AI surface plus the four `$aiux` methods. Create a `sys_aix_widget` with id `aiux-showcase`:

**Server script:**

```js
(function(data, options, input) {
  data.results = [];
  data.composed = null;

  var probeKey = options.probeKey || 'sys_id';

  function tryCall(label, fn) {
    var entry = { label: label, key: probeKey };
    try {
      var v = fn();
      entry.value = (v === null || typeof v === 'undefined') ? null : String(v);
      entry.ok = true;
    } catch (e) {
      entry.value = null;
      entry.ok = false;
      entry.error = String(e);
    }
    data.results.push(entry);
  }

  tryCall('$aiux.getParameter(key)',       function() { return $aiux.getParameter(probeKey); });
  tryCall('$aiux.getPathParameter(key)',   function() { return $aiux.getPathParameter(probeKey); });
  tryCall('$aiux.getSearchParameter(key)', function() { return $aiux.getSearchParameter(probeKey); });

  if (options.composeWidget) {
    try {
      data.composed = $aiux.getWidget(options.composeWidget, {
        user_sys_id: gs.getUserID()
      });
    } catch (e) {
      data.composed = { error: String(e) };
    }
  }
})(data, options, input);
```

**Component:**

```js
import { html, nothing } from 'lit';
import { AIUXWidgetElement } from '@servicenow/aiux-components-core';
import '@servicenow/aiux-components-core/aiux-alert-message';

class AiuxShowcase extends AIUXWidgetElement {
  static properties = {
    results:  { type: Array },
    composed: { type: Object },
    probeKey: { type: String },
  };

  static client_tools = {
    setProbeKey: {
      definition: function(args) {
        this.probeKey = (args && args.key) || 'sys_id';
        this.server.refresh();
      },
      description: '[UI CONTROL] Re-run the $aiux probes with a different parameter name. Use when the user wants to inspect a different URL param.',
      arguments: [
        { name: 'key', type: 'string', description: 'Parameter name to feed into the three $aiux getters', required: true }
      ]
    }
  };

  createRenderRoot() { return this; }

  render() {
    return html`
      <div class="aiux-card aiux-card-bordered aiux-bg-base-100 aiux-shadow-md">
        <div class="aiux-card-body">
          <h2 class="aiux-card-title">
            <code>$aiux</code> live probe
            <span class="aiux-badge aiux-badge-primary">key: ${this.probeKey || 'sys_id'}</span>
          </h2>
          <table class="aiux-table aiux-table-zebra">
            <thead><tr><th>Call</th><th>Returned</th></tr></thead>
            <tbody>
              ${(this.results || []).map(r => html`
                <tr>
                  <td><code>${r.label.replace('key', `'${r.key}'`)}</code></td>
                  <td>
                    ${r.ok
                      ? (r.value === null
                          ? html`<span class="aiux-badge aiux-badge-ghost">null</span>`
                          : html`<code>${r.value}</code>`)
                      : html`<aiux-alert-message type="error" message=${r.error}></aiux-alert-message>`}
                  </td>
                </tr>`)}
            </tbody>
          </table>
        </div>
      </div>`;
  }
}
```

**Input schema:**

```json
{
  "probeKey":      { "type": "String", "description": "Parameter name to feed into the three $aiux getters (defaults to sys_id)" },
  "composeWidget": { "type": "String", "description": "Optional widget id to fetch via $aiux.getWidget (try 'people-card')" }
}
```

**`best_for`:** *Use when learning or debugging the `$aiux` server-side scriptable. Exercises all four documented methods with a configurable probe key and renders the live return values.*

Drop the widget on a page whose route has a `:sys_id` segment and you'll see `getParameter` and `getPathParameter` return the same value while `getSearchParameter` returns null. Move it onto a page with `?sys_id=...` in the URL and the result flips. Set `composeWidget` to `people-card` and you'll watch one widget reach into another for its server-rendered data — the whole AI surface, exercised in one component.
