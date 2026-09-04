# `@servicenow/aiux-components-announcement-banner`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-announcement-banner`

Declares 2 elements, 4 functions, 4 constants.

## Elements

### `<aiux-announcement-banner>`

Class `AnnouncementBanner`.

| Event | `detail` |
|---|---|
| `aiux-announcement:dismiss` | `{ sysId: string; }` |
| `aiux-announcement:link-clicked` | `{ url: any; newWindow: boolean; userAction: string; }` |
| `aiux-announcement:toggle-expanded` | `{ stackType: string; }` |

### `<aiux-announcement-banner-list>`

Class `AnnouncementBannerList`.

_No public properties, events, or slots declared._

## Functions

```ts
aliasIconName(name: any): any
announcementCountDisplay(numAnnouncements: any): string
parseAmbMessage(data: object, ctx: [object Object]): Array<object>
recordToAnnouncement(rec: any): { color: any; contentPosition: any; endDate: any; heading: any; icon: any; iconTooltip: any; link: [object Object]; nonDismissible: boolean; nonStackable: boolean; startDate: any; summary: any; sysId: any }
```

## Constants

| Name | Type |
|---|---|
| `AMB_CHANNEL` | `"/uxbannerannouncements"` |
| `announcementBannerContext` | `ScopedContext<AnnouncementBannerConfig> \| GlobalContext<AnnouncementBannerConfig> \| [GlobalContext<AnnouncementBannerConfig>, (value: AnnouncementBannerConfig) => void]` |

```ts
const COLORS: {
  at: (index: number) => string | undefined;
  concat: { (...items: Array<ConcatArray<string>>): Array<string>; (...items: Array<string | ConcatArray<string>>): Array<string>; };
  copyWithin: (target: number, start: number, end?: number | undefined) => Array<string>;
  entries: () => ArrayIterator<[number, string]>;
  every: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): boolean; };
  fill: (value: string, start?: number | undefined, end?: number | undefined) => Array<string>;
  filter: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): Array<string>; };
  find: { <S extends string>(predicate: (value: string, index: number, obj: Array<string>) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any): string | undefined; };
  findIndex: (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any) => number;
  flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => Array<FlatArray<A, D>>;
  flatMap: <U, This = undefined>(callback: (this: This, value: string, index: number, array: Array<string>) => U | ReadonlyArray<U>, thisArg?: This | undefined) => Array<U>;
  forEach: (callbackfn: (value: string, index: number, array: Array<string>) => void, thisArg?: any) => void;
  includes: (searchElement: string, fromIndex?: number | undefined) => boolean;
  indexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  join: (separator?: string | undefined) => string;
  keys: () => ArrayIterator<number>;
  lastIndexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  length: number;
  map: <U>(callbackfn: (value: string, index: number, array: Array<string>) => U, thisArg?: any) => Array<U>;
  pop: () => string | undefined;
  push: (...items: Array<string>) => number;
  reduce: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reduceRight: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reverse: () => Array<string>;
  shift: () => string | undefined;
  slice: (start?: number | undefined, end?: number | undefined) => Array<string>;
  some: (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any) => boolean;
  sort: (compareFn?: ((a: string, b: string) => number) | undefined) => Array<string>;
  splice: { (start: number, deleteCount?: number | undefined): Array<string>; (start: number, deleteCount: number, ...items: Array<string>): Array<string>; };
  toLocaleString: { (): string; (locales: string | Array<string>, options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; };
  toString: () => string;
  unshift: (...items: Array<string>) => number;
  values: () => ArrayIterator<string>;
}
```

```ts
const SIZES: {
  at: (index: number) => string | undefined;
  concat: { (...items: Array<ConcatArray<string>>): Array<string>; (...items: Array<string | ConcatArray<string>>): Array<string>; };
  copyWithin: (target: number, start: number, end?: number | undefined) => Array<string>;
  entries: () => ArrayIterator<[number, string]>;
  every: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): this is Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): boolean; };
  fill: (value: string, start?: number | undefined, end?: number | undefined) => Array<string>;
  filter: { <S extends string>(predicate: (value: string, index: number, array: Array<string>) => value is S, thisArg?: any): Array<S>; (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any): Array<string>; };
  find: { <S extends string>(predicate: (value: string, index: number, obj: Array<string>) => value is S, thisArg?: any): S | undefined; (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any): string | undefined; };
  findIndex: (predicate: (value: string, index: number, obj: Array<string>) => unknown, thisArg?: any) => number;
  flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => Array<FlatArray<A, D>>;
  flatMap: <U, This = undefined>(callback: (this: This, value: string, index: number, array: Array<string>) => U | ReadonlyArray<U>, thisArg?: This | undefined) => Array<U>;
  forEach: (callbackfn: (value: string, index: number, array: Array<string>) => void, thisArg?: any) => void;
  includes: (searchElement: string, fromIndex?: number | undefined) => boolean;
  indexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  join: (separator?: string | undefined) => string;
  keys: () => ArrayIterator<number>;
  lastIndexOf: (searchElement: string, fromIndex?: number | undefined) => number;
  length: number;
  map: <U>(callbackfn: (value: string, index: number, array: Array<string>) => U, thisArg?: any) => Array<U>;
  pop: () => string | undefined;
  push: (...items: Array<string>) => number;
  reduce: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reduceRight: { (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string): string; (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: Array<string>) => string, initialValue: string): string; <U>(callbackfn: (previousValue: U, currentValue: string, currentIndex: number, array: Array<string>) => U, initialValue: U): U; };
  reverse: () => Array<string>;
  shift: () => string | undefined;
  slice: (start?: number | undefined, end?: number | undefined) => Array<string>;
  some: (predicate: (value: string, index: number, array: Array<string>) => unknown, thisArg?: any) => boolean;
  sort: (compareFn?: ((a: string, b: string) => number) | undefined) => Array<string>;
  splice: { (start: number, deleteCount?: number | undefined): Array<string>; (start: number, deleteCount: number, ...items: Array<string>): Array<string>; };
  toLocaleString: { (): string; (locales: string | Array<string>, options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; };
  toString: () => string;
  unshift: (...items: Array<string>) => number;
  values: () => ArrayIterator<string>;
}
```


