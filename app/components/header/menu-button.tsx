"use client";
import { FC } from "react";
import { Menu } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { PiGearBold } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";
import Link from "next/link";

type Props = {
  links: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
};

export const MenuButton: FC<Props> = ({ links }) => {
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
    <Menu
      shadow="md"
      width={200}
      zIndex={1000}
      offset={5}
      position="bottom-end"
    >
      <Menu.Target>
        <div>
          <PiGearBold className="cursor-pointer" size="30px" />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        {links.map(({ name, link, icon }) => (
          <Link key={name} href={link}>
            <Menu.Item icon={icon}>{name}</Menu.Item>
          </Link>
        ))}
        <Menu.Item icon={<RiAdminLine />}>
          <Link href="/admin">管理者</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={signOut}>ログアウト</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
