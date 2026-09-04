# `@servicenow/aiux-components-visualizations-arc`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visualizations-arc`

Declares 10 functions, 7 types, 1 class.

## Functions

```ts
buildArcA11yOptions(input: [object Object]): Record<string, unknown>
buildDialConfig(arcData: ArcData, rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>, options: DialOptions): ChartConfig
buildGaugeConfig(arcData: ArcData, rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>, options: GaugeOptions): ChartConfig
getArcPointDescription(value: number, formattedValue: string, label?: string, target?: number, formattedTarget?: string, min?: number, max?: number): string
mapRulesToStops(rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>, min: number, max: number): Array<[number, string]>
processArc(data: [object Object]): ArcData
resolveCenterContent(arcData: ArcData, rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>, centerContent: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; } | undefined, min: number, max: number): { label: string; value: string }
resolveDialTheme(style: CSSStyleDeclaration): DialTheme
resolveGaugeTheme(style: CSSStyleDeclaration): GaugeTheme
validateArc(data: [object Object], min: number, max: number): void
```

## Types

```ts
interface ArcData {
  formattedValue: string;
  label: string;
  value: number;
}
```

```ts
interface ArcProps {
  animated?: boolean | undefined;
  centerContent?: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; } | undefined;
  data: [object Object];
  gradient?: Gradient;
  max?: number;
  min?: number;
  renderingOverrides?: [object Object];
  showNumbers?: boolean | undefined;
  startAngle?: number;
  type?: "gauge" | "dial" | undefined;
}
```

```ts
interface DialOptions {
  animated: boolean;
  centerContent?: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; } | undefined;
  gradient?: Gradient;
  max: number;
  min: number;
  startAngle?: number;
  theme: DialTheme;
}
```

```ts
interface DialTheme {
  arcWidth: number;
  centerLabelOffsets: [object Object];
  connectorLength: number;
  labelColor: string;
  labelFontSize: string;
  labelOffset: number;
  tickColor: string;
  trackColor: string;
  valueColor: string;
  valueFontSize: string;
}
```

```ts
interface GaugeOptions {
  animated: boolean;
  centerContent?: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; } | undefined;
  max: number;
  min: number;
  showNumbers: boolean;
  theme: GaugeTheme;
}
```

```ts
interface GaugeTheme {
  arcWidth: number;
  centerLabelOffsets: [object Object];
  connectorLength: number;
  labelColor: string;
  labelFontSize: string;
  labelOffset: number;
  tickColor: string;
  trackColor: string;
  valueColor: string;
  valueFontSize: string;
}
```

```ts
interface Gradient {
  endColor: string;
  startColor: string;
}
```

## Classes

```ts
class Arc {
  animated: boolean;
  centerContent: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; } | undefined;
  gradient: Gradient | undefined;
  max: number;
  min: number;
  showNumbers: boolean;
  startAngle: number;
  type: "gauge" | "dial";
}
```


