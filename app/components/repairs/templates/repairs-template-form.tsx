/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../utils/input/text-input";
import { RepairsFactoryModal } from "../repairs-factory-modal";
import { Button } from "../../utils/button";
import { BiCloudUpload } from "react-icons/bi";
import { RepairsCategoryModal } from "../repairs-category-modal";
import { IoMdCloseCircle } from "react-icons/io";
import Image from "next/image";
import { NumberInput } from "../../utils/input/number-input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { v4 as uuidv4 } from 'uuid';
import { Database } from "@/lib/database.types";
import { RepairTemplate } from "@/types";

// type RepairTemplate = Database["public"]["Tables"]["repair_templates"]["Row"];

type Props = {
  pageType: "new" | "edit";
  defaultValues: RepairTemplate;
  setIsModal?: (payload: boolean) => void;
};

export const RepairsTemplateForm: FC<Props> = ({ defaultValues }) => {
  const supabase = createClientComponentClient();
  const [price, setPrice] = useState<number | "">("");
  const [fileUpload, setFileUpload] = useState<any>("");
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues
  });
  const onSubmit = async (data: RepairTemplate) => {
    console.log(data);
    const imagePath = await addRepairImage(data);
    console.log(imagePath);
    await addRepairTemplate(data, imagePath);
  };

  const addRepairImage = async (data: RepairTemplate) => {
    if (!data?.image_path) return;
    const uuid = uuidv4();
    const { data: inputData, error } = await supabase.storage
      .from("repairs")
      .upload(uuid, data.image_path[0], { cacheControl: "3600", upsert: false });
    return inputData?.path;
  };

  const addRepairTemplate = async (repair: RepairTemplate, imagePath: string = "") => {
    const { data, error } = await supabase
      .from("repair_templates")
      .insert([
        {
          factory_id: repair.factory.id,
          category_id: repair.category.id,
          customer: repair.customer,
          title: repair.title,
          price: Number(repair.price),
          color: repair.color,
          position: repair.position,
          image_path: imagePath,
          comment: repair.comment
        }]);
    console.log(error);
  };

  useEffect(() => {
    const file = watch("image_path");
    if (file?.length === 0) return;
    setFileUpload(file);
  }, [watch("image_path")]);

  const deletefile = () => {
    setFileUpload("");
    setValue("image_path", "");
  };

  // const deletefile = (idx: number) => {
  //   setFileUpload(
  //     Array.from(fileUpload).filter((_, index: number) => index !== idx)
  //   );
  //   setValue(
  //     "image_path",
  //     Array.from(fileUpload).filter((_, index: number) => index !== idx)
  //   );
  // };

  // const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const files: FileList | any = e.target.files;
  //   setFileUpload((prev: any) => [...prev, ...files]);
  //   setValue("image_path", [...fileUpload, ...files]);
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", height: "100%" }}>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <div className="flex gap-2 items-end">
            <input className="hidden" {...register("factory.id")} />
            <TextInput
              className="mt-4 flex-1"
              type="text"
              label="工場名"
              disabled
              required
              register={{ ...register("factory.name", { required: true }) }}
            />
            <div>
              <RepairsFactoryModal setValue={setValue} />
            </div>
          </div>
          {errors.factory && (
            <div className="ml-2 text-red-500 text-sm">工場名を入力してください</div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex gap-2 items-end">
            <input className="hidden" {...register("category.id")} />
            <TextInput
              className="mt-4 flex-1"
              type="text"
              label="カテゴリー"
              required
              register={{ ...register("category.name", { required: true }) }}
            />
            <div>
              <RepairsCategoryModal setValue={setValue} />
            </div>
          </div>
          {errors.category && (
            <div className="ml-2 text-red-500 text-sm">
              カテゴリー名を入力してください
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 flex gap-4 flex-col md:flex-row">
        <div className="w-full">
          <TextInput
            className="mt-4"
            type="text"
            label="顧客名"
            required
            register={{ ...register("customer", { required: true }) }}
          />
          {errors.customer && (
            <div className="ml-2 text-red-500 text-sm">顧客名を入力してください</div>
          )}
        </div>
      </div>

      <div className="mt-4 flex gap-4 flex-col md:flex-row">
        <div className="w-full">
          <TextInput
            className="mt-4"
            type="text"
            label="修理名"
            required
            register={{ ...register("title", { required: true }) }}
          />
          {errors.title && (
            <div className="ml-2 text-red-500 text-sm">修理名を入力してください</div>
          )}
        </div>
        <div className="w-full md:w-72">
          <NumberInput
            className="mt-4"
            label="単価"
            required
            register={{ ...register("price", { required: true }) }}
            value={price}
            setNumber={setPrice}
            setValue={setValue}
          />
          {errors.price && (
            <div className="ml-2 text-red-500 text-sm">単価を入力してください</div>
          )}
        </div>
      </div>
      <div className="mt-4 flex gap-4 flex-col md:flex-row">
        <div className="w-full">
          <TextInput
            className="mt-4"
            type="text"
            label="色"
            register={{ ...register("color") }}
          />
        </div>
        <div className="w-full">
          <TextInput
            className="mt-4"
            type="text"
            label="位置"
            register={{ ...register("position") }}
          />
        </div>
      </div>

      <div className="mt-6 mb-2 text-sm font-bold">画像をアップロード</div>

      {fileUpload?.length === 0 && (
        <div className="flex gap-6 text-slate-400">
          <div className="flex justify-center w-full h-[250px] border-dashed border-2 border-slate-200 relative">
            <label
              htmlFor="image"
              className="absolute top-0 left-0 z-0 w-full h-full flex items-center justify-center"
            >
              <div className="flex items-center justify-center flex-col">
                <BiCloudUpload fontSize="80px" />
                <p>ファイルをここにドラッグ＆ドロップしてください。</p>
              </div>
            </label>
            <input
              id="image"
              type="file"
              className="w-full opacity-0 z-1 cursor-pointer"
              {...register("image_path")}
            />
          </div>
        </div>
      )}

      <div className="mt-3 w-full flex gap-3">
        {fileUpload?.length > 0 && (


          <div key={fileUpload[0]} className="w-full relative">
            <Image
              alt=""
              width="100"
              height="100"
              src={URL.createObjectURL(fileUpload[0])}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="p-3 border border-1 border-gray-200"
            />
            <div className="absolute top-0 right-0 w-[30px] h-[30px] rounded-full bg-white z-1"></div>
            <div className="absolute top-0 right-0">
              <IoMdCloseCircle
                fontSize="36px"
                className="cursor-pointer"
                onClick={deletefile}
              />
            </div>
          </div>
        )
        }
      </div>

      <div className="mt-6">
        <div className=" mb-2 font-bold text-sm">備考</div>
        <textarea className="h-36 leading-6 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" {...register("comment")}></textarea>
      </div>
      <div className="mt-6 flex justify-center">
        <Button type="submit" bg="bg-black">
          登録
        </Button>
      </div>
    </form>
  );
};
