# `@servicenow/aiux-components-document-viewer`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-document-viewer`

Declares 2 functions, 3 types, 1 class.

## Functions

```ts
dispatchCommand(host: HTMLElement, command: [object Object], args: [object Object]): void
dispatchCommand(host: HTMLElement, command: string, args: Array<any>): void
dispatchCommand(host: HTMLElement, command: [object Object], args: [object Object]): void
dispatchCommand(host: HTMLElement, command: string, args: Array<any>): void
```

## Types

```ts
interface DocumentViewerEventMap {
  dv:search:results-updated: CustomEvent<SearchResultsUpdatedPayload>;
}
```

```ts
interface DocumentViewerProps {
  hidden: boolean;
  maxFileSizeMb: number;
  officePreview: boolean;
  search: [object Object];
  sysId: string;
}
```

```ts
interface SearchConfig {
  query?: string;
}
```

## Classes

```ts
class DocumentViewerError {
  code: DocumentViewerErrorCode;
  getUserMessage(): string;
  name: "DocumentViewerError";
  originalError: Error | undefined;
}
```


