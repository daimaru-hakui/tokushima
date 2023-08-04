"use client";
import React, { FC, useState, useEffect } from "react";
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
  control: Control<Inputs, any>;
  register: UseFormRegister<Inputs>;
  getValues: UseFormGetValues<Inputs>;
  watch: UseFormWatch<Inputs>;
};

export const RepairsContentForm: FC<Props> = ({
  setValue,
  control,
  register,
  watch,
}) => {
  const [contents, setContents] = useState<any>([]);
  const [isModal, setIsModal] = useState(false);
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "repair_contents",
  });

  const addContent = () => {
    append({
      title: "",
      image: "",
    });
  };
  const onOpen = () => setIsModal(true);
  console.log(contents);

  useEffect(() => {
    const array = watch("repair_contents");
    setContents(array);
  }, [watch("repair_contents")]);

  return (
    <>
      {fields.map((field, idx) => (
        <>
          <div key={field.id} className="w-full p-6 flex gap-3">
            <div className="w-96">
              <Input
                className="hidden"
                register={{ ...register(`repair_contents.${idx}.image`) }}
              />
              {contents
                ?.filter((_: any, index: number) => idx === index)
                .map((content: any, index: number) => (
                  <img
                    key={index}
                    src={content.image}
                    className="border border-1 border-gray-200"
                  />
                ))}
            </div>
            <div>
              <div className="p-1 w-full">
                <Input
                  className="hidden"
                  register={{ ...register(`repair_contents.${idx}.title`) }}
                />
                {contents
                  ?.filter((_: any, index: number) => idx === index)
                  .map((content: any) => content.title)}
              </div>
            </div>
          </div>
            <div>
              <Button
                type="button"
                bg="bg-black"
                size="md"
                className="w-full"
                onClick={onOpen}
              >
                テンプレート
              </Button>

              <Modal
                size="md"
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
            </div>
        </>
      ))}
      <div className="w-full mt-6 flex justify-center">
        <Button type="button" size="sm" bg="bg-black" onClick={addContent}>
          <PiPlusBold className="mr-1" />
          追加
        </Button>
      </div>
    </>
  );
};
