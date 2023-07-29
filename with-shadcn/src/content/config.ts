import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    links: z.array(
      z.object({
        url: z.string().url(),
        type: z.enum(["home", "source"]).optional(),
      })
    ),
    date: z.string(),
    draft: z.boolean().optional(),
  }),
});

const experienceCollection = defineCollection({
  schema: z.object({
    position: z.string(),
    organization: z.string(),
    location: z.string().nullable(),
    date_beg: z.string(),
    date_end: z.string().nullable(),
    category: z.enum(["school", "work", "baja"]),
  }),
});

const taglistCollection = defineCollection({
  schema: z.object({ items: z.string() }),
});

export const collections = {
  projects: projectCollection,
  experience: experienceCollection,
};
