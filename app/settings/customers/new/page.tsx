import { SettingsCustomerForm } from "@/app/components/settings/settings-customer-form";
import { NextPage } from "next";
import React from "react";

const CustomerNew: NextPage = () => {
  const defaultValues = {
    code: null,
    name: "",
  };
  return (
    <div className="mx-auto p-6 w-full max-w-[700px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        顧客登録
      </div>
      <SettingsCustomerForm pageType="new" defaultValues={defaultValues} />
    </div>
  );
};

export default CustomerNew;
