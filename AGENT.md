# AGENT.md

## Project Memory

This project is an Astro site for `lpe.de` with MDX-driven content, a shared dynamic route in `src/pages/[slug].astro`, and a mix of Astro and React/JSX components.

## Current Astro Status

Already in place:

- Astro image pipeline is now active for the main local images.
- `sharp` is installed and required for image optimization.
- Content schemas in `src/content.config.ts` are now tightened for the main SEO, hero, legal print, and CTA fields.
- Shared route logic in `src/pages/[slug].astro` now has clearer typing for `Astro.props`, helper inputs, and local image asset resolution.
- The previously noted Astro/TS hints have been cleaned up so `astro check` is currently clean.
- Several legacy MDX JSX components have already been migrated to Astro, including `AwardBox`, `Box`, `CompareBox`, `ExpandBox`, `Example`, `InsurancesBox`, `Link`, `Navigation`, `ProvenExpert`, and direct-page `PageCtas`/`Button` usage.
- Shared CTA/link normalization now lives in `src/lib/mdx-links.js` to keep Astro and React bridge behavior aligned.
- `src/lib/mdx-components.js` now separates direct Astro MDX components from the smaller React bridge layer that still injects runtime `ctas` and `placeData`.
- A dedicated SEO/content validation script now exists in `scripts/validate-content-seo.mjs` and is included in `npm test`.
- A first SEO cleanup pass has already been completed on key hub and insurance pages, reducing validation warnings significantly.
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

1. Reduce unnecessary client-side JS / hydration.

- Review all React/JSX components and client-side behavior.
- Keep interactive islands only where they provide real value.
- Especially worth revisiting:
  - review/rating sections
  - remaining MDX bridge components that still depend on React wrappers
  - any JSX component that is mostly static markup but still receives injected runtime props

### Medium Priority

2. Work down the current SEO warning backlog.

- The validation step is now in place and reports current weak spots.
- Main backlog themes currently flagged:
  - missing `seoDescription` on the remaining `src/content/page/*.mdx` entries
  - some `seoTitle` values that are still too close to plain hero headings
- Already completed in content:
  - key hub pages such as `altersvorsorge`, `finanzierungen`, `versicherungen`, `immobilien`, `downloads`
  - financing pages such as `autokredit`, `anschlussfinanzierung`, `bauen-kaufen`, `foerdermittel`, `gaskosten`, `stromkosten`, `privatkredit`
  - family/business pages such as `liebe-familie-notfallplan`, `familienabsicherungen`, `hausbauversicherungen`, `gewerbeversicherungen`, `weitere-haftpflichtversicherungen`
  - insurance cluster pages such as `berufsunfaehigkeitsversicherung`, `hausratversicherung`, `rechtsschutzversicherung`, `reiseversicherungen`, `zahnzusatzversicherung`, `krankenzusatzversicherung`, `unfallversicherung`, `risikolebensversicherung`
  - matching `-vergleichen` pages for the insurance cluster above
- Current measured state after these changes:
  - `npm run check` passes cleanly
  - `npm run build` passes cleanly
  - `npm test` passes cleanly
  - `npm run audit:seo` currently reports 61 warnings (down from 118 at first introduction of the validator)
- Recommended next SEO tranche in a new chat:
  - health/pension remainder: `basis-rente`, `bav-betriebliche-altersvorsorge`, `riester-rente`, `pflegezusatzversicherung`, `pkv-private-krankenversicherung`, `krankentagegeld`, `schwere-krankheitenversicherung`
  - then animal/vehicle/property remainder: `hundeversicherungen`, `katzenversicherungen`, `pferdeversicherungen`, `kfz-versicherungen`, `fahrradversicherung`, `gebaeudeversicherung` plus compare pages

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
  - `node scripts/validate-content-seo.mjs` runs and reports current SEO quality issues
  - `node scripts/url-audit.mjs` succeeds

## Current Known Non-Blockers

- `astro check` is currently clean.
- `npm run build` is currently clean.
- The remaining larger architectural question is how far the MDX bridge should move away from React wrappers for injected props like `ctas` and `placeData`.
- The remaining React bridge is intentionally small and currently centered on `ContactAndCompareBox`, `Place`, and the MDX-side CTA wrappers.
- `Reviews` is intentionally still on hold pending a separate decision about a more dynamic replacement.
