# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and resume website for Kim Wonwoong. Built with Astro v5, deployed to GitHub Pages.

**Live:** https://woonge.github.io

## Commands

```bash
bun install        # Install dependencies
bun dev            # Dev server at localhost:4321
bun build          # Production build to ./dist/
bun preview        # Preview production build
```

## Architecture

### Tech Stack
- **Framework:** Astro v5 with TypeScript (strict mode)
- **Runtime:** Bun (not npm)
- **Integrations:** MDX, Sitemap, RSS
- **Deployment:** GitHub Actions → GitHub Pages (auto-deploy on push to `main`)

### i18n Strategy
- Astro's native i18n routing (no external library)
- Default locale: Korean (`ko`) at `/`
- English at `/en/`
- Language detection in components: `pathname.startsWith('/en')`

### Content Collections
Career content lives in `src/content/careers/{ko,en}/` as Markdown files.

**Career frontmatter schema:**
```yaml
title: "Project Title"
company: "Company Name"
role: "Role"
startDate: "2024.01"
endDate: "Present"
lang: "ko"  # or "en"
order: 10   # Higher = appears first
summary: "One-line summary"
```

### Key Files
- `src/components/BaseHead.astro` - SEO meta tags (OG, Twitter, canonical)
- `src/components/Header.astro` - Navigation + language switcher
- `src/layouts/ResumeLayout.astro` - Template for resume pages
- `src/content.config.ts` - Content Collections schema
- `src/consts.ts` - Global constants (SITE_TITLE, SITE_DESCRIPTION)
- `src/styles/global.css` - CSS variables for theming

### Routing
- File-based routing in `src/pages/`
- Dynamic career routes: `src/pages/career/[...slug].astro` and `src/pages/en/career/[...slug].astro`

### Images
- Place in `src/assets/`
- Use `astro:assets` Image component for automatic optimization
