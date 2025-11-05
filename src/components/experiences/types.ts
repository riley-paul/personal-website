import { z } from "astro/zod";
import type { CollectionEntry } from "astro:content";

export const experienceCategories = [
  "software",
  "engineering",
  "school",
  "baja",
] as const;

export const zExperienceCategory = z.enum(experienceCategories);

export const experienceCategoryNameMap: Map<
  (typeof experienceCategories)[number],
  string
> = new Map([
  ["engineering", "Engineering"],
  ["software", "Software"],
  ["school", "School"],
  ["baja", "Baja SAE"],
]);

export type Experience = {
  id: string;
  position: string;
  organization: string;
  location?: string;
  date_beg: string;
  date_end: string | null;
  markup: string;
};

export type ExperienceCategory = {
  name: string;
  id: string;
  experiences: CollectionEntry<"experience">[];
};
