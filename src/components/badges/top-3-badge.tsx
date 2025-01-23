import { IconButton } from "@radix-ui/themes";
import { Star } from "lucide-react";
import React from "react";

const Top3Badge: React.FC = () => {
  return (
    <IconButton color="amber" variant="ghost" size="2">
      <Star className="size-4" />
    </IconButton>
  );
};

export default Top3Badge;
