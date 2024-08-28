import { Col, Space } from "antd";

import { InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";

export const SocialMedia = () => {
  return (
    <Col xs={24} sm={24} md={24} lg={24}>
      <Space>
        <a
          href="https://www.instagram.com/katherinesamuelson/"
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://www.youtube.com/@katherinesamuelson8378"
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <YoutubeOutlined />
        </a>
        {/* <LinkedinOutlined />
        <TwitterOutlined />
        <FacebookOutlined /> */}
      </Space>
    </Col>
  );
};
