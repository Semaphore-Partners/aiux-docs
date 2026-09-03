# URL Rewrites

`sn_aiux` ships with a built-in migration mechanism: when a user hits a legacy Service Portal URL, the framework can intercept it and redirect to the equivalent `sn_aiux` page. The rules live in **`sys_aix_url_rewrite_rule`**, and they're delivered to the SPA as part of the experience config payload.

The implication: deep links your users have bookmarked or that have been emailed out (`kb_view.do?sys_kb_id=...`, `sc_cat_item.do?sys_id=...`, even custom processors) can keep resolving after you switch an experience over. You don't have to ship new URLs to your users.

> **Status note.** The table is present, the rule shape is sensible, the config endpoint returns the rules, and the OOB rule set is populated. The actual rewriter component that consumes them is still something we're verifying end-to-end. File this under *promising mechanism, verify before you bet a rollout on it.*

## The rule record

`sys_aix_url_rewrite_rule` fields:

| Field | Meaning |
|---|---|
| source_type | What to match — `portal_page` (a Service Portal `sp_page`) or `processor` (a legacy `.do` URL). |
| portal_page | When `source_type=portal_page`: the `sp_page.id` to intercept. |
| processor | When `source_type=processor`: the `.do` path (e.g. `kb_view.do`). |
| parameter_mapping | JSON object mapping source URL params to AIUX page params. |
| to_aiux_page | Target path inside the current `sn_aiux` experience (e.g. `/knowledge/:sys_id`). |
| order | Evaluation order (lower = earlier). |

## OOB rule examples

Pulled from the live config payload at `/api/now/aix/config/builder`:

```json
{ "source_type": "portal_page", "portal_page": "kb_article",
  "parameter_mapping": { "sys_id": "sys_id" },
  "to_aiux_page": "/knowledge/:sys_id" }

{ "source_type": "processor", "processor": "kb_view.do",
  "parameter_mapping": { "sys_kb_id": "article_id" },
  "to_aiux_page": "/knowledge/:article_id" }

{ "source_type": "processor", "processor": "sc_cat_item.do",
  "parameter_mapping": { "sys_id": "item_id" },
  "to_aiux_page": "/catalog/:item_id" }

{ "source_type": "processor", "processor": "com.glideapp.servicecatalog_cat_item_view.do",
  "parameter_mapping": { "sysparm_id": "item_id" },
  "to_aiux_page": "/catalog/:item_id" }

{ "source_type": "portal_page", "portal_page": "ticket",
  "parameter_mapping": { "sys_id": "sys_id", "table": "table" },
  "to_aiux_page": "/ticket/:table/:sys_id" }
```

A few things to notice:

- Two source types: **`portal_page`** matches a hit against an `sp_page` in the underlying Service Portal; **`processor`** matches a legacy `.do` URL hitting a `sys_processor`.
- **`parameter_mapping`** maps incoming param names to the AIUX page param names. Example: legacy `kb_view.do?sys_kb_id=XYZ` has the article id in `sys_kb_id`; the AIUX `/knowledge/:article_id` page wants it as `article_id`. The mapping rebinds it.
- **`to_aiux_page`** is a path inside the current experience. The framework resolves it relative to whichever `sys_aix_experience` the user is in.

## Global vs experience-scoped rules

The config payload splits rewrite rules into two arrays:

```json
{
  "urlRewriteRules": {
    "globalRules":     [ ... ],
    "experienceRules": [ ... ]
  }
}
```

`globalRules` apply to every experience. `experienceRules` are scoped to the current experience and override globals for the same source. Most of the OOB rules are global — KB articles, catalog items, tickets, all the high-traffic pages from the legacy Service Portal world.

## Auditing your inbound URLs

Before flipping a portal over to `sn_aiux`, this is the table to plan around. The checklist:

1. **Inventory the incoming URLs.** Pull from email-sent logs, web analytics, anywhere users might hit legacy SP routes.
2. **For each unique URL pattern**, check whether a `sys_aix_url_rewrite_rule` exists in the experience config. If yes, verify the rewrite actually lands somewhere useful.
3. **Fill in the gaps.** Add `sys_aix_url_rewrite_rule` records for any pattern that doesn't have a matching rule.
4. **Cut over.** The legacy URLs continue to resolve. Users see no change.

For an enterprise rollout, this is the most important table in the schema. Get it right and the migration is invisible.

## Custom rewrites

A typical custom rule for a `sys_processor` you wrote yourself:

```
source_type:        processor
processor:          my_custom_thing.do
parameter_mapping:  {"sys_id": "id"}
to_aiux_page:       /my-page/:id
order:              100
```

A typical custom rule for an SP `sp_page` you built:

```
source_type:        portal_page
portal_page:        my_landing
parameter_mapping:  {}
to_aiux_page:       /home
order:              100
```

Rules are ordered by `order` ascending; the first match wins. Set `order` lower than 100 to override an OOB rule.

## What this doesn't do

A few things the rewrite layer isn't:

- **Not a general-purpose URL redirector.** It only intercepts `sp_page` hits and `sys_processor` hits. Outbound links in your widgets are unchanged.
- **Not a content migrator.** A rewrite sends the user to an AIUX page; it doesn't move the content into the AIUX page. You're responsible for making sure the AIUX target page actually exists and renders the equivalent content.
- **Not a fallback for missing pages.** If `to_aiux_page` points to a `path_pattern` that doesn't exist in the experience, the user lands on `/not-found` (Breakout — see [Pages & Routing](pages-and-routing.md)).

## See also

- [Service Portal Bridge](../widgets/service-portal-bridge.md) — the *widget*-level equivalent: instead of rewriting URLs to point at new widgets, you embed your existing Angular widgets inside Lit components and keep the URLs unchanged. Most real migrations use both.
- [Pages & Routing](pages-and-routing.md) — for how the `to_aiux_page` paths get resolved.
