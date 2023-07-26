import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Card } from "../components/utils/card";
import {
  PiPlusCircleBold,
  PiNotepadBold,
  PiNotebookBold,
  PiListDashes,
  PiFilePlusBold,
} from "react-icons/pi";

const Repairs = async() => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/auth/login");
  }

  const list = [
    {
      name: "修理伝票一覧",
      link: "/repairs/list",
      image: <PiNotepadBold />,
    },
    {
      name: "修理伝票作成",
      link: "/repairs/new",
      image: <PiPlusCircleBold />,
    },
    {
      name: "テンプレート一覧",
      link: "/repairs/templates",
      image: <PiNotebookBold />,
    },
    {
      name: "テンプレート作成",
      link: "/repairs/templates/new",
      image: <PiFilePlusBold />,
    },
  ];
  return (
    <div className="flex flex-wrap gap-6 justify-center w-full">
      {list.map(({ name, link, image }) => (
        <Card key={name} name={name} link={link} image={image} />
      ))}
    </div>
  );
};

export default Repairs;
