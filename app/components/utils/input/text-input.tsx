import React, { FC } from "react";

type Props = {
  type?: "text" | "password" | "date";
  placeholder?: string;
  label?: string;
  register?: any;
  className?: string;
};

export const TextInput: FC<Props> = ({
  type = "text",
  placeholder = "",
  label = "",
  register,
  className,
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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};
