import Experience from "./experience";
import { Card, Tabs } from "@radix-ui/themes";
import type { ExperienceCategory } from "./types";

const ExperienceTabs: React.FC<{ categories: ExperienceCategory[] }> = ({
  categories,
}) => {
  return (
    <Tabs.Root defaultValue={categories[0].id} className="w-full">
      <Tabs.List highContrast className="grid grid-cols-3 mx-6 -mb-px">
        {categories.map(({ id, name }) => (
          <Tabs.Trigger key={id} value={id}>
            {name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {categories.map(({ id, experiences }) => (
        <Tabs.Content key={id} value={id}>
          <Card size="3" className="grid gap-10">
            {experiences.map((exp) => (
              <Experience key={exp.id} experience={exp}></Experience>
            ))}
          </Card>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default ExperienceTabs;
