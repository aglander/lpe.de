import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const OUTPUT_PATH = path.resolve("src/data/google-place-reviews.json");
const API_BASE_URL = "https://places.googleapis.com/v1/places";
const FIELD_MASK = "displayName,rating,userRatingCount,reviews";
const MAX_REVIEWS_PER_PROFILE = 20;

const apiKey = process.env.GOOGLE_PLACES_API_KEY;

const profiles = [
  {
    id: "google-muencheberg",
    placeId: "ChIJW_HCPYEqqEcRlskJ94Y4wV0",
    name: "Google | Müncheberg",
    profileUrl: "https://g.page/r/CZbJCfeGOMFdEBM/review",
  },
  {
    id: "google-woltersdorf",
    placeId: "ChIJo0G5mdEwqEcRr6f3kfmAaHQ",
    name: "Google | Woltersdorf",
    profileUrl: "https://g.page/r/Ca-n95H5gGh0EB0/review",
  },
];

if (!apiKey) {
  console.error("Missing Google Places API key. Set GOOGLE_PLACES_API_KEY.");
  process.exit(1);
}

async function readExistingCache() {
  try {
    const raw = await readFile(OUTPUT_PATH, "utf8");
    const parsed = JSON.parse(raw);

    return Array.isArray(parsed?.profiles) ? parsed : { profiles: [] };
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return { profiles: [] };
    }

    throw error;
  }
}

function asTimestamp(value) {
  const timestamp = Date.parse(value ?? "");
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function pickReviewText(review) {
  const originalText = review?.originalText?.text;
  if (typeof originalText === "string" && originalText.trim().length > 0) {
    return originalText.trim();
  }

  const fallbackText = review?.text?.text;
  return typeof fallbackText === "string" ? fallbackText.trim() : "";
}

function normalizeReview(review, profile) {
  return {
    id: review.name,
    provider: "google",
    providerKey: profile.id,
    providerLabel: profile.name,
    placeId: profile.placeId,
    authorName: review?.authorAttribution?.displayName?.trim() || "Unbekannt",
    authorUrl: review?.authorAttribution?.uri ?? null,
    avatarUrl: review?.authorAttribution?.photoUri ?? null,
    ratingValue: Number(review?.rating ?? 0),
    publishedAt: review?.publishTime ?? null,
    text: pickReviewText(review),
    reviewUrl: review?.googleMapsUri ?? profile.profileUrl,
    sourceUrl: profile.profileUrl,
  };
}

async function fetchProfile(profile) {
  const response = await fetch(`${API_BASE_URL}/${profile.placeId}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Google Places request failed for ${profile.id}: HTTP ${response.status} ${await response.text()}`);
  }

  const payload = await response.json();
  const reviews = Array.isArray(payload?.reviews) ? payload.reviews : [];

  return {
    id: profile.id,
    placeId: profile.placeId,
    name: profile.name,
    profileUrl: profile.profileUrl,
    displayName: payload?.displayName?.text ?? profile.name,
    rating: Number(payload?.rating ?? 0),
    userRatingCount: Number(payload?.userRatingCount ?? 0),
    fetchedAt: new Date().toISOString(),
    reviews: reviews.map((review) => normalizeReview(review, profile)),
  };
}

function mergeReviews(existingReviews, latestReviews) {
  const byId = new Map();

  for (const review of existingReviews) {
    if (review?.id) {
      byId.set(review.id, review);
    }
  }

  for (const review of latestReviews) {
    if (review?.id) {
      byId.set(review.id, review);
    }
  }

  return Array.from(byId.values())
    .sort((left, right) => asTimestamp(right.publishedAt) - asTimestamp(left.publishedAt))
    .slice(0, MAX_REVIEWS_PER_PROFILE);
}

async function main() {
  const existingCache = await readExistingCache();
  const existingProfiles = new Map(
    (existingCache.profiles ?? []).map((profile) => [profile.id, profile]),
  );

  const fetchedProfiles = [];

  for (const profile of profiles) {
    const latestProfile = await fetchProfile(profile);
    const existingProfile = existingProfiles.get(profile.id);

    fetchedProfiles.push({
      ...latestProfile,
      reviews: mergeReviews(existingProfile?.reviews ?? [], latestProfile.reviews),
    });

    console.log(
      `Fetched ${latestProfile.reviews.length} Google reviews for ${profile.name}; cached ${fetchedProfiles.at(-1).reviews.length}.`,
    );
  }

  const output = {
    fetchedAt: new Date().toISOString(),
    maxReviewsPerProfile: MAX_REVIEWS_PER_PROFILE,
    profiles: fetchedProfiles,
  };

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");

  console.log(`Saved Google review cache to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
