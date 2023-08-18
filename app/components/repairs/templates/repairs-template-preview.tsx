"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

type Props = {
  file: any;
  deleteFile?: () => void;
  pathType?: "path" | "file";
  closeButon?:boolean;
};

export const RepairsTemplatePreview: FC<Props> = ({
  file,
  deleteFile,
  pathType = "file",
  closeButon = true
}) => {
  const supabase = createClientComponentClient();
  const [imageUrl, setImageUrl] = useState<any>("");

  useEffect(() => {
    const getImage = async (file: string) => {
      const { data, error } = await supabase.storage
        .from("repairs")
        .createSignedUrl(file, 600);
      if (error) return;
      setImageUrl(data?.signedUrl);
    };
    getImage(file);
  }, []);

  if (!imageUrl && pathType === "path") return;
  if (!file && pathType === "file") return;

  return (
    <div className="w-full relative">
      <Image
        alt=""
        width="100"
        height="100"
        src={
          pathType === "file"
             ? URL?.createObjectURL(file || null)
             : imageUrl
        }
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
        className="p-3 border border-1 border-gray-200"
      />
      <div className="absolute top-0 right-0 w-[30px] h-[30px] rounded-full bg-white z-1"></div>
      {closeButon && (
      <div className="absolute top-0 right-0">
        <IoMdCloseCircle
          fontSize="36px"
          className="cursor-pointer"
          onClick={deleteFile}
        />
      </div>
      )}
    </div>
  );
};
