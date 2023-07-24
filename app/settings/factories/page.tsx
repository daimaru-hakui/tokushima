import { SettingsFactoryList } from "@/app/components/settings/settings-factory-list";
import { Button } from "@/app/components/utils/button";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PiPlusBold } from "react-icons/pi";

const FactoryPage:NextPage = () => {
  return (
    <div className="overflow-x-auto shadow-sm">
      <div className="p-6 min-w-[500px] bg-white rounded-md">
        <div className="py-2 mb-6 text-2xl border-b border-gray-200">工場一覧</div>
          <Link href="/settings/factories/new" className="inline-block">
            <Button size="sm" type="button" bg="bg-black">
              <PiPlusBold className="mr-1"/>工場を追加
            </Button>
          </Link>
        <SettingsFactoryList />
      </div>
    </div>
  );
};

export default FactoryPage;