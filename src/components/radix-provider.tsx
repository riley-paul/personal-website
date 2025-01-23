import { Theme } from "@radix-ui/themes";
import React from "react";

const RadixProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Theme accentColor="teal" grayColor="slate" appearance="dark">
      {children}
    </Theme>
  );
};

export default RadixProvider;
