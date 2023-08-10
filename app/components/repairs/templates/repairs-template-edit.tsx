"use client";
import React, { FC, useState } from "react";
import { Modal } from "../../utils/modal/modal";
import { Database } from "@/lib/database.types";
import { RepairsTemplateForm } from "./repairs-template-form";
import { FaRegEdit } from "react-icons/fa";

type DeliveryPlace = Database["public"]["Tables"]["delivery_places"]["Row"];

type Props = {
  repairTemplate: any;
};

export const RepairsTemplateEdit: FC<Props> = ({ repairTemplate }) => {
  const [isModal, setIsModal] = useState(false);
  const onOpen = () => setIsModal(true);

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
    images: [{ path: "/images/20230731.png" }],
    comment: repairTemplate.comment,
  };

  return (
    <>
      <FaRegEdit cursor="pointer" onClick={onOpen} />
      <Modal size="sm" title="編集" isModal={isModal} setIsModal={setIsModal}>
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
