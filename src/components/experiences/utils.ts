import type { CollectionEntry } from "astro:content";

export const sortExperienceByDate = (
  a: CollectionEntry<"experience">,
  b: CollectionEntry<"experience">
) => {
  const date_a = Date.parse(a.data.date_end || "2100-01");
  const date_b = Date.parse(b.data.date_end || "2100-01");
  return date_b - date_a;
};
