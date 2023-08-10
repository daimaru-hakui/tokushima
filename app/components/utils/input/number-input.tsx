"use client";
import { RepairTemplate } from "@/types";
import React, { FC, useState, useRef, useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

type Props = {
  type?: "text" | "password" | "date";
  value?: number | "";
  placeholder?: string;
  label?: string;
  register?: any;
  className?: string;
  required?: boolean;
  setNumber: (payload: any) => void;
  setValue?: UseFormSetValue<any>;
};

export const NumberInput: FC<Props> = ({
  placeholder = "",
  label = "",
  register,
  className,
  required = false,
  setNumber,
  setValue,
  value,
}) => {
  const topArrow = useRef(null);
  const bottomArrow = useRef(null);

  const handlePlus = () => {
    backColorChange("top");
    setNumber((prev:any) => Number(prev) + 1);
    if (!setValue) return;
    setValue("price", Number(value) + 1, { shouldValidate: true });
  };

  const handleMinus = () => {
    backColorChange("bottom");
    setNumber((prev: any) => Number(prev) - 1);
    if (!setValue) return;
    setValue("price", Number(value) - 1, { shouldValidate: true });
  };

  const backColorChange = (id: string) => {
    const time = 100;
    const elment = window.document.getElementById(id);
    if (elment) {
      elment.style.backgroundColor = "#dde2e7";
      setTimeout(() => {
        elment.style.backgroundColor = "";
      }, time);
    }
  };

  return (
    <div className={`${className}`}>
      {label && (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-bold text-gray-900 w-auto flex"
        >
          {label}
          {required && <div className="text-red-500">*</div>}
        </label>
      )}
      <div className="relative">
        <input
          type="number"
          id={label}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          {...register}
          value={value}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="absolute top-0 right-0 w-[30px] h-full flex flex-col justify-around items-center border-l border-gray-300 rounded-r-lg overflow-hidden	">
          <div
            id="top"
            ref={topArrow}
            className="w-full h-full flex justify-center items-center"
          >
            <BiSolidUpArrow onClick={handlePlus} className="cursor-pointer" />
          </div>
          <div className="h-[1px] w-full bg-gray-300"></div>
          <div
            id="bottom"
            ref={bottomArrow}
            className="w-full h-full flex justify-center items-center"
          >
            <BiSolidDownArrow
              onClick={handleMinus}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
