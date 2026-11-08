# Cubbie development guidelines

This repository contains the Cubbie desktop frontend maintained by XianlinLu.

## Commands

- `npm ci`
- `npm run dev`
- `npm run check`
- `npm run verify:content` (after the production build)

## Structure

- `src/app/`: page composition and global styles
- `src/components/cubbie/`: project-specific content and components
- `public/cubbie/`: retained local assets
- `docs/`: content inventory and source information

## Editing principles

- Preserve current desktop visuals and working interactions unless a change is requested.
- Use TypeScript strict mode, clear named components, and keyboard-accessible controls.
- Keep local asset references compatible with `NEXT_PUBLIC_BASE_PATH`.
- Maintain the source inventory when intentionally changing homepage copy.
- Preserve third-party licenses and attribution; do not claim third-party work as original.
- Do not add trackers, credentials, or real account actions to this frontend demo.
- Run lint, type checks, build, and content verification before submitting changes.
