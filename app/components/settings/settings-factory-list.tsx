import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";
import { cookies } from "next/headers";
import { SettingsFactoryEdit } from "./settings-factory-edit";
import { Database } from "@/lib/database.types";

type Factory = Database["public"]["Tables"]["factories"]["Row"];

export const SettingsFactoryList: FC = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: factories, error } = await supabase
    .from("factories")
    .select("*");

  return (
    <div className="w-full relative overflow-x-auto bg-white rounded-md shadow-sm">
      <table className="lg:min-w-full min-w-[1000px] text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr className=" text-xs border-b border-slate-200">
            <th scope="col" className="px-6 py-3 text-left w-[200px]">
              工場名
            </th>
            <th scope="col" className="px-6 py-3 text-left w-[200px]">
              フリガナ
            </th>
            <th scope="col" className="px-6 py-3 text-left w-[350px]">
              住所
            </th>
            <th scope="col" className="px-6 py-3 text-left w-[150px]">
              TEL
            </th>
            <th scope="col" className="px-6 py-3 text-center w-[80px]">
              編集
            </th>
          </tr>
        </thead>
        <tbody>
          {factories &&
            factories.map((factory) => (
              <tr
                key={factory.id}
                className="text-md border-b border-slate-200"
              >
                <td className="px-6 py-3">{factory.name}</td>
                <td className="px-6 py-3">{factory.kana}</td>
                <td className="px-6 py-3">{factory.address}</td>
                <td className="px-6 py-3">{factory.tel}</td>
                <td className="px-6 py-3 w-[120px]">
                  <SettingsFactoryEdit factory={factory} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
