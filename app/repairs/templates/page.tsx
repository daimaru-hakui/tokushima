import { RepairsTemplateCard } from "@/app/components/repairs/templates/repaires-template-card";
import React from "react";

const RepairTemplates = () => {
  const templates = [
    {
      id: 0,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      category:{
        id:1,
        name:"股下修理"
      },
      customer: "マ・マーマカロニ宇都宮工場",
      title: "襟テーピースナッパー付け",
      price: 180,
      images: [{ path: "/images/20230731.png" }],
    },
    {
      id: 1,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "共同リネンサプライ",
      title: "裾上げ",
      price: 320,
      images: [{ path: "/images/20230731.png" }],
    },
    {
      id: 2,
      factory: {
        id: 1,
        name: "大野制帽所",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "阪急デリカアイ",
      title: "線付け",
      price: 150,
      images: [{ path: "/images/20230731.png" }],
    },
    {
      id: 3,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "共同リネンサプライ",
      title: "裾上げ",
      price: 320,
      images: [{ path: "/images/20230731.png" }],
    },
  ];

  return (
    <div className="mx-auto p-6 w-full max-w-[1100px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        テンプレート一覧
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 w-full">
        {templates.map((template) => (
          <RepairsTemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default RepairTemplates;
