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

## Content Source Note

- There are two different `data` areas in the repo and they should not be treated the same:
  - the former root `data/seo/*` area was legacy import/archive material (`csv`/`xlsx`) and is no longer part of the repo's active content model
  - `src/data/*.json` is still active runtime data for shared structured site data such as places, navigation, insurance lists, and ProvenExpert values
- Editorial page content should continue to live in Astro content collections under `src/content/*`.
- Shared redactionally maintained structured datasets should also prefer Astro content collections, even if the backing source files live outside `src/content/*` and are loaded through `src/content.config.ts`.
- Current preferred split:
  - `places`, `navigation`, and `insurances` are editorial datasets and should be maintained through the content collections layer
  - `provenExpert` remains plain runtime JSON because it is operational snapshot data rather than authored content
- Directory convention:
  - `src/content/*` is for authored page/legal/SEO entries in MDX
  - `src/content-data/*` is for structured editorial datasets that are loaded as Astro content collections from JSON
  - `src/data/*` should be reserved only for non-editorial runtime/config snapshot data that is intentionally not modeled as a collection
- Legacy spreadsheet exports should not be reintroduced as a root `data/*` content source.
- If SEO spreadsheet imports return in the future, treat them as ad hoc input files outside the repo or in a temporary workspace and convert them into `src/content/seo/*`.
- Preferred direction for future work:
  - do not add new editorial content to root `data/*`
  - if spreadsheet-based SEO imports return, convert them into generated or reviewed collection entries in `src/content/seo/*`
  - only consider migrating `src/data/*.json` to collections if those files become editorially maintained documents rather than app configuration/shared structured data

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
