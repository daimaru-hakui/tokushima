import React from "react";
import { Button } from "../utils/button";

export const SettingsCustomerList = () => {
  const list = [
    {
      id: 1,
      code: 4206,
      name: "共同リネンサプライ",
    },
    {
      id: 2,
      code: 4201,
      name: "総合開発",
    },
  ];
  return (
    <div className="w-full relative overflow-x-auto bg-white rounded-md shadow-sm">
      <table className="lg:min-w-full min-w-[1000px] text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr className=" text-xs border-b border-slate-200">
            <th scope="col" className="px-6 py-3 text-left w-[150px]">
              顧客コード
            </th>
            <th scope="col" className="px-6 py-3 text-left">
              顧客名
            </th>
            <th scope="col" className="px-6 py-3 text-left w-[100px]">
              編集
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, code, name }) => (
            <tr key={id} className="text-md border-b border-slate-200">
              <td className="px-6 py-3">{code}</td>
              <td className="px-6 py-3">{name}</td>
              <td className="px-6 py-3">
                <Button size="sm" bg="bg-black">
                  編集
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
