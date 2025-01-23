import React from "react";
import TagList from "./tag-list";
import formatDate from "../lib/format-date";

import WipBadge from "./badges/wip-badge";

import type { CollectionEntry } from "astro:content";
import Top3Badge from "./badges/top-3-badge";
import { Card, Heading, Text } from "@radix-ui/themes";

interface Props {
  project: CollectionEntry<"projects">;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Card asChild size="3" className="mb-4 w-full grid gap-5">
      <a href={`/projects/${project.slug}`} className="w-full">
        <header>
          <Heading as="h2" size="5" className="justify-between flex gap-2">
            {project.data.title}
            {project.data.wip && <WipBadge />}
            {project.data.top3 && <Top3Badge />}
          </Heading>
          <Text color="gray" size="2">
            {formatDate(project.data.date)}
          </Text>
        </header>
        <Text size="2">{project.data.description}</Text>
        <footer>
          <TagList tags={project.data.tags} />
        </footer>
      </a>
    </Card>
  );
};

export default ProjectCard;
