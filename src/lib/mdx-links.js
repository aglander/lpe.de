export const normalizeMdxHref = (target = "#") => {
  if (typeof target !== "string" || target.length === 0) return "#";
  return target.startsWith("http") || target.startsWith("#") || target.endsWith("/")
    ? target
    : `${target}/`;
};

export const isExternalHref = (target = "") =>
  typeof target === "string" && target.startsWith("http");

export const getBackTarget = (slug, backUrl) =>
  backUrl || (slug?.endsWith("-vergleichen") ? `/${slug.split("-vergleichen")[0]}/` : null);
