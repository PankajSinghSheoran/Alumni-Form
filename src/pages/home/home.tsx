import React from "react";
import { Breadcrumb, Layout, theme } from "antd";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="flex">
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <button>
              <a href="/"> Home </a>
            </button>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <button>
              <a href="/contact"> Register </a>
            </button>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/alumni"> Alumni </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/news"> News </a>
          </Breadcrumb.Item>
        </Breadcrumb>

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
};

export default App;
