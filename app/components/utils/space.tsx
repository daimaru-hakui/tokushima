"use client";
import React from "react";
import { useSidebarStore } from "@/store";
export const Space = () => {
  const isSidebar = useSidebarStore((state) => state.isSidebar);
  return (
    <div
      style={
        isSidebar
          ? { marginLeft: "288px", transition: ".5s" }
          : { marginLeft: "0", transition: ".5s" }
      }
      className="hidden lg:block"
    ></div>
  );
};
