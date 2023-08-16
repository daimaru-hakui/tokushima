import { RepairsTemplateForm } from "@/app/components/repairs/templates/repairs-template-form";
import React from "react";

const RepairTemplateNew = () => {
  const defaultValues = {
    factory: {
      id: "",
      name: ""
    },
    category: {
      id: "",
      name: ""
    },
    title: "",
    customer: "",
    price: 0,
    color: "",
    position: "",
    image_path: "",
    images:[],
    comment: "",
  };

  return (
    <div className="mx-auto p-6 w-full max-w-[1100px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        テンプレート作成
      </div>
      <RepairsTemplateForm pageType="new" defaultValues={defaultValues} />
    </div>
  );
};

export default RepairTemplateNew;
