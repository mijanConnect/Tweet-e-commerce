"use client";

import {
  GiftOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";

const items = [
  { label: "Profile", key: "/profile", icon: <UserOutlined /> },
  { label: "Order", key: "/order", icon: <ShoppingCartOutlined /> },
  { label: "StampCard", key: "/stampcard", icon: <GiftOutlined /> },
  { label: "Help", key: "/help", icon: <QuestionCircleOutlined /> },
  { label: "Setting", key: "/setting", icon: <SettingOutlined /> },
  { label: "Log Out", key: "/logout", icon: <LogoutOutlined /> },
];

export default function ProfileSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Menu
      mode="inline"
      selectedKeys={[pathname]}
      items={items}
      onClick={({ key }) => router.push(key)}
      style={{ height: "75vh", borderRight: 0 }}
    />
  );
}
