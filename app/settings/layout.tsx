import React from "react";
import { SettingSidebar } from "../components/settings/sidebar";

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <SettingSidebar />
      <main className="w-8/12 p-4 mt-24 sm:ml-64">{children}</main>
    </div>
  );
}
