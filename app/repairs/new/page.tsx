"use client";
import { RepairForm } from "@/app/components/repairs/repairs-form";
import { NextPage } from "next";
import React from "react";

const RepairNew: NextPage = () => {
  return (
    <div className="mx-auto p-6 w-full max-w-[1100px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        修理伝票作成
      </div>
      <RepairForm />
    </div>
  );
};

export default RepairNew;
