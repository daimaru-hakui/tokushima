"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/button";
import { TextInput } from "../utils/text-input";
import Link from "next/link";

type Inputs = {
  name: string;
  address: string;
  tel: string;
};

export const RepairForm = () => {
  const supabase = createClientComponentClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      address: "",
      tel: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <div className="flex flex-col">
        <TextInput
          className="mt-4"
          type="text"
          label="工場名"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.name && (
          <div className="ml-2 text-red-500">工場名を入力してください</div>
        )}

        <TextInput
          className="mt-4"
          type="text"
          label="住所"
          register={{ ...register("address", { required: true }) }}
        />
        {errors.address && (
          <div className="ml-2 text-red-500">住所を入力してください</div>
        )}

        <TextInput
          className="mt-4"
          type="text"
          label="TEL"
          register={{ ...register("tel", { required: true }) }}
        />
        {errors.tel && (
          <div className="ml-2 text-red-500">TELを入力してください</div>
        )}
        <div className="flex justify-center gap-4">
          <Button size="sm" type="submit" bg="bg-black" className="mt-10">
            登録
          </Button>
          <Link href="/repairs/">
            <Button size="sm" color="text-black" className="mt-10 border border-black">
              戻る
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
};
