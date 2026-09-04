# `@servicenow/aiux-components-visualizations-axis`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visualizations-axis`

Declares 4 functions, 5 types, 3 constants, 1 class.

## Functions

```ts
buildAxisA11yOptions(input: [object Object]): Record<string, unknown>
getAxisPointDescription(seriesName: string, xLabel: string, value: number, formattedValue: string, pointIndex: number, pointTotal: number, seriesIndex: number, seriesTotal: number, meaning?: AxisPointMeaning | undefined): string
resolveAxes(data: [object Object], axes?: [object Object]): ResolvedAxesDefinition
validateAxisConfig(data: [object Object], axes: ResolvedAxesDefinition): void
```

## Constants

Validation schemas (Zod objects; call `.shape` or read the `.d.ts` for the fields):

```ts
const AxesDefinitionSchema: ZodObject
const AxisChartColumnVisDefinitionSchema: ZodObject
const AxisChartRenderingOverrideSchema: ZodObject
```

## Types

```ts
type AxesDefinition = {
  stacking?: [object Object];
  xAxis?: [object Object];
  yAxis?: Array<{ title?: string | undefined; visible?: boolean | undefined; showLine?: boolean | undefined; showTicks?: boolean | undefined; showGridlines?: boolean | undefined; columns?: Array<string> | undefined; opposite?: boolean | undefined; formattingFromColumn?: string | undefined; formatting?: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | /* … truncated; see the package .d.ts */;
  zAxis?: [object Object];
}
```

```ts
type AxisChartColumnVisDefinition = {
  dashStyle?: "Dash" | "DashDot" | "Dot" | "LongDash" | "LongDashDot" | "LongDashDotDot" | "ShortDash" | "ShortDashDot" | "ShortDashDotDot" | "ShortDot" | "Solid" | undefined;
  seriesType?: "column" | "line" | "spline" | "bar" | "area" | "areaspline" | "scatter" | undefined;
  showMarkers?: boolean | undefined;
  stepMode?: "right" | "left" | "none" | undefined;
}
```

```ts
type AxisChartRenderingOverride = {
  columns: Record<string, { presentation: { visualizationDefinition: { seriesType?: "column" | "line" | "spline" | "bar" | "area" | "areaspline" | "scatter" | undefined; dashStyle?: "Dash" | "DashDot" | "Dot" | "LongDash" | "LongDashDot" | "LongDashDotDot" | "ShortDash" | "ShortDashDot" | "ShortDashDotDot" | "ShortDot" | "Solid" | undefined; showMarkers?: boolean | undefined; stepMode?: "right" | "left" | "n /* … truncated; see the package .d.ts */;
}
```

```ts
type AxisPointMeaning = unknown
```

```ts
type ResolvedAxesDefinition = {
  stacking?: ResolvedStackingAxis;
  xAxis: ResolvedGroupingAxis;
  yAxis: Array<ResolvedValueAxis>;
  zAxis?: ResolvedGroupingAxis;
}
```

## Classes

```ts
class Axis {
  axes: { xAxis?: { title?: string | undefined; visible?: boolean | undefined; showLine?: boolean | undefined; showTicks?: boolean | undefined; showGridlines?: boolean | undefined; column?: string | undefined; opposite?: boolean | undefined; } | undefined; zAxis?: { title?: string | undefined; visible?: boolean | undefined; showLine?: boolean | undefined; showTicks?: boolean | undefined; showGridlines?: b /* … truncated; see the package .d.ts */;
  createOrUpdateChart(config: ChartConfig): void;
  legend: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; } | undefined;
  tooltip: { enabled?: boolean | undefined; footer?: { label: string; icon?: string | undefined; } | undefined; followCursor?: boolean | undefined; outside?: boolean | undefined; } | undefined;
  type: string;
}
```


