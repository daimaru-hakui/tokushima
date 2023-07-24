import { RepairForm } from "@/app/components/repairs/repairs-form";
import { NextPage } from "next";
import React from "react";

const RepairNew:NextPage = () => {
  return (
    <div className="overflow-x-auto shadow-sm">
      <div className="p-6 min-w-[500px] bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">修理伝票作成</div>
        <RepairForm />
      </div>
    </div>
  );
};

export default RepairNew;
