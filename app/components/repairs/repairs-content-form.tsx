/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { FC, useState, useEffect, use } from "react";
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
import { PiPlusBold } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";
import { RepairContentList } from "./repairs-content-list";

type Inputs = {
  factory: string;
  delivery: string;
  deadline: string;
  customer: string;
  status: string;
  repair_contents: {
    title: string;
    image: string;
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
  const [length, setLength] = useState(0);
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "repair_contents",
  });

  const addContent = () => {
    append({
      title: "",
      image: "",
      price: 0
    });
  };

  const removeContent = (idx: number) => {
    remove(idx);
  };

  const onOpen = () => setIsModal(true);
  useEffect(() => {
    setLength(watch("repair_contents").length);
  }, [watch("repair_contents")]);

  const onClose = (idx: number) => {
    const content = document.getElementById(`content-${idx}`);
    if (content) {
      let i = 1;
      const fadeOut = () => {
        setTimeout(() => {
          content.style.transform = `scaleY(${i.toString()})`;
          i = i - 0.02;
          if (i < 0) {
            removeContent(idx);
            return;
          }
          fadeOut();
        }, 1);
      };
      fadeOut();
    }
  };

  return (
    <>
      {fields.map((field, idx) => (
        <React.Fragment key={field.id}>
          {(watch("repair_contents")[idx].title) && (
            <div id={`content-${idx}`} style={{ transformOrigin: "top" }} className="w-full mt-6 p-6 flex items-center justify-between gap-3">
              <div className="flex gap-3">
                <div className="w-full">
                  <Input
                    className="hidden"
                    register={{ ...register(`repair_contents.${idx}.image`) }}
                  />
                  <img
                    src={watch("repair_contents")[idx].image}
                    className="border border-1 border-gray-100 shadow-sm"
                  />
                </div>
                <div className="w-full">
                  <div className="p-1 w-full">
                    <Input
                      className="hidden"
                      register={{ ...register(`repair_contents.${idx}.title`, { required: true }) }}
                    />
                    {watch("repair_contents")[idx].title}
                  </div>
                  <div className="p-1 w-[100px] flex items-center gap-1">
                    <Input
                      className=""
                      register={{ ...register(`repair_contents.${idx}.price`) }}
                    />円
                  </div>
                </div>
              </div>
              <div>
                <FaTrashAlt
                  className="ml-2 cursor-pointer"
                  onClick={() => onClose(idx)}
                />
              </div>
            </div>
          )}
          {!watch("repair_contents")[idx].title && (
            <>
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
                {idx !== 0 && (
                  <div>
                    <FaTrashAlt
                      className="ml-2 cursor-pointer"
                      onClick={() => removeContent(idx)}
                    />
                  </div>
                )}
              </div>
              <Modal
                w="500px"
                title="検索"
                isModal={isModal}
                setIsModal={setIsModal}
              >
                <RepairContentList
                  setValue={setValue}
                  isModal={isModal}
                  setIsModal={setIsModal}
                  rowIdx={idx}
                />
              </Modal>
            </>
          )}
        </React.Fragment>
      ))}
      {(watch("repair_contents")[length - 1]?.title ||
        watch("repair_contents").length === 0) && (
          <div className="w-full mt-6 flex justify-center">
            <Button type="button" size="sm" bg="bg-black" onClick={addContent}>
              <PiPlusBold className="mr-1" />
              追加
            </Button>
          </div>
        )}
    </>
  );
};
