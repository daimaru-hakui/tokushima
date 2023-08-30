import {
  PiHouse,
  PiDatabaseBold,
  PiPlusCircleBold,
  PiNotepadBold,
  PiNotebookBold,
  PiListDashes,
  PiFilePlusBold,
  PiWarehouseBold,
  PiFactoryBold,
  PiBuildingsBold,
} from "react-icons/pi";

import { TbCategory } from "react-icons/tb";

export const headerLinks = [
  { name: "HOME", link: "/", icon: <PiHouse /> },
  { name: "修理伝票", link: "/repairs", icon: <PiNotepadBold /> },
  { name: "マスター登録", link: "/settings", icon: <PiDatabaseBold /> },
];

export const repairLinks = [
  // { name: "修理伝票メニュー", link: "/repairs", icon: <PiListDashes /> },
  { name: "修理伝票一覧", link: "/repairs/list", icon: <PiNotepadBold /> },
  { name: "修理伝票作成", link: "/repairs/new", icon: <PiPlusCircleBold /> },
  {
    name: "テンプレート一覧",
    link: "/repairs/templates",
    icon: <PiNotebookBold />,
  },
  {
    name: "テンプレート登録",
    link: "/repairs/templates/new",
    icon: <PiFilePlusBold />,
  },
];

export const settingLinks = [
  // { name: "マスター登録一覧", link: "/settings", icon: <PiListDashes /> },
  { name: "工場登録", link: "/settings/factories", icon: <PiFactoryBold /> },
  {
    name: "納品先登録",
    link: "/settings/delivery-places",
    icon: <PiWarehouseBold />,
  },
  {
    name: "顧客登録",
    link: "/settings/customers",
    icon: <PiBuildingsBold />,
  },
  {
    name: "カテゴリー登録",
    link: "/settings/categories",
    icon: <TbCategory />,
  },
];
