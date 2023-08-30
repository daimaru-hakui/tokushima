"use client";
import React, { useState } from "react";
import { Modal } from "../utils/modal/modal";
import { Database } from "@/lib/database.types";
import { SettingsRepairCategoryForm } from "./settings-repair-category-form";
import { useModal } from "@/app/hooks/useModal";
import {FaEdit} from "react-icons/fa"

type Category = Database["public"]["Tables"]["repair_categories"]["Row"];

export const SettingsRepairCategoryEdit = ({ category }: { category: Category; }) => {
  const [isModal, setIsModal] = useState(false);
  const {onOpen} = useModal(setIsModal);

  const defaultValues = {
    id: category.id,
    name: category.name,
  };
  return (
    <>
      <FaEdit color="black" fontSize="1rem" cursor="pointer" className="w-full" onClick={onOpen}/>
      <Modal title="編集" w="500px" isModal={isModal} setIsModal={setIsModal}>
        <div className="px-6">
          <SettingsRepairCategoryForm
            pageType="edit"
            defaultValues={defaultValues}
            setIsModal={setIsModal}
          />
        </div>
      </Modal>
    </>
  );
};
