import { Button } from "@/app/components/utils/button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import useDisplay from "@/app/hooks/useDisplay";
import { format } from "date-fns";
import { Database } from "@/lib/database.types";
import Link from "next/link";

const getRepairs = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase.from("repairs").select(`
  *,
  profiles(username),
  factories(id,name),
  delivery_places(id,name),
  repair_contents(title, price, images, color, position, comment),
  repair_details(maker, product_name, size, quantity, comment)
  `).order("created_at",{ascending:false});
  if (error) return;
  return data;
};

const RepairList = async () => {
  const repairs = await getRepairs();
  const { displayStatus } = useDisplay();

  if (!repairs) return;

  const sumQuantity = (details: any) => {
    let total = 0;
    details?.forEach(({ quantity }: { quantity: number }) => {
      total += quantity;
    });
    return total;
  };

  return (
    <div className="mx-auto p-6 shadow-sm bg-white rounded-md overflow-auto">
      <table className="w-full lg:min-w-full min-w-[1200px] text-sm text-left text-gray-500 text-sm">
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
          {repairs.map((repair) => {
            const {
              id,
              status,
              profiles,
              customer,
              factories,
              repair_contents,
              repair_details,
              delivery_places,
              created_at,
              deadline,
            } = repair;
            return (
              <tr key={id} className="text-md border-b border-slate-200">
                <td className="p-2">
                  <Link href={`/repairs/list/${id}`}>
                    <Button bg="bg-black" size="xs">
                      詳細
                    </Button>
                  </Link>
                </td>
                <td className="p-2">{id}</td>
                <td className="p-2">{displayStatus(status)}</td>
                <td className="p-2">{profiles?.username}</td>
                <td className="p-2 text-left">{customer}</td>
                <td className="p-2 text-left">{factories?.name}</td>
                <td className="p-2 text-left">
                  {repair_contents?.map((content: any) => (
                    <div key={content.id}>{content.title}</div>
                  ))}
                </td>
                <td className="p-2 text-right">
                  {repair_contents?.map((content: any) => (
                    <div key={content.id}>{content.price}円</div>
                  ))}
                </td>
                <td className="p-2 text-right">
                  {sumQuantity(repair_details)}
                </td>
                <td className="p-2">{delivery_places?.name}</td>
                <td className="p-2">
                  {format(new Date(created_at || ""), "yyyy-MM-dd")}
                </td>
                <td className="p-2">{deadline}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RepairList;
