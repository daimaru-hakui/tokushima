"use client";
import { useDrawerStore, useSidebarStore } from "@/store";
import React, { FC, ReactNode } from "react";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

type Props = {
  children: ReactNode;
};

export const Sidebar: FC<Props> = ({ children }) => {
  const isSidebar = useSidebarStore((state) => state.isSidebar);
  const setIsSidebar = useSidebarStore((state) => state.setIsSidebar);

  const handleDrawer = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <aside
      id="logo-sidebar"
      style={{ transition: ".5s" }}
      className={`fixed top-0 hidden lg:block h-screen pt-20 bg-white border-r border-gray-200 
      ${isSidebar ? "w-72" : "w-0"}`}
      aria-label="Sidebar"
    >
      <div
        style={{ transition: ".5s" }}
        className={`h-full w-72 px-7 overflow-y-auto
         ${isSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        {children}
      </div>
      <div
        onClick={handleDrawer}
        style={{ transition: ".5s", fontSize: "2rem" }}
        className={`cursor-pointer absolute bottom-5 z-50
        ${isSidebar ? "right-3" : "-right-10"}`}
      >
        {isSidebar ? (
          <BsArrowLeftSquare className="bg-white" />
        ) : (
          <BsArrowRightSquare className="bg-white" />
        )}
      </div>
    </aside>
  );
};
