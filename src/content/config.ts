import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    ward: z.number(),
    wardName: z.string(),
    sector: z.enum(['Education', 'Health', 'Roads', 'Water', 'Markets', 'Administration']),
    date: z.coerce.date(),
    dateDisplay: z.string(),
    cost: z.number(),
    contractor: z.string(),
    status: z.enum(['Delivered', 'Underway', 'Not started']),
    funded: z.string(),
    started: z.string().optional(),
    completed: z.string().optional(),
    fundingSource: z.string(),
    llg: z.string(),
    beneficiaries: z.string().optional(),
    featured: z.boolean().optional().default(false),
    gallery: z
      .array(
        z.object({
          image: z.enum(['IMG_01', 'IMG_02', 'IMG_03', 'IMG_04', 'IMG_05']),
          caption: z.string(),
        })
      )
      .optional(),
  }),
});

const statements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateDisplay: z.string(),
    excerpt: z.string(),
    quote: z.string().optional(),
    homeExcerpt: z.string().optional(),
  }),
});

export const collections = { projects, statements };
