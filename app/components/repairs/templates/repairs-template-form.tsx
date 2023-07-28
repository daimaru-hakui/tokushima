"use client";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../utils/input/text-input";
import { RepairsFactoryModal } from "../repairs-factory-modal";
import { RepairsDeliveryModal } from "../repairs-delivery-modal";
import { Button } from "../../utils/button";
import { BiCloudUpload } from "react-icons/bi";

type Inputs = {};

export const RepairsTemplateForm: FC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <div className="flex gap-2 items-end">
            <TextInput
              className="mt-4 flex-1"
              type="text"
              label="工場名"
              register={{ ...register("factory", { required: true }) }}
            />
            <div>
              <RepairsFactoryModal setValue={setValue} />
            </div>
          </div>
          {errors.factory && (
            <div className="ml-2 text-red-500">工場名を入力してください</div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex gap-2 items-end">
            <TextInput
              className="mt-4 flex-1"
              type="text"
              label="納品先"
              register={{ ...register("delivery", { required: true }) }}
            />
            <div>
              <RepairsDeliveryModal setValue={setValue} />
            </div>
          </div>
          {errors.delivery && (
            <div className="ml-2 text-red-500">納品先を入力してください</div>
          )}
        </div>
      </div>
      <div className="mt-4 flex gap-4 flex-col md:flex-row">
        <div className="w-full">
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
        <div className="mt-4 w-full">
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

      <div className="mt-4 flex gap-4 flex-col md:flex-row">
        <div className="w-full">
          <TextInput
            className="mt-4"
            type="text"
            label="修理名"
            register={{ ...register("title", { required: true }) }}
          />
          {errors.title && (
            <div className="ml-2 text-red-500">修理名を入力してください</div>
          )}
        </div>
        <div className="w-full md:w-72">
          <TextInput
            className="mt-4"
            type="text"
            label="単価"
            register={{ ...register("price", { required: true }) }}
          />
          {errors.title && (
            <div className="ml-2 text-red-500">修理名を入力してください</div>
          )}
        </div>
      </div>
      <div className="mt-4 flex gap-4 flex-col md:flex-row">
        <div className="w-full">
          <TextInput
            className="mt-4"
            type="text"
            label="色"
            register={{ ...register("color", { required: true }) }}
          />
        </div>
        <div className="w-full">
          <TextInput
            className="mt-4"
            type="text"
            label="位置"
            register={{ ...register("position", { required: true }) }}
          />
        </div>
      </div>

      <div className="mt-6 mb-2 text-sm font-bold">画像をアップロード</div>
      <div className="flex gap-6 text-slate-400">
        <div className="flex justify-center p-6 w-full border border-1 border-slate-200">
          <div className="flex items-center flex-col">
            <BiCloudUpload fontSize="80px" />
            <p>Drag and drop a file or click</p>
          </div>
        </div>

        <div className="flex justify-center p-6 w-full border border-1 border-slate-200">
          <div className="flex items-center flex-col">
            <BiCloudUpload fontSize="80px" />
            <p>Drag and drop a file or click</p>
          </div>
        </div>

        <div className="flex justify-center p-6 w-full border border-1 border-slate-200">
          <div className="flex items-center flex-col">
            <BiCloudUpload fontSize="80px" />
            <p>Drag and drop a file or click</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className=" mb-2 font-bold text-sm">備考</div>
        <textarea className="h-36 leading-6 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"></textarea>
      </div>

      <div className="mt-6 flex justify-center">
        <Button type="submit" bg="bg-black">登録</Button>
      </div>
    </form>
  );
};
