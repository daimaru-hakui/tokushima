import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { redirect } from "next/navigation"
import Header from "./components/header/header"
import { Main } from "./components/main/main"


export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const {data:{session}} = await supabase.auth.getSession()

  if(!session) {
    redirect('/auth/login')
  }
  return (
    <div className="flex justify-between relative">
    {/* <DrawerSidebar />
      <Sidebar /> */}
    <Main>
      <Header /> 
    </Main>
  </div>
  )
}
