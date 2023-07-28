import React, { FC, useState } from "react";
import { Modal } from "../utils/modal/modal";
import { UseFormSetValue } from "react-hook-form";
import { Repair } from "@/types";
import { RepairsDeliveryList } from "./repairs-delivery-list";

type Props = {
  setValue: UseFormSetValue<Repair | any>;
};

export const RepairsDeliveryModal: FC<Props> = ({ setValue }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <Modal size="md" title="検索" isModal={isModal} setIsModal={setIsModal}>
      <RepairsDeliveryList
        setValue={setValue}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </Modal>
  );
};
