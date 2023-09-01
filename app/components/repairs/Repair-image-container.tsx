"use client";
import React, { FC, useState } from "react";
import { RepairImage } from "./repair-image";

type Props = {
  images: string[];
};

export const RepairImageContainer: FC<Props> = ({ images }) => {
  const [imageNum, setImageNum] = useState(0);

  const imageChangeHandler = (idx: number) => {
    setImageNum(idx);
  };

  const currentImage = (idx: number | null) => {
    return imageNum === idx;
  };

  if (images.length === 0) return;
  return (
    <div className="flex flex-col w-[calc(500px)]">
      <div>
        <RepairImage
          image={images[imageNum]}
          currentImage={currentImage.bind(null, null)}
          onClick={imageChangeHandler.bind(null, imageNum)}
        />
      </div>
      <div className="w-full mt-1 flex gap-3">
        {images.map((image, idx: number) => (
          <RepairImage
            key={image}
            image={image}
            width={"w-1/3"}
            currentImage={currentImage.bind(null, idx)}
            onClick={imageChangeHandler.bind(null, idx)}
          />
        ))}
      </div>
    </div>
  );
};
