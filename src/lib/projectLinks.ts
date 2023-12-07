import { Github, Home, Link, type LucideIcon } from "lucide-react";

type ProjectLinkType = {
  id: string;
  name: string;
  Icon: LucideIcon;
};

export const defaultLink: ProjectLinkType = {
  id: "default",
  name: "Link",
  Icon: Link,
};

export const projectLinkTypes: ProjectLinkType[] = [
  { id: "home", name: "Homepage", Icon: Home },
  { id: "source", name: "Github", Icon: Github },
];
