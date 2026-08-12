# DayFrame-Web

This repository is the static brochure/marketing website for **DayFrame**, a
desktop-first app for Windows and Mac that brings email, calendar, contacts,
and other personal-productivity modules together behind one Outlook-style
shell with a Windows-Phone-inspired live-tile navigation rail.

This repo contains only the marketing site — not the DayFrame application
itself. There is no build step, framework, or package manager involved; it's
hand-written HTML/CSS.

## Hosting

- Served via **GitHub Pages** from the `site/` directory.
- Custom domain: **getdayframe.app** (see `site/CNAME`).
- Deployment is handled by the GitHub Actions workflow in
  `.github/workflows/static.yml`, which publishes `site/` on pushes to `main`.

## Structure

- `site/index.html` — the single page of the site (hero, purpose, module
  tile grid, coming-soon section).
- `site/css/style.css` — all styling; brand colors and tile-rail theme are
  defined as CSS custom properties at the top of the file.
- `site/img/` — image assets (app screenshot, social share image, favicons).
- `site/CNAME` — GitHub Pages custom domain configuration.

## Notes for future changes

- The site's visual identity intentionally mirrors the app's own tile-rail
  UI (bold blue gradient squares, dark navy background) — keep new sections
  and assets consistent with the palette in `style.css`.
- The app itself is still under active development; the site describes it
  as "coming soon" with no public build yet.
