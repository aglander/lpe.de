export const trimSlashes = (value = "") =>
  String(value).replace(/^\/+|\/+$/g, "");

export const normalizeSlug = (value = "") =>
  trimSlashes(value)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\/+/g, "/");

export const withTrailingSlash = (value = "/") => {
  const normalized = trimSlashes(value);
  return normalized ? `/${normalized}/` : "/";
};

export const publicAsset = (value) => {
  if (!value) return undefined;
  return `/${String(value).replace(/^\.\.\//, "")}`;
};

export const buildPlaceLabel = (placeData) => {
  if (!placeData) return "";
  const zipcode = placeData.zipcode ? `${placeData.zipcode} ` : "";
  return `${zipcode}${placeData.short || placeData.title || ""}`.trim();
};

export const replacePlaceTokens = (value, placeData) => {
  if (!value || !placeData) return value;
  return String(value).replace(/<Place \/>/g, buildPlaceLabel(placeData));
};
