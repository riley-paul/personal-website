import { z } from "astro:content";

export const experienceCategories = ["work", "school", "baja"] as const;

export const zExperienceCategory = z.enum(experienceCategories);
type ExperienceCategory = z.infer<typeof zExperienceCategory>;

const experienceCategoryNameMap: Map<ExperienceCategory, string> = new Map([
  ["work", "Work"],
  ["school", "School"],
  ["baja", "Baja SAE"],
]);

export const getExperienceCategoryName = (id: string) => {
  const parsed = zExperienceCategory.safeParse(id);
  if (parsed.success) {
    return experienceCategoryNameMap.get(parsed.data);
  }
  return "Uncategorized";
};
