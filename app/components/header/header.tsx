import React from "react";
import Link from "next/link";
import { MenuButton } from "./menu-button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { DrawerButton } from "./drawer-button";
import { NavSwitch } from "./nav-switch";
import { headerLinks } from "@/app/utils";
import { NavMenu } from "./nav-menu";

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="w-full px-6 bg-white border-b border-gray-200
        w-full h-[calc(50px)]
        flex items-center justify-between 
        bg-white shadow-sm"
      >
        <div className="flex items-center gap-6">
          <div className="block lg:hidden">
            <DrawerButton />
          </div>
          <NavSwitch />
          <div className="lg:hidden">
            <Link href="/" className="cursor-pointer">
              徳島工場
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <NavMenu links={headerLinks} />
          <MenuButton links={headerLinks} />
        </div>
      </nav>
    </header>
  );
}
