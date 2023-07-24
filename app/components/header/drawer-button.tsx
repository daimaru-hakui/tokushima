"use client";
import { useDrawerStore } from "@/store";
import React from "react";
import { FaHamburger } from "react-icons/fa";

export const DrawerButton = () => {
  const isDrawer = useDrawerStore((state) => state.isDrawer);
  const setIsDrawer = useDrawerStore((state) => state.setIsDrawer);

  const handleDrawer = () => {
    setIsDrawer(!isDrawer);
  };
  
  return <div onClick={handleDrawer} className="cursor-pointer"><FaHamburger/></div>;
};
