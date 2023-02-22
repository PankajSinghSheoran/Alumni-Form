import React, { useState } from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Content, Footer } = Layout;

const items: MenuProps["items"] = [
  {
    label: <a href="/">Home</a>,
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: <a href="./alumni">Alumni</a>,
    key: "app",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: <a href="./alumni">Register Now</a>,
        key: "1",
      },
      {
        label: <a href="./alumni">Login</a>,
        key: "2",
      },
    ],
  },
  {
    label: <a href="./news">News</a>,
    key: "SubMenu",
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a
        href="https://www.crmjatcollege.com/"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        Official website
      </a>
    ),
    key: "alipay",
  },
];

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Layout className="flex">
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          <img
            src="https://crmjatcollege.com/templates/crmjat/slider/slider4.jpg"
            alt="Photos"
          />
          <img
            src="https://crmjatcollege.com/templates/crmjat/slider/slider1.jpg"
            alt="Photos"
          />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Alumni Managment Portal ©2023 Created by Pankaj Singh Sheoran
      </Footer>
    </Layout>
  );
}
