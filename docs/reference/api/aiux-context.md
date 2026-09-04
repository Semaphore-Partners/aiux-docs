# `@servicenow/aiux-context`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-context`

Declares 3 constants.

## Constants

| Name | Type |
|---|---|
| `experienceContext` | `ScopedContext<Readonly<{ sysId: any; name: any; appShell: any; title: any; telemetryConfig: any; theme: any; properties: any; urlSuffix: any; dashboardSysIds: any; urlRewriteRules: { experienceRules:…` |

```ts
const experienceContextManager: {
  destroy: () => void;
  get: (key: string) => any;
  isLoaded: boolean;
  name: string;
  setExperienceConfig: (config: Partial<Object>) => void;
  subscribe: (callback: (metadata: Object) => void) => () => void;
  sysId: string;
}
```

```ts
const routeContext: {
  _name: string;
  get: () => any;
  set: (value: any) => void;
  subscribe: (callback: any) => any;
}
```


