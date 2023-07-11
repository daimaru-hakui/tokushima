import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Sidebar } from "../components/sidebar/sidebar";
import { SettingsSidebarList } from "../components/settings/settings-sidebar-list";

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
    <div className="flex justify-center">
      <Sidebar>
        <SettingsSidebarList />
      </Sidebar>
      <main className="w-full md:w-8/12 p-4 mt-24 md:ml-64">{children}</main>
    </div>
  );
}
