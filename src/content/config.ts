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
    date: z.string().transform((str) => new Date(str)),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
