"use client";
import React, { FC, useState } from "react";
import { Modal } from "../../utils/modal/modal";
import { Database } from "@/lib/database.types";
import { FaRegEdit } from "react-icons/fa";
import { RepairsTemplateForm } from "./repairs-template-form";
import { RepairTemplate } from "@/types";
import { useModal } from "@/app/hooks/useModal";


type Props = {
  repairTemplate: RepairTemplate 
};

export const RepairsTemplateEdit: FC<Props> = ({ repairTemplate }) => {
  const [isModal, setIsModal] = useState(false);
  const {onOpen,onClose} = useModal(setIsModal)

  return (
    <>
      <FaRegEdit cursor="pointer" onClick={onOpen} />
      <Modal title="編集" isModal={isModal} setIsModal={setIsModal} w="800px">
        <div className="px-6">
          <RepairsTemplateForm
            pageType="edit"
            defaultValues={repairTemplate}
            setIsModal={setIsModal}
            onClose={onClose}
          />
        </div>
      </Modal>
    </>
  );
};
