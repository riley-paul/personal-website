import React from "react";
import { Badge } from "@radix-ui/themes";

interface Props {
  tags: string[];
}

const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge variant="soft" highContrast size="2">
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default TagList;
