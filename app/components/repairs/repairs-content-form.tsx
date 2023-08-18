/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { FC, useState } from "react";
import { Modal } from "../utils/modal/modal";
import {
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useFieldArray,
} from "react-hook-form";
import { Repair } from "@/types";
import { Button } from "../utils/button";
import { Input } from "../utils/input/input";
import { FaTrashAlt } from "react-icons/fa";
import { RepairContentList } from "./repairs-content-list";
import { useModal } from "@/app/hooks/useModal";
import { RepairContentPreview } from "./repairs-content-preview";

type Inputs = {
  factory: string;
  delivery: string;
  deadline: string;
  customer: string;
  status: string;
  repair_contents: {
    title: string;
    images: string[];
    price: number;
  }[];
  repair_details: {
    maker: string;
    productName: string;
    size: string;
    quantity: number;
    comment: string;
  }[];
};

type Props = {
  setValue: UseFormSetValue<Repair | any>;
  register: UseFormRegister<Repair>;
  control: Control<Repair>;
  getValues: UseFormGetValues<Repair>;
  watch: UseFormWatch<Repair>;
};

export const RepairsContentForm: FC<Props> = ({
  setValue,
  control,
  register,
  watch,
}) => {
  const [isModal, setIsModal] = useState(false);
  const { onOpen, onClose } = useModal(setIsModal);
  const { fields, remove } = useFieldArray({
    control,
    name: "repair_contents",
  });

  const removeContent = (idx: number) => {
    remove(idx);
  };

  return (
    <>
      {fields.map((field, idx) => (
        <React.Fragment key={field.id}>
          {watch("repair_contents")[idx].title && (
            <div
              id={`content-${idx}`}
              style={{ transformOrigin: "top" }}
              className="w-full mt-6 p-6 flex items-center justify-between gap-3 border border-gray-200 rounded-md"
            >
              <div className="flex gap-6">
                <div className="">
                  <Input
                    className="hidden"
                    register={{ ...register(`repair_contents.${idx}.images`) }}
                  />
                  <div className="flex gap-3">
                    {watch("repair_contents")[idx].images.map((image) => (
                      <RepairContentPreview key={image} image={image} />
                    ))}
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <div className="flex flex-col align-start">
                    <div className="font-bold text-xs">修理名</div>
                    <div className="p-1 w-full">
                      <Input
                        className="hidden"
                        register={{
                          ...register(`repair_contents.${idx}.title`, {
                            required: true,
                          }),
                        }}
                      />
                      <div className="flex items-center gap-3 text-sm">
                        {watch("repair_contents")[idx].title}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex font-bold text-xs">金額</div>
                    <div className="flex items-center gap-1">
                      <Input
                        className="mt-1 w-[100px]"
                        register={{
                          ...register(`repair_contents.${idx}.price`),
                        }}
                      />
                      <span>円</span>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col">
                      <div className="flex font-bold text-xs">カラー</div>
                      <div className="flex items-center gap-3 text-sm">
                        {watch("repair_contents")[idx].color}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex font-bold text-xs">位置</div>
                      <div className="flex items-center gap-3 text-sm">
                        {watch("repair_contents")[idx].position}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex font-bold text-xs">コメント</div>
                    <div className="flex items-center gap-3 text-sm">
                      {watch("repair_contents")[idx].comment}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <FaTrashAlt
                  className="ml-2 cursor-pointer"
                  onClick={() => removeContent(idx)}
                />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}

      <div className="flex items-center mt-6">
        <Button
          type="button"
          bg="bg-black"
          size="md"
          className="w-full"
          onClick={onOpen}
        >
          テンプレート
        </Button>
      </div>
      <Modal w="700px" title="検索" isModal={isModal} setIsModal={setIsModal}>
        <RepairContentList
          watch={watch}
          setValue={setValue}
          onClose={onClose}
          setIsModal={setIsModal}
        />
      </Modal>
    </>
  );
};
