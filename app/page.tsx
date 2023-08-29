import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { redirect } from "next/navigation"
import NavBar from "./components/header/nav-bar"
import { DrawerSidebar } from "./components/sidebar/drawer-sidebar"
import { Sidebar } from "./components/sidebar/sidebar"
import { Main } from "./components/main/main"


export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const {data:{session}} = await supabase.auth.getSession()

  if(!session) {
    redirect('/auth/login')
  }
  return (
    <div className="flex justify-between relative">
    <DrawerSidebar>
      {/* <SettingsSidebarList /> */}
    </DrawerSidebar>
    <Sidebar>
      {/* <SettingsSidebarList /> */}
    </Sidebar>
    <Main>
      <NavBar /> 
    </Main>
  </div>
  )
}
