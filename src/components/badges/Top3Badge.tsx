import React from "react";
import { Badge } from "../ui/badge";

const Top3Badge: React.FC = () => {
  return (
    <Badge className="h-min bg-green-300 hover:bg-green-400 whitespace-nowrap w-min">
      Top 3
    </Badge>
  );
};

export default Top3Badge;
