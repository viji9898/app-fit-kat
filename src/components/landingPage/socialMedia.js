import { Col, Space } from "antd";

import {
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export const SocialMedia = () => {
  return (
    <Col xs={24} sm={24} md={24} lg={24}>
      <Space>
        <a
          href="https://instagram.com"
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <InstagramOutlined />
        </a>
        <LinkedinOutlined />
        <TwitterOutlined />
        <FacebookOutlined />
        <YoutubeOutlined />
      </Space>
    </Col>
  );
};
