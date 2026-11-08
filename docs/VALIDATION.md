# Cleanup validation

## Scope

Preserve existing desktop visuals and third-party assets; clean project presentation and unused development tooling. Retain historical commits and third-party copyright/source attribution.

## Checks

- `npm run check`: ESLint, TypeScript, and production static build passed with Node.js 24.
- `npm run verify:content`: all 172 in-scope desktop text nodes present, including hidden weekday tabs and FAQ answers.
- 52 retained files under `public/cubbie/` match the previous asset bytes exactly; only paths and the cursor filename changed.
- Recorded asset paths in `asset-provenance.json` all resolve.
- No legacy source-brand namespace or inherited website-copying command remains in current file paths or application source.
- Necessary third-party source references remain only in `ATTRIBUTION.md` and `asset-provenance.json`.
- Root MIT copyright notice unchanged.

## Existing dependency warnings

The dependency audit still reports vulnerabilities in the inherited dependency versions, including Next.js and development/tooling dependencies. Dependency versions were not automatically upgraded as part of this content cleanup, since that is a separate change with its own regression risk. A dedicated dependency-security update is recommended before expanding beyond the current static frontend demo.
