import { SettingsDeliveryForm } from "@/app/components/settings/settings-delivery-form";
import { NextPage } from "next";
import React from "react";

const DeliveryPlaceNew: NextPage = () => {

  const defaultValues = {
    id:"",
    name:"",
    kana:"",
    address:"",
    tel:""
  }

  return (
    <div className="mx-auto p-6 w-full max-w-[700px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        納品先登録
      </div>
      <SettingsDeliveryForm
        pageType="new"
        defaultValues={defaultValues}
      />
    </div>
  );
};

export default DeliveryPlaceNew;
