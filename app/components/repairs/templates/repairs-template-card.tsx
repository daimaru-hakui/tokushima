import React, { FC } from "react";
import { Button } from "../../utils/button";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

type Props = {
  repair_template: any;
};

export const RepairsTemplateCard: FC<Props> = async ({ repair_template }) => {
  console.log(repair_template);
  return (
    <div className="border border-1 border-slate-200 rounded-md shadow-md overflow-hidden">
      <div className="py-1 flex justify-center text-sm font-bold bg-gray-100">
        {repair_template.factory?.name}
      </div>
      <div className="flex justify-center w-full">
        {repair_template.images[0] && (
          <Image
            src={repair_template.images[0].url}
            width={100}
            height={100}
            alt=""
            style={{ backgroundSize: "cover" }}
            className="w-full"
          />
        )}
      </div>
      <div className="p-3 pt-1">
        <div className="text-lg font-bold">{repair_template.title}</div>
        <div className="mt-1 text-sm">{repair_template.customer}</div>
        <div className="mt-2 pt-3 flex justify-between items-center border-t border-slate-200">
          <div className="text-3xl font-bold">￥{repair_template.price}</div>
          <Link href={`/repairs/templates/${repair_template.id}`}>
            <Button bg="bg-black" size="sm">
              詳細
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
