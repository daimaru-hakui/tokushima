import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";
import { cookies } from "next/headers";
import { SettingsFactoryEdit } from "./settings-factory-edit";

export const SettingsFactoryList: FC = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: factories, error } = await supabase
    .from("factories")
    .select("*");

  return (
    <div className="p-6 min-w-[1050px] relative overflow-x-auto bg-white rounded-md shadow-sm">
      <table className="w-full text-sm text-left text-gray-500">
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
            <th scope="col" className="px-6 py-3 text-left w-[100px]">
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
                <td className="px-6 py-3">
                  <SettingsFactoryEdit factory={factory} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
