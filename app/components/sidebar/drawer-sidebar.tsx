"use client";
import { useDrawerStore, useSidebarStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { MdClose } from "react-icons/md";


type Props = {
  links: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
};

export const DrawerSidebar: FC<Props> = ({ links }) => {
  const pathname = usePathname();
  const isDrawer = useDrawerStore((state) => state.isDrawer);
  const setIsDrawer = useDrawerStore((state) => state.setIsDrawer);
  const isSidebar = useSidebarStore((state) => state.isSidebar);

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
      <div
        onClick={handleDrawer}
        style={{ transition: ".5s", fontSize: "2rem" }}
        className={`cursor-pointer absolute top-2 right-5 z-50`}
      >
        {isDrawer ? (
          <MdClose
            style={{ transition: ".5s", transform: "rotate(540deg)" }}
            className="bg-white"
          />
        ) : (
          <MdClose
            style={{ transition: ".5s", transform: "rotate(0deg)" }}
            className="bg-white"
          />
        )}
      </div>
    </aside>
  );
};
