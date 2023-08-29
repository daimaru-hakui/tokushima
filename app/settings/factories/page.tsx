import { SettingsFactoryList } from "@/app/components/settings/settings-factory-list";
import { Button } from "@/app/components/utils/button";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PiPlusBold } from "react-icons/pi";

const FactoryPage: NextPage = () => {
  return (
    <div className="mx-auto p-6 w-full shadow-sm bg-white rounded-md overflow-auto">
      <div className="flex justify-between items-center py-2 mb-6 border-b border-gray-200">
        <div className="text-2xl ">工場一覧 </div>
        <Link href="/settings/factories/new" className="inline-block">
          <Button size="sm" type="button" bg="bg-black">
            <PiPlusBold className="mr-1" />
            工場を追加
          </Button>
        </Link>
      </div>
      <SettingsFactoryList />
    </div>
  );
};

export default FactoryPage;
