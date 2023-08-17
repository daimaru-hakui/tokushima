"use client";
import React, { FC, useState } from "react";
import { Modal } from "../../utils/modal/modal";
import { Database } from "@/lib/database.types";
import { RepairsTemplateForm2 } from "./repairs-template-form2";
import { FaRegEdit } from "react-icons/fa";
import { RepairsTemplateForm } from "./repairs-template-form";

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

  return (
    <>
      <FaRegEdit cursor="pointer" onClick={onOpen} />
      <Modal title="編集" isModal={isModal} setIsModal={setIsModal} w="800px">
        <div className="px-6">
          <RepairsTemplateForm
            pageType="edit"
            defaultValues={repairTemplate}
            setIsModal={setIsModal}
          />
        </div>
      </Modal>
    </>
  );
};
