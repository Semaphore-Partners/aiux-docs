# `@servicenow/aiux-components-visualizations-score`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visualizations-score`

Declares 2 functions, 1 type, 1 class.

## Functions

```ts
processScore(data: [object Object]): ScoreData
validateScore(data: [object Object]): void
```

## Types

```ts
interface ScoreProps {
  data: [object Object];
  renderingOverrides?: [object Object];
  size?: ScoreSize | undefined;
}
```

## Classes

```ts
class Score {
  connectedCallback(): void;
  disconnectedCallback(): void;
  size: ScoreSize;
}
```


