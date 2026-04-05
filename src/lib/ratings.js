import provenExpertSummary from "../data/provenexpert.json";
import provenExpertRaw from "../data/provenexpert-reviews-raw.json";

export const provenExpertProfileUrl = "https://www.provenexpert.com/de-de/lars-peter-eckhardt/";

export const ratingPlatforms = [
  {
    id: "provenexpert",
    name: "ProvenExpert",
    href: provenExpertProfileUrl,
    label: "Profil ansehen",
    logoSrc: "/images/provenexpert-logo.png",
  },
  {
    id: "google-muencheberg",
    name: "Google | Müncheberg",
    href: "https://g.page/r/CZbJCfeGOMFdEBM/review",
    label: "Bewerten",
    logoSrc: "/images/google-logo.png",
  },
  {
    id: "whofinance",
    name: "WhoFinance",
    href: "https://www.whofinance.de/berater/lars-peter-eckhardt",
    label: "Profil ansehen",
    logoSrc: "/images/whofinance-logo.jpg",
  },
  {
    id: "kennstdueinen",
    name: "KennstDuEinen",
    href: "https://www.kennstdueinen.de/finanzdienstleistungen-woltersdorf-lpe-grey-versicherungsmakler-finanzmakler-gmbh-co-kg-d150186.html",
    label: "Profil ansehen",
    logoSrc: "/images/kennstdueinen-logo.png",
  },
  {
    id: "google-woltersdorf",
    name: "Google | Woltersdorf",
    href: "https://g.page/r/Ca-n95H5gGh0EB0/review",
    label: "Bewerten",
    logoSrc: "/images/google-logo.png",
  },
  {
    id: "facebook",
    name: "Facebook",
    href: "https://www.facebook.com/LPE99/reviews",
    label: "Empfehlungen ansehen",
    logoSrc: "/images/facebook-logo.png",
  },
];

const asNumber = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const rawRatings = Array.isArray(provenExpertRaw?.ratings) ? provenExpertRaw.ratings : [];

export const ratingSummary = {
  ratingValue: asNumber(provenExpertSummary?.ratingValue),
  reviewCount: asNumber(provenExpertSummary?.reviewCount),
  recommendationRate: asNumber(provenExpertSummary?.recommendationRate),
  updatedAt: provenExpertRaw?.fetchedAt ?? null,
};

export const featuredReviews = rawRatings
  .filter((review) => typeof review?.feedback === "string" && review.feedback.trim().length > 0)
  .filter((review) => asNumber(review?.ratingValue) >= 5)
  .map((review) => {
    const timestamp = Number(review?.modified ?? review?.created ?? 0) * 1000;

    return {
      id: review.id,
      provider: "provenexpert",
      providerLabel: "ProvenExpert",
      authorName: review?.user?.name || (review?.user?.anonymous ? "Anonym" : "Unbekannt"),
      ratingValue: 5,
      publishedAt: timestamp,
      text: review.feedback.trim(),
      reviewUrl: provenExpertProfileUrl,
      sourceUrl: provenExpertProfileUrl,
    };
  })
  .sort((left, right) => right.publishedAt - left.publishedAt)
  .slice(0, 20);

export const hasLegacyRatingMarkup = (body = "") => /<(ProvenExpert|Reviews)\b/.test(body);
