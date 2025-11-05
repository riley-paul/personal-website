import type { ExperienceCategory } from "./types";
import Experience from "./experience";
import React from "react";

const ExperienceTabs: React.FC<{ categories: ExperienceCategory[] }> = ({
  categories,
}) => {
  const [selected, setSelected] = React.useState(categories[0].id);
  return (
    <article
      className="tabs tabs-lift"
      style={{ gridTemplateColumns: `repeat(${categories.length},1fr)` }}
    >
      {categories.map(({ id, name, experiences }) => {
        const isSelected = selected === id;
        return (
          <React.Fragment key={id}>
            <input
              key={id}
              type="radio"
              className="tab checked:bg-base-200 checked:before:rounded-none"
              name="experience-tabs"
              value={id}
              aria-label={name}
              checked={isSelected}
              onChange={(e) => setSelected(e.target.value)}
            />
            <div className="tab-content bg-base-200 border-base-300 px-6 pb-8">
              {experiences.map((experience) => (
                <Experience key={experience.id} experience={experience} />
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </article>
  );
};

export default ExperienceTabs;
