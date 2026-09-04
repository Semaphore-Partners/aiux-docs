# `@servicenow/aiux-components-score`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-score`

Declares 3 types, 1 class.

## Types

```ts
interface ScoreData {
  change: [object Object];
  color: string;
  denominator: number;
  format: "plain" | "ratio" | "percentage";
  formattedDenominator: string;
  formattedValue: string;
  label: string;
  sentiment: Sentiment;
  target: [object Object];
  value: number;
}
```

```ts
type ScoreSize = unknown
```

```ts
type Sentiment = unknown
```

## Classes

```ts
class Score {
  data: ScoreData | null;
  size: "sm" | "md";
}
```


