# Cubbie desktop website

**[Open the live website](https://cubbie-desktop-xianlin.videotuor-1490.chatgpt.site/)**

A complete, editable Next.js 16 / React 19 / TypeScript frontend. Visual design and original animated illustrations are based on MindMarket; all homepage copy is from [cubbie.ai](https://cubbie.ai/). The supplied Cubbie logo is used unchanged.

## Run locally

Requires Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. `npm run build` creates a static production site in `out/`. Serve that directory with any static web host. There are no backend services or environment secrets.

## Validate

`/_qa/desktop.html` provides an isolated 1280 / 1440 / 1600 px iframe for desktop visual checks.

```sh
npm run check
npm run verify:content
```

The content check requires Python 3 and compares all 172 in-scope source text nodes against the production HTML, including all weekday tabs and FAQ answers. The mobile-only Menu label is excluded by the desktop-only scope.

## Edit

- Page composition: `src/app/page.tsx`
- Verbatim homepage content: `src/components/sites/mindmarket-f3496669/root-8a5edab2/content.ts`
- Components and section CSS: the same directory
- Global palette and typography: `src/app/globals.css`
- Original illustration, Rive, font and logo files: `public/sites/mindmarket-f3496669/root-8a5edab2/`
- Source mapping, behavior notes and component specifications: `docs/research/mindmarket-f3496669/root-8a5edab2/`
- Original project-local clone-website skill: `.codex/skills/clone-website/SKILL.md`

## Scope

Desktop layout targeting 1440 px. No mobile menu or mobile layout breakpoints. Desktop dropdowns, weekday tabs, FAQ disclosures, anchor navigation, cookie preferences, scroll reveals and original Rive animations are functional. External feature, integration and sign-in links lead to the original Cubbie destinations. The replica does not connect accounts, send email, or submit assignments. The automatic privacy banner has been removed. Only the explicitly opened footer cookie settings save local preferences; no analytics or marketing trackers are included.

Cubbie's complete copy requires more sections and different title wrapping than the original reference. This is an adapted Cubbie implementation of the MindMarket design, not an identical screenshot of the original market-research page.

## Deployment

Static export is compatible with GitHub Pages, Vercel, Netlify and other static hosts. For a GitHub project subpath, build with `NEXT_PUBLIC_BASE_PATH=/cubbie-website-2 npm run build`. All local media and runtime paths honor that prefix. The included manual GitHub Actions workflow builds and deploys to Pages once the repository's Pages source is set to GitHub Actions.

The owner has confirmed authorization to use the reference design, copy, branding and media. The upstream template's MIT license is preserved; third-party media rights remain with their owners.
