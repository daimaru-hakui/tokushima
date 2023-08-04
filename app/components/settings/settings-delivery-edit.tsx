"use client";
import React, { FC, useState } from "react";
import { Modal } from "../utils/modal/modal";
import { SettingsDeliveryForm } from "./settings-delivery-form";
import { Database } from "@/lib/database.types";
import { Button } from "../utils/button";

type DeliveryPlace = Database["public"]["Tables"]["delivery_places"]["Row"];

type Props = {
  deliveryPlace: DeliveryPlace;
};

export const SettingsDeliveryEdit: FC<Props> = ({ deliveryPlace }) => {
  const [isModal, setIsModal] = useState(false);
  const onOpen = () => setIsModal(true);

  const defaultValues = {
    id: deliveryPlace?.id,
    name: deliveryPlace?.name,
    kana: deliveryPlace.kana || "",
    address: deliveryPlace?.address || "",
    tel: deliveryPlace?.tel || "",
  };
  return (
    <>
      <Button type="button" bg="bg-black" size="sm" onClick={onOpen}>
        編集
      </Button>
      <Modal size="sm" title="編集" isModal={isModal} setIsModal={setIsModal}>
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
