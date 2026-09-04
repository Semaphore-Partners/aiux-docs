#!/usr/bin/env node
/**
 * Generate docs/reference/api/ from the public @servicenow/aiux npm package.
 *
 * The package ships one `public-api-manifest.json` per component package. Each
 * lists the custom elements (tag, class, reactive properties, events, slots),
 * exported functions (with signatures), constants, types, and class shapes the
 * package considers public. This script turns those manifests into one
 * Markdown page per package plus an index.
 *
 * Usage:
 *   node tools/api-reference/generate.mjs                # version from version.json
 *   node tools/api-reference/generate.mjs --version 22.42.3
 *   node tools/api-reference/generate.mjs --pkg-dir /path/to/unpacked/package
 *
 * No dependencies. Needs `npm` and `tar` on PATH when downloading.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..');
const OUT_DIR = path.join(repoRoot, 'docs', 'reference', 'api');
const VERSION_FILE = path.join(here, 'version.json');
const CACHE_DIR = path.join(here, '.cache');

const args = process.argv.slice(2);
const argValue = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};

const pinned = JSON.parse(fs.readFileSync(VERSION_FILE, 'utf8'));
const PKG_NAME = pinned.package;
const version = argValue('version') ?? pinned.version;

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

function resolvePackageDir() {
  const explicit = argValue('pkg-dir');
  if (explicit) return path.resolve(explicit);

  const dir = path.join(CACHE_DIR, version, 'package');
  if (fs.existsSync(path.join(dir, 'package.json'))) return dir;

  fs.mkdirSync(path.dirname(dir), { recursive: true });
  const dest = path.dirname(dir);
  console.log(`Downloading ${PKG_NAME}@${version} …`);
  const out = execFileSync('npm', ['pack', `${PKG_NAME}@${version}`, '--pack-destination', dest, '--silent'], {
    encoding: 'utf8',
  }).trim();
  const tgz = path.join(dest, out.split('\n').pop());
  execFileSync('tar', ['xzf', tgz, '-C', dest]);
  fs.rmSync(tgz);
  return dir;
}

function findManifests(dir) {
  const found = [];
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) {
        if (ent.name === 'node_modules') continue;
        walk(p);
      } else if (ent.name === 'public-api-manifest.json') {
        found.push(p);
      }
    }
  };
  walk(dir);
  return found.sort();
}

// ---------------------------------------------------------------------------
// Markdown helpers
// ---------------------------------------------------------------------------

const byName = (a, b) => String(a.name ?? a[0]).localeCompare(String(b.name ?? b[0]));

/** Inline code safe for a table cell. */
function cell(s, max = 160) {
  if (s == null || s === '') return '';
  let t = String(s).replace(/\s+/g, ' ').trim().replace(/`/g, "'");
  if (t.length > max) t = t.slice(0, max - 1) + '…';
  return '`' + t.replace(/\|/g, '\\|') + '`';
}

function fence(lang, body) {
  return '```' + lang + '\n' + body.replace(/\n+$/, '') + '\n```\n';
}

function details(summary, body) {
  return `<details>\n<summary>${summary}</summary>\n\n${body}\n</details>\n`;
}

/** Cap a type string for code blocks. The manifests inline some enormous structural types. */
const MAX_TYPE = 400;
function trunc(t) {
  if (t == null) return 'unknown';
  const s = String(t).replace(/\s+/g, ' ').trim();
  return s.length > MAX_TYPE ? s.slice(0, MAX_TYPE) + ' /* … truncated; see the package .d.ts */' : s;
}

function renderParams(params = []) {
  return params.map((p) => `${p.name}${p.optional ? '?' : ''}: ${trunc(p.type)}`).join(', ');
}

function renderMember(m) {
  return `  ${m.name}${m.optional ? '?' : ''}: ${trunc(m.type)};`;
}

/** Object constants that are expanded Zod schema instances: every Zod method got listed as a member. */
function looksLikeZodSchema(members = []) {
  const names = new Set(members.map((m) => m.name));
  return names.has('safeParse') && names.has('parse') && names.has('shape');
}

function renderSignatures(name, sigs = [], indent = '') {
  if (!sigs.length) return `${indent}${name}(): unknown`;
  return sigs.map((s) => `${indent}${name}(${renderParams(s.params)}): ${renderReturn(s.return)}`).join('\n');
}

function renderReturn(r) {
  if (r == null) return 'void';
  if (typeof r === 'string') return trunc(r);
  if (r.shape === 'object' && Array.isArray(r.members)) {
    return '{ ' + r.members.map((m) => `${m.name}${m.optional ? '?' : ''}: ${trunc(m.type)}`).join('; ') + ' }';
  }
  return trunc(JSON.stringify(r));
}

const ARRAY_PROTO = new Set(['concat', 'at', 'indexOf', 'lastIndexOf', 'slice', 'splice', 'forEach', 'map', 'filter', 'reduce']);
function looksLikeExpandedBuiltin(members = []) {
  let hits = 0;
  for (const m of members) if (ARRAY_PROTO.has(m.name)) hits++;
  return hits >= 3;
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function renderElement(el) {
  const out = [];
  out.push(`### \`<${el.tag ?? el.class}>\`\n`);
  if (el.tag && el.class) out.push(`Class \`${el.class}\`.\n`);
  else if (!el.tag) out.push(`Base class, not registered as a tag.\n`);

  const props = [...(el.properties ?? [])].sort(byName);
  if (props.length) {
    out.push('| Property | Type | Attribute | Reflects | Has default |');
    out.push('|---|---|---|---|---|');
    for (const p of props) {
      out.push(`| \`${p.name}\` | ${cell(p.type)} | ${p.attribute ? 'yes' : 'no'} | ${p.reflect ? 'yes' : 'no'} | ${p.hasDefault ? 'yes' : 'no'} |`);
    }
    out.push('');
  }

  const events = [...(el.events ?? [])].sort(byName);
  if (events.length) {
    out.push('| Event | `detail` |');
    out.push('|---|---|');
    for (const e of events) out.push(`| \`${e.name}\` | ${['-', 'unknown', 'any', ''].includes(String(e.detail ?? '').trim()) ? '—' : cell(e.detail)} |`);
    out.push('');
  }

  const slots = el.slots ?? [];
  if (slots.length) {
    out.push('**Slots**\n');
    for (const s of slots) out.push(typeof s === 'string' ? `- ${s.replace(/^-\s*/, '')}` : `- \`${s.name}\`${s.description ? ': ' + s.description : ''}`);
    out.push('');
  }

  if (!props.length && !events.length && !slots.length) out.push('_No public properties, events, or slots declared._\n');
  return out.join('\n');
}

function renderFunctions(fns) {
  if (!fns.length) return '';
  const lines = fns.sort(byName).map((f) => renderSignatures(f.name, f.signatures)).join('\n');
  return `## Functions\n\n${fence('ts', lines)}\n`;
}

function renderConstants(consts) {
  if (!consts.length) return '';
  const simple = consts.filter((c) => !c.members).sort(byName);
  const objects = consts.filter((c) => c.members).sort(byName);
  const out = ['## Constants\n'];
  if (simple.length) {
    out.push('| Name | Type |');
    out.push('|---|---|');
    for (const c of simple) out.push(`| \`${c.name}\` | ${cell(c.type, 200) || '—'} |`);
    out.push('');
  }
  const schemas = objects.filter((c) => looksLikeZodSchema(c.members));
  if (schemas.length) {
    out.push('Validation schemas (Zod objects; call `.shape` or read the `.d.ts` for the fields):\n');
    out.push(fence('ts', schemas.map((c) => `const ${c.name}: ZodObject`).join('\n')));
  }
  for (const c of objects) {
    if (looksLikeZodSchema(c.members)) continue;
    const body = c.members.map(renderMember).join('\n');
    const block = fence('ts', `const ${c.name}: {\n${body}\n}`);
    out.push(c.members.length > 40 ? details(`<code>const ${c.name}</code> (${c.members.length} members)`, block) : block);
  }
  return out.join('\n') + '\n';
}

function renderTypes(types) {
  const entries = Object.entries(types ?? {}).sort(byName);
  if (!entries.length) return '';
  const out = ['## Types\n'];
  for (const [name, t] of entries) {
    const members = t.members ?? [];
    if (t.kind === 'type') {
      const alias = t.resolvedTo && t.resolvedTo !== name ? t.resolvedTo : null;
      if (looksLikeExpandedBuiltin(members) || members.length > 40) {
        out.push(fence('ts', `type ${name} = ${alias ?? '/* structural type; see the package .d.ts */'}`));
        continue;
      }
      const body = members.map(renderMember).join('\n');
      out.push(fence('ts', members.length ? `type ${name} = {\n${body}\n}` : `type ${name} = ${alias ?? 'unknown'}`));
      continue;
    }
    const body = members.map(renderMember).join('\n');
    const block = fence('ts', `interface ${name} {\n${body}\n}`);
    out.push(members.length > 40 ? details(`<code>interface ${name}</code> (${members.length} members)`, block) : block);
  }
  return out.join('\n') + '\n';
}

function renderClasses(shapes) {
  const entries = Object.entries(shapes ?? {}).sort(byName);
  if (!entries.length) return '';
  const out = ['## Classes\n'];
  for (const [name, c] of entries) {
    const members = [...(c.members ?? [])].sort(byName);
    const lines = members.map((m) =>
      m.kind === 'method' ? renderSignatures(m.name, m.signatures, '  ') + ';' : `  ${m.name}: ${trunc(m.type)};`
    );
    const block = fence('ts', `class ${name} {\n${lines.join('\n')}\n}`);
    out.push(members.length > 40 ? details(`<code>class ${name}</code> (${members.length} members)`, block) : block);
  }
  return out.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

function slugFor(pkg) {
  return pkg.replace(/^@servicenow\//, '');
}

function categoryFor(slug) {
  if (slug.startsWith('aiux-components-visualizations')) return 'Visualizations';
  if (slug.startsWith('aiux-components-') || slug === 'glide-widgets') return 'Components';
  if (slug.startsWith('aiux-context')) return 'Contexts';
  if (slug.startsWith('aiux-controller')) return 'Controllers';
  if (slug.startsWith('aiux-directive')) return 'Directives';
  return 'Runtime & services';
}

function renderPage(m, ctx) {
  const slug = slugFor(m.package);
  const sub = `./${slug}`;
  const inMap = Object.prototype.hasOwnProperty.call(ctx.exports, sub);
  const elements = [...(m.elements ?? [])].sort((a, b) => String(a.tag ?? a.class).localeCompare(String(b.tag ?? b.class)));

  const out = [];
  out.push(`# \`${m.package}\`\n`);
  out.push(`> Generated from \`public-api-manifest.json\` in \`${PKG_NAME}@${version}\`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).\n`);
  out.push(inMap
    ? `**Import:** \`@servicenow/aiux/${slug}\`\n`
    : `**Import:** not present in the package export map; internal to the runtime.\n`);

  const counts = [
    elements.length && `${elements.length} element${elements.length === 1 ? '' : 's'}`,
    (m.functions ?? []).length && `${m.functions.length} function${m.functions.length === 1 ? '' : 's'}`,
    Object.keys(m.types ?? {}).length && `${Object.keys(m.types).length} type${Object.keys(m.types).length === 1 ? '' : 's'}`,
    (m.constants ?? []).length && `${m.constants.length} constant${m.constants.length === 1 ? '' : 's'}`,
    Object.keys(m.classShapes ?? {}).length && `${Object.keys(m.classShapes).length} class${Object.keys(m.classShapes).length === 1 ? '' : 'es'}`,
  ].filter(Boolean);
  out.push(counts.length ? `Declares ${counts.join(', ')}.\n` : '_This manifest declares no public API. The subpath exists for side-effect imports or is a namespace wrapper._\n');

  if (elements.length) {
    out.push('## Elements\n');
    out.push(elements.map(renderElement).join('\n'));
  }
  out.push(renderFunctions([...(m.functions ?? [])]));
  out.push(renderConstants([...(m.constants ?? [])]));
  out.push(renderTypes(m.types));
  out.push(renderClasses(m.classShapes));
  return { slug, md: out.filter(Boolean).join('\n').replace(/\n{3,}/g, '\n\n') + '\n', counts: {
    elements: elements.length,
    functions: (m.functions ?? []).length,
    types: Object.keys(m.types ?? {}).length,
    constants: (m.constants ?? []).length,
    classes: Object.keys(m.classShapes ?? {}).length,
  }, inMap, elements };
}

function renderIndex(pages, ctx) {
  const out = [];
  out.push('# API reference: `@servicenow/aiux`\n');
  out.push(`> Generated from the \`public-api-manifest.json\` files shipped in [\`${PKG_NAME}@${version}\`](https://www.npmjs.com/package/${PKG_NAME}/v/${version}). One page per package. Regenerate with \`node tools/api-reference/generate.mjs\`; see [tools/api-reference](../../../tools/api-reference/README.md). What the package is and why it is authoritative: [The @servicenow/aiux package](../npm-package.md).\n`);

  const totals = pages.reduce((t, p) => {
    for (const k of Object.keys(p.counts)) t[k] = (t[k] ?? 0) + p.counts[k];
    return t;
  }, {});
  out.push(`${pages.length} packages, ${totals.elements} custom elements, ${totals.functions} functions, ${totals.types} types, ${totals.constants} constants, ${totals.classes} classes.\n`);
  out.push('Everything here is what the manifests *declare* as public. Tags registered by a package but absent from its manifest are internal and may change without notice. Attributes and properties carry no descriptions in the manifests; the JSDoc lives in the package\'s `.d.ts` files.\n');

  const groups = new Map();
  for (const p of pages) {
    const cat = categoryFor(p.slug);
    if (!groups.has(cat)) groups.set(cat, []);
    groups.get(cat).push(p);
  }
  const order = ['Runtime & services', 'Components', 'Visualizations', 'Contexts', 'Controllers', 'Directives'];
  for (const cat of order) {
    const list = groups.get(cat);
    if (!list) continue;
    out.push(`## ${cat}\n`);
    out.push('| Package | Import | Elements | Functions | Types | Constants | Classes |');
    out.push('|---|---|---|---|---|---|---|');
    for (const p of list.sort((a, b) => a.slug.localeCompare(b.slug))) {
      const imp = p.inMap ? `\`@servicenow/aiux/${p.slug}\`` : '—';
      const c = p.counts;
      out.push(`| [${p.slug}](${p.slug}.md) | ${imp} | ${c.elements || ''} | ${c.functions || ''} | ${c.types || ''} | ${c.constants || ''} | ${c.classes || ''} |`);
    }
    out.push('');
  }

  out.push('## All custom elements\n');
  out.push('Every tag declared public, with the page that documents it.\n');
  out.push('| Tag | Package |');
  out.push('|---|---|');
  const tags = [];
  for (const p of pages) for (const el of p.elements) if (el.tag) tags.push([el.tag, p.slug]);
  for (const [tag, slug] of tags.sort((a, b) => a[0].localeCompare(b[0]))) out.push(`| \`<${tag}>\` | [${slug}](${slug}.md) |`);
  out.push('');
  return out.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const pkgDir = resolvePackageDir();
  const pkgJson = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf8'));
  if (pkgJson.version !== version) {
    console.warn(`Warning: package.json says ${pkgJson.version}, generating as ${version}.`);
  }
  const ctx = { exports: pkgJson.exports ?? {} };
  const manifests = findManifests(pkgDir);
  console.log(`Found ${manifests.length} manifests in ${path.relative(repoRoot, pkgDir)}`);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const f of fs.readdirSync(OUT_DIR)) if (f.endsWith('.md')) fs.rmSync(path.join(OUT_DIR, f));

  const pages = [];
  for (const file of manifests) {
    const m = JSON.parse(fs.readFileSync(file, 'utf8'));
    const page = renderPage(m, ctx);
    fs.writeFileSync(path.join(OUT_DIR, `${page.slug}.md`), page.md);
    pages.push(page);
  }
  fs.writeFileSync(path.join(OUT_DIR, 'README.md'), renderIndex(pages, ctx));

  fs.writeFileSync(VERSION_FILE, JSON.stringify({ ...pinned, version, generatedAt: new Date().toISOString().slice(0, 10) }, null, 2) + '\n');

  const bytes = fs.readdirSync(OUT_DIR).reduce((n, f) => n + fs.statSync(path.join(OUT_DIR, f)).size, 0);
  console.log(`Wrote ${pages.length + 1} pages (${(bytes / 1024).toFixed(0)} KB) to ${path.relative(repoRoot, OUT_DIR)}`);
}

main();
