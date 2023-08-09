"use client";
import React, { FC, useState, useRef } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

type Props = {
  type?: "text" | "password" | "date";
  value?: string;
  placeholder?: string;
  label?: string;
  register?: any;
  className?: string;
};

export const NumberInput: FC<Props> = ({
  placeholder = "",
  label = "",
  register,
  className,
}) => {
  const [inputNumber, setInputNumber] = useState<number | "">("");
  const topArrow = useRef(null);
  const bottomArrow = useRef(null);

  const handlePlus = () => {
    backColorChange("top");
    setInputNumber((prev) => Number(prev) + 1);
  };

  const handleMinus = () => {
    backColorChange("bottom");
    setInputNumber((prev) => Number(prev) - 1);
  };

  const backColorChange = (id: string) => {
    const time = 100
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
          className="block mb-2 text-sm font-bold text-gray-900 w-auto"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="number"
          id={label}
          value={inputNumber}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          {...register}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputNumber(Number(e.target.value))
          }
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
