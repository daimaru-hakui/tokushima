"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

type Props = {
  image: string;
};

export const RepairContentPreview: FC<Props> = ({ image }) => {
  const [imageUrl, setImageUrl] = useState<any>("");
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getImage = async (image: string) => {
      const { data, error } = await supabase.storage
        .from("repairs")
        .createSignedUrl(image, 600);
      setImageUrl(data?.signedUrl);
    };
    getImage(image);
  }, [supabase.storage, image]);

  return (
    <div className="h-[200px]">
      {imageUrl && (
        <Image
          style={{width:"100%", height: "100%", objectFit: "contain" }}
          src={imageUrl}
          alt=""
          width={250}
          height={250}
        />
      )}
    </div>
  );
};
