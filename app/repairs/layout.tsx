import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Sidebar } from "../components/sidebar/sidebar";
import { RepairsSidebarList } from "../components/repairs/repairs-sidebar-list";
import { Space } from "../components/utils/space";
import { Main } from "../components/main/main";
import { DrawerSidebar } from "../components/sidebar/drawer-sidebar";
import { Database } from "@/database.types";

export default async function RepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <>
      <div className="flex justify-between relative">
        <DrawerSidebar>
          <RepairsSidebarList />
        </DrawerSidebar>
        <Sidebar>
          <RepairsSidebarList />
        </Sidebar>
        <Main>
          <Space />
          {children}
        </Main>
      </div>
    </>
  );
}
