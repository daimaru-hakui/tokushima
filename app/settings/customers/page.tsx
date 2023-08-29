import { SettingsCustomerList } from "@/app/components/settings/settings-customer-list";
import { Button } from "@/app/components/utils/button";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PiPlusBold } from "react-icons/pi";

const CustomerPage: NextPage = () => {
  return (
    <div className="mx-auto p-6 w-full shadow-sm bg-white rounded-md overflow-auto">
      <div className="flex justify-between items-center py-2 mb-6 border-b border-gray-200">
        <div className="text-2xl ">顧客一覧</div>
        <Link href="/settings/customers/new" className="inline-block">
          <Button size="sm" type="button" bg="bg-black">
            <PiPlusBold className="mr-1" />
            顧客を追加
          </Button>
        </Link>
      </div>
      <SettingsCustomerList />
    </div>
  );
};

export default CustomerPage;
