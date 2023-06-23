import { LoginForm } from "@/app/components/auth/login-form";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
const Login = async() => {
  const supabase = createServerComponentClient({cookies})
  const {data:{session}} = await supabase.auth.getSession()

  if(session) {
    redirect('/')
  }
    
  return (
    <div className="w-full h-[calc(100vh-50px)] p-6 flex items-center justify-center">
      <div
        className="
         w-full max-w-md p-6 
         flex flex-col items-center 
         bg-white rounded-md shadow-md
      "
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
