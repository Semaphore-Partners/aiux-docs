# `@servicenow/aiux-components-visualizations-highcharts`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visualizations-highcharts`

Declares 7 functions, 5 types, 1 constant.

## Functions

```ts
applyClickHandler(config: ChartConfig, host: HTMLElement, data: [object Object], pointResolver: PointResolver): void
buildArrowSvg(color: string, width: number, height: number, cornerRadius: number, tipRadius: number): string
buildTooltipConfig(tooltip: [object Object], theme: TooltipTheme, contentExtractor: (ctx: Record<string, unknown>) => TooltipContent | null): Record<string, unknown>
buildTooltipHtml(content: TooltipContent, theme: TooltipTheme, placement: Placement): string
escapeHtml(str: string): string
Highcharts(superClass: T): (abstract new (modules?: Array<any> | undefined, ...args: Array<any>) => InstanceType<T> & { _chart: any; _chartConfig: ChartConfig | null; _containerWidth: number; setError(error: unknown): void; createOrUpdateChart(config: ChartConfig): void; destroyChart(): void; renderChart(): unknown; }) & Omit<T, "prototype">
resolveTooltipTheme(style: CSSStyleDeclaration): TooltipTheme
```

## Constants

```ts
const DEFAULT_TOOLTIP_THEME: {
  bg: string;
  bodyColor: string;
  borderRadius: string;
  fontFamily?: string;
  fontSize: string;
  footerColor: string;
  headerColor: string;
  indicatorSize: number;
  separatorColor: string;
  valueColor: string;
}
```

## Types

```ts
type ModuleFactory = any
```

```ts
type PointResolver = unknown
```

```ts
interface TooltipContent {
  footer?: [object Object];
  header: string;
  items: Array<TooltipItem>;
}
```

```ts
interface TooltipItem {
  color: string;
  extras?: Array<{ label: string; value: string; }>;
  label: string;
  percentage?: string;
  value: string;
}
```

```ts
interface TooltipTheme {
  bg: string;
  bodyColor: string;
  borderRadius: string;
  fontFamily?: string;
  fontSize: string;
  footerColor: string;
  headerColor: string;
  indicatorSize: number;
  separatorColor: string;
  valueColor: string;
}
```


