"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FC ,useState} from "react";
type Props = {
  id: string;
  toggle: boolean;
  title: string;
};

export const Switch: FC<Props> = ({id, toggle, title }) => {
  const supabase = createClientComponentClient();
  const [inputData,setInputData] = useState<boolean>(toggle)

  const toggleAuthHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string
  ) => {
    const value = !inputData;
    updateProfile(title, value);
  };

  const updateProfile = async (title: string, value: boolean) => {
    const { error } = await supabase
      .from("profiles")
      .update({
        [title]: value,
      })
      .eq("id", id);
    if(error) {
        console.log(error)
    }
     setInputData(value)
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        defaultChecked={toggle}
        onChange={(e) => toggleAuthHandler(e, title)}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
};
