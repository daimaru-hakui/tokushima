"use client";
import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      {children}
    </MantineProvider>
  );
};
export default Providers
