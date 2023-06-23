import { NextPage } from "next";
import React from "react";
import {
  PiWarehouseBold,
  PiFactoryBold,
  PiBuildingsBold,
} from "react-icons/pi";
import { SettingCard } from "../components/settings/card";

const SettingPage: NextPage = () => {
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
    <div className="flex flex-wrap gap-6 justify-center">
      {list.map(({ name, link, image }) => (
        <SettingCard key={name} name={name} link={link} image={image} />
      ))}
    </div>
  );
};

export default SettingPage;
