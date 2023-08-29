import { SettingsDeliveryList } from "@/app/components/settings/settings-delivery-list";
import { Button } from "@/app/components/utils/button";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PiPlusBold } from "react-icons/pi";

const DeliveryPlacePage: NextPage = () => {
  return (
    <div className="mx-auto p-6 w-full shadow-sm bg-white rounded-md overflow-auto">
      <div className="flex justify-between items-center py-2 mb-6 border-b border-gray-200">
        <div className="text-2xl ">納品先一覧</div>
        <Link href="/settings/delivery-places/new" className="inline-block">
          <Button size="sm" type="button" bg="bg-black">
            <PiPlusBold className="mr-1" />
            納品先を追加
          </Button>
        </Link>
      </div>
      <SettingsDeliveryList />
    </div>
  );
};

export default DeliveryPlacePage;
