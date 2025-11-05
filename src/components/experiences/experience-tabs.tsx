import type { ExperienceCategory } from "./types";
import Experience from "./experience";
import React from "react";

const ExperienceTabs: React.FC<{ categories: ExperienceCategory[] }> = ({
  categories,
}) => {
  const [selected, setSelected] = React.useState(categories[0].id);
  return (
    <div className="tabs tabs-border">
      {categories.map(({ id, name, experiences }) => {
        const isSelected = selected === id;
        return (
          <React.Fragment key={id}>
            <input
              type="radio"
              className="tab"
              name="experience-tabs"
              value={id}
              aria-label={name}
              checked={isSelected}
              onChange={(e) => setSelected(e.target.value)}
            />
            <div className="tab-content bg-base-200 border-base-300 p-6">
              <div className="grid gap-6">
                {experiences.map((experience) => (
                  <Experience key={experience.id} experience={experience} />
                ))}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ExperienceTabs;
