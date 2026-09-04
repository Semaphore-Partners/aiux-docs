# `@servicenow/aiux-components-visualizations-matrix`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visualizations-matrix`

Declares 9 functions, 9 types, 4 constants, 1 class.

## Functions

```ts
buildHeatmapConfig(data: [object Object], matrix: [object Object], colMap: Map<string, ResolvedColumn>, options: MatrixOptions): Record<string, unknown>
buildMatrixA11yOptions(input: [object Object]): Record<string, unknown>
buildMatrixChartConfig(data: [object Object], matrix: [object Object], type: string, options: MatrixOptions): ChartConfig
buildTooltipConfig(data: [object Object], allCols: Array<ResolvedColumn>, colMap: Map<string, ResolvedColumn>, matrix: [object Object], tooltip: [object Object], tooltipTheme: TooltipTheme): Record<string, unknown>
getMatrixPointDescription(rowLabel: string, columnLabel: string, value: number, formattedValue: string, rowIndex: number, rowTotal: number, columnIndex: number, columnTotal: number): string
makeColorLegendWide(chart: Record<string, unknown>): void
resolveMatrix(data: [object Object], matrix?: [object Object]): { value: [object Object]; xAxis: [object Object]; yAxis: [object Object] }
resolveMatrixTheme(style: CSSStyleDeclaration): ThemeColors
validateMatrixConfig(data: [object Object], matrix: [object Object]): void
```

## Constants

Validation schemas (Zod objects; call `.shape` or read the `.d.ts` for the fields):

```ts
const MatrixChartColumnVisDefinitionSchema: ZodObject
const MatrixDefinitionSchema: ZodObject
```

```ts
const DEFAULT_THEME: {
  axisTitleColor: string;
  axisTitleFontSize: string;
  categoriesColor: string;
  categoriesFontSize: string;
  cellBorderRadius: number;
  cellPadding: number;
  colorAxisMaxColor: string;
  colorAxisMinColor: string;
  labelBadgeBg: string;
  labelColor: string;
  labelFontSize: string;
  legendColor: string;
  nullColor: string;
}
```

<details>
<summary><code>const LabelPlacementSchema</code> (53 members)</summary>

```ts
const LabelPlacementSchema: {
  _def: $ZodEnumDef<{ values: "values"; none: "none"; }>;
  _input: "values" | "none";
  _output: "values" | "none";
  _zod: $ZodEnumInternals<{ values: "values"; none: "none"; }>;
  ~standard: ZodStandardSchemaWithJSON<ZodEnum<{ values: "values"; none: "none"; }>>;
  and: <T extends core.SomeType>(incoming: T) => ZodIntersection<ZodEnum<{ values: "values"; none: "none"; }>, T>;
  apply: <T>(fn: (schema: ZodEnum<{ values: "values"; none: "none"; }>) => T) => T;
  array: () => ZodArray<ZodEnum<{ values: "values"; none: "none"; }>>;
  brand: <T extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T | undefined) => PropertyKey extends T ? ZodEnum<{ values: "values"; none: "none"; }> : $ZodBranded<ZodEnum<{ values: "values"; none: "none"; }>, T, Dir>;
  catch: { (def: "values" | "none"): ZodCatch<ZodEnum<{ values: "values"; none: "none"; }>>; (def: (ctx: $ZodCatchCtx) => "values" | "none"): ZodCatch<ZodEnum<{ values: "values"; none: "none"; }>>; };
  check: (...checks: Array<CheckFn<"values" | "none"> | $ZodCheck<"values" | "none">>) => ZodEnum<{ values: "values"; none: "none"; }>;
  clone: (def?: $ZodEnumDef<{ values: "values"; none: "none"; }> | undefined, params?: { parent: boolean; } | undefined) => ZodEnum<{ values: "values"; none: "none"; }>;
  decode: (data: "values" | "none", params?: ParseContext<$ZodIssue> | undefined) => "values" | "none";
  decodeAsync: (data: "values" | "none", params?: ParseContext<$ZodIssue> | undefined) => Promise<"values" | "none">;
  def: $ZodEnumDef<{ values: "values"; none: "none"; }>;
  default: { (def: "values" | "none"): ZodDefault<ZodEnum<{ values: "values"; none: "none"; }>>; (def: () => "values" | "none"): ZodDefault<ZodEnum<{ values: "values"; none: "none"; }>>; };
  describe: (description: string) => ZodEnum<{ values: "values"; none: "none"; }>;
  description?: string;
  encode: (data: "values" | "none", params?: ParseContext<$ZodIssue> | undefined) => "values" | "none";
  encodeAsync: (data: "values" | "none", params?: ParseContext<$ZodIssue> | undefined) => Promise<"values" | "none">;
  enum: [object Object];
  exactOptional: () => ZodExactOptional<ZodEnum<{ values: "values"; none: "none"; }>>;
  exclude: <const U extends ReadonlyArray<"values" | "none">>(values: U, params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidValue<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodEnum<{ [k in keyof Omit<{ values: "values"; none: "none"; }, U[number]>]: Omit<{ values: "values"; none: "none"; }, U[number]>[k]; }>;
  extract: <const U extends ReadonlyArray<"values" | "none">>(values: U, params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidValue<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodEnum<{ [k in keyof Pick<{ values: "values"; none: "none"; }, U[number]>]: Pick<{ values: "values"; none: "none"; }, U[number]>[k]; }>;
  isNullable: () => boolean;
  isOptional: () => boolean;
  meta: { (): { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; } | undefined; (data: { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; }): ZodEnum<{ values: "values"; none: "none"; }>; };
  nonoptional: (params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidType<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodNonOptional<ZodEnum<{ values: "values"; none: "none"; }>>;
  nullable: () => ZodNullable<ZodEnum<{ values: "values"; none: "none"; }>>;
  nullish: () => ZodOptional<ZodNullable<ZodEnum<{ values: "values"; none: "none"; }>>>;
  optional: () => ZodOptional<ZodEnum<{ values: "values"; none: "none"; }>>;
  options: Array<"values" | "none">;
  or: <T extends core.SomeType>(option: T) => ZodUnion<[ZodEnum<{ values: "values"; none: "none"; }>, T]>;
  overwrite: (fn: (x: "values" | "none") => "values" | "none") => ZodEnum<{ values: "values"; none: "none"; }>;
  parse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => "values" | "none";
  parseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<"values" | "none">;
  pipe: <T extends $ZodType<any, "values" | "none", $ZodTypeInternals<any, "values" | "none">>>(target: T | $ZodType<any, "values" | "none", $ZodTypeInternals<any, "values" | "none">>) => ZodPipe<ZodEnum<{ values: "values"; none: "none"; }>, T>;
  prefault: { (def: () => "values" | "none"): ZodPrefault<ZodEnum<{ values: "values"; none: "none"; }>>; (def: "values" | "none"): ZodPrefault<ZodEnum<{ values: "values"; none: "none"; }>>; };
  readonly: () => ZodReadonly<ZodEnum<{ values: "values"; none: "none"; }>>;
  refine: <Ch extends (arg: "values" | "none") => unknown>(check: Ch, params?: string | { abort?: boolean | undefined; when?: ((payload: ParsePayload<unknown>) => boolean) | undefined; path?: Array<PropertyKey> | undefined; params?: Record<string, any> | undefined; error?: string | $ZodErrorMap<NonNullable<$ZodIssue>> | undefined; message?: string | undefined; } | undefined) => Ch extends (arg: any) => arg  /* … truncated; see the package .d.ts */;
  register: <R extends core.$ZodRegistry>(registry: R, ...meta: ZodEnum<{ values: "values"; none: "none"; }> extends R["_schema"] ? undefined extends R["_meta"] ? [($replace<R["_meta"], R["_schema"] & ZodEnum<{ values: "values"; none: "none"; }>> | undefined)?] : [$replace<R["_meta"], R["_schema"] & ZodEnum<{ values: "values"; none: "none"; }>>] : ["Incompatible schema"]) => ZodEnum<{ values: "values"; none:  /* … truncated; see the package .d.ts */;
  safeDecode: (data: "values" | "none", params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"values" | "none">;
  safeDecodeAsync: (data: "values" | "none", params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"values" | "none">>;
  safeEncode: (data: "values" | "none", params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"values" | "none">;
  safeEncodeAsync: (data: "values" | "none", params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"values" | "none">>;
  safeParse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"values" | "none">;
  safeParseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"values" | "none">>;
  spa: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"values" | "none">>;
  superRefine: (refinement: (arg: "values" | "none", ctx: $RefinementCtx<"values" | "none">) => void | Promise<void>) => ZodEnum<{ values: "values"; none: "none"; }>;
  toJSONSchema: (params?: ToJSONSchemaParams | undefined) => ZodStandardJSONSchemaPayload<ZodEnum<{ values: "values"; none: "none"; }>>;
  transform: <NewOut>(transform: (arg: "values" | "none", ctx: $RefinementCtx<"values" | "none">) => NewOut | Promise<NewOut>) => ZodPipe<ZodEnum<{ values: "values"; none: "none"; }>, ZodTransform<Awaited<NewOut>, "values" | "none">>;
  type: "enum";
  with: (...checks: Array<CheckFn<"values" | "none"> | $ZodCheck<"values" | "none">>) => ZodEnum<{ values: "values"; none: "none"; }>;
}
```

</details>

## Types

```ts
interface CellCategoryContext {
  value: number;
  x: string;
  y: string;
}
```

```ts
type CellCategoryFn = unknown
```

```ts
type LabelPlacement = "values" | "none"
```

```ts
type MatrixChartColumnVisDefinition = Record<string, never>
```

```ts
type MatrixDefinition = {
  value: [object Object];
  xAxis: [object Object];
  yAxis: [object Object];
}
```

```ts
type MatrixLegendDefinition = {
  items?: Record<string, { color: string; label?: string | undefined; }>;
  position?: "bottom" | "right" | "left" | "top" | undefined;
  title?: string;
  type?: "categorical" | "gradient" | undefined;
  visible?: boolean | undefined;
}
```

```ts
interface MatrixOptions {
  animated: boolean;
  cellCategory?: CellCategoryFn;
  interactions?: InteractionConfig;
  labels: "values" | "none";
  legend?: { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absol /* … truncated; see the package .d.ts */;
  showZero: boolean;
  style?: CSSStyleDeclaration;
  theme: ThemeColors;
  tooltip: [object Object];
  tooltipTheme: TooltipTheme;
}
```

```ts
interface ThemeColors {
  axisTitleColor: string;
  axisTitleFontSize: string;
  categoriesColor: string;
  categoriesFontSize: string;
  cellBorderRadius: number;
  cellPadding: number;
  colorAxisMaxColor: string;
  colorAxisMinColor: string;
  labelBadgeBg: string;
  labelColor: string;
  labelFontSize: string;
  legendColor: string;
  nullColor: string;
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
class Matrix {
  animated: boolean;
  cellCategory: CellCategoryFn | undefined;
  labels: "values" | "none";
  legend: { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absol /* … truncated; see the package .d.ts */;
  matrix: { xAxis: { column: string; title?: string | undefined; opposite?: boolean | undefined; }; yAxis: { column: string; title?: string | undefined; opposite?: boolean | undefined; }; value: { column: string; }; } | undefined;
  showZero: boolean;
  tooltip: { enabled?: boolean | undefined; footer?: { label: string; icon?: string | undefined; } | undefined; followCursor?: boolean | undefined; outside?: boolean | undefined; } | undefined;
  type: string;
}
```


