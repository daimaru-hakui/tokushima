"use client";
import React, { FC, useEffect, useState } from "react";
import { Button } from "../utils/button";
import { Input } from "../utils/input/input";
import { UseFormSetValue } from "react-hook-form";
import { Repair } from "@/types";
import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Props = {
  setValue: UseFormSetValue<Repair>;
  onClose:()=>void
};

type DeliveryPlace = Database["public"]["Tables"]["delivery_places"]["Row"];

export const RepairsDeliveryList: FC<Props> = ({ setValue, onClose }) => {
  const [search, setSearch] = useState("");
  const [deliveryPlaces, setDeliveryPlaces] = useState<DeliveryPlace[] | null>(
    []
  );
  const [filterDeliveryPlaces, setFilterDeliveryPlaces] = useState<
    DeliveryPlace[] | null
  >([]);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getDeliveryPlace = async () => {
      const { data, error } = await supabase
        .from("delivery_places")
        .select("*");
      setDeliveryPlaces(data);
    };
    getDeliveryPlace();
  }, [supabase]);

  useEffect(() => {
    const newArray = deliveryPlaces?.filter((deliveryPlace) =>
      deliveryPlace.name.includes(search)
    );
    setFilterDeliveryPlaces(newArray || null);
  }, [deliveryPlaces, search]);

  return (
    <>
      <div>
        <div className="px-3">
          <Input
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </div>
      </div>
      <div className="overflow-auto h-80 mt-6">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-xs border-b border-slate-200">
              <th scope="col" className="px-6 py-3 text-left">
                納品先
              </th>
              <th scope="col" className="px-6 py-3 text-left w-[100px]">
                選択
              </th>
            </tr>
          </thead>
          <tbody>
            {filterDeliveryPlaces?.map(({ id, name }) => (
              <tr key={id} className="text-md border-b border-slate-200">
                <td className="px-6 py-3">{name}</td>
                <td className="px-6 py-3">
                  <Button
                    type="button"
                    bg="bg-black"
                    size="sm"
                    onClick={() => {
                      setValue(
                        "delivery",
                        { id, name },
                        { shouldValidate: true }
                      );
                      onClose()
                    }}
                  >
                    選択
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
