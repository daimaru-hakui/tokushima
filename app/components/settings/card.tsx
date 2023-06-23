"use client";
import Link from "next/link";
import React, { FC, useState } from "react";

type Props = {
  name: string;
  link: string;
  image: any;
};

export const SettingCard: FC<Props> = ({ name, link, image }) => {
  const [active, setActive] = useState(false);

  const handleMouseOver = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (e.target) setActive(true);
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (e.target) setActive(false);
  };

  return (
    <Link
      key={name}
      href={link}
      className="w-full sm:max-w-sm text-center"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:text-white hover:bg-slate-800">
        <div
          style={{ color: active ? "white" : "black", fontSize: "50px" }}
        >
          {image}
        </div>
        <div>{name}</div>
      </div>
    </Link>
  );
};
