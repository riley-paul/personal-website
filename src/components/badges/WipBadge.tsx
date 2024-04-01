import React from "react";
import { Badge } from "../ui/badge";

const WipBadge: React.FC = () => {
  return (
    <Badge className="h-min bg-violet-300 hover:bg-violet-400 whitespace-nowrap w-min">
      Work in Progress
    </Badge>
  );
};

export default WipBadge;
