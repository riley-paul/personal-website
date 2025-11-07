import { cn } from "@/lib/utils";
import { getProjectLink } from "@/lib/utils/project-links";
import React from "react";
import { buttonVariants } from "./ui/button";

type Props = { links: { type: string; url: string }[] };

const LinkList: React.FC<Props> = ({ links }) => {
  return (
    <div className="flex flex-wrap">
      {links
        .map((link) => {
          const linkType = getProjectLink(link.type);
          return { ...link, ...linkType };
        })
        .map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <link.Icon />
            {link.name}
          </a>
        ))}
    </div>
  );
};

export default LinkList;
