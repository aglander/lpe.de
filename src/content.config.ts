import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const pageCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/page" }),
  schema: z.object({
    slug: z.string(),
    seoTitle: z.any().optional(),
    seoDescription: z.any().optional(),
    heroTitle: z.any().optional(),
    heroClaim: z.any().optional(),
    heroDescription: z.any().optional(),
    heroImage: z.any().optional(),
    compare: z.any().optional(),
    compareLabel: z.any().optional(),
    backUrl: z.any().optional(),
  }),
});

const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/legal" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    date: z.coerce.date().optional(),
    print: z.any().optional(),
  }),
});

const seoCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/seo" }),
  schema: z.object({
    slug: z.string(),
    seoTitle: z.any().optional(),
    seoDescription: z.any().optional(),
    heroTitle: z.any(),
    heroClaim: z.any().optional(),
    heroDescription: z.any().optional(),
    heroImage: z.any().optional(),
    compare: z.any().optional(),
    compareLabel: z.any().optional(),
    backUrl: z.any().optional(),
  }),
});

export const collections = {
  page: pageCollection,
  legal: legalCollection,
  seo: seoCollection,
};
