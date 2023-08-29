import { SettingsRepairCategoryList } from "@/app/components/settings/settings-repair-category-list";
import { Button } from "@/app/components/utils/button";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PiPlusBold } from "react-icons/pi";

const CategoryPage: NextPage = () => {
  return (
    <div className="mx-auto p-6 w-full shadow-sm bg-white rounded-md overflow-auto">
      <div className="flex justify-between items-center py-2 mb-6 border-b border-gray-200">
        <div className="text-2xl ">カテゴリー一覧</div>
        <Link href="/settings/categories/new" className="inline-block">
          <Button size="sm" type="button" bg="bg-black">
            <PiPlusBold className="mr-1" />
            カテゴリーを追加
          </Button>
        </Link>
      </div>
      <SettingsRepairCategoryList />
    </div>
  );
};

export default CategoryPage;
