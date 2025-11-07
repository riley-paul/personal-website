import React from "react";
import type { ExperienceCategory } from "./types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "./experience";
import { Card, CardContent } from "../ui/card";

type Props = { categories: ExperienceCategory[] };

const Experiences: React.FC<Props> = ({ categories }) => {
  return (
    <Tabs defaultValue={categories[0].id}>
      <TabsList
        className="grid w-full"
        style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}
      >
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <Card>
            <CardContent className="-mt-8">
              {category.experiences.map((experience) => (
                <Experience key={experience.slug} experience={experience} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Experiences;
