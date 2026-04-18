# AGENT.md

## Project Memory

This project is an Astro site for `lpe.de` with MDX-driven content, a shared dynamic route in `src/pages/[slug].astro`, and a mix of Astro and React/JSX components.

## Current Astro Status

Already in place:

- Astro image pipeline is now active for the main local images.
- `sharp` is installed and required for image optimization.
- Content schemas in `src/content.config.ts` are now tightened for the main SEO, hero, legal print, and CTA fields.
- Shared route logic in `src/pages/[slug].astro` now has clearer typing for `Astro.props`, helper inputs, and local image asset resolution.
- The previously larger Astro/TS issue backlog has been cleaned up; `astro check` currently passes without errors, with only one remaining Astro hint in `src/components/BaseLayout.astro` about explicit `is:inline`.
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
  - `npm run check` passes without errors
  - `npm run build` passes cleanly
  - `npm test` should not currently be treated as guaranteed green because deploy readiness still also depends on the URL audit
  - `npm run audit:seo` has improved significantly from the initial validator rollout, but the exact warning count should be re-verified before using it as a status reference
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

- `astro check` currently passes with one remaining non-blocking Astro hint in `src/components/BaseLayout.astro`.
- `npm run build` is currently clean.
- The remaining larger architectural question is how far the MDX bridge should move away from React wrappers for injected props like `ctas` and `placeData`.
- The remaining React bridge is intentionally small and currently centered on `ContactAndCompareBox`, `Place`, and the MDX-side CTA wrappers.
- The rating/review area is no longer just legacy markup: the unified module is live in production and can now also be referenced directly as `RatingModule`, even though the legacy MDX component names `ProvenExpert` and `Reviews` still exist for compatibility.

## Rating Module Redesign

### Current Production Status

- The unified rating/review module is live and already beyond the original ProvenExpert-only v1.
- The main component lives in `src/components/mdx/RatingModule.astro`.
- Shared rating data preparation lives in `src/lib/ratings.js`.
- Structured data generation lives in `src/components/RatingStructuredData.astro`.
- Google review snapshot fetching lives in `scripts/google-fetch-reviews.mjs`.
- Cached Google review data lives in `src/data/google-place-reviews.json`.
- The nightly refresh workflow lives in `.github/workflows/read-provenexpert.yaml`.
- The current rollout still supports the legacy MDX component names `ProvenExpert` and `Reviews`, but both are now thin wrappers around `RatingModule`, and `RatingModule` is also registered directly in `src/lib/mdx-components.js`.
- The homepage uses the module directly via `Reviews` plus `RatingStructuredData`.
- Content pages using legacy rating markup receive the new module through the MDX wrappers, and structured data is injected from `src/pages/[slug].astro` when rating markup is present.

### What The Live Module Already Does

- Shows the current aggregate rating value and review count from the ProvenExpert summary snapshot.
- Shows a platform overview with outbound links for ProvenExpert, Google, WhoFinance, KennstDuEinen, and Facebook.
- Builds a unified review feed from the local ProvenExpert raw snapshot plus two Google Maps profile caches.
- Filters the visible feed to reviews with text only.
- Filters the visible feed to 5-star reviews only.
- Sorts the visible feed by date descending.
- Deduplicates cross-platform duplicates by normalized author name plus calendar date.
- Limits the visible feed to the 20 newest matching reviews.
- Renders the reviews as horizontally scrollable cards with manual navigation buttons.
- Uses a compact fixed-height card layout by default and expands all cards to full text when an expandable card is activated.
- Prefers Google `originalText` content and falls back only when the original text is missing.
- Shows Google reviewer avatars when available and uses a neutral fallback avatar only when at least one visible review has avatar support.
- Generates first-party JSON-LD with `aggregateRating` instead of relying on external widget snippets.

### Current Limits

- Aggregate rating values still come from the ProvenExpert snapshot only by design, because the ProvenExpert total already represents the intended cross-platform summary.
- ProvenExpert review links still point to the general ProvenExpert profile rather than provider-specific deep links to each original review.
- The frontend naming is still transitional in content because many MDX entries still reference `ProvenExpert` and `Reviews` instead of only `RatingModule`.
- `hasLegacyRatingMarkup()` in `src/lib/ratings.js` and the structured-data trigger in `src/pages/[slug].astro` still reflect this compatibility phase.

### Implemented V2 Decisions

- Keep the unified module architecture and extend it rather than introducing a second parallel implementation.
- Keep the visible aggregate totals ProvenExpert-only because the ProvenExpert summary already reflects cross-platform totals.
- Fetch Google reviews for the two active Google Maps profiles through the Places API.
- Cache Google review snapshots locally and retain up to 20 reviews per Google profile over time as the API rotates newer reviews into the response.
- Merge ProvenExpert reviews with the cached reviews from both Google profiles into one unified visible feed.
- Deduplicate cross-platform duplicates by author plus calendar date, keeping only the first matching review in the merged sorted list.
- Prefer `originalText` for Google review content and only fall back to translated text when `originalText` is missing.
- Keep the compact-card default on frontend and allow expanding the full review rail when users interact with truncated cards.
- Preserve the legacy MDX names during rollout, but treat `RatingModule` as the long-term canonical entry point.

### Data Strategy

- Review data should be refreshed once per day via GitHub Actions.
- API data should be pre-fetched and cached as project data snapshots rather than loaded live in the browser.
- The implementation should be resilient to partial provider failures and continue using the last valid cached data where appropriate.
- The current production ingestion path is ProvenExpert plus two Google Maps profile snapshots, while ProvenExpert remains the aggregate-rating source of truth.
- Google API credentials must stay outside the repo in `.env.local` for local runs and in GitHub Actions secrets for scheduled refreshes.
- The scheduled workflow currently runs from `.github/workflows/read-provenexpert.yaml` via `npm run ratings:sync`.

### Structured Data

- Structured data is now generated as first-party JSON-LD rather than relying on ProvenExpert widget snippets.
- The current goal remains a clean `aggregateRating` implementation on pages where the module is present.
- Until a separate decision is made, structured aggregate values should continue to use the ProvenExpert summary snapshot rather than a locally recomputed cross-provider aggregate.
- Visible Google stars in search results remain explicitly uncertain and must not be treated as guaranteed behavior.

### Remaining Follow-ups

- Add the `GOOGLE_PLACES_API_KEY` repo secret in GitHub Actions for the nightly Google sync if it is not already configured.
- Decide whether editorial content should be migrated from the compatibility component names `ProvenExpert` and `Reviews` to `RatingModule`.
- Improve deep-link fidelity for provider-specific review destinations if better ProvenExpert-level links become available.
- Revisit whether any additional platforms beyond the current ProvenExpert and Google ingestion sources are worth dedicated snapshot pipelines later.
- Keep internal SEO expectations aligned: structured data yes, but no promise of visible Google stars in search results.

### Acceptance Criteria

- No visible ProvenExpert widgets remain in the frontend.
- No separate legacy widget implementation remains in the frontend, even if transitional MDX wrapper names still exist temporarily.
- The new module shows only matching reviews with text and 5 stars.
- Reviews are correctly sorted by descending date.
- No more than 20 cards are shown.
- Platform links and deep links work correctly.
- Daily snapshot refresh via GitHub Actions is robust against temporary API failures.
- JSON-LD is generated from the same snapshot data source as the visible module.

### Working Assumptions

- `AGENT.md` is the correct place to track this plan.
- Build-time snapshots with daily refresh are the preferred data strategy.
- Manual horizontal scrolling is the current preferred interaction model.
- The current implemented state should be treated as v1, not as a purely future plan.
- The core implementation should now be treated as production V2 of the rating feed, even though some compatibility wrappers and follow-up cleanup items still remain.
