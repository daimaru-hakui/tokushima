"use client";
import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";

type Props = {
  image: string;
  currentImage: Function;
  width?:string;
  onClick: () => void;
};

export const RepairImage: FC<Props> = ({ image, currentImage,width, onClick }) => {
  const supabase = createClientComponentClient<Database>();
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const getImage = async (file: string | null) => {
      if (!file) return;
      const { data, error } = await supabase.storage
        .from("repairs")
        .createSignedUrl(file, 600);
      if (error) return;
      console.log(data);
      setUrl(data?.signedUrl);
    };
    getImage(image);
  }, [image]);

  if (!url) return;

  return (
    <div
      className={`${
        currentImage()
          ? "border-4 border-yellow-20"
          : "border-4 border-neutral-50"
      } ${width}`}
    >
      <Image
        src={url}
        alt={""}
        width={500}
        height={500}
        className={`cursor-pointer shadow-md`}
        onClick={onClick}
      />
    </div>
  );
};
