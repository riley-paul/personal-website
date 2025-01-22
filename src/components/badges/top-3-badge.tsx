import { Badge } from "@radix-ui/themes";
import React from "react";

const Top3Badge: React.FC = () => {
  return (
    <Badge color="sky" highContrast variant="solid" radius="full">
      Top 3
    </Badge>
  );
};

export default Top3Badge;
