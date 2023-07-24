import { SettingsDeliveryList } from "@/app/components/settings/settings-delivery-list";
import { Button } from "@/app/components/utils/button";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PiPlusBold } from "react-icons/pi";

const DeliveryPlacePage:NextPage = () => {
  return (
    <div className="overflow-x-auto shadow-sm">
      <div className="p-6 min-w-[500px] bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">納品先一覧</div>
          <Link href="/settings/delivery-places/new" className="inline-block">
            <Button size="sm" type="button" bg="bg-black">
            <PiPlusBold className="mr-1"/>納品先を追加
            </Button>
          </Link>
        <SettingsDeliveryList />
      </div>
    </div>
  );
};

export default DeliveryPlacePage;
