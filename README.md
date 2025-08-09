## Elvis Kiprono — Data Science & Machine Learning Portfolio

A modern, responsive portfolio built with Next.js (App Router) to showcase projects, services, and contact details. The UI features a clean landing hero and slide‑over pages for “What I do”, “Work”, “About”, “Awards”, and “Contact”.

### Live preview
- Deploy to Vercel and add your URL here.

### Tech stack
- Next.js 15 (App Router)
- React 19
- CSS (no CSS frameworks; custom design system)

---

## Features
- Static landing page with animated, bright/abstract theme
- Sticky header with keyboard‑friendly navigation and skip link
- Slide‑over panels that open from the right and close with Esc/×
- Services page with descriptive gradient cards
- Work page with:
  - Collapsible project cards (two‑column masonry layout)
  - Optional pinned GitHub repositories (Open Graph preview images)
- About page with experience, education, and skills
- Awards page
- Contact page with working form (`/api/contact`)
- Fully responsive and accessible (semantic headings, focus handling)

---

## Quick start

Prerequisites: Node 18+ and npm.

```bash
npm install
npm run dev
# visit http://localhost:3000
```

Production build:
```bash
npm run build
npm start
```

Available scripts:
```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # run production server
npm run lint     # run Next.js ESLint
```

---

## Personalize your site

Most content is driven from `content/site.config.js`.

Update:
- `name`, `title`, `tagline`, `email`, `phone`
- `socials` (GitHub, LinkedIn, etc.)
- `services[]` with `label` and `description`
- `projects[]` with `title`, `summary`, `roles[]`, `image`, `alt`, `link`
- `awards[]`
- `about` (summary, philosophy, collaboration, experience, education, skills)

Images:
- Put assets in `public/images/` and reference with `/images/filename.webp|jpg|png`.
- Hero overlay image path: `public/hero.png` (optional; can be removed).

Pinned repos (optional):
- The Work page can render pinned repos via a public service.
- No tokens required; it uses Open Graph images for previews.

---

## Project structure

```
app/
  components/
    Header.jsx            # sticky nav (client)
    Shell.jsx             # slide framework (client)
    HeroFront.jsx         # landing hero (client)
    ProjectCards.jsx      # collapsible project cards (client)
    PinnedProjects.jsx    # server component (pinned repos)
    slides/               # Services, Work, About, Awards, Contact
  api/contact/route.js    # contact form endpoint
  layout.js               # root layout/metadata
  globals.css             # design system + layout
  page.js                 # home page

content/
  site.config.js          # editable content and metadata

public/                   # static assets (images, icons)
```

---

## Deploy

### Vercel (recommended)
1) Create a new Vercel project and import this repository
2) Framework Preset: Next.js
3) Deploy

### GitHub
```
git init
git add -A
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

---

## Accessibility & UX
- Skip to content link
- Keyboard‑navigable slide panels (Esc to close)
- Semantic headings and alt text driven by config

---

## Customize styling
- Global design tokens and utilities live in `app/globals.css`
- Header height is controlled via `--header-height`
- Slide panel behavior is implemented with `.slides-root`, `.slide-wrap`, `.slide-panel`

---

## Contact
Questions or feedback? Open an issue or reach out at `net1elvis@gmail.com`.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
