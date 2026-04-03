import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const emptyToUndefined = (value: unknown) => {
  if (value == null) return undefined;
  if (typeof value === "string" && value.trim() === "") return undefined;
  return value;
};

const nonEmptyString = z.string().trim().min(1);
const optionalNonEmptyString = z.preprocess(emptyToUndefined, nonEmptyString.optional());
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

export const collections = {
  page: pageCollection,
  legal: legalCollection,
  seo: seoCollection,
};
