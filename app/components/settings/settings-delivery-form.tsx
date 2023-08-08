"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/button";
import { TextInput } from "../utils/input/text-input";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Inputs = {
  id: string;
  name: string;
  kana: string;
  address: string;
  tel: string;
};

type Props = {
  pageType: "new" | "edit";
  defaultValues: Inputs;
  setIsModal?: (payload: boolean) => void;
};

export const SettingsDeliveryForm: FC<Props> = ({
  pageType,
  defaultValues,
  setIsModal,
}) => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [isActive, setIsActive] = useState(false);
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
    if (pageType === "new") {
      await addDeliveryPlace(data);
      router.push("/settings/delivery-places");
      router.refresh();
    } else {
      await updatdeliveryPlace(data);
      onClose();
      router.refresh();
    }
  };

  const addDeliveryPlace = async ({ name, kana, address, tel }: Inputs) => {
    const { data, error, status } = await supabase
      .from("delivery_places")
      .insert([{ name, kana, address, tel }])
      .select();
    if (error) {
      console.log(error);
    }
    if (status === 409) {
      alert("すでに登録されています。");
    }
  };

  const updatdeliveryPlace = async ({
    id,
    name,
    kana,
    address,
    tel,
  }: Inputs) => {
    const { data, error, status } = await supabase
      .from("delivery_places")
      .update([{ name, kana, address, tel }])
      .eq("id", id)
      .select();
    if (error) {
      console.log(error);
    }
    if (status === 409) {
      alert("すでに登録されています。");
    }
  };

  const onClose = () => {
    const modal = document.getElementById("modal");
    if (modal) {
      let i = 1;
      const fadeOut = () => {
        setTimeout(() => {
          modal.style.opacity = i.toString();
          i = i - 0.02;
          if (i < 0) {
            setIsModal && setIsModal(false);
            setIsActive(false);
            return;
          }
          fadeOut();
        }, 1);
      };
      fadeOut();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <div className="flex flex-col">
        <TextInput
          className="mt-4"
          type="text"
          label="納品先名"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.name && (
          <div className="ml-2 text-red-500">納品先名を入力してください</div>
        )}

        <TextInput
          className="mt-4"
          type="text"
          label="フリガナ"
          register={{ ...register("kana") }}
        />

        <TextInput
          className="mt-4"
          type="text"
          label="住所"
          register={{ ...register("address") }}
        />

        <TextInput
          className="mt-4"
          type="text"
          label="TEL"
          register={{ ...register("tel") }}
        />
        <div className="flex justify-center gap-4">
          {pageType === "new" ? (
            <Link href="/settings/delivery-places">
              <Button
                size="sm"
                color="text-black"
                className="mt-10 border border-black"
              >
                戻る
              </Button>
            </Link>
          ) : (
            <>
              <Button
                type="button"
                size="sm"
                color="text-black"
                onClick={onClose}
                className="mt-10 border border-black"
              >
                戻る
              </Button>
            </>
          )}
          <Button size="sm" type="submit" bg="bg-black" className="mt-10">
            {pageType === "new" ? "登録" : "更新"}
          </Button>
        </div>
      </div>
    </form>
  );
};
