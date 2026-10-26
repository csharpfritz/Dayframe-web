# DayFrame-Web

This repository is the static brochure/marketing website for **DayFrame**, a
desktop-first app for Windows (Mac support is planned) that brings email, calendar, contacts,
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
- DayFrame 1.0 is a **public preview in the Microsoft Store**
  (https://apps.microsoft.com/detail/9MW9FNK1H1N3, Store ID `9MW9FNK1H1N3`). The site's
  download is the official "Download from the Microsoft Store" badge, kept as a local copy in
  `site/img/ms-store-badge.svg` so visitors never fetch Microsoft artwork just to see the page.
  There is no public zip download: the source repo is private.
- When a new release ships, update the meta descriptions, the "What's new"
  section (eyebrow date, heading, feature cards), the module tile grid
  (`tile-live` on by default, `tile-optin` disabled by default, `tile-muted`
  planned) and the "Get DayFrame" section. Keep feature claims to what the
  GitHub release notes for that tag actually list, and merge release content only once the
  Store is serving that build.
