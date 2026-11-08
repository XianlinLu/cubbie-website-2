# Behaviors
Original: fixed desktop header, click/hover dropdowns, overflow desktop menu; loading logo curtain, Rive character loops; scroll-driven green path drawing; cards and characters reveal once on viewport entry; white button with colored circular arrow, hover shifts; smooth scrolling; cookie banner dismiss/accept/reject and settings.
Cubbie: 4 desktop dropdown groups, 5 click-driven week tabs, 6 FAQ disclosures, local #how-it-works anchor. All state copy extracted from homepage HTML. Links to other pages retain original source URLs. No backend.
Only desktop is in scope, no mobile menus or responsive breakpoints.

## Scroll fidelity revision — 2026-11-08

Re-inspected the current MindMarket homepage HTML, inline desktop CSS, `HomepageTimeline.BCaTIgOW.js`, `Rive.iUYJ15Oq.js`, and `Scroll.Bil0v7NL.js`. All Cubbie copy and original downloaded assets remain unchanged.

- Smooth scrolling: original Locomotive 5 uses Lenis defaults. Implemented Lenis with lerp 0.1, wheel multiplier 1, smooth wheel enabled and touch synchronization disabled. Native dialog scrolling is excluded. Local anchors retain their header offset.
- Hero: restored the 200svh background container, 100svh sticky viewport, headline scale 1 → 0.8 and charcoal overlay opacity 0 → 0.4. The original hero character group now lives in the intro's sticky handoff layer, scales 0.9 → 1, and remains visible as the cream intro scrolls over the green background. Removed the additional duplicate shrug illustration that was not present in this original section. Longer Cubbie headline and introduction copy remain intact.
- Green path: restored the source SVG's 1944.2 × 6151.5 geometry and 104vw width. Master timeline duration is 1.9: main path 5% → 100% during the first 0.9 using the original CustomEase cubic control points (.952,.017,.744,.69), then secondary path 0 → 100% over 1.0. The gradient shadow is fully drawn and fades from timeline time 0.95 to 1.1. Progress uses original viewport offsets -27%,100%. Removed inaccurate independent shadow drawing and CSS smoothing of the stroke.
- Timeline cards: restored 1440px desktop column geometry, white-over-colored two-layer scale reveal, 0.6s bounce, white layer delay 0.2s, title/body/CTA delays 0.3/0.35/0.45s, and original 20% viewport entry threshold. Cards retain original scroll speed 0.1.
- Rive characters: local originals load ahead of entry; render only while in the viewport. Original reveal is scale 0.75 → 1 and y100 → 0, delay 0.15s, duration 1.75s with elastic.out(1,.3), sampled into native animation keyframes. Scientist also moves x10% → 0. Pop-up girl retains the original no-reveal behavior.
- Decorations: restored source scroll speeds for clock, folder, sheet, composer shape, music notes, joystick and soccer decorations. Both paper planes follow original x/y/rotation progress ranges. Added all five previously missing cloud layers with their original dimensions, locations and horizontal travel. Garden height is the original 60vw and the back/middle vegetation layers use -0.15/-0.075 speed.
- Reduced motion: no inertia, character entry animation, parallax or path drawing; all copy and fully drawn path remain visible. No mobile menu or mobile breakpoint was added.

Validation in this revision: TypeScript, focused ESLint and git whitespace checks. Final browser visual QA remains with the publishing agent.
