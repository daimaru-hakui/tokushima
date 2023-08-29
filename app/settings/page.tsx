import { NextPage } from "next";
import {
  PiWarehouseBold,
  PiFactoryBold,
  PiBuildingsBold,
} from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Card } from "../components/utils/card";

const SettingPage: NextPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/auth/login");
  }

  const list = [
    {
      name: "工場登録",
      link: "/settings/factories",
      image: <PiFactoryBold />,
    },
    {
      name: "納品先登録",
      link: "/settings/delivery-places",
      image: <PiWarehouseBold />,
    },
    {
      name: "顧客登録",
      link: "/settings/customers",
      image: <PiBuildingsBold />,
    },
    {
      name: "カテゴリー登録",
      link: "/settings/categories",
      image: <TbCategory />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
      {list.map(({ name, link, image }) => (
        <Card key={name} name={name} link={link} image={image} />
      ))}
    </div>
  );
};

export default SettingPage;
