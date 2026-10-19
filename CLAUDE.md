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

- `site/index.html` — the single page of the site (hero, purpose, what's-new
  release section, module tile grid, preview-status section).
- `site/css/style.css` — all styling; brand colors and tile-rail theme are
  defined as CSS custom properties at the top of the file.
- `site/img/` — image assets (app screenshot, social share image, favicons).
- `site/CNAME` — GitHub Pages custom domain configuration.

## Notes for future changes

- The site's visual identity intentionally mirrors the app's own tile-rail
  UI (bold blue gradient squares, dark navy background) — keep new sections
  and assets consistent with the palette in `style.css`.
- The app is in **private preview** (v0.6, released 2026-10-18, the last
  private preview before a public one). There is no public download: the
  source repo is private and builds go to testers by hand, so the site
  points people at `info@getdayframe.app` instead of a download link.
- When a new release ships, update the header pill, the "What's new"
  section (eyebrow date, heading, feature cards), the module tile grid
  (`tile-live` on by default, `tile-optin` disabled by default, `tile-muted`
  planned) and the preview-status section. Keep feature claims to what the
  GitHub release notes for that tag actually list.
