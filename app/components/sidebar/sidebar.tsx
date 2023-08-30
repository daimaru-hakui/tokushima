"use client";
import { useDrawerStore, useSidebarStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

type Props = {
  links: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
};

export const Sidebar: FC<Props> = ({ links }) => {
  const pathname = usePathname();
  const isSidebar = useSidebarStore((state) => state.isSidebar);
  const setIsDrawer = useDrawerStore((state) => state.setIsDrawer);

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
        <ul className="space-y-2 font-medium">
          {links.map(({ name, link, icon }) => (
            <li key={name} onClick={() => setIsDrawer(false)}>
              <Link
                href={link}
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
                  pathname === link && "bg-gray-100"
                }`}
              >
                <div>{icon}</div>
                <span className="ml-3">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
