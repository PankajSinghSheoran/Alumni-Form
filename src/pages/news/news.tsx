import React from "react";
import { Layout, Typography, Row, Col, Card, List, Avatar } from "antd";
import {
  ClockCircleOutlined,
  TeamOutlined,
  BulbOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title } = Typography;

const newsData = [
  {
    title: "Event Announcement",
    type: "event",
    description: "Join us for our annual alumni reunion on June 15th!",
    icon: <ClockCircleOutlined />,
  },
  {
    title: "Job Opportunity",
    type: "job",
    description: "We are hiring for various positions. Apply now!",
    icon: <TeamOutlined />,
  },
  {
    title: "Alumni Spotlight",
    type: "spotlight",
    description: "Read about the achievements of our outstanding alumni.",
    icon: <BulbOutlined />,
  },
  {
    title: "Scholarship Program",
    type: "scholarship",
    description:
      "Apply for our new scholarship program. Don't miss this opportunity!",
    icon: <BulbOutlined />,
  },
  {
    title: "Volunteer Drive",
    type: "volunteer",
    description:
      "Join our volunteer team and make a difference in your community.",
    icon: <TeamOutlined />,
  },
  // Additional news items
  {
    title: "Press Release",
    type: "press",
    description:
      "Read our latest press release about our community initiatives.",
    icon: <FileTextOutlined />,
  },
  {
    title: "Video Announcement",
    type: "video",
    description:
      "Watch our video announcement about upcoming events and programs.",
    icon: <VideoCameraOutlined />,
  },
];

interface CardColors {
  [key: string]: string;
}

const cardColors: CardColors = {
  event: "#ff9999",
  job: "#99ccff",
  spotlight: "#99ff99",
  scholarship: "#ffcc99",
  volunteer: "#ccccff",
  press: "#ffccff",
  video: "#cc99ff",
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
                style={{
                  backgroundColor: cardColors[news.type as keyof CardColors],
                }}
                hoverable
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <Avatar
                    size={24}
                    icon={news.icon}
                    style={{ marginRight: "8px" }}
                  />
                  <Title level={4} style={{ margin: 0 }}>
                    {news.title}
                  </Title>
                </div>
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
              style={{
                borderLeft: `4px solid ${
                  cardColors[news.type as keyof CardColors]
                }`,
              }}
              key={news.title}
            >
              <List.Item.Meta
                avatar={<Avatar icon={news.icon} />}
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
