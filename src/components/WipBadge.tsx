import React from "react";
import { Badge } from "./ui/badge";

const WipBadge: React.FC = () => {
  return (
    <Badge className="h-min bg-green-300 hover:bg-green-400">
      Work in Progress
    </Badge>
  );
};

export default WipBadge;
