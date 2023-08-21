import { Button } from "@/app/components/utils/button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";

const supabase = createServerComponentClient({ cookies });
const getRepairs = async () => {
  const { data, error } = await supabase.from("repairs").select(`
  *,
  repair_contents(title, price, images, color, position, comment),
  repair_details(maker, product_name, size, quantity, comment)
  `);
  if (error) return;
  return data;
};

const RepairList = async () => {
  const repairs = await getRepairs();
  if (!repairs) return;

  const displayStatus = (status: string) => {
    switch (status) {
      case "PICKING":
        return (
          <div className="p-1 text-xs text-center bg-orange-200 rounded-md">
            ピッキング
          </div>
        );
      case "DIRECT":
        return (
          <div className="p-1 text-xs text-center bg-blue-200 rounded-md">
            工場
          </div>
        );
      case "PROCESSING":
        return (
          <div className="p-1 text-xs text-center bg-green-200 rounded-md">
            加工中
          </div>
        );
      case "SHIPPING":
        return (
          <div className="p-1 text-xs text-center bg-yellow-200 rounded-md">
            出荷
          </div>
        );
      case "FINISH":
        return (
          <div className="p-1 text-xs text-center bg-gray-200 rounded-md">
            完了
          </div>
        );
    }
  };

  const sumQuantity = (details: { quantity: number }[]) => {
    let total = 0;
    details?.forEach(({ quantity }: { quantity: number }) => {
      total += quantity;
    });
    return total;
  };

  return (
    <div className="mx-auto p-6  shadow-sm bg-white rounded-md overflow-auto">
      <table className="w-full w-full min-w-[1200px] text-sm text-left text-gray-500 text-sm">
        <thead className="text-xs text-gray-700 uppercase">
          <tr className=" text-xs border-b border-slate-200">
            <th scope="col" className="p-2 w-[90px]">
              詳細
            </th>
            <th scope="col" className="p-2">
              伝票NO.
            </th>
            <th scope="col" className="p-2">
              ステータス
            </th>
            <th scope="col" className="p-2">
              担当
            </th>
            <th scope="col" className="p-2 text-left">
              顧客名
            </th>
            <th scope="col" className="p-2 text-left">
              工場名
            </th>
            <th scope="col" className="p-2 text-left">
              修理内容
            </th>
            <th scope="col" className="p-2 text-left">
              単価
            </th>
            <th scope="col" className="p-2 text-left">
              数量
            </th>
            <th scope="col" className="p-2 text-left">
              納品先
            </th>
            <th scope="col" className="p-2 text-left w-[120px]">
              作成日
            </th>
            <th scope="col" className="p-2 text-left w-[120px]">
              納期
            </th>
          </tr>
        </thead>
        <tbody>
          {repairs.map(
            ({
              id,
              status,
              staff,
              customer,
              factory,
              repair_contents,
              repair_details,
              delivery_place,
              created_at,
              deadline,
            }) => (
              <tr key={id} className="text-md border-b border-slate-200">
                <td className="p-2">
                  <Button bg="bg-black" size="xs">
                    詳細
                  </Button>
                </td>
                <td className="p-2">{id}</td>
                <td className="p-2">{displayStatus(status)}</td>
                <td className="p-2">{staff}</td>
                <td className="p-2 text-left">{customer}</td>
                <td className="p-2 text-left">{factory}</td>
                <td className="p-2 text-left">
                  {repair_contents?.map((content: any) => (
                    <div key={content.id}>{content.title}</div>
                  ))}
                </td>
                <td className="p-2 text-left">
                  {repair_contents?.map((content: any) => (
                    <div key={content.id}>{content.price}円</div>
                  ))}
                </td>
                <td className="p-2 text-right">{sumQuantity(repair_details)}</td>
                <td className="p-2">{delivery_place}</td>
                <td className="p-2">{created_at}</td>
                <td className="p-2">{deadline}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RepairList;
