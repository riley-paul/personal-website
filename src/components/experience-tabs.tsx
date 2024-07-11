import { type CollectionEntry, getCollection } from "astro:content";
import Experience from "./Experience.jsx";
import {
  experienceCategories as categories,
  getExperienceCategoryName,
} from "@/content/utils/experience-categories";

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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function ExperienceTabs() {
  return (
    <Tabs defaultValue={categories[0]} className="w-full">
      <TabsList className={`grid w-full grid-cols-3`}>
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {getExperienceCategoryName(category)}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category} value={category}>
          <Card>
            {experiences
              .filter((exp) => exp.data.category === category)
              .sort(sortDates)
              .map((exp) => (
                <Experience key={exp.id} experience={exp}></Experience>
              ))}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
