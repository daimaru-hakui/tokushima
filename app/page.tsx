import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "./components/header/header";
import { Main } from "./components/main/main";
import { DrawerSidebar } from "./components/sidebar/drawer-sidebar";
import { Sidebar } from "./components/sidebar/sidebar";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  const createProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id)
      .single();
    if (error) console.log("profiles", error);
    if (data) return;
    if (!data) {
      const { data, error } = await supabase
        .from("profiles")
        .insert({
          id: session.user.id,
          username: session.user.email,
          email: session.user.email,
          isAdmin: false,
          isDelivery: false,
          isTokushima: false,
          isSales: false,
        })
        .select();
      if (error) console.log("profiles", error);
    }
  };

  if (session) {
    createProfile();
  }

  return (
    <div className="flex justify-between relative">
      <Main>
        <Header />
      </Main>
    </div>
  );
}
