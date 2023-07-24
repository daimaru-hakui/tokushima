"use client";
import { useDrawerStore } from "@/store";
import React, { FC, ReactNode, useState } from "react";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

type Props = {
  children: ReactNode;
};

export const Sidebar: FC<Props> = ({ children }) => {
  const isDrawer = useDrawerStore((state) => state.isDrawer);
  const setIsDrawer = useDrawerStore((state) => state.setIsDrawer);

  const handleDrawer = () => {
    setIsDrawer(!isDrawer);
  };

  return (
    <aside
      id="logo-sidebar"
      style={{ transition: ".5s" }}
      className={`relative hidden lg:block h-screen pt-20 bg-white border-r border-gray-200 
      ${isDrawer ? "w-72" : "w-0"}`}
      aria-label="Sidebar"
    >
      <div
        style={{ transition: ".5s" }}
        className={`h-full w-72 px-7 overflow-y-auto
         ${isDrawer ? "translate-x-0" : "-translate-x-full"}`}
      >
        {children}
      </div>
      <div
        onClick={handleDrawer}
        style={{ transition: ".5s", fontSize: "2rem" }}
        className={`cursor-pointer absolute bottom-5 z-50
        ${isDrawer ? "right-3" : "-right-10"}`}
      >
        {isDrawer ? (
          <BsArrowLeftSquare className="bg-white" />
        ) : (
          <BsArrowRightSquare className="bg-white" />
        )}
      </div>
    </aside>
  );
};
