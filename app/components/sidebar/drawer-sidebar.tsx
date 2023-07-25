"use client";
import { useDrawerStore } from "@/store";
import React, { FC, ReactNode } from "react";
import { MdClose } from "react-icons/md";

type Props = {
  children: ReactNode;
};
export const DrawerSidebar: FC<Props> = ({ children }) => {
  const isDrawer = useDrawerStore((state) => state.isDrawer);
  const setIsDrawer = useDrawerStore((state) => state.setIsDrawer);

  const handleDrawer = () => {
    setIsDrawer(!isDrawer);
  };

  return (
    <aside
      style={{ transition: ".5s" }}
      className={`absolute top-0 block lg:hidden h-screen pt-20 bg-white border-r border-gray-200 z-50
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
        className={`cursor-pointer absolute top-2 right-5 z-50`}
      >
        {isDrawer ? (
          <MdClose style={{transition:".5s",transform: "rotate(540deg)"}} className="bg-white" />
        ) : (
          <MdClose style={{transition:".5s",transform: "rotate(0deg)"}} className="bg-white" />
        )}
      </div>
    </aside>
  );
};
