import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import type { ExperienceCategory } from "./types";
import Experience from "./experience";

const ExperienceTabs: React.FC<{ categories: ExperienceCategory[] }> = ({
  categories,
}) => {
  return (
    <Tabs defaultValue={categories[0].id} className="w-full">
      <TabsList className={`grid w-full grid-cols-3`}>
        {categories.map(({ id, name }) => (
          <TabsTrigger key={id} value={id}>
            {name}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map(({ id, experiences }) => (
        <TabsContent key={id} value={id}>
          <Card>
            {experiences.map((experience) => (
              <Experience key={experience.id} experience={experience} />
            ))}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ExperienceTabs;
