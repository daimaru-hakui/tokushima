import { NextPage } from "next";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Card } from "../components/utils/card";
import { repairLinks } from "../utils";

const Repairs: NextPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
      {repairLinks.map(({ name, link, icon }) => (
        <Card key={name} name={name} link={link} icon={icon} />
      ))}
    </div>
  );
};

export default Repairs;
