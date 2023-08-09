"use client";
import React, { useState } from "react";
import { Modal } from "../utils/modal/modal";
import { Database } from "@/lib/database.types";
import { Button } from "../utils/button";
import { SettingsRepairCategoryForm } from "./settings-repair-category-form";

type Category = Database["public"]["Tables"]["repair_categories"]["Row"];

export const SettingsRepairCategoryEdit = ({ category }: { category: Category }) => {
  const [isModal, setIsModal] = useState(false);
  const onOpen = () => setIsModal(true);

  const defaultValues = {
    id: category.id,
    name: category.name,
  };
  return (
    <>
      <Button type="button" bg="bg-black" size="sm" onClick={onOpen}>
        編集
      </Button>
      <Modal size="sm" title="編集" isModal={isModal} setIsModal={setIsModal}>
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
