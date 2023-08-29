import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Sidebar } from "../components/sidebar/sidebar";
import { SettingsSidebarList } from "../components/settings/settings-sidebar-list";
import { Main } from "../components/main/main";
import { DrawerSidebar } from "../components/sidebar/drawer-sidebar";
import NavBar from "../components/header/nav-bar";

export default async function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="flex justify-between relative w-full">
      <DrawerSidebar>
        <SettingsSidebarList />
      </DrawerSidebar>
      <Sidebar>
        <SettingsSidebarList />
      </Sidebar>
      <Main>
        <NavBar />
        <div className="p-6">{children}</div>
      </Main>
    </div>
  );
}
