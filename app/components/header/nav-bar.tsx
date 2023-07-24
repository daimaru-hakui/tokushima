import React from "react";
import Link from "next/link";
import { MenuButton } from "./menu-button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { DrawerButton } from "./drawer-button";

export default async function NavBar() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const menuList = [
    { name: "HOME", link: "/" },
    { name: "修理伝票", link: "/repairs" },
    { name: "マスター登録", link: "/settings" },
  ];

  return (
    <header>
      <nav
        className="
        fixed top-0 z-50 w-full bg-white border-b border-gray-200
        w-full h-[calc(50px)] px-6 
        flex items-center justify-between 
        bg-white shadow-sm"
      >
        <div className="flex items-center gap-6">
          <div><DrawerButton/></div>
          <Link href="/" className="cursor-pointer">
            徳島工場
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          {session &&
            menuList.map(({ name, link }) => (
              <Link key={name} href={link} className="text-black">
                <div>{name}</div>
              </Link>
            ))}
          <MenuButton menuList={menuList} />
        </div>
      </nav>
    </header>
  );
}
