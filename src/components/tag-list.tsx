import React from "react";
import { Badge } from "./ui/badge";

type Props = { tags: string[] };

const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge variant="secondary">{tag}</Badge>
      ))}
    </div>
  );
};

export default TagList;
