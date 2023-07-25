"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/button";
import { TextInput } from "../utils/text-input";
import Link from "next/link";
import { Input } from "../utils/input";
import { PiPlusBold } from "react-icons/pi";

type Inputs = {
  factory: string;
  delivery: string;
  deadline: string;
  customer: string;
  status: string;
};

export const RepairForm = () => {
  const supabase = createClientComponentClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      factory: "",
      delivery: "",
      deadline: "",
      customer: "",
      status: "PICKING",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <div className="flex flex-col">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex-1">
            <TextInput
              className="mt-4"
              type="text"
              label="工場名"
              register={{ ...register("factory", { required: true }) }}
            />
            {errors.factory && (
              <div className="ml-2 text-red-500">工場名を入力してください</div>
            )}
          </div>
          <div className="flex-1">
            <TextInput
              className="mt-4"
              type="text"
              label="納品先"
              register={{ ...register("delivery", { required: true }) }}
            />
            {errors.delivery && (
              <div className="ml-2 text-red-500">納品先を入力してください</div>
            )}
          </div>
          <div className="flex-none">
            <TextInput
              className="mt-4"
              type="date"
              label="納期"
              register={{ ...register("deadline", { required: true }) }}
            />
            {errors.deadline && (
              <div className="ml-2 text-red-500">納期を入力してください</div>
            )}
          </div>
        </div>
        <div className="mt-4 flex gap-4 flex-col md:flex-row">
          <div>
            <TextInput
              className="mt-4"
              type="text"
              label="顧客名"
              register={{ ...register("customer", { required: true }) }}
            />
            {errors.customer && (
              <div className="ml-2 text-red-500">顧客名を入力してください</div>
            )}
          </div>
          <div className="mt-4">
            <div className="font-bold text-sm">入荷場所</div>
            <div className="mt-4 flex gap-4">
              <div className="flex items-center">
                <input
                  id="PICKING"
                  type="radio"
                  value="PICKING"
                  className="mr-2 w-4 h-4 text-blue-600"
                  {...register("status", { required: true })}
                />
                <label htmlFor="PICKING" className="cursor-pointer">
                  倉庫入れ
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="DIRECT"
                  type="radio"
                  value="DIRECT"
                  className="mr-2 w-4 h-4 text-blue-600"
                  {...register("status", { required: true })}
                />
                <label htmlFor="DIRECT" className="cursor-pointer">
                  工場直送
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Button type="button" w="w-full" bg="bg-black">
            テンプレート
          </Button>
        </div>

        <div className="mt-6 overflow-auto">
          <table style={{ minWidth: "800px" }} className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-1 text-sm text-left">メーカー</th>
                <th className="px-1 text-sm text-left">品名</th>
                <th className="px-1 text-sm text-left">サイズ</th>
                <th className="px-1 text-sm text-left">数量</th>
                <th className="px-1 text-sm text-left">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="p-1 w-40">
                  <Input />
                </td>
                <td className="p-1 w-96">
                  <Input />
                </td>
                <td className="p-1 w-20">
                  <Input />
                </td>
                <td className="p-1 w-20">
                  <Input />
                </td>
                <td style={{ minWidth: "200px" }} className="p-1 ">
                  <Input />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full mt-6 flex justify-center">
          <Button type="button" bg="bg-black">
            <PiPlusBold className="mr-1" />
            追加
          </Button>
        </div>

        <div className="mt-6">
          <textarea className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
        </div>

        <div className="flex justify-center gap-4">
          <Button size="sm" type="submit" bg="bg-black" className="mt-10">
            登録
          </Button>
          <Link href="/repairs/">
            <Button
              size="sm"
              color="text-black"
              className="mt-10 border border-black"
            >
              戻る
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
};
