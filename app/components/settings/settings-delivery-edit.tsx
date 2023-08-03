import React, { useState } from "react";
import { Modal } from "../utils/modal/modal";
import { SettingsDeliveryForm } from "./settings-delivery-form";

export const SettingsDeliveryEdit = ({ delivery }: { delivery: any }) => {
  const [isModal, setIsModal] = useState(false);

  const defaultValues = {
    id: delivery.id,
    name: delivery.name,
    address: delivery.address,
    tel: delivery.tel,
  };
  return (
    <Modal size="sm" title="編集" isModal={isModal} setIsModal={setIsModal}>
      <div className="px-6">
        <SettingsDeliveryForm
          pageType="edit"
          defaultValues={defaultValues}
          setIsModal={setIsModal}
        />
      </div>
    </Modal>
  );
};
