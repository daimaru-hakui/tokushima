"use client";
import { useDrawerStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import {
  PiListDashes,
  PiWarehouseBold,
  PiFactoryBold,
  PiBuildingsBold,
} from "react-icons/pi";

export const SettingsSidebarList: FC = () => {
  const setIsDrawer = useDrawerStore((state) => state.setIsDrawer);
  const pathname = usePathname();
  const list = [
    { name: "マスター登録一覧", link: "/settings", image: <PiListDashes /> },
    { name: "工場登録", link: "/settings/factories", image: <PiFactoryBold /> },
    {
      name: "納品先登録",
      link: "/settings/delivery-places",
      image: <PiWarehouseBold />,
    },
    {
      name: "顧客登録",
      link: "/settings/customers",
      image: <PiBuildingsBold />,
    },
  ];
  return (
    <ul className="space-y-2 font-medium">
      {list.map(({ name, link, image }) => (
        <li key={name} onClick={() => setIsDrawer(false)}>
          <Link
            href={link}
            className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
              pathname === link && "bg-gray-100"
            }`}
          >
            <div>{image}</div>
            <span className="ml-3">{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
