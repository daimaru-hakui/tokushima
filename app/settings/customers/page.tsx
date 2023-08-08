import { SettingsCustomerList } from "@/app/components/settings/settings-customer-list";
import { Button } from "@/app/components/utils/button";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PiPlusBold } from "react-icons/pi";

const CustomerPage: NextPage = () => {
  return (
    <div className="mx-auto p-6 w-full max-w-[800px] shadow-sm bg-white rounded-md">
      <div className="py-2 mb-6 text-2xl border-b border-gray-200">
        顧客一覧
      </div>
      <Link href="/settings/customers/new" className="inline-block">
        <Button size="sm" type="button" bg="bg-black">
          <PiPlusBold className="mr-1" />
          顧客を追加
        </Button>
      </Link>
      <SettingsCustomerList />
    </div>
  );
};

export default CustomerPage;
