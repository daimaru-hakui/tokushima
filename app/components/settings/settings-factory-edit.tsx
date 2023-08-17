"use client";
import React, { useState } from "react";
import { Modal } from "../utils/modal/modal";
import { SettingsFactoryForm } from "./settings-factory-form";
import { Database } from "@/lib/database.types";
import { Button } from "../utils/button";
import { useModal } from "@/app/hooks/useModal";

type Factory = Database["public"]["Tables"]["factories"]["Row"];

export const SettingsFactoryEdit = ({ factory }: { factory: Factory; }) => {
  const [isModal, setIsModal] = useState(false);
  const {onOpen,onClose} = useModal(setIsModal)

  const defaultValues = {
    id: factory.id,
    name: factory.name,
    kana: factory.kana || "",
    address: factory.address || "",
    tel: factory.tel || "",
  };
  return (
    <>
      <Button type="button" bg="bg-black" size="sm" onClick={onOpen}>
        編集
      </Button>
      <Modal title="編集" w="500px" isModal={isModal} setIsModal={setIsModal}>
        <div className="px-6">
          <SettingsFactoryForm
            pageType="edit"
            defaultValues={defaultValues}
            setIsModal={setIsModal}
          />
        </div>
      </Modal>
    </>
  );
};
