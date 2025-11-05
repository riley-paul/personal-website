import type { ExperienceCategory } from "./types";
import Experience from "./experience";
import React from "react";

const ExperienceTabs: React.FC<{ categories: ExperienceCategory[] }> = ({
  categories,
}) => {
  const [selected, setSelected] = React.useState(categories[0].id);
  const category = categories.find((cat) => cat.id === selected);
  return (
    <article className="grid gap-4">
      <header
        className="tabs tabs-box tabs-sm grid"
        style={{ gridTemplateColumns: `repeat(${categories.length},1fr)` }}
      >
        {categories.map(({ id, name, experiences }) => {
          const isSelected = selected === id;
          return (
            <input
              key={id}
              type="radio"
              className="tab"
              name="experience-tabs"
              value={id}
              aria-label={name}
              checked={isSelected}
              onChange={(e) => setSelected(e.target.value)}
            />
          );
        })}
      </header>
      {category && (
        <div className="card border-base-300 bg-base-200 border px-6 pb-6">
          {category.experiences.map((experience) => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </article>
  );
};

export default ExperienceTabs;
