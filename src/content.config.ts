import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const emptyToUndefined = (value: unknown) => {
  if (value == null) return undefined;
  if (typeof value === "string" && value.trim() === "") return undefined;
  return value;
};

const nonEmptyString = z.string().trim().min(1);
const optionalNonEmptyString = z.preprocess(emptyToUndefined, nonEmptyString.optional());
const optionalStringNumber = z.preprocess(
  emptyToUndefined,
  z.coerce.string().trim().min(1).optional(),
);
const optionalInternalPath = z.preprocess(
  emptyToUndefined,
  z.string().trim().min(1).startsWith("/").optional(),
);
const optionalCtaTarget = z.preprocess(
  emptyToUndefined,
  z
    .string()
    .trim()
    .min(1)
    .refine((value) => value.startsWith("/") || /^https?:\/\//.test(value), {
      message: 'Must be an internal path starting with "/" or an absolute http(s) URL',
    })
    .optional(),
);
const withOrder = <T extends z.ZodRawShape>(shape: T) =>
  z.object({
    order: z.number().int().nonnegative(),
    ...shape,
  });
const slugifyId = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
const parseOrderedArray = (text: string, getId: (item: Record<string, unknown>, index: number) => string) =>
  JSON.parse(text).map((item: Record<string, unknown>, index: number) => ({
    ...item,
    id: getId(item, index),
    order: index,
  }));

const pageCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/page" }),
  schema: z.object({
    slug: nonEmptyString,
    seoTitle: optionalNonEmptyString,
    seoDescription: optionalNonEmptyString,
    heroTitle: optionalNonEmptyString,
    heroClaim: optionalNonEmptyString,
    heroDescription: optionalNonEmptyString,
    heroImage: optionalNonEmptyString,
    compare: optionalCtaTarget,
    compareLabel: optionalNonEmptyString,
    backUrl: optionalInternalPath,
  }),
});

const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/legal" }),
  schema: z.object({
    slug: nonEmptyString,
    title: nonEmptyString,
    date: z.coerce.date().optional(),
    print: optionalNonEmptyString,
  }),
});

const seoCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/seo" }),
  schema: z.object({
    slug: nonEmptyString,
    seoTitle: optionalNonEmptyString,
    seoDescription: optionalNonEmptyString,
    heroTitle: nonEmptyString,
    heroClaim: optionalNonEmptyString,
    heroDescription: optionalNonEmptyString,
    heroImage: optionalNonEmptyString,
    compare: optionalCtaTarget,
    compareLabel: optionalNonEmptyString,
    backUrl: optionalInternalPath,
  }),
});

const placesCollection = defineCollection({
  loader: file("src/content-data/places.json", {
    parser: (text) =>
      parseOrderedArray(text, (item) => String(item.slug ?? "")),
  }),
  schema: withOrder({
    slug: nonEmptyString,
    title: nonEmptyString,
    zipcode: optionalStringNumber,
    short: optionalNonEmptyString,
    long: optionalNonEmptyString,
    heroImage: optionalNonEmptyString,
  }),
});

const navigationCollection = defineCollection({
  loader: file("src/content-data/navigation.json", {
    parser: (text) =>
      parseOrderedArray(text, (item) => String(item.navId ?? "")),
  }),
  schema: withOrder({
    navId: nonEmptyString,
    title: nonEmptyString,
    parentId: optionalNonEmptyString,
    url: optionalInternalPath,
  }),
});

const insurancesCollection = defineCollection({
  loader: file("src/content-data/insurances.json", {
    parser: (text) =>
      parseOrderedArray(text, (item, index) => {
        const title = String(item.title ?? "");
        return slugifyId(title) || `insurance-${index}`;
      }),
  }),
  schema: withOrder({
    title: nonEmptyString,
    data: nonEmptyString,
  }),
});

export const collections = {
  page: pageCollection,
  legal: legalCollection,
  seo: seoCollection,
  places: placesCollection,
  navigation: navigationCollection,
  insurances: insurancesCollection,
};
