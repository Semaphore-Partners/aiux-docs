# Publishing to the Ghost site

This repository is the source of truth. The readable version at [relay.semaphorepartners.com/aiux-docs](https://relay.semaphorepartners.com/aiux-docs/) is published *from* it, and the semaphorepartners.com site (Astro, reading Ghost through the Content API) will pick the same pages up from Ghost.

```
GitHub (docs/*.md)  ──publish──▶  Ghost (#docs + #aiux-docs posts)  ──Content API──▶  semaphorepartners.com
```

## How pages map

`manifest.yaml` is the single mapping: file → slug, title, sidebar section, order, and current publish state. The Ghost side routes the collection with:

```yaml
/aiux-docs/:
  permalink: /aiux-docs/{slug}/
  template: index
  filter: "tags:hash-docs+tags:hash-aiux-docs"
```

so a page is "in the docs" when its post carries both internal tags and its slug matches the manifest.

## Publishing a page by hand (current process)

1. Open the Markdown file. Render it (VS Code preview, or `gh markdown-preview`) and copy the HTML, or paste the Markdown into a Ghost **Markdown card**.
2. Rewrite links: every relative link like `../widgets/component.md#lifecycle-hooks` becomes `/aiux-docs/component/#lifecycle-hooks` using the slug table.
3. Upload any `assets/screenshots/*.png` the page references through the Ghost editor and swap the image paths.
4. Mermaid blocks paste through unchanged; the theme renders fenced `mermaid` code blocks.
5. Set the slug, title, and tags (`#docs`, `#aiux-docs`) to match the manifest. Publish.
6. Update `status:` in the manifest in the same PR or a follow-up commit.

## Automating it (next step)

A small script against the Ghost Admin API can do steps 1–5 on merge to `main`:

- read `manifest.yaml`
- for each page: convert Markdown → HTML, rewrite relative links via the slug table, upload referenced images, upsert the post by slug with the two tags
- a GitHub Actions workflow runs it with `GHOST_ADMIN_API_URL` / `GHOST_ADMIN_API_KEY` as repository secrets

Until that exists, pages are published by a maintainer after merge. Publication may lag the repo by a few days.

## Known gaps on the site (as of 2026-09-03)

Published pages already link to slugs that do not exist yet: `experiences-overview`, `pages-and-routing`, `app-shells-and-themes`, `url-rewrites`, `intellisense`. Publishing the Experiences and Reference sections with those exact slugs fixes the dead links without touching the published pages.
