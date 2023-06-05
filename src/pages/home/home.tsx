import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Content, Footer } = Layout;

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="##">Alumni</Link>,
    key: "app",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: <Link to="./alumni">Register Now</Link>,
        key: "1",
      },
      {
        label: <Link to="./alumni">Login</Link>,
        key: "2",
      },
    ],
  },
  {
    label: <Link to="./news">News</Link>,
    key: "SubMenu",
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a
        href="https://www.crmjatcollege.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Official website
      </a>
    ),
    key: "alipay",
  },
];

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>{children}</Content>
    </Layout>
  );
};

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState<string>("mail");

  const onClick = (e: { key: string }) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout className="flex">
      <LayoutWrapper>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", textAlign: "center" }}
        >
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
            }}
          />
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
            }}
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
          Alumni Management Portal ©2023 Created by Pankaj Singh Sheoran
        </Footer>
      </LayoutWrapper>
    </Layout>
  );
};

export default Home;
