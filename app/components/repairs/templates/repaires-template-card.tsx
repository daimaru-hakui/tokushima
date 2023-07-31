import React, { FC } from "react";
import { Button } from "../../utils/button";
import Link from "next/link";

type Props = {
  template: {
    id: number;
    factory: {
      id: number;
      name: string;
    };
    delivery: {
      id: number;
      name: string;
    };
    customer: string;
    price: number;
    title: string;
    images: {
      path: string;
    }[];
  };
};

export const RepairsTemplateCard: FC<Props> = ({ template }) => {
  return (
    <div className="border border-1 border-slate-200 rounded-md shadow-md overflow-hidden">
      <div className="py-1 flex justify-center text-sm font-bold bg-gray-100">
        {template.factory.name}
      </div>
      <div className="flex justify-center w-full">
        <img src={template.images[0].path} width="100%" />
      </div>
      <div className="p-3 pt-1">
        <div className="text-lg font-bold">{template.title}</div>
        <div className="mt-1 text-sm">{template.customer}</div>
        <div className="mt-2 flex justify-between items-center">
          <div className="text-3xl font-bold">￥{template.price}</div>
          <Link href={`/repairs/templates/${template.id}`}>
            <Button bg="bg-black" size="sm">
              詳細
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
