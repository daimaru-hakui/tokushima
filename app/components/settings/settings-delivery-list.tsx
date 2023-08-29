import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";
import { cookies } from "next/headers";
import type { Database } from "../../../lib/database.types";
import { SettingsDeliveryEdit } from "./settings-delivery-edit";

type DeliveryPlace = Database["public"]["Tables"]["delivery_places"]["Row"];

async function getDeliveryPlace() {
  const supabase = createServerComponentClient({ cookies });
  let { data, error }: { data: DeliveryPlace[] | null; error: any } =
    await supabase.from("delivery_places").select("*");
  return data;
}

export const SettingsDeliveryList: FC = async () => {
  const deliveryPlaces = await getDeliveryPlace();
  return (
    <div className="w-full relative overflow-x-auto bg-white rounded-md shadow-sm">
      <table className="lg:min-w-full min-w-[1000px] text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr className=" text-xs border-b border-slate-200">
            <th scope="col" className="px-6 py-3 text-left w-[200px]">
              納品先名
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
              詳細
            </th>
          </tr>
        </thead>
        <tbody>
          {deliveryPlaces?.map((deliveryPlace) => (
            <tr
              key={deliveryPlace.id}
              className="text-md border-b border-slate-200"
            >
              <td className="px-6 py-3">{deliveryPlace.name}</td>
              <td className="px-6 py-3">{deliveryPlace.kana}</td>
              <td className="px-6 py-3">{deliveryPlace.address}</td>
              <td className="px-6 py-3">{deliveryPlace.tel}</td>
              <td className="px-6 py-3">
                <SettingsDeliveryEdit deliveryPlace={deliveryPlace} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
