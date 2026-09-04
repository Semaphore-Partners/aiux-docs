# `@servicenow/aiux-components-visualizations-composition`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visualizations-composition`

Declares 5 functions, 8 types, 1 constant, 1 class.

## Functions

```ts
buildCompositionA11yOptions(input: [object Object]): Record<string, unknown>
buildCompositionConfig(data: [object Object], resolved: ResolvedCompositionConfig, options: CompositionOptions, style: CSSStyleDeclaration): ChartConfig
getCompositionPointDescription(name: string, value: number, percentage: number, index: number, total: number): string
resolveComposition(data: [object Object]): ResolvedCompositionConfig
validateComposition(data: [object Object], resolved: ResolvedCompositionConfig): void
```

## Constants

```ts
const DEFAULT_THEME: {
  centerLabelColor: string;
  centerValueColor: string;
  cornerRadius: number;
  fontFamily?: string;
  labelInsideColor: string;
  labelOutsideColor: string;
  legendColor: string;
  legendFontSize: string;
  segmentBorderColor: string;
  semiDonutCenterLabelOffsets: [object Object];
}
```

## Types

```ts
interface CompositionOptions {
  animated: boolean;
  centerContent?: CompositionCenterContentConfig | undefined;
  colors?: Array<string>;
  dataLabels?: DataLabelsConfig;
  interactions?: InteractionConfig;
  legend?: [object Object];
  showPercentage: boolean;
  sort: "descending" | "ascending" | "none";
  theme: ThemeColors;
  tooltip: [object Object];
  tooltipTheme: TooltipTheme;
  type: "pie" | "donut" | "semi-donut";
}
```

```ts
type CompositionType = "pie" | "donut" | "semi-donut"
```

```ts
interface DataLabelsConfig {
  showLabels?: boolean | undefined;
  showPercentage?: boolean | undefined;
  showValues?: boolean | undefined;
}
```

```ts
type LegendDefinition = {
  position?: "bottom" | "right" | "left" | "top" | undefined;
  title?: string;
  visible?: boolean | undefined;
}
```

```ts
interface ResolvedCompositionConfig {
  dimension: ResolvedColumn;
  metric: ResolvedColumn;
}
```

```ts
type SortOrder = "descending" | "ascending" | "none"
```

```ts
interface ThemeColors {
  centerLabelColor: string;
  centerValueColor: string;
  cornerRadius: number;
  fontFamily?: string;
  labelInsideColor: string;
  labelOutsideColor: string;
  legendColor: string;
  legendFontSize: string;
  segmentBorderColor: string;
  semiDonutCenterLabelOffsets: [object Object];
}
```

```ts
type TooltipDefinition = {
  enabled?: boolean | undefined;
  followCursor?: boolean | undefined;
  footer?: [object Object];
  outside?: boolean | undefined;
}
```

## Classes

```ts
class Composition {
  animated: boolean;
  centerContent: CompositionCenterContentConfig | undefined;
  dataLabels: DataLabelsConfig | undefined;
  legend: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; } | undefined;
  sort: "descending" | "ascending" | "none";
  tooltip: { enabled?: boolean | undefined; footer?: { label: string; icon?: string | undefined; } | undefined; followCursor?: boolean | undefined; outside?: boolean | undefined; } | undefined;
  tooltipShowPercentage: boolean;
  type: "pie" | "donut" | "semi-donut";
}
```


