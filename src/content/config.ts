import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    links: z
      .array(
        z.object({
          url: z.string().url(),
          type: z.enum(["home", "source"]).optional(),
        })
      )
      .optional(),
    date: z.string(),
    draft: z.boolean().optional(),
  }),
});

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    position: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    date_beg: z.string(),
    date_end: z.string().nullable(),
    category: z.enum(["school", "work", "baja"]),
    draft: z.boolean().optional(),
  }),
});

const contactCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    link: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
  experience: experienceCollection,
  contact: contactCollection,
};
