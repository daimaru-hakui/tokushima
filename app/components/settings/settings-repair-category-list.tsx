import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";
import { cookies } from "next/headers";
import { SettingsRepairCategoryEdit } from "./settings-repair-category-edit";

export const SettingsRepairCategoryList: FC = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: categories, error } = await supabase
    .from("repair_categories")
    .select("*");

  return (
    <div className="p-6 max-w-[500px] relative overflow-x-auto bg-white rounded-md shadow-sm">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr className=" text-xs border-b border-slate-200">
            <th scope="col" className="px-6 py-3 text-left w-[200px]">
              工場名
            </th>
            <th scope="col" className="px-6 py-3 text-left w-[70px]">
              編集
            </th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category) => (
              <tr
                key={category.id}
                className="text-md border-b border-slate-200"
              >
                <td className="px-6 py-3">{category.name}</td>
                <td className="px-6 py-3">
                  <SettingsRepairCategoryEdit category={category} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
