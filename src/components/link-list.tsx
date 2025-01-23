import { cn } from "@/lib/utils";
import { getProjectLink } from "@/content/utils/project-links";
import { Button } from "@radix-ui/themes";
import React from "react";

interface Props {
  links: { type: string; url: string }[];
}

const LinkList: React.FC<Props> = ({ links }) => {
  if (links.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-4">
      {links
        .map((link) => {
          const linkType = getProjectLink(link.type);
          return { ...link, ...linkType };
        })
        .map((link) => (
          <Button asChild size="2" variant="ghost">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <link.Icon className="size-4" />
              {link.name}
            </a>
          </Button>
        ))}
    </div>
  );
};

export default LinkList;
