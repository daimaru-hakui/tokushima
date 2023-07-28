import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  PiPlusCircleBold,
  PiNotepadBold,
  PiNotebookBold,
  PiFilePlusBold,
} from "react-icons/pi";
import { CardContainer } from "../components/utils/card-container";
import { NextPage } from "next";

const Repairs:NextPage = async () => {
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
  return <CardContainer list={list} />;
};

export default Repairs;
