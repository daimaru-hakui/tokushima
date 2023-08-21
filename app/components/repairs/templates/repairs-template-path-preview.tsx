"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

type Props = {
  file: string;
  deleteFile?: () => void;
  closeButon?: boolean;
};

export const RepairsTemplatePathPreview: FC<Props> = ({
  file,
  deleteFile,
  closeButon = true,
}) => {
  const supabase = createClientComponentClient();
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    if (!file) return;
    const getImage = async (file: string) => {
      const { data, error } = await supabase.storage
        .from("repairs")
        .createSignedUrl(file, 600);
      if (error) return;
      setImageUrl(data?.signedUrl);
    };
    getImage(file);
  }, [supabase.storage, file]);

  if(!imageUrl) return

  return (
    <div className="w-full relative">
      <Image
        alt=""
        width="100"
        height="100"
        src={imageUrl}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
        className="p-3 border border-1 border-gray-200"
      />
      {closeButon && (
        <>
          <div className="absolute top-0 right-0 w-[30px] h-[30px] rounded-full bg-white z-1"></div>
          <div className="absolute top-0 right-0">
            <IoMdCloseCircle
              fontSize="36px"
              className="cursor-pointer"
              onClick={deleteFile}
            />
          </div>
        </>
      )}
    </div>
  );
};
