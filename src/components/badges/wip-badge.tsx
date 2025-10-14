import React from "react";
import { Badge } from "../ui/badge";

const WipBadge: React.FC = () => {
  return (
    <Badge className="h-min w-min bg-violet-500 whitespace-nowrap hover:bg-violet-400">
      Work in Progress
    </Badge>
  );
};

export default WipBadge;
