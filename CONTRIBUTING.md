# Contributing

Thanks for helping document a framework that shipped without a manual. The bar is simple: **write down what you have verified on an instance, say which patch you saw it on, and keep ServiceNow's code out of the repo.**

## What to contribute

- **Corrections.** Something on a page is wrong or has changed in a newer patch. Open an issue with the page, the patch level, and what you observed — or fix it directly in a pull request.
- **Gaps.** A table, field, service, or `$aiux` method that isn't covered. Menus, dashboards, layouts, notifications, and the chat / engagement surfaces are all thin right now.
- **Worked examples.** Real widgets, ported or native, with the full `component`, `script`, and `input_schema`. The [Impersonation widget](docs/widgets/example-impersonation.md) is the template.
- **Diagrams.** Mermaid only, so they render on GitHub and can be pasted into Ghost. See [Architecture diagrams](docs/reference/architecture.md).

## Ground rules

1. **Observed behavior, not speculation.** State the patch (e.g. "Zurich P9") and how you verified it. If you are inferring from the bundle rather than testing on an instance, say so.
2. **No ServiceNow source code.** The framework ships full source maps, and it is tempting to paste the original TypeScript. Don't. Describe what the code does, quote a line or two where it clarifies a point, and give the file path under `sncapps/aix/src/...` so readers can look it up themselves. Never commit the `bundles/` or `sourcemaps/` trees; `.gitignore` blocks them.
3. **No instance identifiers.** Strip hostnames (`*.service-now.com`), user names, and sys_ids of records you created. OOB sys_ids that are the same on every instance (e.g. the `aiuxsp` `sp_portal` record) are fine and useful.
4. **OOB widget code is quoted sparingly.** Short excerpts of OOB widget `component` or `script` fields to illustrate a pattern are fine. Whole widgets are not.
5. **Screenshots** go in `assets/screenshots/`, PNG, no wider than 1600px, no browser chrome, no hostnames. Reference them with a relative path and meaningful alt text.
6. **Links between pages are relative** (`../widgets/component.md#lifecycle-hooks`), never absolute URLs to the Ghost site. The publishing step rewrites them.

## Style

- Plain Markdown. One `#` title per page, then `##` sections. Tables for field and method references.
- Lead with what a thing *is* and *why it matters*, then how to use it. Readers are Service Portal developers; the Service Portal analogy is usually the fastest explanation.
- Code blocks are tagged (`js`, `json`, `css`, `mermaid`).
- Wrap at whatever your editor does; no hard line-length rule.

## Adding a page

1. Create the file under the right section in `docs/`.
2. Add it to the **Contents** list in `README.md`.
3. Add an entry to `ghost/manifest.yaml` with a slug and order so it can be published.
4. Link to it from at least one related page.

## Pull requests

- One topic per PR. A correction and a new page should be two PRs.
- Say what instance / patch you verified against in the PR description.
- A maintainer reviews, merges, and publishes to the site. Publication may lag the merge by a few days.

## Reporting a problem with the site

Rendering problems on relay.semaphorepartners.com (broken diagram, missing page, bad link) are repo issues too — file them here with the `site` label.
