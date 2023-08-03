"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/button";
import { TextInput } from "../utils/input/text-input";
import Link from "next/link";

type Inputs = {
  id: string;
  name: string;
  address: string;
  tel: string;
};

type Props = {
  pageType: "new" | "edit";
  defaultValues: Inputs;
  setIsModal: (payload: boolean) => void;
};

export const SettingsDeliveryForm: FC<Props> = ({
  pageType,
  defaultValues,
  setIsModal,
}) => {
  const supabase = createClientComponentClient();
  const [isActive, setIsActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {};

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
          label="住所"
          register={{ ...register("address") }}
        />
        {errors.address && (
          <div className="ml-2 text-red-500">住所を入力してください</div>
        )}

        <TextInput
          className="mt-4"
          type="text"
          label="TEL"
          register={{ ...register("tel") }}
        />
        {errors.tel && (
          <div className="ml-2 text-red-500">TELを入力してください</div>
        )}
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
