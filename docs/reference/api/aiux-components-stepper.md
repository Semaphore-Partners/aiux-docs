# `@servicenow/aiux-components-stepper`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-stepper`

Declares 1 element, 5 functions.

## Elements

### `<aiux-stepper>`

Class `AiuxStepper`.

_No public properties, events, or slots declared._

## Functions

```ts
extractProcessingMessage(raw: any): { label: any; status: string }
extractProgressMessages(raw: any): Array<any>
extractTasksFromWidgetPayload(raw: any): Array<any>
normalizeProgressMessages(messages: any): Array<{ label: any; status: string; }>
normalizeTasks(tasks: any): Array<{ label: any; status: string; }>
```


