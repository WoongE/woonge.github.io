# Project Context: woonge.github.io

## Project Overview

This project is a personal blog website built with **Astro**. It is configured to be deployed to GitHub Pages. The project utilizes Astro's Content Collections for blog management and supports both Markdown and MDX.

### Key Technologies

*   **Framework:** [Astro](https://astro.build/) (v5)
*   **Runtime/Package Manager:** [Bun](https://bun.sh/)
*   **Integrations:**
    *   `@astrojs/mdx`: For writing content in MDX.
    *   `@astrojs/sitemap`: For generating a sitemap.
    *   `@astrojs/rss`: For RSS feed generation.
*   **Styling:** Global CSS (`src/styles/global.css`) and scoped styles within components.

## Building and Running

The project uses `bun` as the preferred package manager and task runner.

### Key Commands

| Command | Description |
| :--- | :--- |
| `bun install` | Installs project dependencies. |
| `bun dev` | Starts the local development server at `http://localhost:4321`. |
| `bun build` | Builds the project for production output to the `dist/` directory. |
| `bun preview` | Previews the production build locally. |
| `bun astro check` | Runs diagnostics against the project (optional, good for CI). |

## Project Structure & Conventions

### Directory Layout

*   `src/components/`: Reusable UI components (Header, Footer, etc.).
*   `src/layouts/`: Page layouts (e.g., `BlogPost.astro` for blog entries).
*   `src/pages/`: File-based routing.
    *   `index.astro`: Homepage.
    *   `blog/[...slug].astro`: Dynamic route for blog posts.
*   `src/content/`: Content collections.
    *   `blog/`: Contains blog posts in `.md` or `.mdx` format.
*   `public/`: Static assets (fonts, icons, etc.) served at the root.

### Content Management

*   **Blog Posts:** Located in `src/content/blog/`.
*   **Schema:** Defined in `src/content.config.ts`.
    *   **Required Frontmatter:** `title`, `description`, `pubDate`.
    *   **Optional Frontmatter:** `updatedDate`, `heroImage`.

### Configuration

*   **Astro Config:** `astro.config.mjs`. Site URL is currently configured as `https://woonge.github.io` (though the config notes it might be overridden by GitHub actions/environment).
*   **Constants:** Global site constants (Title, Description) are in `src/consts.ts`.

## Deployment

The project contains a GitHub Actions workflow `.github/workflows/deploy.yml` (inferred from file list), suggesting it automatically deploys to GitHub Pages on push.
