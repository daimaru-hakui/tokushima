import { SettingsDeliveryForm } from "@/app/components/settings/settings-delivery-form";
import React from "react";

const DeliveryPlacePage = () => {
  return (
    <div className="overflow-x-auto shadow-sm">
      <div className="p-6 min-w-[500px] bg-white rounded-md">
        <SettingsDeliveryForm />
      </div>
    </div>
  );
};

export default DeliveryPlacePage;
