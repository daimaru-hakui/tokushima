"use client";
import React, { FC } from "react";
import { Input } from "../utils/input/input";
import {
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormWatch,
  useFieldArray,
} from "react-hook-form";
import { Button } from "../utils/button";
import { PiPlusBold } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";

type Inputs = {
  factory: string;
  delivery: string;
  deadline: string;
  customer: string;
  status: string;
  repair_contents: {
    title: string;
    image: string;
  }[];
  repair_details: {
    maker: string;
    productName: string;
    size: string;
    quantity: number;
    comment: string;
  }[];
};

type Props = {
  control: Control<Inputs, any>;
  register: UseFormRegister<Inputs>;
  getValues: UseFormGetValues<Inputs>;
  watch: UseFormWatch<Inputs>;
};

export const RepairsDetailForm: FC<Props> = ({ control, register }) => {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "repair_details",
  });

  const addDetail = () => {
    append({
      maker: "",
      productName: "",
      size: "",
      quantity: 0,
      comment: "",
    });
  };

  const removeDetail = (idx: number) => {
    remove(idx);
  };

  return (
    <>
      <div className="mt-12 overflow-auto">
        <table style={{ minWidth: "800px" }} className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-1 text-sm text-left">メーカー</th>
              <th className="px-1 text-sm text-left">品名</th>
              <th className="px-1 text-sm text-left">サイズ</th>
              <th className="px-1 text-sm text-left">数量</th>
              <th className="px-1 text-sm text-left">備考</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, idx) => (
              <tr key={field.id} className="">
                <td className="p-1 w-40">
                  <Input
                    register={{ ...register(`repair_details.${idx}.maker`) }}
                  />
                </td>
                <td className="p-1 w-96">
                  <Input
                    register={{
                      ...register(`repair_details.${idx}.productName`),
                    }}
                  />
                </td>
                <td className="p-1 w-20">
                  <Input
                    register={{ ...register(`repair_details.${idx}.size`) }}
                  />
                </td>
                <td className="p-1 w-20">
                  <Input
                    register={{ ...register(`repair_details.${idx}.quantity`) }}
                  />
                </td>
                <td style={{ minWidth: "200px" }} className="p-1 ">
                  <Input
                    register={{ ...register(`repair_details.${idx}.comment`) }}
                  />
                </td>
                <td>
                  {idx !== 0 && (
                    <FaTrashAlt
                      className="ml-2 cursor-pointer"
                      onClick={() => removeDetail(idx)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full mt-6 flex justify-center">
        <Button type="button" size="sm" bg="bg-black" onClick={addDetail}>
          <PiPlusBold className="mr-1" />
          追加
        </Button>
      </div>
    </>
  );
};
