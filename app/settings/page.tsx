import { NextPage } from "next";
import React from "react";
import {
  PiWarehouseBold,
  PiFactoryBold,
  PiBuildingsBold,
} from "react-icons/pi";
import { Card } from "../components/utils/card";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const SettingPage: NextPage = async() => {
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
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center w-full">
      {list.map(({ name, link, image }) => (
        <Card key={name} name={name} link={link} image={image} />
      ))}
    </div>
  );
};

export default SettingPage;
