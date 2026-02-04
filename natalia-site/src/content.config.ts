import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'weight',
      'energy',
      'stress',
      'immunity',
      'detox',
      'beauty',
      'sleep',
      'kids',
      'other',
    ]),
    duration: z.string(),
    price: z.string(),
    priceNote: z.string().optional(),
    forWhom: z.array(z.string()),
    includes: z.array(z.string()),
    products: z.array(z.string()),
    results: z.array(z.string()),
    featured: z.boolean(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { programs, blog };
