/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../utils/input/text-input";
import { RepairsFactoryModal } from "../repairs-factory-modal";
import { Button } from "../../utils/button";
import { BiCloudUpload } from "react-icons/bi";
import { RepairsCategoryModal } from "../repairs-category-modal";
import { NumberInput } from "../../utils/input/number-input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { v4 as uuidv4 } from "uuid";
import { RepairTemplate } from "@/types";
import { IoMdCloseCircle } from "react-icons/io";
import { RepairsTemplatePreview } from "./repairs-template-preview";
import { useRouter } from "next/navigation";
import Image from "next/image";


type Props = {
  pageType: "new" | "edit";
  defaultValues: RepairTemplate;
  setIsModal?: (payload: boolean) => void;

};

export const RepairsTemplateForm: FC<Props> = ({ pageType, defaultValues }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [price, setPrice] = useState<number | "">("");
  const [fileUpload, setFileUpload] = useState<any>(defaultValues.images);
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const onSubmit = async (data: RepairTemplate) => {
    console.log(data);
    const images = await addRepairImages(fileUpload);
    await addRepairTemplate(data, images);
    // router.push("/repairs/templates");
    // router.refresh();
  };

  const addRepairImages = async (fileUpload: any) => {
    if (fileUpload?.length === 0) return;
    const fileArray = fileUpload.map(async (image: any) => {
      const uuid = uuidv4();
      const { data: inputData, error: inputError } = await supabase.storage
        .from("repairs")
        .upload(uuid + '.png', image, {
          cacheControl: "3600",
          upsert: false,
        });
      if (inputError) return;

      const { data, error } = await supabase.storage
        .from("repairs")
        .createSignedUrl(inputData.path, 600);

      if (error) return;
      console.log(data.signedUrl);
      console.log(inputData.path);
      return { path: inputData.path, url: data?.signedUrl };
    });
    return await pathArray(fileArray);
  };

  const pathArray = async (fileArray: any) => {
    let imageArray = [];
    for (const file of fileArray) {
      imageArray.push(await file);
    }
    console.log(imageArray);
    return imageArray;
  };

  const addRepairTemplate = async (
    repair: RepairTemplate,
    imagePath: string[] = []
  ) => {
    const { data, error } = await supabase.from("repair_templates").insert([
      {
        factory_id: repair.factory.id,
        category_id: repair.category.id,
        customer: repair.customer,
        title: repair.title,
        price: Number(repair.price),
        color: repair.color,
        position: repair.position,
        images: [...imagePath],
        comment: repair.comment,
      },
    ]);
    console.log(error);
  };

  const deletePreviewFile = (idx: number) => {
    setFileUpload(
      fileUpload.filter((_: any, index: number) => index !== idx)
    );
  };

  const deleteImageFile = async (idx: number) => {
    const images = watch("images").filter((image, index) => (index !== idx));
    const { data, error } = await supabase.from("repair_templates").update({ images }).match({ id: defaultValues.id });
    console.log(images);
  };

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files: FileList | any = e.target.files;
    setFileUpload((prev: any) => [...prev, files[0]]);
  };

  console.log(fileUpload);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "100%", height: "100%" }}
    >
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
            <div className="ml-2 text-red-500 text-sm">
              工場名を入力してください
            </div>
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
            <div className="ml-2 text-red-500 text-sm">
              顧客名を入力してください
            </div>
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
            <div className="ml-2 text-red-500 text-sm">
              修理名を入力してください
            </div>
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
            <div className="ml-2 text-red-500 text-sm">
              単価を入力してください
            </div>
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

      {pageType === "edit" && (
        <>
          <div className="mt-6 text-sm font-bold">仕様書</div>
          <div className="mt-3 w-full flex gap-3">
            {watch("images") && watch("images")?.map((image: any, idx: number) => (
              <RepairsTemplatePreview
                key={idx}
                file={image}
                pathType="url"
                deleteFile={deleteImageFile.bind(null, idx)}
              />
            ))}
          </div>
        </>
      )}

      <div className="mt-6 mb-2 text-sm font-bold">画像をアップロード</div>
      {fileUpload?.length < 3 && (
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
              // {...register("images")}
              onChange={addImage}
            />
          </div>
        </div>
      )}

      {pageType === "new" && (
        <div className="mt-3 w-full flex gap-3">
          {fileUpload?.length >= 1 &&
            fileUpload?.map((file: any, idx: number) => (
              <RepairsTemplatePreview
                key={idx}
                file={file}
                deleteFile={deletePreviewFile.bind(null, idx)}
              />
            ))}
        </div>
      )}



      <div className="mt-6">
        <div className=" mb-2 font-bold text-sm">備考</div>
        <textarea
          className="h-36 leading-6 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          {...register("comment")}
        ></textarea>
      </div>
      <div className="mt-6 flex justify-center">
        <Button type="submit" bg="bg-black">
          登録
        </Button>
      </div>
    </form>
  );
};
