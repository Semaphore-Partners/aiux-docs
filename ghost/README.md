# How these docs get published

This repository is the source of truth. The readable version at [relay.semaphorepartners.com/aiux-docs](https://relay.semaphorepartners.com/aiux-docs/) is generated from it, and the same pages will appear on semaphorepartners.com under `/labs/aiux-docs/`.

```
GitHub (docs/*.md + ghost/manifest.yaml)  ──▶  Ghost (relay.semaphorepartners.com/aiux-docs)
                                          ──▶  semaphorepartners.com/labs/aiux-docs  (planned)
```

Publishing tooling lives outside this repo. Contributors never need to touch it: write the Markdown, add a line to `manifest.yaml`, open a PR. Once merged, the page shows up on the site within the hour.

## `manifest.yaml`

The one file here that matters. It maps each `docs/` page to a slug, a sidebar section, an order, and a desired state (`published`, `draft`, or `skip`). New pages start as `draft` so a maintainer can review the rendered result on the site before flipping them to `published`.

The index entry (`introduction.md`) is special: it is the collection's landing page rather than a post, marked `type: page`.

## Conventions the publisher relies on

- **Links between pages are relative** (`../widgets/component.md#lifecycle-hooks`). They are rewritten to site URLs at publish time. Absolute links to the Ghost site will break when the pages move.
- **Anchors use GitHub's heading format** (lowercase, punctuation dropped, spaces to hyphens). They are translated to the site's heading ids automatically.
- **Images live in `assets/screenshots/`** and are referenced by relative path. They are uploaded to the site at publish time.
- **Diagrams are fenced `mermaid` blocks.** They render on GitHub natively and on the site through a page-level script.
- **One H1 per page.** It becomes the page title on the site and is removed from the body.
