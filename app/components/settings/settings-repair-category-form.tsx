"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/button";
import { TextInput } from "../utils/input/text-input";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Inputs = {
  id: string;
  name: string;
};

type Props = {
  pageType: "new" | "edit";
  defaultValues: Inputs;
  setIsModal?: (payload: boolean) => void;
};

export const SettingsRepairCategoryForm: FC<Props> = ({
  pageType,
  defaultValues,
  setIsModal
}) => {
  const router = useRouter();
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
    if (pageType === "new") {
      await addCateogory(data);
      router.push("/settings/categories");
      router.refresh();
    } else {
        await updateCateogory(data);
        onClose();
      router.refresh();
    }
  };

  const addCateogory = async ({id, name }: Inputs) => {
    const { data, error, status } = await supabase
      .from("repair_categories")
      .insert([{ name }])
      .select();

    if (error) {
      console.log(error);
    }
    if (status === 409) {
      alert("すでに登録されています。");
    }
  };

  const updateCateogory = async ({id, name }: Inputs) => {
    const { data, error, status } = await supabase
      .from("repair_categories")
      .update({name})
      .eq("id",id)
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
          label="カテゴリー名"
          register={{ ...register("name", { required: true }) }}
        />
        {errors.name && (
          <div className="ml-2 text-red-500">
            カテゴリー名を入力してください
          </div>
        )}

        <div className="flex justify-center gap-4">
          {pageType === "new" ? (
            <Link href="/settings/categories">
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
