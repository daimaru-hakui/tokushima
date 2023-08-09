import { SettingsRepairCategoryForm } from "@/app/components/settings/settings-repair-category-form";
import { NextPage } from "next";
import React from "react";

const CategoryNew: NextPage = () => {
  const defaultValues = {
    id: "",
    name: "",
  };
  return (
    <div className="mx-auto p-6 w-full max-w-[500px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        カテゴリー登録
      </div>
      <SettingsRepairCategoryForm pageType="new" defaultValues={defaultValues} />
    </div>
  );
};

export default CategoryNew;
