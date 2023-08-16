import React, { FC } from "react";
import { Button } from "../../utils/button";
import Link from "next/link";
import { Database } from "@/lib/database.types";



type RepairTemplate = Database["public"]["Tables"]["repair_templates"]["Row"];
type RepairCategory = Database["public"]["Tables"]["repair_categories"]["Row"];
type Factory = Database["public"]["Tables"]["factories"]["Row"];

type Props = {
  repair_template: any;
};

export const RepairsTemplateCard: FC<Props> = ({ repair_template }) => {
  const url = process.env.url + "/storage/v1/object/public/repairs/";
  return (
    <div className="border border-1 border-slate-200 rounded-md shadow-md overflow-hidden">
      <div className="py-1 flex justify-center text-sm font-bold bg-gray-100">
        {repair_template.factory?.name}
      </div>
      <div className="flex justify-center w-full">
        {url && (
          <img src={url + repair_template.image_path} width="100%" />
        )}
      </div>
      <div className="p-3 pt-1">
        <div className="text-lg font-bold">{repair_template.title}</div>
        <div className="mt-1 text-sm">{repair_template.customer}</div>
        <div className="mt-2 flex justify-between items-center">
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
