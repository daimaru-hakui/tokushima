"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

type Props = {
  links: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
};

export const NavMenu: FC<Props> = ({ links }) => {
  const pathname = usePathname().split("/");
  pathname.shift();
  const linkPath = "/" + pathname.join();

  return (
    <div className="hidden lg:flex space-x-6">
      {links.map(({ name, link, icon }) => (
        <Link key={name} href={link} className="text-black">
          <div
            className={`${
              linkPath === link ? "border-b-2" : ""
            } flex items-center gap-1 py-1 pr-2`}
          >
            {icon}
            {name}
          </div>
        </Link>
      ))}
    </div>
  );
};
