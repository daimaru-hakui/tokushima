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
  address: string;
  tel: string;
};

type Props = {
  pageType: "edit" | "new";
  defaultValues: Inputs;
  setIsModal?: (payload: boolean) => void;
};

export const SettingsFactoryForm: FC<Props> = ({
  pageType,
  setIsModal,
  defaultValues,
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const supabase = createClientComponentClient();

  const addFactory = async ({ name, address, tel }: Inputs) => {
    const { data, error } = await supabase
      .from("factories")
      .insert([{ name, address, tel }])
      .select();
    if (error) {
      console.log(error);
    }
  };

  const updateFactory = async ({ id, name, address, tel }: Inputs) => {
    const { data, error, status } = await supabase
      .from("factories")
      .update([{ name, address, tel }])
      .eq("id", id)
      .select();
    if (error) {
      console.log(error);
    }
    if (status === 409) {
      alert("すでに登録されています。");
    }
  };

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
      await addFactory(data);
      router.push("/settings/factories");
      router.refresh();
    } else {
      await updateFactory(data);
      onClose();
      router.refresh();
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
            <>
              <Link href="/settings/factories">
                <Button
                  type="button"
                  size="sm"
                  color="text-black"
                  className="mt-10 border border-black"
                >
                  戻る
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button
                type="button"
                size="sm"
                color="text-black"
                onClick={onClose}
                className="mt-10 border border-black"
              >
               閉じる
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
