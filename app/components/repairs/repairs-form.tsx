"use client";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/button";
import { TextInput } from "../utils/input/text-input";
import Link from "next/link";
import { RepairsDetailForm } from "./repairs-detail-form";
import { RepairInputs } from "@/types";
import { RepairsDeliveryModal } from "./repairs-delivery-modal";
import { RepairsContentForm } from "./repairs-content-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { RepairsFactoryModal } from "./repairs-factory-modal";

type Props = {
  defaultValues: RepairInputs;
};

export const RepairForm: FC<Props> = ({ defaultValues }) => {
  const supabase = createClientComponentClient<Database>();

  const {
    control,
    watch,
    getValues,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RepairInputs>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<RepairInputs> = async (data) => {
    const result = confirm("登録して宜しいでしょうか");
    if (!result) return;
    await addRepair(data);
  };

  const addRepair = async (repair: RepairInputs) => {
    const { data: auth } = await supabase.auth.getUser();
    const { data: repairs, error: errorRepairs } = await supabase
      .from("repairs")
      .insert([
        {
          user_id: auth?.user?.id || "",
          factory_id: repair.factory.id,
          delivery_place_id: repair.delivery.id,
          deadline: repair.deadline,
          customer: repair.customer,
          status: repair.status,
          comment:repair.comment
        },
      ])
      .select();
    console.log(errorRepairs);
    if (!repairs) return;

    const { data: repairContents, error: errorContents } = await supabase
      .from("repair_contents")
      .insert(
        repair.repair_contents.map((content) => ({
          repair_id: repairs[0].id,
          title: content.title,
          images: content.images,
          price: Number(content.price),
          color: content.color,
          position: content.position,
          comment: content.comment,
        }))
      )
      .select();
    console.log(errorContents);

    const { data: repairDetails, error: errorDetails } = await supabase
      .from("repair_details")
      .insert(
        repair.repair_details.map((detail) => ({
          repair_id: repairs[0].id,
          maker: detail.maker,
          product_name: detail.productName,
          size: detail.size,
          quantity: Number(detail.quantity),
          comment: detail.comment,
        }))
      )
      .select();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <div className="flex flex-col">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex-1">
            <div className="flex gap-2 items-end">
              <TextInput
                className="mt-4 flex-1"
                type="text"
                label="工場名"
                register={{ ...register("factory.name", { required: true }) }}
              />
              <div>
                <RepairsFactoryModal  setValue={setValue}/>
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
                register={{ ...register("delivery.name", { required: true }) }}
              />
              <div>
                <RepairsDeliveryModal setValue={setValue} />
              </div>
            </div>
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
                  id="FACTORY"
                  type="radio"
                  value="FACTORY"
                  className="mr-2 w-4 h-4 text-blue-600"
                  {...register("status", { required: true })}
                />
                <label htmlFor="FACTORY" className="cursor-pointer">
                  工場直送
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <RepairsContentForm
            control={control}
            register={register}
            getValues={getValues}
            watch={watch}
            setValue={setValue}
          />
        </div>

        <RepairsDetailForm
          control={control}
          register={register}
          getValues={getValues}
          watch={watch}
        />

        <div className="mt-6">
          <div className=" mb-2 font-bold text-sm">備考</div>
          <textarea className="h-36 leading-6 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"></textarea>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/repairs/">
            <Button
              size="sm"
              color="text-black"
              className="mt-10 border border-black"
            >
              戻る
            </Button>
          </Link>
          <Button size="sm" type="submit" bg="bg-black" className="mt-10">
            登録
          </Button>
        </div>
      </div>
    </form>
  );
};
