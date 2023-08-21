"use client";
import Image from "next/image";
import { FC } from "react";
import { IoMdCloseCircle } from "react-icons/io";

type Props = {
  file: File;
  deleteFile?: () => void;
  closeButon?: boolean;
};

export const RepairsTemplateFilePreview: FC<Props> = ({
  file,
  deleteFile,
  closeButon = true,
}) => {

  return (
    <div className="w-full relative">
      <Image
        alt=""
        width="100"
        height="100"
        src={URL?.createObjectURL(file || null)}
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
