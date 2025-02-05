import { z, defineCollection } from "astro:content";
import { zExperienceCategory } from "../lib/utils/experience-categories";

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
          type: z.enum(["source", "home"]),
        })
      )
      .optional(),
    date: z.string(),
    draft: z.boolean().optional(),
    wip: z.boolean().optional(),
    top3: z.boolean().optional(),
  }),
});

const experienceCategoryCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
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
    category: zExperienceCategory,
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
  experience: experienceCollection,
  experienceCategory: experienceCategoryCollection,
};
