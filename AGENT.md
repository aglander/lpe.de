# AGENT.md

## Project Memory

This project is an Astro site for `lpe.de` with MDX-driven content, a shared dynamic route in `src/pages/[slug].astro`, and a mix of Astro and React/JSX components.

## Current Astro Status

Already in place:

- Astro image pipeline is now active for the main local images.
- `sharp` is installed and required for image optimization.
- Optimized images are used for:
  - homepage hero
  - contact hero
  - shared hero component where a local asset module is available
  - navigation/footer logos
  - homepage portrait
  - local review, award, and rating logo images
  - SEO hero images resolved through `src/pages/[slug].astro`

Important implementation detail:

- `src/pages/[slug].astro` maps local `/assets/...` and `/images/...` hero paths to local asset modules so the shared `Hero.astro` component can render them through Astro `Image`.

## Recommended Next Astro Improvements

### High Priority

1. Tighten content schemas in `src/content.config.ts`.

- Replace broad `z.any()` fields with real types where possible.
- This will catch broken content earlier and improve editor support.
- Best targets:
  - `seoTitle`
  - `seoDescription`
  - `heroTitle`
  - `heroClaim`
  - `heroDescription`
  - `heroImage`
  - `compare`
  - `compareLabel`
  - `backUrl`

2. Reduce unnecessary client-side JS / hydration.

- Review all React/JSX components and client-side behavior.
- Keep interactive islands only where they provide real value.
- Especially worth revisiting:
  - review/rating sections
  - navigation behavior
  - any JSX component that is mostly static markup

### Medium Priority

3. Clean up Astro script hints.

- Astro currently reports hints for scripts that are implicitly treated as `is:inline`.
- Add `is:inline` explicitly where intended.
- Main places to revisit:
  - `src/components/BaseLayout.astro`
  - `src/components/ProvenExpertStars.astro`

4. Improve typing in shared route logic.

- `src/pages/[slug].astro` still relies on lightly typed helper functions and entry handling.
- Add clearer typing around:
  - `Astro.props`
  - helper function inputs
  - local image module maps

5. Add a content/SEO validation step.

- Extend project checks so deploy-time validation also flags missing or weak SEO fields.
- Good candidates:
  - missing `seoTitle`
  - missing `seoDescription`
  - missing hero metadata
  - accidental fallback to generic metadata

### Lower Priority

6. Review remote images.

- Remote images like external ProvenExpert widgets and YouTube thumbnails are not part of the local Astro image pipeline.
- That is acceptable for now.
- Only optimize further if these become a measurable performance issue.

7. Revisit legacy JSX components.

- Some MDX components were migrated from JSX to Astro for image optimization.
- Remaining JSX components should only stay JSX if React is actually needed.

## Deployment Notes

- Before deploy, prefer running `npm test`.
- This project currently treats successful deploy readiness as:
  - `astro check` passes without errors
  - `astro build` succeeds
  - `node scripts/url-audit.mjs` succeeds

## Current Known Non-Blockers

- `astro check` still emits hints and TS implicit-any style warnings in several files.
- These are not current deploy blockers, but should be cleaned up over time.

