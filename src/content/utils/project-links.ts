import { Github, Home, Link, type LucideIcon } from "lucide-react";

type ProjectLink = {
  id: string;
  name: string;
  Icon: LucideIcon;
};

const defaultLink: ProjectLink = {
  id: "default",
  name: "Link",
  Icon: Link,
};

const projectLinks: ProjectLink[] = [
  { id: "home", name: "Homepage", Icon: Home },
  { id: "source", name: "Github", Icon: Github },
];
export const getProjectLink = (id: string | undefined) => {
  return projectLinks.find((link) => link.id === id) || defaultLink;
};
