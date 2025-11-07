import React from "react";
import TagList from "./tag-list";
import formatDate from "../lib/format-date";

import type { CollectionEntry } from "astro:content";
import { StarIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = { project: CollectionEntry<"projects"> };

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <a href={`/projects/${project.slug}`} className="mb-4 inline-block">
      <Card className="hover:border-ring transition-colors ease-out hover:bg-secondary/30">
        <CardHeader>
          <CardTitle>{project.data.title}</CardTitle>
          <CardDescription>{formatDate(project.data.date)}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          {project.data.description}
        </CardContent>
        <CardFooter>
          <TagList tags={project.data.tags} />
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
