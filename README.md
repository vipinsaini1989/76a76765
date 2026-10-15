# Vipin Saini – Portfolio

Personal resume/portfolio site built with React, TypeScript, Vite and Tailwind CSS.

Live: https://vipinsaini1989.github.io/76a76765/

## Updating content

All content lives in [`public/content/profile.md`](public/content/profile.md):

- **Frontmatter** (YAML between the `---` lines): name, title, contact, links, skills (grouped by category), experience, projects, education.
- **Body** (below the frontmatter): the "About" summary, written in Markdown.

Other files:

- `public/Vipin-Saini-CV.pdf` – the PDF served by the "Download Resume" button (set via `resume:` in the frontmatter).
- `public/images/` – avatar and background images.
- `index.html` – page title, SEO / Open Graph meta tags and JSON-LD. Update these when the headline changes.

## Development

```sh
npm install
npm run dev      # http://localhost:5173/76a76765/
npm run lint
npm run build
```

## Deploy

```sh
npm run deploy   # builds and publishes dist/ to the gh-pages branch
```

The site is served under `/76a76765/` (see `base` in `vite.config.ts`).
