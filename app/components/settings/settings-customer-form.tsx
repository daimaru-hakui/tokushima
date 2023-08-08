"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/button";
import { TextInput } from "../utils/input/text-input";
import Link from "next/link";

type Inputs = {
  code: number | null;
  name: string;
};

type Props = {
  pageType: "new" | "edit";
  defaultValues: Inputs;
};

export const SettingsCustomerForm: FC<Props> = ({
  pageType,
  defaultValues,
}) => {
  const supabase = createClientComponentClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = confirm(
      `${pageType === "new" ? "登録" : "更新"}して宜しいでしょうか`
    );
    if (!result) return;
    await addCustomer(data)
  };

  const addCustomer = async ({ code, name }: Inputs) => {
    const { data, error, status } = await supabase
      .from("customers")
      .insert([{ code, name }])
      .select();

    if (error) {
      console.log(error);
    }
    if (status === 409) {
      alert("すでに登録されています。");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <div className="flex flex-col">
        <TextInput
          className="mt-4 w-[150px]"
          type="text"
          label="お客様コード"
          register={{ ...register("code", { required: true }) }}
        />
        {errors.code && (
          <div className="ml-2 text-red-500">住所を入力してください</div>
        )}
        <TextInput
          className="mt-4"
          type="text"
          label="顧客名"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.name && (
          <div className="ml-2 text-red-500">顧客名を入力してください</div>
        )}


        <div className="flex justify-center gap-4">
          <Button size="sm" type="submit" bg="bg-black" className="mt-10">
            登録
          </Button>
          <Link href="/settings/customers">
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
