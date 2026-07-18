# Seyed Ismail Bilal — Portfolio

Premium personal portfolio for a cybersecurity student and aspiring penetration tester.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Router

## Features

- Light / dark mode
- Typewriter role animation
- Loading screen & page transitions
- Scroll progress bar & back-to-top
- Magnetic buttons & scroll reveal
- Lazy-loaded sections
- 404 page
- SEO meta tags
- Fully responsive, accessible layout

## Getting started

```bash
cd ~/Projects/portfolio
npm install
npm run dev
```

## Customize

Edit **one file** for all content:

[`src/data/portfolio.js`](src/data/portfolio.js)

Update name, bio, skills, projects, certifications, contact details, and social links.

### Resume

Resume PDF is served from:

```
public/resume.pdf
```

### Profile photo

```
public/profile.jpg
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint |

## Deploy

Build with `npm run build`, then deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host. SPA fallback is configured via `vercel.json` and `public/_redirects`.
