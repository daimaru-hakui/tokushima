import React, { FC, useState } from "react";
import { Modal } from "../utils/modal/modal";
import { UseFormSetValue } from "react-hook-form";
import { Repair } from "@/types";
import { RepairFactoryList } from "./repairs-factory-list";

type Props = {
  setValue: UseFormSetValue<Repair | any>;
};

export const RepairsFactoryModal: FC<Props> = ({ setValue }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <Modal size="md" title="検索" isModal={isModal} setIsModal={setIsModal}>
      <RepairFactoryList
        setValue={setValue}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </Modal>
  );
};
