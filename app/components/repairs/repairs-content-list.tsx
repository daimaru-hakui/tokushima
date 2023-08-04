"use client";
import React, { FC, useState, useEffect } from "react";
import { Button } from "../utils/button";
import { Input } from "../utils/input/input";
import { UseFormSetValue } from "react-hook-form";
import { Repair } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

type Props = {
  setValue: UseFormSetValue<Repair>;
  isModal: boolean;
  setIsModal: (payload: boolean) => void;
  rowIdx: number;
};

type Factory = Database["public"]["Tables"]["factories"]["Row"];

export const RepairContentList: FC<Props> = ({
  setValue,
  isModal,
  setIsModal,
  rowIdx,
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
  }, []);

  useEffect(() => {
    const newArray = factories?.filter((factory) =>
      factory.name.includes(search)
    );
    setFilterFactories(newArray || null);
  }, [factories, search]);

  console.log("1");

  const templates = [
    {
      id: 0,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "マ・マーマカロニ宇都宮工場",
      title: "襟テーピースナッパー付け",
      price: 180,
      image: [{ path: "/images/20230731.png" }],
    },
    {
      id: 1,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "共同リネンサプライ",
      title: "裾上げ",
      price: 320,
      image: [{ path: "/images/20230731.png" }],
    },
    {
      id: 2,
      factory: {
        id: 1,
        name: "大野制帽所",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "阪急デリカアイ",
      title: "線付け",
      price: 150,
      image: [{ path: "/images/20230731.png" }],
    },
    {
      id: 3,
      factory: {
        id: 1,
        name: "徳島工場",
      },
      delivery: {
        id: 1,
        name: "配送センター",
      },
      customer: "共同リネンサプライ",
      title: "裾上げ",
      price: 320,
      image: [{ path: "/images/20230731.png" }],
    },
  ];

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
            {templates?.map(({ id, title, image }) => (
              <tr key={id} className="text-md border-b border-slate-200">
                <td className="px-6 py-3">{title}</td>
                <td className="px-6 py-3">
                  <Button
                    type="button"
                    bg="bg-black"
                    size="sm"
                    onClick={() => {
                      setValue(`repair_contents.${rowIdx}`, {
                        title,
                        image: image[0].path,
                      });
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
