"use client";
import React, { FC, useEffect, useState } from "react";
import { Modal } from "../utils/modal/modal";
import { UseFormSetValue } from "react-hook-form";
import { RepairInputs } from "@/types";
import { Button } from "../utils/button";
import { useModal } from "@/app/hooks/useModal";
import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Input } from "../utils/input/input";

type Props = {
  setValue: UseFormSetValue<RepairInputs | any>;
};

type Factory = Database["public"]["Tables"]["factories"]["Row"];

export const RepairsFactoryModal: FC<Props> = ({ setValue }) => {
  const [isModal, setIsModal] = useState(false);
  const {onOpen,onClose} = useModal(setIsModal)
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
      <Button type="button" bg="bg-black" size="md" onClick={onOpen}>
        検索
      </Button>
      <Modal w="500px" title="検索" isModal={isModal} setIsModal={setIsModal}>
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
      </Modal>
    </>
  );
};
