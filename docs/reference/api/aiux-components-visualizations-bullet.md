# `@servicenow/aiux-components-visualizations-bullet`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visualizations-bullet`

Declares 5 functions, 3 types, 2 classes.

## Functions

```ts
buildBulletA11yOptions(input: [object Object]): Record<string, unknown>
buildBulletConfig(scoreData: BulletData, rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>, options: BulletOptions, tooltip: [object Object], tooltipTheme: TooltipTheme): ChartConfig
processBulletData(data: [object Object]): BulletData
resolveBulletTheme(style: CSSStyleDeclaration): BulletTheme
validateBulletData(data: [object Object]): void
```

## Types

```ts
interface BulletData {
  formattedValue: string;
  label: string;
  target: [object Object];
  value: number;
}
```

```ts
interface BulletOptions {
  animated: boolean;
  max: number;
  min: number;
  theme: BulletTheme;
}
```

```ts
interface BulletTheme {
  barHeight: number;
  labelColor: string;
  targetColor: string;
  trackColor: string;
  valueColor: string;
}
```

## Classes

```ts
class Bullet {
  animated: boolean;
  max: number;
  min: number;
  tooltip: { enabled?: boolean | undefined; footer?: { label: string; icon?: string | undefined; } | undefined; followCursor?: boolean | undefined; outside?: boolean | undefined; } | undefined;
}
```

```ts
class BulletBar {
  animated: boolean;
  max: number;
  min: number;
  rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }> | undefined;
  scoreData: BulletData | null;
  tooltip: { enabled?: boolean | undefined; footer?: { label: string; icon?: string | undefined; } | undefined; followCursor?: boolean | undefined; outside?: boolean | undefined; } | undefined;
}
```


