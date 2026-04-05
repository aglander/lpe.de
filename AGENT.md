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

## Rating Module Redesign

### Goal

- The current review setup is scheduled for a future replacement, but this section is documentation only and does not start implementation work.
- The existing ProvenExpert widget setup, the static `Reviews` section, and the current ProvenExpert-based structured-data approach are intended to be replaced by one unified rating module.
- The target module should combine aggregated rating data with platform-specific recent reviews in one reusable site-wide component.

### Planned Direction

- Remove the current rating module on the website.
- Remove the embedded ProvenExpert widget.
- Introduce a new unified rating module.
- The new module should show:
  - the overall rating value and total number of ratings across all platforms
  - clickable platform links / a platform overview
  - individual reviews from API-accessible platforms
- Planned API sources for v1:
  - ProvenExpert
- Google Maps / Google Business Profile remains a later expansion target, but is not part of the initial implementation because API access is not expected soon enough.
- Facebook is not considered a reliable API-backed source for v1.
- Initial implementation scope for actual review ingestion:
  - pull review details from ProvenExpert only
  - use the already downloaded ProvenExpert raw review snapshot as the current starting point
  - keep the module architecture open for later Google integration once access is available

### Planned Review Feed Rules

- Only reviews with text should be shown.
- Only 5-star reviews should be shown.
- Reviews should be sorted by date descending.
- The final visible feed should contain only the 20 newest matching reviews overall.
- Each review card should include:
  - reviewer name
  - 5-star display
  - review date
  - review text
  - deep link to the original review
  - platform label or platform branding

### Planned UI Behavior

- The reviews should be displayed as horizontally scrollable cards.
- v1 should use manual interaction only.
- No auto-advance / autoplay behavior is planned for v1.

### Planned Data Strategy

- Review data should be refreshed once per day via GitHub Actions.
- API data should be pre-fetched and cached as project data snapshots rather than loaded live in the browser.
- The future implementation should be resilient to partial provider failures and continue using the last valid cached data where appropriate.
- The first production-ready ingestion path should use ProvenExpert only.
- Google review fetching should stay explicitly out of the first delivery slice until working API credentials and location access are available.

### Planned Structured Data Direction

- Future structured data should be generated as first-party JSON-LD rather than relying on ProvenExpert widget snippets.
- The goal is a clean `aggregateRating` implementation on pages where the new module is present.
- Visible Google stars in search results remain explicitly uncertain and must not be treated as guaranteed behavior.

### Open To-dos On User Side

- Clarify Google Business Profile API access and the affected business locations for a later expansion phase.
- Decide which Google locations should feed into the module if more than one profile remains relevant once Google access exists.
- Confirm whether external platform totals such as WhoFinance, KennstDuEinen, and Facebook should be manually maintained or represented only through the ProvenExpert aggregate total.
- Decide whether Facebook is important enough to revisit later as a separate research track.
- Confirm which target pages must definitely receive the new module if the final rollout is not truly global.
- Align internal SEO expectations: structured data yes, but no promise of visible Google stars in search results.

### Future Acceptance Criteria

- No visible ProvenExpert widgets remain in the frontend.
- No legacy static `Reviews` section remains in the frontend.
- The new module shows only matching reviews with text and 5 stars.
- Reviews are correctly sorted by descending date.
- No more than 20 cards are shown.
- Platform links and deep links work correctly.
- Daily snapshot refresh via GitHub Actions is robust against temporary API failures.
- JSON-LD is generated from the same snapshot data source as the visible module.

### Working Assumptions

- `AGENT.md` is the correct place to track this plan.
- This section documents the direction only and does not start implementation.
- Build-time snapshots with daily refresh are the preferred data strategy.
- Manual horizontal scrolling is the preferred interaction model for v1.
