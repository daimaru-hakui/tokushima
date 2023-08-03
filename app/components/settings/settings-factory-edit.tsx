"use client";
import React, { useState } from "react";
import { Modal } from "../utils/modal/modal";
import { SettingsFactoryForm } from "./settings-factory-form";

export const SettingsFactoryEdit = ({ factory }: { factory: any }) => {
  const [isModal, setIsModal] = useState(false);

  const defaultValues = {
    id: factory.id,
    name: factory.name,
    address: factory.address,
    tel: factory.tel,
  };
  return (
    <Modal size="sm" title="編集" isModal={isModal} setIsModal={setIsModal}>
      <div className="px-6">
        <SettingsFactoryForm
          pageType="edit"
          defaultValues={defaultValues}
          setIsModal={setIsModal}
        />
      </div>
    </Modal>
  );
};
