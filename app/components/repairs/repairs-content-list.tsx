"use client";
import React, { FC, useState, useEffect } from "react";
import { Button } from "../utils/button";
import { Input } from "../utils/input/input";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { RepairInputs } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { RepairContentPreview } from "./repairs-content-preview";

type Props = {
  watch: UseFormWatch<RepairInputs>;
  setValue: UseFormSetValue<RepairInputs>;
  setIsModal: (payload: boolean) => void;
  onClose: () => void;
};

type Factory = Database["public"]["Tables"]["factories"]["Row"];
type RepairTemplate = Database["public"]["Tables"]["repair_templates"]["Row"];

export const RepairContentList: FC<Props> = ({
  watch,
  setValue,
  setIsModal,
  onClose,
}) => {
  const supabase = createClientComponentClient<Database>();
  const [search, setSearch] = useState("");
  const [factories, setFactories] = useState<Factory[] | null>([]);
  const [templates, setTemplates] = useState<RepairTemplate[] | null>([]);
  const [filterFactories, setFilterFactories] = useState<Factory[] | null>([]);

  useEffect(() => {
    const getFactories = async () => {
      const { data, error } = await supabase.from("factories").select("*");
      setFactories(data);
    };
    getFactories();
  }, [supabase]);

  useEffect(() => {
    const getTemplates = async () => {
      const { data, error } = await supabase
        .from("repair_templates")
        .select("*");
      if (error) {
        console.log(error);
      }
      setTemplates(data);
    };
    getTemplates();
  }, [supabase]);

  useEffect(() => {
    const newArray = factories?.filter((factory) =>
      factory.name.includes(search)
    );
    setFilterFactories(newArray || null);
  }, [factories, search]);

  const addContent = (content: any) => {
    const contents = [...watch("repair_contents"), content];
    setValue("repair_contents", contents);
  };

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
      <div className="overflow-auto h-96 mt-6">
        <table style={{ minWidth: "600px" }} className="w-full text-sm text-left">
          <thead>
            <tr className="text-xs border-b border-slate-200">
              <th scope="col" className="px-6 py-3 text-left w-[300px]">
                仕様書
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                修理名
              </th>
              <th scope="col" className="px-6 py-3 text-left w-[100px]">
                選択
              </th>
            </tr>
          </thead>
          <tbody>
            {templates?.map((template) => (
              <tr
                key={template.id}
                className="text-md border-b border-slate-200"
              >
                <td className="">
                  <div className="flex gap-3">
                    {template.images?.map((image) => (
                      <RepairContentPreview key={image} image={image} />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-3">{template.title}</td>
                <td className="px-6 py-3">
                  <Button
                    type="button"
                    bg="bg-black"
                    size="sm"
                    onClick={() => {
                      addContent(template);
                      onClose();
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
