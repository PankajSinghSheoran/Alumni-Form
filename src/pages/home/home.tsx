import React from "react";
import { Layout } from "antd";

const { Content, Footer } = Layout;

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>{children}</Content>
    </Layout>
  );
};

const Home: React.FC = () => {
  return (
    <Layout className="flex">
      <LayoutWrapper>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", textAlign: "center" }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
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
