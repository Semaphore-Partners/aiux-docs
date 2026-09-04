# `@servicenow/aiux-components-config-editor-props-pane`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-config-editor-props-pane`

Declares 4 functions, 2 constants.

## Functions

```ts
buildConfigKey(idChain: any, propKey: any): any
defineConfigEditorPropsPane(BaseClass: any): void
deserializeValue(raw: any, type: any): any
hasConfigMode(configMode: string, mode: string): boolean
```

## Constants

```ts
const COLOR_CHOICES: {
  at: (index: number) => { group: string; label: string; value: string; } | undefined;
  concat: { (...items: Array<ConcatArray<{ group: string; label: string; value: string; }>>): Array<{ group: string; label: string; value: string; }>; (...items: Array<{ group: string; label: string; value: string; } | ConcatArray<{ group: string; label: string; value: string; }>>): Array<{ group: string; label: string; value: string; }>; };
  copyWithin: (target: number, start: number, end?: number | undefined) => Array<{ group: string; label: string; value: string; }>;
  entries: () => ArrayIterator<[number, { group: string; label: string; value: string; }]>;
  every: { <S extends { group: string; label: string; value: string; }>(predicate: (value: { group: string; label: string; value: string; }, index: number, array: Array<{ group: string; label: string; value: string; }>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: { group: string; label: string; value: string; }, index: number, array: Array<{ group: string; label: string; value: str /* … truncated; see the package .d.ts */;
  fill: (value: { group: string; label: string; value: string; }, start?: number | undefined, end?: number | undefined) => Array<{ group: string; label: string; value: string; }>;
  filter: { <S extends { group: string; label: string; value: string; }>(predicate: (value: { group: string; label: string; value: string; }, index: number, array: Array<{ group: string; label: string; value: string; }>) => value is S, thisArg?: any): Array<S>; (predicate: (value: { group: string; label: string; value: string; }, index: number, array: Array<{ group: string; label: string; value: string; }>) /* … truncated; see the package .d.ts */;
  find: { <S extends { group: string; label: string; value: string; }>(predicate: (value: { group: string; label: string; value: string; }, index: number, obj: Array<{ group: string; label: string; value: string; }>) => value is S, thisArg?: any): S | undefined; (predicate: (value: { group: string; label: string; value: string; }, index: number, obj: Array<{ group: string; label: string; value: string; }> /* … truncated; see the package .d.ts */;
  findIndex: (predicate: (value: { group: string; label: string; value: string; }, index: number, obj: Array<{ group: string; label: string; value: string; }>) => unknown, thisArg?: any) => number;
  flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => Array<FlatArray<A, D>>;
  flatMap: <U, This = undefined>(callback: (this: This, value: { group: string; label: string; value: string; }, index: number, array: Array<{ group: string; label: string; value: string; }>) => U | ReadonlyArray<U>, thisArg?: This | undefined) => Array<U>;
  forEach: (callbackfn: (value: { group: string; label: string; value: string; }, index: number, array: Array<{ group: string; label: string; value: string; }>) => void, thisArg?: any) => void;
  includes: (searchElement: { group: string; label: string; value: string; }, fromIndex?: number | undefined) => boolean;
  indexOf: (searchElement: { group: string; label: string; value: string; }, fromIndex?: number | undefined) => number;
  join: (separator?: string | undefined) => string;
  keys: () => ArrayIterator<number>;
  lastIndexOf: (searchElement: { group: string; label: string; value: string; }, fromIndex?: number | undefined) => number;
  length: number;
  map: <U>(callbackfn: (value: { group: string; label: string; value: string; }, index: number, array: Array<{ group: string; label: string; value: string; }>) => U, thisArg?: any) => Array<U>;
  pop: () => { group: string; label: string; value: string; } | undefined;
  push: (...items: Array<{ group: string; label: string; value: string; }>) => number;
  reduce: { (callbackfn: (previousValue: { group: string; label: string; value: string; }, currentValue: { group: string; label: string; value: string; }, currentIndex: number, array: Array<{ group: string; label: string; value: string; }>) => { group: string; label: string; value: string; }): { group: string; label: string; value: string; }; (callbackfn: (previousValue: { group: string; label: string; valu /* … truncated; see the package .d.ts */;
  reduceRight: { (callbackfn: (previousValue: { group: string; label: string; value: string; }, currentValue: { group: string; label: string; value: string; }, currentIndex: number, array: Array<{ group: string; label: string; value: string; }>) => { group: string; label: string; value: string; }): { group: string; label: string; value: string; }; (callbackfn: (previousValue: { group: string; label: string; valu /* … truncated; see the package .d.ts */;
  reverse: () => Array<{ group: string; label: string; value: string; }>;
  shift: () => { group: string; label: string; value: string; } | undefined;
  slice: (start?: number | undefined, end?: number | undefined) => Array<{ group: string; label: string; value: string; }>;
  some: (predicate: (value: { group: string; label: string; value: string; }, index: number, array: Array<{ group: string; label: string; value: string; }>) => unknown, thisArg?: any) => boolean;
  sort: (compareFn?: ((a: { group: string; label: string; value: string; }, b: { group: string; label: string; value: string; }) => number) | undefined) => Array<{ group: string; label: string; value: string; }>;
  splice: { (start: number, deleteCount?: number | undefined): Array<{ group: string; label: string; value: string; }>; (start: number, deleteCount: number, ...items: Array<{ group: string; label: string; value: string; }>): Array<{ group: string; label: string; value: string; }>; };
  toLocaleString: { (): string; (locales: string | Array<string>, options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; };
  toString: () => string;
  unshift: (...items: Array<{ group: string; label: string; value: string; }>) => number;
  values: () => ArrayIterator<{ group: string; label: string; value: string; }>;
}
```

```ts
const CONFIG_EDITOR_TRACK: {
  FIELD_CHANGED: string;
  GROUP_TOGGLE: string;
  PANEL_OPEN: string;
  WIDGET_SAVE: string;
}
```


