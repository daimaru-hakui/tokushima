import React, { FC } from "react";

type Props = {
  type?: "text" | "password" | "date" |"number";
  value?: string;
  placeholder?: string;
  label?: string;
  register?: any;
  className?: string;
  onChange?:Function
};

export const Input: FC<Props> = ({
  type = "text",
  value,
  placeholder = "",
  label = "",
  register,
  className,
  onChange
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={label}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        {...register}
        onChange={onChange}
      />
    </div>
  );
};
