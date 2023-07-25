'use client'
import { useDrawerStore } from '@/store';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {
    PiPlusCircleBold,
    PiNotepadBold,
    PiNotebookBold,
    PiListDashes,
    PiFilePlusBold,
  } from "react-icons/pi";
  

export const RepairsSidebarList = () => {
  const setIsDrawer = useDrawerStore((state) => state.setIsDrawer);
    const pathname = usePathname();
    const list = [
        { name: "修理伝票メニュー", link: "/repairs", image: <PiListDashes /> },
        { name: "修理伝票一覧", link: "/repairs/list", image: <PiNotepadBold /> },
        { name: "修理伝票作成", link: "/repairs/new", image: <PiPlusCircleBold /> },
        {
          name: "テンプレート一覧",
          link: "/repairs/templates",
          image: <PiNotebookBold />,
        },
        {
          name: "テンプレート登録",
          link: "/repairs/templates/new",
          image: <PiFilePlusBold />,
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
  )
}
