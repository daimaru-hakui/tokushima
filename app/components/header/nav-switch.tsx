"use client";
import { useSidebarStore } from "@/store";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

export const NavSwitch = () => {
  const isSidebar = useSidebarStore((state) => state.isSidebar);
  const setIsSidebar = useSidebarStore((state) => state.setIsSidebar);

  const handleDrawer = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <div onClick={handleDrawer} className="hidden lg:block" style={{ fontSize: "2rem" }}>
      <HiMenuAlt2 cursor="pointer" />
    </div>
  );
};
