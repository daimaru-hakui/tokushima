import { Database } from "@/lib/database.types";
import React, { FC } from "react";

type RepairDetail = Database["public"]["Tables"]["repair_details"]["Row"];

type Props = {
  details: RepairDetail[];
};

export const RepairDetailTable: FC<Props> = ({ details }) => {
  return (
    <div className="overflow-auto mt-6">
      <table
        style={{ minWidth: "600px" }}
        className="table-auto w-full text-sm text-lef border-spacing-2 border border-slate-200 bg-neutral-50"
      >
        <thead>
          <tr>
            <th className="border border-slate-200">
              <div className="flex flex-col">
                <div className="py-1 flex items-center justify-center">
                  メーカー
                </div>
                <div className="py-1 flex items-center justify-center border-t border-slate-200">
                  商品名
                </div>
              </div>
            </th>
            <th className="w-20 p-3 border border-slate-200 ">サイズ</th>
            <th className="w-20 p-3 border border-slate-200">数量</th>
            <th className="p-3 border border-slate-200">コメント</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <React.Fragment key={detail.id}>
              <tr>
                <td className="px-3 py-1 border border-slate-200 border-b-0">
                  <div>{detail.maker}</div>
                  <div>{detail.product_name}</div>
                </td>
                <td className="px-3 py-1 border border-slate-200 text-center">
                  {detail.size}
                </td>
                <td className="px-3 py-1 border border-slate-200 text-right">
                  {detail.quantity}
                </td>
                <td className="px-3 py-1 border border-slate-200">
                  {detail.comment}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
