"use client";
import Link from "next/link";
import React, { FC, useState } from "react";

type Props = {
  name: string;
  link: string;
  icon: JSX.Element;
};

export const Card: FC<Props> = ({ name, link, icon }) => {
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
      className="w-full text-center"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:text-white hover:bg-slate-800">
        <div 
          style={{ color: active ? "white" : "black", fontSize: "50px"}}
          className="flex justify-center"
        >
          {icon}
        </div>
        <div className="mt-3">{name}</div>
      </div>
    </Link>
  );
};
