"use client";
import { FC, Fragment } from "react";
import { Menu } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { PiGearBold } from "react-icons/pi";
import Link from "next/link";

type Props = {
  menuList: {
    name: string;
    link: string;
  }[];
};

export const MenuButton: FC<Props> = ({ menuList }) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log(error.message);
      }
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <Menu shadow="md" width={200} zIndex={1000} offset={10}>
      <Menu.Target>
        <div><PiGearBold className="cursor-pointer" size="30px" /></div>
      </Menu.Target>

      <Menu.Dropdown>
        {menuList.map(({ name, link }) => (
          <Link key={name} href={link}>
            <Menu.Item>{name}</Menu.Item>
          </Link>
        ))}
        <Menu.Item onClick={signOut}>ログアウト</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
