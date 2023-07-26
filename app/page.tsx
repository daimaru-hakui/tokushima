import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"
import { redirect } from "next/navigation"


export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const {data:{session}} = await supabase.auth.getSession()

  if(!session) {
    redirect('/auth/login')
  }
  return (
    <main className="flex min-h-[calc(100vh-50px)] flex-col items-center justify-between p-24">
      
    </main>
  )
}
