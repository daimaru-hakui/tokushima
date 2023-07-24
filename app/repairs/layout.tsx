import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Sidebar } from "../components/sidebar/sidebar";
import { RepairsSidebarList } from "../components/repairs/repairs-sidebar-list";

export default async function RepairLayout({
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
    <div className="flex justify-between">
      <Sidebar>
        <RepairsSidebarList />
      </Sidebar>
      <main className="w-full p-4 mt-12"> {children}</main>
    </div>
  );
}
