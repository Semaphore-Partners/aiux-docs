# `@servicenow/aiux-components-visualizations-spider`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visualizations-spider`

Declares 1 element, 5 functions, 5 types, 1 constant, 1 class.

## Elements

### `<aiux-visualizations-spider-badge>`

Class `SpiderBadge`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `label` | `string` | yes | no | yes |
| `variant` | `string` | yes | no | yes |

## Functions

```ts
buildSpiderA11yOptions(input: [object Object]): Record<string, unknown>
buildSpiderChartConfig(data: [object Object], axes: ResolvedAxesDefinition, styleOptions?: SpiderStyleOptions): ChartConfig
getSpiderPointDescription(seriesName: string, categoryLabel: string, value: number, formattedValue: string, pointIndex: number, pointTotal: number, seriesIndex: number, seriesTotal: number): string
getVariantColors(variant: string): SpiderBadgeColors
resolveSpiderTheme(style: CSSStyleDeclaration): SpiderThemeColors
```

## Constants

```ts
const DEFAULT_SPIDER_THEME: {
  gridLineColor: string;
  labelColor: string;
  legendColor: string;
  legendFontSize: string;
}
```

## Types

```ts
interface SpiderBadgeColors {
  border: string;
  fill: string;
  text: string;
}
```

```ts
type SpiderBadgeVariant = string
```

```ts
type SpiderLabelPlacement = unknown
```

```ts
interface SpiderStyleOptions {
  animated: boolean;
  backgroundColor: string;
  fillOpacity: number;
  gradientAngle?: number;
  gradientColors?: Array<string>;
  gridLineColor: string;
  labels: SpiderLabelPlacement;
  legend?: [object Object];
  markerEnabled: boolean;
  theme?: SpiderThemeColors;
  tooltip?: [object Object];
  tooltipShowPercentage: boolean;
  tooltipTheme?: TooltipTheme;
}
```

```ts
interface SpiderThemeColors {
  gridLineColor: string;
  labelColor: string;
  legendColor: string;
  legendFontSize: string;
}
```

## Classes

```ts
class Spider {
  animated: boolean;
  axes: ResolvedAxesDefinition | undefined;
  backgroundColor: string;
  fillOpacity: number;
  gradientAngle: number;
  gradientColors: Array<string> | undefined;
  gridLineColor: string;
  labels: SpiderLabelPlacement;
  legend: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; } | undefined;
  markerEnabled: boolean;
  tooltip: { enabled?: boolean | undefined; footer?: { label: string; icon?: string | undefined; } | undefined; followCursor?: boolean | undefined; outside?: boolean | undefined; } | undefined;
  tooltipShowPercentage: boolean;
}
```


