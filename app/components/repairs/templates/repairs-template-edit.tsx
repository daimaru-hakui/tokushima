"use client";
import React, { FC, useState } from "react";
import { Modal } from "../../utils/modal/modal";
import { Database } from "@/lib/database.types";
import { RepairsTemplateForm } from "./repairs-template-form";
import { FaRegEdit } from "react-icons/fa";

type RepairTemplate = Database["public"]["Tables"]["repair_templates"]["Update"];

type Props = {
  repairTemplate: any;
};

export const RepairsTemplateEdit: FC<Props> = ({ repairTemplate }) => {
  const [isModal, setIsModal] = useState(false);
  const onOpen = (e: any) => {
    window.document.body.style.overflowY = "hidden";
    setIsModal(true);
  };

  const defaultValues = {
    id: repairTemplate?.id,
    factory: {
      id: repairTemplate.id,
      name: repairTemplate.name,
    },
    category: {
      id: repairTemplate.id,
      name: repairTemplate.name,
    },
    customer: repairTemplate.customer,
    title: repairTemplate.title,
    price: repairTemplate.price,
    color: repairTemplate.color,
    position: repairTemplate.position,
    image_path: repairTemplate.image_path,
    comment: repairTemplate.comment,
  };

  return (
    <>
      <FaRegEdit cursor="pointer" onClick={onOpen} />
      <Modal title="編集" isModal={isModal} setIsModal={setIsModal} w="800px">
        <div className="px-6">
          <RepairsTemplateForm
            pageType="edit"
            defaultValues={defaultValues}
            setIsModal={setIsModal}
          />
        </div>
      </Modal>
    </>
  );
};
