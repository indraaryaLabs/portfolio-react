# portfolio-react

A fast, single-page personal portfolio built with React and Vite - case studies, services, and contact pages served from one lightweight client-side app.

## Features

- **Client-side routing** across six pages: Home, About, Projects, Project Detail, Contact, and a custom NotFound page
- **Projects index & case studies** - a filterable grid of projects with year and tags, each opening a detail page with a hero image and gallery
- **ProjectCarousel** for browsing featured work with image galleries
- **BlendMarquee & BrandStrip** for continuous, scrolling brand/wordmark treatments
- **Auto-hiding navigation** with a blurred, translucent backdrop that collapses on scroll
- **Automatic light/dark theming** driven by `prefers-color-scheme`, built on CSS design tokens
- **Content from one data file** - projects, services, testimonials, awards, and contact details live in `src/data.js`, so the whole site is customizable without touching components
- **Static-host friendly** - a `public/_redirects` file provides the SPA fallback for single-page routing on static hosts

## Project structure

```
.
├── public/
│ └── _redirects # SPA fallback rule for static hosting
├── src/
│ ├── pages/ # Home, About, Projects, ProjectDetail, Contact, NotFound
│ ├── components/ # Nav, Footer, ProjectCarousel, BlendMarquee, BrandStrip, icons
│ ├── hooks.jsx # shared hooks
│ ├── data.js # all site content (projects, services, testimonials, …)
│ ├── styles.css # design tokens + page styles
│ ├── App.jsx # route definitions
│ └── main.jsx # entry point
├── index.html
└── vite.config.js
```

## Tech stack

| Layer | Technology |
| --- | --- |
| UI | React 18 |
| Routing | react-router-dom 6 |
| Build | Vite 7, @vitejs/plugin-react |
| Styling | Hand-written CSS with design tokens (no framework) |

## Getting started

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/indraaryaLabs/portfolio-react.git
cd portfolio-react

npm install

# Development server (default: http://localhost:5173)
npm run dev

# Production build -> dist/
npm run build

# Preview the production build
npm run preview
```

> The repository ships with placeholder content in `src/data.js` - swap in your own projects, services, testimonials, and contact details to make it yours.

## License

Released under the [MIT License](LICENSE).
