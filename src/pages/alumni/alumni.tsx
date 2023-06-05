import { Breadcrumb, Layout } from "antd";

const App: React.FC = () => {
  return (
    <Layout>
      <div>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <a href="/"> Home </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/contact"> Register </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="##"> Alumni </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/news"> News </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Layout>
  );
};

export default App;
