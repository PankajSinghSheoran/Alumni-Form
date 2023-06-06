import React, { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  NotificationOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const items = [
  { label: "Home", key: "/", icon: <HomeOutlined /> },
  { label: "Alumni", key: "alumni", icon: <UserOutlined /> },
  { label: "News", key: "news", icon: <NotificationOutlined /> },
  {
    label: (
      <a href="https://www.crmjatcollege.com" target="_blank" rel="noreferrer">
        Official Website
      </a>
    ),
    key: "website",
    icon: <GlobalOutlined />,
  },
];

export default function MenuBar() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState("home");
  const onClick = (e: any) => {
    setCurrent(e.key);
    navigate(e.key);
    console.log(e);
  };

  return (
    <div className="flex flex-col">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        items={items}
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
        }}
      />
    </div>
  );
}
