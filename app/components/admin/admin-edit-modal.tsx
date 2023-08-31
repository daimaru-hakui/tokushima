"use client";
import React, { useState } from "react";
import { Modal } from "../utils/modal/modal";
import { Database } from "@/lib/database.types";
import { useModal } from "@/app/hooks/useModal";
import { FaEdit } from "react-icons/fa";
import { Input } from "../utils/input/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../utils/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

type Inputs = {
  username: string;
};

export const AdimnEditModal = ({ user }: { user: Profile }) => {
  const [isModal, setIsModal] = useState(false);
  const { onOpen, onClose } = useModal(setIsModal);
  const supabase = createClientComponentClient();
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user.username,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await updateProfile(data);
    router.refresh();
    onClose();
  };

  const updateProfile = async (data: Inputs) => {
    await supabase
      .from("profiles")
      .update({
        username: data.username,
      })
      .eq("id", user.id);
  };

  const onReset = () => {
    reset();
    onClose();
  }

  return (
    <>
      <FaEdit
        color="black"
        fontSize="1rem"
        cursor="pointer"
        className="w-full"
        onClick={onOpen}
      />
      <Modal title="編集" w="500px" isModal={isModal} setIsModal={setIsModal}>
        <div className="px-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input label="名前" register={{ ...register("username") }} />
            </div>
            <div className="mt-6 flex items-center justify-end gap-3">
              <Button
                type="button"
                size="sm"
                color="text-black"
                className="hover:bg-slate-100"
                onClick={onReset}
              >
                閉じる
              </Button>
              <Button type="submit" bg="bg-black" size="sm">
                更新
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

AdimnEditModal;
