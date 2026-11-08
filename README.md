# Cubbie desktop website

**[Open the live website](https://cubbie-desktop-xianlin.videotuor-1490.chatgpt.site/)**

A Cubbie desktop frontend developed and maintained by **XianlinLu (Arianna Xianlin Lu)**, using Next.js, React, and TypeScript.

## Project work and original contributions

This repository showcases project-specific frontend work: component composition, Cubbie content integration, desktop interaction wiring, keyboard-accessible weekday tabs and FAQ disclosures, animation integration, content validation, and static deployment setup.


## Run locally

Requires Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. `npm run build` exports the static site to `out/`. No backend services or environment secrets are required.

## Validate

```sh
npm run check
npm run verify:content
```

The content check requires Python 3 and compares the desktop copy inventory with production HTML, including hidden weekday tabs and FAQ answers. `/_qa/desktop.html` provides 1280 / 1440 / 1600 px desktop checks.

## Edit

- Page composition: `src/app/page.tsx`
- Homepage content and components: `src/components/cubbie/`
- Global palette and typography: `src/app/globals.css`
- Local images, animations, fonts, and logo: `public/cubbie/`
- Content validation inventory: `docs/copy-inventory.json`
- Source and rights information: `docs/ATTRIBUTION.md`

## Scope

The current site targets desktop layouts. Dropdowns, weekday tabs, FAQ disclosures, anchor navigation, cookie preferences, scroll reveals, and animated illustrations are retained. External feature, integration, and sign-in links lead to Cubbie destinations. This frontend demo does not connect accounts, send email, or submit assignments. Only explicitly opened cookie settings save local preferences; no analytics or marketing trackers are included.

## Deployment

Serve `out/` with a static host. For a GitHub project subpath, build with `NEXT_PUBLIC_BASE_PATH=/cubbie-website-2 npm run build`. The manual GitHub Pages workflow can deploy when the repository's Pages source is set to GitHub Actions.

[简体中文](README.zh-CN.md) · [日本語](README.ja.md)
