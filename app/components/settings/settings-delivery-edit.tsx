"use client";
import React, { FC, useState } from "react";
import { Modal } from "../utils/modal/modal";
import { SettingsDeliveryForm } from "./settings-delivery-form";
import { Database } from "@/lib/database.types";
import { FaEdit } from "react-icons/fa";
import { useModal } from "@/app/hooks/useModal";

type DeliveryPlace = Database["public"]["Tables"]["delivery_places"]["Row"];

type Props = {
  deliveryPlace: DeliveryPlace;
};

export const SettingsDeliveryEdit: FC<Props> = ({ deliveryPlace }) => {
  const [isModal, setIsModal] = useState(false);
  const { onOpen, onClose } = useModal(setIsModal);

  const defaultValues = {
    id: deliveryPlace?.id,
    name: deliveryPlace?.name,
    kana: deliveryPlace.kana || "",
    address: deliveryPlace?.address || "",
    tel: deliveryPlace?.tel || "",
  };
  return (
    <>
      <FaEdit
        color="black"
        fontSize="1rem"
        cursor="pointer"
        className="w-full"
        onClick={onOpen}
      />
      <Modal title="編集" w="500px" isModal={isModal} setIsModal={setIsModal}>
        <div className="px-6">
          <SettingsDeliveryForm
            pageType="edit"
            defaultValues={defaultValues}
            setIsModal={setIsModal}
          />
        </div>
      </Modal>
    </>
  );
};
