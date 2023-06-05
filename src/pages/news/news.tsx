import React from "react";
import { Layout, Typography, Row, Col, Card, List } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const newsData = [
  {
    title: "Event Announcement",
    type: "event",
    description: "Join us for our annual alumni reunion on June 15th!",
  },
  {
    title: "Job Opportunity",
    type: "job",
    description: "We are hiring for various positions. Apply now!",
  },
  {
    title: "Alumni Spotlight",
    type: "spotlight",
    description: "Read about the achievements of our outstanding alumni.",
  },
];

interface CardColors {
  [key: string]: string;
}

const cardColors: CardColors = {
  event: "#ff9999",
  job: "#99ccff",
  spotlight: "#99ff99",
};

export default function News() {
  return (
    <Layout>
      <Content style={{ padding: "50px" }}>
        <Title level={2}>News</Title>
        <Row gutter={[16, 16]}>
          {newsData.map((news) => (
            <Col key={news.title} xs={24} sm={12} md={8}>
              <Card
                style={{ backgroundColor: cardColors[news.type] }}
                hoverable
              >
                <p>{news.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
        <Title level={3}>Latest Articles</Title>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={newsData}
          renderItem={(news) => (
            <List.Item
              style={{ borderLeft: `4px solid ${cardColors[news.type]}` }}
            >
              <List.Item.Meta
                title={news.title}
                description={news.description}
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}
