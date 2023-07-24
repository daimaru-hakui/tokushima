import { SettingsFactoryForm } from "@/app/components/settings/settings-factory-form";
import { NextPage } from "next";
import React from "react";

const FactoryNew:NextPage = () => {
  return (
    <div className="overflow-x-auto shadow-sm">
      <div className="p-6 min-w-[500px] bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">工場登録</div>
        <SettingsFactoryForm />
      </div>
    </div>
  );
};

export default FactoryNew;