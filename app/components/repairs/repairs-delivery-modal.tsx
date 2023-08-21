"use client";
import React, { FC, useState } from "react";
import { Modal } from "../utils/modal/modal";
import { UseFormSetValue } from "react-hook-form";
import { RepairsDeliveryList } from "./repairs-delivery-list";
import { Button } from "../utils/button";
import { useModal } from "@/app/hooks/useModal";
import { RepairInputs } from "@/types";

type Props = {
  setValue: UseFormSetValue<RepairInputs | any>;
};

export const RepairsDeliveryModal: FC<Props> = ({ setValue }) => {
  const [isModal, setIsModal] = useState(false);
  const {onOpen,onClose} = useModal(setIsModal)
  return (
    <>
      <Button type="button" bg="bg-black" size="md" onClick={onOpen}>
        検索
      </Button>
      <Modal w="500px" title="検索" isModal={isModal} setIsModal={setIsModal}>
        <RepairsDeliveryList
          setValue={setValue}
          onClose={onClose}
        />
      </Modal>
    </>
  );
};
