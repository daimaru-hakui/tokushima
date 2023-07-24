import { SettingsCustomerForm } from "@/app/components/settings/settings-customer-form";
import { NextPage } from "next";
import React from "react";

const CustomerNew:NextPage = () => {
  return (
    <div className="overflow-x-auto shadow-sm">
      <div className="p-6 min-w-[500px] bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">顧客登録</div>
        <SettingsCustomerForm />
      </div>
    </div>
  );
};

export default CustomerNew;
