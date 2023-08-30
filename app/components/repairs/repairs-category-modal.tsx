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

type Category = Database["public"]["Tables"]["repair_categories"]["Row"];

export const RepairsCategoryModal: FC<Props> = ({ setValue }) => {
  const [isModal, setIsModal] = useState(false);
  const {onOpen,onClose} = useModal(setIsModal)
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [filterCategories, setFilterCategories] = useState<Category[] | null>(
    []
  );
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getDeliveryPlace = async () => {
      const { data, error } = await supabase
        .from("repair_categories")
        .select("*");
      setCategories(data);
    };
    getDeliveryPlace();
  }, [supabase]);

  useEffect(() => {
    const newArray = categories?.filter((category) =>
      category.name.includes(search)
    );
    setFilterCategories(newArray || null);
  }, [categories, search]);


  return (
    <>
      <Button type="button" bg="bg-black" size="md" onClick={onOpen}>
        検索
      </Button>
      <Modal w="600px" title="検索" isModal={isModal} setIsModal={setIsModal}>
        <div className="px-3">
          <Input
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
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
            {filterCategories?.map(({ id, name }) => (
              <tr key={id} className="text-md border-b border-slate-200">
                <td className="px-6 py-3">{name}</td>
                <td className="px-6 py-3">
                  <Button
                    type="button"
                    bg="bg-black"
                    size="sm"
                    onClick={() => {
                      setValue(
                        "category",
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
