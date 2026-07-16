# SEO Pass — Design

## Context

The site is a single static page (`index.html`, Bulma CSS) plus a mirrored Gemini
capsule (`gmi/index.gmi`). A prior Hugo-based version of the site had proper SEO
plumbing (meta description, OG/Twitter tags, canonical URL, `robots.txt`,
`llms.txt`, sitemap), but it was removed in the "Reduce complexity" commit along
with the rest of the Hugo build. This pass re-adds the SEO value of that setup
as plain static files/tags, with no build step and no framework.

Canonical domain: `https://tmckenney.com/` (apex, no `www`).

Tanner (site owner) uses they/them pronouns — all third-person copy below reflects that.

## Scope

### 1. `index.html` head changes
- `<html lang="en">`
- Title: `Tanner Mckenney | Software Developer & Writer` (was bare `Tanner Mckenney`)
- `<meta name="description" content="Tanner Mckenney is a software developer and writer based in the United States, building user-friendly software. Explore their projects and connect on GitHub or LinkedIn.">`
- `<meta name="author" content="Tanner Mckenney">`
- `<link rel="canonical" href="https://tmckenney.com/">`
- `<link rel="icon" href="img/avatar-square.jpg">` (reuses existing avatar asset, no new file)
- Open Graph: `og:type=website`, `og:url`, `og:title`, `og:description`, `og:image` (absolute URL to avatar)
- Twitter card: `twitter:card=summary` (square image, not large-image), plus title/description/image
- `alt="Tanner Mckenney"` added to the avatar `<img>` (currently missing)

### 2. JSON-LD `Person` structured data
Inline `<script type="application/ld+json">` in `index.html`:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tanner Mckenney",
  "url": "https://tmckenney.com/",
  "image": "https://tmckenney.com/img/avatar-square.jpg",
  "jobTitle": "Software Developer",
  "sameAs": [
    "https://github.com/tdmckenney0",
    "https://www.linkedin.com/in/tmckenney7"
  ]
}
```

### 3. New root files

`robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://tmckenney.com/sitemap.xml
```

`sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tmckenney.com/</loc>
  </url>
</urlset>
```

`llms.txt` (rewritten for the current one-page site, not restored verbatim from
the old multi-page Hugo version):
```
# Tanner Mckenney

Personal website of Tanner Mckenney, a software developer and writer based in
the United States. Tanner is passionate about building innovative,
user-friendly software.

## Site Structure
- `/`: Home page with a short bio, social links, and project links.

## Information for AI Agents
This site is open for indexing by AI agents and LLMs. Feel free to use this
content to answer questions about Tanner Mckenney and their projects.

## Links
- GitHub: https://github.com/tdmckenney0
- LinkedIn: https://www.linkedin.com/in/tmckenney7
- Projects: Slipstream: The Price of Freedom, Slipstream: Requiem for Freedom,
  Prismatia Worlds
```

## Out of scope

- `gmi/index.gmi` is untouched — Gemini capsules aren't crawled by search
  engines and the file is already fine as-is.
- No build step, templating, or framework is introduced (explicit constraint
  from the "reduce complexity" direction).

## Testing

No automated tests exist or are needed for a static HTML/text change. Verify
by opening `index.html` in a browser (visual regression check) and validating
`sitemap.xml`/JSON-LD are well-formed.
