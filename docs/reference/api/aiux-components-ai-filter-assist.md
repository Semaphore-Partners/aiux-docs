# `@servicenow/aiux-components-ai-filter-assist`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-ai-filter-assist`

Declares 3 elements, 2 types.

## Elements

### `<ai-filter-assist>`

Class `AiFilterAssist`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `encodedQuery` | `string` | yes | no | yes |
| `tableName` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `ai-filter-assist:encoded-query-generated` | `{ encodedQuery: any; tableName: string; utterance: any; }` |

### `<ai-filter-assist-history>`

Class `AiFilterAssistHistory`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `refreshCount` | `number` | yes | no | yes |
| `tableName` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `ai-filter-assist-history:item-select` | — |

### `<ai-filter-assist-history-panel>`

Class `AiFilterAssistHistoryPanel`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `historyFetchError` | `boolean` | yes | no | yes |
| `items` | `Array<HistoryItem>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `ai-filter-assist-history-panel:item-delete` | `{ sysId: string; }` |
| `ai-filter-assist-history-panel:item-select` | `{ description: string; encodedQuery: string; sys_id: string \| undefined; }` |

## Types

```ts
interface AiFilterAssistEncodedQueryGeneratedDetail {
  encodedQuery: string;
  tableName: string;
  utterance: string;
}
```

```ts
interface HistoryItem {
  description: string;
  filters?: Array<unknown>;
  metadata: HistoryItemMetadata;
  prompt: string;
  sys_id: string;
}
```


