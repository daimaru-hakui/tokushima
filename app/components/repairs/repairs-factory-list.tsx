import React, { FC, useEffect, useState } from "react";
import { Button } from "../utils/button";
import { Input } from "../utils/input/input";
import { UseFormSetValue } from "react-hook-form";
import { Repair } from "@/types";

type Factory = {
  id: number;
  name: string;
};

type Props = {
  setValue: UseFormSetValue<Repair>;
  isModal: boolean;
  setIsModal: (payload: boolean) => void;
};

export const RepairFactoryList: FC<Props> = ({
  setValue,
  isModal,
  setIsModal,
}) => {
  const [search, setSearch] = useState("");
  const [filteritems, setFilterItems] = useState<Factory[]>([]);
  const list = [
    { id: 1, name: "徳島工場" },
    { id: 2, name: "大野制帽所" },
    { id: 3, name: "高田や刺繍" },
    { id: 4, name: "徳島工場" },
    { id: 5, name: "大野制帽所" },
    { id: 6, name: "高田や刺繍" },
  ];

  useEffect(() => {
    const newArray = list.filter((value) => value.name.includes(search));
    setFilterItems(newArray);
  }, [search]);

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
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                工場名
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                選択
              </th>
            </tr>
          </thead>
          <tbody>
            {filteritems.map(({ id, name }) => (
              <tr key={id} className="text-md border-b border-slate-200">
                <td className="px-6 py-3">{id}</td>
                <td className="px-6 py-3">{name}</td>
                <td className="px-6 py-3">
                  <Button
                    type="button"
                    bg="bg-black"
                    size="sm"
                    onClick={() => {
                      setValue("factory", name);
                      setIsModal(false);
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
