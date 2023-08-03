import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";
import { cookies } from "next/headers";
import type { Database } from "../../../lib/database.types";

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
    <div className="relative overflow-x-auto shadow-sm">
      <div className="p-6 min-w-[800px] bg-white rounded-md">
        <table className="w-full  text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr className=" text-xs border-b border-slate-200">
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                納品先名
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                住所
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                TEL
              </th>
            </tr>
          </thead>
          <tbody>
            {deliveryPlaces?.map(({ id, name, address, tel }) => (
              <tr key={id} className="text-md border-b border-slate-200">
                <td className="px-6 py-3">{id}</td>
                <td className="px-6 py-3">{name}</td>
                <td className="px-6 py-3">{address}</td>
                <td className="px-6 py-3">{tel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
