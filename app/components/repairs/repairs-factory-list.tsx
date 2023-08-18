"use client";
import React, { FC, useState, useEffect } from "react";
import { Button } from "../utils/button";
import { Input } from "../utils/input/input";
import { UseFormSetValue } from "react-hook-form";
import { Repair, RepairTemplate } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

type Props = {
  setValue: UseFormSetValue<Repair | RepairTemplate>;
  onClose:()=>void
};

type Factory = Database["public"]["Tables"]["factories"]["Row"];

export const RepairFactoryList: FC<Props> = ({
  setValue,
  onClose
}) => {
  const [search, setSearch] = useState("");
  const [factories, setFactories] = useState<Factory[] | null>([]);
  const [filterFactories, setFilterFactories] = useState<Factory[] | null>([]);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getFactories = async () => {
      const { data, error } = await supabase.from("factories").select("*");
      setFactories(data);
    };
    getFactories();
  }, [supabase]);

  useEffect(() => {
    const newArray = factories?.filter((factory) =>
      factory.name.includes(search)
    );
    setFilterFactories(newArray || null);
  }, [factories, search]);

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
                工場名
              </th>
              <th scope="col" className="px-6 py-3 text-left w-[100px]">
                選択
              </th>
            </tr>
          </thead>
          <tbody>
            {filterFactories?.map(({ id, name }) => (
              <tr key={id} className="text-md border-b border-slate-200">
                <td className="px-6 py-3">{name}</td>
                <td className="px-6 py-3">
                  <Button
                    type="button"
                    bg="bg-black"
                    size="sm"
                    onClick={() => {
                      setValue(
                        "factory",
                        { id, name },
                        { shouldValidate: true }
                      );
                      onClose();
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
