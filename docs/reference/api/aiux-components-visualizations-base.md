# `@servicenow/aiux-components-visualizations-base`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-visualizations-base`

Declares 1 element, 27 functions, 29 types, 16 constants, 2 classes.

## Elements

### `<Visualization>`

Base class, not registered as a tag.

_No public properties, events, or slots declared._

## Functions

```ts
buildLegendTitleConfig(legend: [object Object], style: CSSStyleDeclaration): { style?: Record<string, string>; text: string }
createAnalyticsDataContext(name: string): AnalyticsDataContext
DataDriven(superClass: T): (abstract new (...args: Array<any>) => InstanceType<T> & { data?: { schemaVersion: 2; data: Array<Array<string | null>>; metadata: { columns: Record<string, { order: number; meaning: "dimension" | "calculation" | "forecast" | "trend" | "target" | "metric" | "comment" | "change" | "changePercentage" | "changeReference" | "prediction" | "confidence"; derivedFrom: string | null; type: "numerical"; da /* … truncated; see the package .d.ts */
deepClone(value: T): T
evaluateRules(rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>, value: string | number): RuleResult
filterByMeaning(cols: Array<ResolvedColumn>, meaning: "dimension" | "calculation" | "forecast" | "trend" | "target" | "metric" | "comment" | "change" | "changePercentage" | "changeReference" | "prediction" | "confidence"): Array<ResolvedColumn>
formatNumber(value: number, formatting: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "duration";  /* … truncated; see the package .d.ts */): string
getCellValue(row: Array<string | null>, col: ResolvedColumn): string
getChartAriaLabel(chartType: string, seriesCount: number, pointCount: number, title?: string): string
getDefaultPalette(style: CSSStyleDeclaration, defaultEnginePalette: Array<string>): Array<string>
getDefaultRuleColor(rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>): string
getElementLabel(col: ResolvedColumn, elementId: string): string
getNumericValue(row: Array<string | null>, col: ResolvedColumn): number
getTupleValue(row: Array<string | null>, col: ResolvedColumn): Array<unknown>
isPointSelected(dimensions: Record<string, string | number>, metric: string, selectedPoints?: Array<SelectedPoint>): boolean
mapLegendToHighcharts(legend?: [object Object], style: CSSStyleDeclaration): LegendLayoutConfig
mapRulesToStops(rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>, min: number, max: number): Array<[number, string]>
mapRulesToStopsWithLabels(rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>, min: number, max: number): Array<LabeledStop>
mergeData(data: [object Object], overrides?: [object Object]): { data: Array<Array<string | null>>; interactions: Record<string, { modelEventData: Record<string, never>; columnEventData: Record<string, { eventData?: Record<string, never> | undefined; elements?: Record<string, Record<string, never>> | undefined; }>; }>; metadata: [object Object]; realTimeChannelId?: string; rendering: [object Object]; schemaVersion: 2 }
mergeRuleResults(a: RuleResult, b: RuleResult): RuleResult
renderEmptyState(error?: ChartError): TemplateResult<1>
resolveColumns(data: [object Object]): Array<ResolvedColumn>
resolveCss(style: CSSStyleDeclaration, prop: string, fallback: string): string
resolveCssColor(color: string, style: CSSStyleDeclaration): string
resolveInteractionData(data: [object Object], columnKey: string, dimensions?: Record<string, string | number>): InteractionData
resolveValueColor(stops: Array<[number, string]>, value: number, min: number, max: number): string
ThemeAware(superClass: T): T
```

## Constants

Validation schemas (Zod objects; call `.shape` or read the `.d.ts` for the fields):

```ts
const CategoricalLegendSchema: ZodObject
const ColumnRenderingOverrideSchema: ZodObject
const GradientLegendSchema: ZodObject
const LegendDefinitionSchema: ZodObject
const LegendItemSchema: ZodObject
const PresentationSchema: ZodObject
const RenderingOverridesSchema: ZodObject
const RuleSchema: ZodObject
const TooltipDefinitionSchema: ZodObject
```

<details>
<summary><code>const CenterContentConfigSchema</code> (50 members)</summary>

```ts
const CenterContentConfigSchema: {
  _def: $ZodUnionDef<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: ZodLiteral<"hidden">; }, $strip /* … truncated; see the package .d.ts */;
  _input: [object Object];
  _output: [object Object];
  _zod: $ZodDiscriminatedUnionInternals<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: ZodLiteral<" /* … truncated; see the package .d.ts */;
  ~standard: ZodStandardSchemaWithJSON<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mo /* … truncated; see the package .d.ts */;
  and: <T extends core.SomeType>(incoming: T) => ZodIntersection<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rul /* … truncated; see the package .d.ts */;
  apply: <T>(fn: (schema: ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: ZodLi /* … truncated; see the package .d.ts */;
  array: () => ZodArray<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: ZodLite /* … truncated; see the package .d.ts */;
  brand: <T extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T | undefined) => PropertyKey extends T ? ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ sm /* … truncated; see the package .d.ts */;
  catch: { (def: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }): ZodCatch /* … truncated; see the package .d.ts */;
  check: (...checks: Array<CheckFn<{ mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undef /* … truncated; see the package .d.ts */;
  clone: (def?: $ZodUnionDef<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: ZodLiteral<"hidden">; }, /* … truncated; see the package .d.ts */;
  decode: (data: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }, params?: P /* … truncated; see the package .d.ts */;
  decodeAsync: (data: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }, params?: P /* … truncated; see the package .d.ts */;
  def: $ZodDiscriminatedUnionDef<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: ZodLiteral<"hidden /* … truncated; see the package .d.ts */;
  default: { (def: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }): ZodDefau /* … truncated; see the package .d.ts */;
  describe: (description: string) => ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mod /* … truncated; see the package .d.ts */;
  description?: string;
  encode: (data: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }, params?: P /* … truncated; see the package .d.ts */;
  encodeAsync: (data: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }, params?: P /* … truncated; see the package .d.ts */;
  exactOptional: () => ZodExactOptional<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: /* … truncated; see the package .d.ts */;
  isNullable: () => boolean;
  isOptional: () => boolean;
  meta: { (): { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; } | undefined; (data: { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; }): ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: Zo /* … truncated; see the package .d.ts */;
  nonoptional: (params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidType<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodNonOptional<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size /* … truncated; see the package .d.ts */;
  nullable: () => ZodNullable<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: ZodL /* … truncated; see the package .d.ts */;
  nullish: () => ZodOptional<ZodNullable<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject< /* … truncated; see the package .d.ts */;
  optional: () => ZodOptional<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: ZodL /* … truncated; see the package .d.ts */;
  options: [object Object];
  or: <T extends core.SomeType>(option: T) => ZodUnion<[ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, /* … truncated; see the package .d.ts */;
  overwrite: (fn: (x: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }) => { mod /* … truncated; see the package .d.ts */;
  parse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: str /* … truncated; see the package .d.ts */;
  parseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<{ mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; lab /* … truncated; see the package .d.ts */;
  pipe: <T extends $ZodType<any, { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefi /* … truncated; see the package .d.ts */;
  prefault: { (def: () => { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }): Zo /* … truncated; see the package .d.ts */;
  readonly: () => ZodReadonly<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">; }, $strip>, ZodObject<{ mode: ZodL /* … truncated; see the package .d.ts */;
  refine: <Ch extends (arg: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }) /* … truncated; see the package .d.ts */;
  register: <R extends core.$ZodRegistry>(registry: R, ...meta: ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"rules">;  /* … truncated; see the package .d.ts */;
  safeDecode: (data: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }, params?: P /* … truncated; see the package .d.ts */;
  safeDecodeAsync: (data: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }, params?: P /* … truncated; see the package .d.ts */;
  safeEncode: (data: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }, params?: P /* … truncated; see the package .d.ts */;
  safeEncodeAsync: (data: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; }, params?: P /* … truncated; see the package .d.ts */;
  safeParse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<{ mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | und /* … truncated; see the package .d.ts */;
  safeParseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<{ mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "larg /* … truncated; see the package .d.ts */;
  spa: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<{ mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "larg /* … truncated; see the package .d.ts */;
  superRefine: (refinement: (arg: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undefined; } /* … truncated; see the package .d.ts */;
  toJSONSchema: (params?: ToJSONSchemaParams | undefined) => ZodStandardJSONSchemaPayload<ZodDiscriminatedUnion<[ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: ZodLiteral<"data">; }, $strip>, ZodObject<{ inverted: ZodOptional<ZodBoolean>; size: ZodOptional<ZodEnum<{ small: "small"; medium: "medium"; large: "large"; }>>; mode: /* … truncated; see the package .d.ts */;
  transform: <NewOut>(transform: (arg: { mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undef /* … truncated; see the package .d.ts */;
  type: "union";
  with: (...checks: Array<CheckFn<{ mode: "data"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "rules"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; } | { mode: "hidden"; } | { mode: "custom"; inverted?: boolean | undefined; size?: "small" | "medium" | "large" | undefined; label?: string | undefined; value?: string | undef /* … truncated; see the package .d.ts */;
}
```

</details>

```ts
const ERROR_DISPLAY_MAP: {
  access-restricted: ErrorDisplay;
  invalid-config: ErrorDisplay;
  max-data-points: ErrorDisplay;
  network: ErrorDisplay;
  no-data: ErrorDisplay;
  not-configured: ErrorDisplay;
  unknown: ErrorDisplay;
}
```

<details>
<summary><code>const FormattingSchema</code> (50 members)</summary>

```ts
const FormattingSchema: {
  _def: $ZodUnionDef<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodString>; numberInTooltipsEnabled: /* … truncated; see the package .d.ts */;
  _input: [object Object];
  _output: [object Object];
  _zod: $ZodDiscriminatedUnionInternals<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodString>; numbe /* … truncated; see the package .d.ts */;
  ~standard: ZodStandardSchemaWithJSON<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<Z /* … truncated; see the package .d.ts */;
  and: <T extends core.SomeType>(incoming: T) => ZodIntersection<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>;  /* … truncated; see the package .d.ts */;
  apply: <T>(fn: (schema: ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodString> /* … truncated; see the package .d.ts */;
  array: () => ZodArray<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodString>;  /* … truncated; see the package .d.ts */;
  brand: <T extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T | undefined) => PropertyKey extends T ? ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_E /* … truncated; see the package .d.ts */;
  catch: { (def: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dur /* … truncated; see the package .d.ts */;
  check: (...checks: Array<CheckFn<{ type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; } /* … truncated; see the package .d.ts */;
  clone: (def?: $ZodUnionDef<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodString>; numberInTooltipsE /* … truncated; see the package .d.ts */;
  decode: (data: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dura /* … truncated; see the package .d.ts */;
  decodeAsync: (data: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dura /* … truncated; see the package .d.ts */;
  def: $ZodDiscriminatedUnionDef<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodString>; numberInToo /* … truncated; see the package .d.ts */;
  default: { (def: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dur /* … truncated; see the package .d.ts */;
  describe: (description: string) => ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<Zo /* … truncated; see the package .d.ts */;
  description?: string;
  encode: (data: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dura /* … truncated; see the package .d.ts */;
  encodeAsync: (data: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dura /* … truncated; see the package .d.ts */;
  exactOptional: () => ZodExactOptional<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodS /* … truncated; see the package .d.ts */;
  isNullable: () => boolean;
  isOptional: () => boolean;
  meta: { (): { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; } | undefined; (data: { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; }): ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObj /* … truncated; see the package .d.ts */;
  nonoptional: (params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidType<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodNonOptional<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF /* … truncated; see the package .d.ts */;
  nullable: () => ZodNullable<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodString /* … truncated; see the package .d.ts */;
  nullish: () => ZodOptional<ZodNullable<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOption /* … truncated; see the package .d.ts */;
  optional: () => ZodOptional<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodString /* … truncated; see the package .d.ts */;
  options: [object Object];
  or: <T extends core.SomeType>(option: T) => ZodUnion<[ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousand /* … truncated; see the package .d.ts */;
  overwrite: (fn: (x: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "du /* … truncated; see the package .d.ts */;
  parse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean |  /* … truncated; see the package .d.ts */;
  parseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<{ type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: bo /* … truncated; see the package .d.ts */;
  pipe: <T extends $ZodType<any, { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; /* … truncated; see the package .d.ts */;
  prefault: { (def: () => { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type /* … truncated; see the package .d.ts */;
  readonly: () => ZodReadonly<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousandSeparator: ZodOptional<ZodString /* … truncated; see the package .d.ts */;
  refine: <Ch extends (arg: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | {  /* … truncated; see the package .d.ts */;
  register: <R extends core.$ZodRegistry>(registry: R, ...meta: ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOptional<ZodBoolean>; thousa /* … truncated; see the package .d.ts */;
  safeDecode: (data: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dura /* … truncated; see the package .d.ts */;
  safeDecodeAsync: (data: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dura /* … truncated; see the package .d.ts */;
  safeEncode: (data: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dura /* … truncated; see the package .d.ts */;
  safeEncodeAsync: (data: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "dura /* … truncated; see the package .d.ts */;
  safeParse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<{ type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationE /* … truncated; see the package .d.ts */;
  safeParseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<{ type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbre /* … truncated; see the package .d.ts */;
  spa: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<{ type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbre /* … truncated; see the package .d.ts */;
  superRefine: (refinement: (arg: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { /* … truncated; see the package .d.ts */;
  toJSONSchema: (params?: ToJSONSchemaParams | undefined) => ZodStandardJSONSchemaPayload<ZodDiscriminatedUnion<[ZodObject<{ type: ZodLiteral<"number">; options: ZodObject<{ decimalPrecision: ZodOptional<ZodNumber>; rounding: ZodOptional<ZodEnum<{ UP: "UP"; DOWN: "DOWN"; CEILING: "CEILING"; FLOOR: "FLOOR"; HALF_UP: "HALF_UP"; HALF_DOWN: "HALF_DOWN"; HALF_EVEN: "HALF_EVEN"; }>>; thousandSeparatorEnabled: ZodOption /* … truncated; see the package .d.ts */;
  transform: <NewOut>(transform: (arg: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; } /* … truncated; see the package .d.ts */;
  type: "union";
  with: (...checks: Array<CheckFn<{ type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; } /* … truncated; see the package .d.ts */;
}
```

</details>

<details>
<summary><code>const LegendPositionSchema</code> (53 members)</summary>

```ts
const LegendPositionSchema: {
  _def: $ZodEnumDef<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>;
  _input: "bottom" | "right" | "left" | "top";
  _output: "bottom" | "right" | "left" | "top";
  _zod: $ZodEnumInternals<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>;
  ~standard: ZodStandardSchemaWithJSON<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>;
  and: <T extends core.SomeType>(incoming: T) => ZodIntersection<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>, T>;
  apply: <T>(fn: (schema: ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>) => T) => T;
  array: () => ZodArray<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>;
  brand: <T extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T | undefined) => PropertyKey extends T ? ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }> : $ZodBranded<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>, T, Dir>;
  catch: { (def: "bottom" | "right" | "left" | "top"): ZodCatch<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; (def: (ctx: $ZodCatchCtx) => "bottom" | "right" | "left" | "top"): ZodCatch<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; };
  check: (...checks: Array<CheckFn<"bottom" | "right" | "left" | "top"> | $ZodCheck<"bottom" | "right" | "left" | "top">>) => ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>;
  clone: (def?: $ZodEnumDef<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }> | undefined, params?: { parent: boolean; } | undefined) => ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>;
  decode: (data: "bottom" | "right" | "left" | "top", params?: ParseContext<$ZodIssue> | undefined) => "bottom" | "right" | "left" | "top";
  decodeAsync: (data: "bottom" | "right" | "left" | "top", params?: ParseContext<$ZodIssue> | undefined) => Promise<"bottom" | "right" | "left" | "top">;
  def: $ZodEnumDef<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>;
  default: { (def: "bottom" | "right" | "left" | "top"): ZodDefault<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; (def: () => "bottom" | "right" | "left" | "top"): ZodDefault<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; };
  describe: (description: string) => ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>;
  description?: string;
  encode: (data: "bottom" | "right" | "left" | "top", params?: ParseContext<$ZodIssue> | undefined) => "bottom" | "right" | "left" | "top";
  encodeAsync: (data: "bottom" | "right" | "left" | "top", params?: ParseContext<$ZodIssue> | undefined) => Promise<"bottom" | "right" | "left" | "top">;
  enum: [object Object];
  exactOptional: () => ZodExactOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>;
  exclude: <const U extends ReadonlyArray<"bottom" | "right" | "left" | "top">>(values: U, params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidValue<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodEnum<{ [k in keyof Omit<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }, U[number]>]: Omit<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }, U[ /* … truncated; see the package .d.ts */;
  extract: <const U extends ReadonlyArray<"bottom" | "right" | "left" | "top">>(values: U, params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidValue<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodEnum<{ [k in keyof Pick<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }, U[number]>]: Pick<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }, U[ /* … truncated; see the package .d.ts */;
  isNullable: () => boolean;
  isOptional: () => boolean;
  meta: { (): { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; } | undefined; (data: { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; }): ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>; };
  nonoptional: (params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidType<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodNonOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>;
  nullable: () => ZodNullable<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>;
  nullish: () => ZodOptional<ZodNullable<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>>;
  optional: () => ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>;
  options: Array<"bottom" | "right" | "left" | "top">;
  or: <T extends core.SomeType>(option: T) => ZodUnion<[ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>, T]>;
  overwrite: (fn: (x: "bottom" | "right" | "left" | "top") => "bottom" | "right" | "left" | "top") => ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>;
  parse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => "bottom" | "right" | "left" | "top";
  parseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<"bottom" | "right" | "left" | "top">;
  pipe: <T extends $ZodType<any, "bottom" | "right" | "left" | "top", $ZodTypeInternals<any, "bottom" | "right" | "left" | "top">>>(target: T | $ZodType<any, "bottom" | "right" | "left" | "top", $ZodTypeInternals<any, "bottom" | "right" | "left" | "top">>) => ZodPipe<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>, T>;
  prefault: { (def: () => "bottom" | "right" | "left" | "top"): ZodPrefault<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; (def: "bottom" | "right" | "left" | "top"): ZodPrefault<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; };
  readonly: () => ZodReadonly<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>;
  refine: <Ch extends (arg: "bottom" | "right" | "left" | "top") => unknown>(check: Ch, params?: string | { abort?: boolean | undefined; when?: ((payload: ParsePayload<unknown>) => boolean) | undefined; path?: Array<PropertyKey> | undefined; params?: Record<string, any> | undefined; error?: string | $ZodErrorMap<NonNullable<$ZodIssue>> | undefined; message?: string | undefined; } | undefined) => Ch extends  /* … truncated; see the package .d.ts */;
  register: <R extends core.$ZodRegistry>(registry: R, ...meta: ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }> extends R["_schema"] ? undefined extends R["_meta"] ? [($replace<R["_meta"], R["_schema"] & ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>> | undefined)?] : [$replace<R["_meta"], R["_schema"] & ZodEnum<{ bottom: "bottom"; right: "right"; left: "left /* … truncated; see the package .d.ts */;
  safeDecode: (data: "bottom" | "right" | "left" | "top", params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"bottom" | "right" | "left" | "top">;
  safeDecodeAsync: (data: "bottom" | "right" | "left" | "top", params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"bottom" | "right" | "left" | "top">>;
  safeEncode: (data: "bottom" | "right" | "left" | "top", params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"bottom" | "right" | "left" | "top">;
  safeEncodeAsync: (data: "bottom" | "right" | "left" | "top", params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"bottom" | "right" | "left" | "top">>;
  safeParse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"bottom" | "right" | "left" | "top">;
  safeParseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"bottom" | "right" | "left" | "top">>;
  spa: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"bottom" | "right" | "left" | "top">>;
  superRefine: (refinement: (arg: "bottom" | "right" | "left" | "top", ctx: $RefinementCtx<"bottom" | "right" | "left" | "top">) => void | Promise<void>) => ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>;
  toJSONSchema: (params?: ToJSONSchemaParams | undefined) => ZodStandardJSONSchemaPayload<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>;
  transform: <NewOut>(transform: (arg: "bottom" | "right" | "left" | "top", ctx: $RefinementCtx<"bottom" | "right" | "left" | "top">) => NewOut | Promise<NewOut>) => ZodPipe<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>, ZodTransform<Awaited<NewOut>, "bottom" | "right" | "left" | "top">>;
  type: "enum";
  with: (...checks: Array<CheckFn<"bottom" | "right" | "left" | "top"> | $ZodCheck<"bottom" | "right" | "left" | "top">>) => ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>;
}
```

</details>

<details>
<summary><code>const LegendStopsSchema</code> (53 members)</summary>

```ts
const LegendStopsSchema: {
  _def: $ZodEnumDef<{ absolute: "absolute"; relative: "relative"; }>;
  _input: "absolute" | "relative";
  _output: "absolute" | "relative";
  _zod: $ZodEnumInternals<{ absolute: "absolute"; relative: "relative"; }>;
  ~standard: ZodStandardSchemaWithJSON<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>;
  and: <T extends core.SomeType>(incoming: T) => ZodIntersection<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>, T>;
  apply: <T>(fn: (schema: ZodEnum<{ absolute: "absolute"; relative: "relative"; }>) => T) => T;
  array: () => ZodArray<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>;
  brand: <T extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T | undefined) => PropertyKey extends T ? ZodEnum<{ absolute: "absolute"; relative: "relative"; }> : $ZodBranded<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>, T, Dir>;
  catch: { (def: "absolute" | "relative"): ZodCatch<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>; (def: (ctx: $ZodCatchCtx) => "absolute" | "relative"): ZodCatch<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>; };
  check: (...checks: Array<CheckFn<"absolute" | "relative"> | $ZodCheck<"absolute" | "relative">>) => ZodEnum<{ absolute: "absolute"; relative: "relative"; }>;
  clone: (def?: $ZodEnumDef<{ absolute: "absolute"; relative: "relative"; }> | undefined, params?: { parent: boolean; } | undefined) => ZodEnum<{ absolute: "absolute"; relative: "relative"; }>;
  decode: (data: "absolute" | "relative", params?: ParseContext<$ZodIssue> | undefined) => "absolute" | "relative";
  decodeAsync: (data: "absolute" | "relative", params?: ParseContext<$ZodIssue> | undefined) => Promise<"absolute" | "relative">;
  def: $ZodEnumDef<{ absolute: "absolute"; relative: "relative"; }>;
  default: { (def: "absolute" | "relative"): ZodDefault<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>; (def: () => "absolute" | "relative"): ZodDefault<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>; };
  describe: (description: string) => ZodEnum<{ absolute: "absolute"; relative: "relative"; }>;
  description?: string;
  encode: (data: "absolute" | "relative", params?: ParseContext<$ZodIssue> | undefined) => "absolute" | "relative";
  encodeAsync: (data: "absolute" | "relative", params?: ParseContext<$ZodIssue> | undefined) => Promise<"absolute" | "relative">;
  enum: [object Object];
  exactOptional: () => ZodExactOptional<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>;
  exclude: <const U extends ReadonlyArray<"absolute" | "relative">>(values: U, params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidValue<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodEnum<{ [k in keyof Omit<{ absolute: "absolute"; relative: "relative"; }, U[number]>]: Omit<{ absolute: "absolute"; relative: "relative"; }, U[number]>[k]; }>;
  extract: <const U extends ReadonlyArray<"absolute" | "relative">>(values: U, params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidValue<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodEnum<{ [k in keyof Pick<{ absolute: "absolute"; relative: "relative"; }, U[number]>]: Pick<{ absolute: "absolute"; relative: "relative"; }, U[number]>[k]; }>;
  isNullable: () => boolean;
  isOptional: () => boolean;
  meta: { (): { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; } | undefined; (data: { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; }): ZodEnum<{ absolute: "absolute"; relative: "relative"; }>; };
  nonoptional: (params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidType<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodNonOptional<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>;
  nullable: () => ZodNullable<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>;
  nullish: () => ZodOptional<ZodNullable<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>>;
  optional: () => ZodOptional<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>;
  options: Array<"absolute" | "relative">;
  or: <T extends core.SomeType>(option: T) => ZodUnion<[ZodEnum<{ absolute: "absolute"; relative: "relative"; }>, T]>;
  overwrite: (fn: (x: "absolute" | "relative") => "absolute" | "relative") => ZodEnum<{ absolute: "absolute"; relative: "relative"; }>;
  parse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => "absolute" | "relative";
  parseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<"absolute" | "relative">;
  pipe: <T extends $ZodType<any, "absolute" | "relative", $ZodTypeInternals<any, "absolute" | "relative">>>(target: T | $ZodType<any, "absolute" | "relative", $ZodTypeInternals<any, "absolute" | "relative">>) => ZodPipe<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>, T>;
  prefault: { (def: () => "absolute" | "relative"): ZodPrefault<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>; (def: "absolute" | "relative"): ZodPrefault<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>; };
  readonly: () => ZodReadonly<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>;
  refine: <Ch extends (arg: "absolute" | "relative") => unknown>(check: Ch, params?: string | { abort?: boolean | undefined; when?: ((payload: ParsePayload<unknown>) => boolean) | undefined; path?: Array<PropertyKey> | undefined; params?: Record<string, any> | undefined; error?: string | $ZodErrorMap<NonNullable<$ZodIssue>> | undefined; message?: string | undefined; } | undefined) => Ch extends (arg: any) = /* … truncated; see the package .d.ts */;
  register: <R extends core.$ZodRegistry>(registry: R, ...meta: ZodEnum<{ absolute: "absolute"; relative: "relative"; }> extends R["_schema"] ? undefined extends R["_meta"] ? [($replace<R["_meta"], R["_schema"] & ZodEnum<{ absolute: "absolute"; relative: "relative"; }>> | undefined)?] : [$replace<R["_meta"], R["_schema"] & ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>] : ["Incompatible schema"]) = /* … truncated; see the package .d.ts */;
  safeDecode: (data: "absolute" | "relative", params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"absolute" | "relative">;
  safeDecodeAsync: (data: "absolute" | "relative", params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"absolute" | "relative">>;
  safeEncode: (data: "absolute" | "relative", params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"absolute" | "relative">;
  safeEncodeAsync: (data: "absolute" | "relative", params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"absolute" | "relative">>;
  safeParse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"absolute" | "relative">;
  safeParseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"absolute" | "relative">>;
  spa: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"absolute" | "relative">>;
  superRefine: (refinement: (arg: "absolute" | "relative", ctx: $RefinementCtx<"absolute" | "relative">) => void | Promise<void>) => ZodEnum<{ absolute: "absolute"; relative: "relative"; }>;
  toJSONSchema: (params?: ToJSONSchemaParams | undefined) => ZodStandardJSONSchemaPayload<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>>;
  transform: <NewOut>(transform: (arg: "absolute" | "relative", ctx: $RefinementCtx<"absolute" | "relative">) => NewOut | Promise<NewOut>) => ZodPipe<ZodEnum<{ absolute: "absolute"; relative: "relative"; }>, ZodTransform<Awaited<NewOut>, "absolute" | "relative">>;
  type: "enum";
  with: (...checks: Array<CheckFn<"absolute" | "relative"> | $ZodCheck<"absolute" | "relative">>) => ZodEnum<{ absolute: "absolute"; relative: "relative"; }>;
}
```

</details>

<details>
<summary><code>const LegendTypeSchema</code> (53 members)</summary>

```ts
const LegendTypeSchema: {
  _def: $ZodEnumDef<{ categorical: "categorical"; gradient: "gradient"; }>;
  _input: "categorical" | "gradient";
  _output: "categorical" | "gradient";
  _zod: $ZodEnumInternals<{ categorical: "categorical"; gradient: "gradient"; }>;
  ~standard: ZodStandardSchemaWithJSON<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>;
  and: <T extends core.SomeType>(incoming: T) => ZodIntersection<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>, T>;
  apply: <T>(fn: (schema: ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>) => T) => T;
  array: () => ZodArray<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>;
  brand: <T extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T | undefined) => PropertyKey extends T ? ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }> : $ZodBranded<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>, T, Dir>;
  catch: { (def: "categorical" | "gradient"): ZodCatch<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>; (def: (ctx: $ZodCatchCtx) => "categorical" | "gradient"): ZodCatch<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>; };
  check: (...checks: Array<CheckFn<"categorical" | "gradient"> | $ZodCheck<"categorical" | "gradient">>) => ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>;
  clone: (def?: $ZodEnumDef<{ categorical: "categorical"; gradient: "gradient"; }> | undefined, params?: { parent: boolean; } | undefined) => ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>;
  decode: (data: "categorical" | "gradient", params?: ParseContext<$ZodIssue> | undefined) => "categorical" | "gradient";
  decodeAsync: (data: "categorical" | "gradient", params?: ParseContext<$ZodIssue> | undefined) => Promise<"categorical" | "gradient">;
  def: $ZodEnumDef<{ categorical: "categorical"; gradient: "gradient"; }>;
  default: { (def: "categorical" | "gradient"): ZodDefault<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>; (def: () => "categorical" | "gradient"): ZodDefault<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>; };
  describe: (description: string) => ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>;
  description?: string;
  encode: (data: "categorical" | "gradient", params?: ParseContext<$ZodIssue> | undefined) => "categorical" | "gradient";
  encodeAsync: (data: "categorical" | "gradient", params?: ParseContext<$ZodIssue> | undefined) => Promise<"categorical" | "gradient">;
  enum: [object Object];
  exactOptional: () => ZodExactOptional<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>;
  exclude: <const U extends ReadonlyArray<"categorical" | "gradient">>(values: U, params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidValue<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodEnum<{ [k in keyof Omit<{ categorical: "categorical"; gradient: "gradient"; }, U[number]>]: Omit<{ categorical: "categorical"; gradient: "gradient"; }, U[number]>[k]; }>;
  extract: <const U extends ReadonlyArray<"categorical" | "gradient">>(values: U, params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidValue<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodEnum<{ [k in keyof Pick<{ categorical: "categorical"; gradient: "gradient"; }, U[number]>]: Pick<{ categorical: "categorical"; gradient: "gradient"; }, U[number]>[k]; }>;
  isNullable: () => boolean;
  isOptional: () => boolean;
  meta: { (): { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; } | undefined; (data: { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; }): ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>; };
  nonoptional: (params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidType<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodNonOptional<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>;
  nullable: () => ZodNullable<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>;
  nullish: () => ZodOptional<ZodNullable<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>>;
  optional: () => ZodOptional<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>;
  options: Array<"categorical" | "gradient">;
  or: <T extends core.SomeType>(option: T) => ZodUnion<[ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>, T]>;
  overwrite: (fn: (x: "categorical" | "gradient") => "categorical" | "gradient") => ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>;
  parse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => "categorical" | "gradient";
  parseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<"categorical" | "gradient">;
  pipe: <T extends $ZodType<any, "categorical" | "gradient", $ZodTypeInternals<any, "categorical" | "gradient">>>(target: T | $ZodType<any, "categorical" | "gradient", $ZodTypeInternals<any, "categorical" | "gradient">>) => ZodPipe<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>, T>;
  prefault: { (def: () => "categorical" | "gradient"): ZodPrefault<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>; (def: "categorical" | "gradient"): ZodPrefault<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>; };
  readonly: () => ZodReadonly<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>;
  refine: <Ch extends (arg: "categorical" | "gradient") => unknown>(check: Ch, params?: string | { abort?: boolean | undefined; when?: ((payload: ParsePayload<unknown>) => boolean) | undefined; path?: Array<PropertyKey> | undefined; params?: Record<string, any> | undefined; error?: string | $ZodErrorMap<NonNullable<$ZodIssue>> | undefined; message?: string | undefined; } | undefined) => Ch extends (arg: any /* … truncated; see the package .d.ts */;
  register: <R extends core.$ZodRegistry>(registry: R, ...meta: ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }> extends R["_schema"] ? undefined extends R["_meta"] ? [($replace<R["_meta"], R["_schema"] & ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>> | undefined)?] : [$replace<R["_meta"], R["_schema"] & ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>] : ["Incomp /* … truncated; see the package .d.ts */;
  safeDecode: (data: "categorical" | "gradient", params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"categorical" | "gradient">;
  safeDecodeAsync: (data: "categorical" | "gradient", params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"categorical" | "gradient">>;
  safeEncode: (data: "categorical" | "gradient", params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"categorical" | "gradient">;
  safeEncodeAsync: (data: "categorical" | "gradient", params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"categorical" | "gradient">>;
  safeParse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<"categorical" | "gradient">;
  safeParseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"categorical" | "gradient">>;
  spa: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<"categorical" | "gradient">>;
  superRefine: (refinement: (arg: "categorical" | "gradient", ctx: $RefinementCtx<"categorical" | "gradient">) => void | Promise<void>) => ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>;
  toJSONSchema: (params?: ToJSONSchemaParams | undefined) => ZodStandardJSONSchemaPayload<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>>;
  transform: <NewOut>(transform: (arg: "categorical" | "gradient", ctx: $RefinementCtx<"categorical" | "gradient">) => NewOut | Promise<NewOut>) => ZodPipe<ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>, ZodTransform<Awaited<NewOut>, "categorical" | "gradient">>;
  type: "enum";
  with: (...checks: Array<CheckFn<"categorical" | "gradient"> | $ZodCheck<"categorical" | "gradient">>) => ZodEnum<{ categorical: "categorical"; gradient: "gradient"; }>;
}
```

</details>

<details>
<summary><code>const MatrixLegendDefinitionSchema</code> (50 members)</summary>

```ts
const MatrixLegendDefinitionSchema: {
  _def: $ZodUnionDef<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: ZodOptional<ZodEnum<{ /* … truncated; see the package .d.ts */;
  _input: [object Object];
  _output: [object Object];
  _zod: $ZodUnionInternals<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: ZodOptional<Zod /* … truncated; see the package .d.ts */;
  ~standard: ZodStandardSchemaWithJSON<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: /* … truncated; see the package .d.ts */;
  and: <T extends core.SomeType>(incoming: T) => ZodIntersection<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; } /* … truncated; see the package .d.ts */;
  apply: <T>(fn: (schema: ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: ZodOptio /* … truncated; see the package .d.ts */;
  array: () => ZodArray<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: ZodOptiona /* … truncated; see the package .d.ts */;
  brand: <T extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T | undefined) => PropertyKey extends T ? ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, Zo /* … truncated; see the package .d.ts */;
  catch: { (def: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean |  /* … truncated; see the package .d.ts */;
  check: (...checks: Array<CheckFn<{ position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; vi /* … truncated; see the package .d.ts */;
  clone: (def?: $ZodUnionDef<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: ZodOptional<Zo /* … truncated; see the package .d.ts */;
  decode: (data: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | u /* … truncated; see the package .d.ts */;
  decodeAsync: (data: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | u /* … truncated; see the package .d.ts */;
  def: $ZodUnionDef<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: ZodOptional<ZodEnum<{ /* … truncated; see the package .d.ts */;
  default: { (def: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean |  /* … truncated; see the package .d.ts */;
  describe: (description: string) => ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position:  /* … truncated; see the package .d.ts */;
  description?: string;
  encode: (data: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | u /* … truncated; see the package .d.ts */;
  encodeAsync: (data: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | u /* … truncated; see the package .d.ts */;
  exactOptional: () => ZodExactOptional<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: Zo /* … truncated; see the package .d.ts */;
  isNullable: () => boolean;
  isOptional: () => boolean;
  meta: { (): { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; } | undefined; (data: { [x: string]: unknown; id?: string | undefined; title?: string | undefined; description?: string | undefined; deprecated?: boolean | undefined; }): ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom /* … truncated; see the package .d.ts */;
  nonoptional: (params?: string | { error?: string | $ZodErrorMap<$ZodIssueInvalidType<unknown>> | undefined; message?: string | undefined; } | undefined) => ZodNonOptional<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOption /* … truncated; see the package .d.ts */;
  nullable: () => ZodNullable<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: ZodOpti /* … truncated; see the package .d.ts */;
  nullish: () => ZodOptional<ZodNullable<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ posit /* … truncated; see the package .d.ts */;
  optional: () => ZodOptional<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: ZodOpti /* … truncated; see the package .d.ts */;
  options: [object Object];
  or: <T extends core.SomeType>(option: T) => ZodUnion<[ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip /* … truncated; see the package .d.ts */;
  overwrite: (fn: (x: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | /* … truncated; see the package .d.ts */;
  parse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | " /* … truncated; see the package .d.ts */;
  parseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<{ position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bot /* … truncated; see the package .d.ts */;
  pipe: <T extends $ZodType<any, { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; vis /* … truncated; see the package .d.ts */;
  prefault: { (def: () => { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: bool /* … truncated; see the package .d.ts */;
  readonly: () => ZodReadonly<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $strip>, ZodObject<{ position: ZodOpti /* … truncated; see the package .d.ts */;
  refine: <Ch extends (arg: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?:  /* … truncated; see the package .d.ts */;
  register: <R extends core.$ZodRegistry>(registry: R, ...meta: ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; }, $strip>>>; }, $str /* … truncated; see the package .d.ts */;
  safeDecode: (data: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | u /* … truncated; see the package .d.ts */;
  safeDecodeAsync: (data: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | u /* … truncated; see the package .d.ts */;
  safeEncode: (data: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | u /* … truncated; see the package .d.ts */;
  safeEncodeAsync: (data: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | u /* … truncated; see the package .d.ts */;
  safeParse: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => ZodSafeParseResult<{ position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; posi /* … truncated; see the package .d.ts */;
  safeParseAsync: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<{ position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorica /* … truncated; see the package .d.ts */;
  spa: (data: unknown, params?: ParseContext<$ZodIssue> | undefined) => Promise<ZodSafeParseResult<{ position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorica /* … truncated; see the package .d.ts */;
  superRefine: (refinement: (arg: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; visible?: /* … truncated; see the package .d.ts */;
  toJSONSchema: (params?: ToJSONSchemaParams | undefined) => ZodStandardJSONSchemaPayload<ZodUnion<readonly [ZodObject<{ position: ZodOptional<ZodEnum<{ bottom: "bottom"; right: "right"; left: "left"; top: "top"; }>>; visible: ZodOptional<ZodBoolean>; title: ZodOptional<ZodString>; type: ZodLiteral<"categorical">; items: ZodOptional<ZodRecord<ZodString, ZodObject<{ color: ZodString; label: ZodOptional<ZodString>; /* … truncated; see the package .d.ts */;
  transform: <NewOut>(transform: (arg: { position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; vi /* … truncated; see the package .d.ts */;
  type: "union";
  with: (...checks: Array<CheckFn<{ position?: "bottom" | "right" | "left" | "top" | undefined; visible?: boolean | undefined; title?: string | undefined; type?: "gradient" | undefined; stopsMode?: "absolute" | "relative" | undefined; items?: Record<string, { color: string; label?: string | undefined; }> | undefined; } | { type: "categorical"; position?: "bottom" | "right" | "left" | "top" | undefined; vi /* … truncated; see the package .d.ts */;
}
```

</details>

## Types

```ts
interface AnalyticsDataContext {
  applyFilter: (filters: Array<FilterConfig>) => Promise<AnalyticsResultMap>;
  fetch: (ctx: LoaderContext, questions: Record<string, { name: string; models: Array<{ name?: string | undefined; reference?: string | undefined; label?: string | undefined; entity?: { id: string; sourceType: string; } | undefined; isExpression?: boolean | undefined; expression?: string | undefined; metrics?: Array<{ id: string; name: string; expression: string; dataType: "CURRENCY" | "NUMBER" | "DURATION /* … truncated; see the package .d.ts */;
  get: () => AnalyticsResultMap;
  getFilters: () => Array<FilterConfig>;
  refresh: (questions?: Record<string, { name: string; models: Array<{ name?: string | undefined; reference?: string | undefined; label?: string | undefined; entity?: { id: string; sourceType: string; } | undefined; isExpression?: boolean | undefined; expression?: string | undefined; metrics?: Array<{ id: string; name: string; expression: string; dataType: "CURRENCY" | "NUMBER" | "DURATION"; label?: string | /* … truncated; see the package .d.ts */;
  set: (value: AnalyticsResultMap) => void;
  setQuestions: (questions: Record<string, { name: string; models: Array<{ name?: string | undefined; reference?: string | undefined; label?: string | undefined; entity?: { id: string; sourceType: string; } | undefined; isExpression?: boolean | undefined; expression?: string | undefined; metrics?: Array<{ id: string; name: string; expression: string; dataType: "CURRENCY" | "NUMBER" | "DURATION"; label?: string |  /* … truncated; see the package .d.ts */;
  subscribe: (callback: (value: AnalyticsResultMap) => void) => () => void;
}
```

```ts
type AnalyticsResultMap = unknown
```

```ts
type CenterContentConfig = {
  mode: "data" | "custom" | "rules" | "hidden";
}
```

```ts
type CenterContentMode = "data" | "custom" | "rules" | "hidden"
```

```ts
type ChartConfig = unknown
```

```ts
interface ClickColumnInfo {
  label: string;
  meaning: string;
}
```

```ts
type Column = {
  derivedFrom: string;
  groupedBy?: Array<string>;
  interaction?: string;
  label?: string;
  meaning: "dimension" | "calculation" | "forecast" | "trend" | "target" | "metric" | "comment" | "change" | "changePercentage" | "changeReference" | "prediction" | "confidence";
  order: number;
  type: "numerical" | "categorical";
}
```

```ts
type ColumnRendering = {
  formatting: [object Object];
  presentation: [object Object];
  role: "value" | "grouping";
  rules: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>;
}
```

```ts
type ColumnRenderingOverride = {
  formatting?: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | undefined; thousandSeparatorEnabled?: boolean | undefined; thousandSeparator?: string | undefined; numberInTooltipsEnabled?: boolean | undefined; abbreviationEnabled?: boolean | undefined; unit?: string | undefined; }; } | { type: "duration";  /* … truncated; see the package .d.ts */;
  presentation?: [object Object];
  rules?: Array<{ applies: { color?: string | undefined; icon?: string | undefined; }; label?: string | undefined; operator?: "less_equal" | "less" | "equal" | "greater" | "greater_equal" | "like" | undefined; operand?: string | undefined; }>;
}
```

```ts
type DataResponse = {
  data: Array<Array<string | null>>;
  interactions: Record<string, { modelEventData: Record<string, never>; columnEventData: Record<string, { eventData?: Record<string, never> | undefined; elements?: Record<string, Record<string, never>> | undefined; }>; }>;
  metadata: [object Object];
  realTimeChannelId?: string;
  rendering: [object Object];
  schemaVersion: 2;
}
```

```ts
type ErrorCategory = unknown
```

```ts
interface ErrorDisplay {
  body: string;
  heading: string;
  icon: string;
  role: "status" | "alert";
}
```

```ts
type Formatting = {
  type: "string" | "number" | "duration";
}
```

```ts
interface InteractionConfig {
  selectedPoints?: Array<SelectedPoint>;
}
```

```ts
interface InteractionData {
  columnEventData: Record<string, unknown>;
  elementEventData: Record<string, Record<string, unknown>>;
  modelEventData: Record<string, unknown>;
}
```

```ts
interface LabeledStop {
  color: string;
  label?: string;
  position: number;
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
type LegendItem = {
  color: string;
  label?: string;
}
```

```ts
interface LegendLayoutConfig {
  align?: string;
  enabled: boolean;
  layout?: string;
  title?: [object Object];
  verticalAlign?: string;
}
```

```ts
type LegendPosition = "bottom" | "right" | "left" | "top"
```

```ts
type LegendStops = "absolute" | "relative"
```

```ts
type LegendType = "categorical" | "gradient"
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
type RenderingOverrides = {
  columns?: Record<string, { presentation?: { visualizationDefinition?: Record<string, any> | undefined; tooltipValues?: Array<string> | undefined; dataTable?: { hidden?: boolean | undefined; position?: "row" | "column" | undefined; } | undefined; } | undefined; formatting?: { type: "number"; options: { decimalPrecision?: number | undefined; rounding?: "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_D /* … truncated; see the package .d.ts */;
}
```

```ts
interface ResolvedColumn {
  column: [object Object];
  key: string;
  rendering: [object Object];
}
```

```ts
interface RuleResult {
  color?: string;
  icon?: string;
  label?: string;
}
```

```ts
interface SelectedPoint {
  dimensions: Record<string, string | number>;
  metric?: string;
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

```ts
interface VisualizationClickDetail {
  columns: Record<string, ClickColumnInfo>;
  interactionData: InteractionData;
  nativeEvent: Event;
  values: Record<string, string | number | null>;
}
```

## Classes

```ts
class ChartError {
  category: ErrorCategory;
}
```

```ts
class NoDataError {

}
```


