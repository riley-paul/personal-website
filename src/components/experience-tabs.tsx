import { type CollectionEntry, getCollection } from "astro:content";
import Experience from "./experience";
import {
  experienceCategories as categories,
  getExperienceCategoryName,
} from "@/content/utils/experience-categories";
import { Card, Tabs } from "@radix-ui/themes";

const experiences = (await getCollection("experience")).filter(
  (i) => !i.data.draft
);

const sortDates = (
  a: CollectionEntry<"experience">,
  b: CollectionEntry<"experience">
) => {
  const date_a = Date.parse(a.data.date_end || "2100-01");
  const date_b = Date.parse(b.data.date_end || "2100-01");
  return date_b - date_a;
};

export default function ExperienceTabs() {
  return (
    <Tabs.Root defaultValue={categories[0]} className="w-full">
      <Tabs.List className={`grid w-full grid-cols-3`}>
        {categories.map((category) => (
          <Tabs.Trigger key={category} value={category}>
            {getExperienceCategoryName(category)}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {categories.map((category) => (
        <Tabs.Content key={category} value={category}>
          <Card>
            {experiences
              .filter((exp) => exp.data.category === category)
              .sort(sortDates)
              .map((exp) => (
                <Experience key={exp.id} experience={exp}></Experience>
              ))}
          </Card>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
