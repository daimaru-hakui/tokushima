import { SettingsDeliveryForm } from "@/app/components/settings/settings-delivery-form";
import { NextPage } from "next";
import React from "react";

const DeliveryPlaceNew:NextPage = () => {
  return (
    <div className="overflow-x-auto shadow-sm">
      <div className="p-6 min-w-[500px] bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">納品先登録</div>
        <SettingsDeliveryForm />
      </div>
    </div>
  );
};

export default DeliveryPlaceNew;
