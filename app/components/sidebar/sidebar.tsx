"use client";
import { useSidebarStore } from "@/store";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Sidebar: FC<Props> = ({ children }) => {
  const isSidebar = useSidebarStore((state) => state.isSidebar);

  return (
    <aside
      id="logo-sidebar"
      style={{ transition: ".5s" }}
      className={`sticky top-0 hidden lg:block h-screen bg-white border-r border-gray-200 
      ${isSidebar ? "w-72" : "w-0"}`}
      aria-label="Sidebar"
    >
      <div
        style={{ transition: ".5s" }}
        className={`h-full w-72 px-7 overflow-y-auto
        ${isSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center h-[calc(50px)] ml-3">
          <Link href="/" className="cursor-pointer">
            徳島工場
          </Link>
        </div>
        {children}
      </div>
    </aside>
  );
};
