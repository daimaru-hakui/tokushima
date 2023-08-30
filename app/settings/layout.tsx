import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Sidebar } from "../components/sidebar/sidebar";
import { Main } from "../components/main/main";
import { DrawerSidebar } from "../components/sidebar/drawer-sidebar";
import Header from "../components/header/header";
import { settingLinks } from "../utils";

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
      <DrawerSidebar links={settingLinks} />
      <Sidebar links={settingLinks} />
      <Main>
        <Header />
        <div className="p-6">{children}</div>
      </Main>
    </div>
  );
}
