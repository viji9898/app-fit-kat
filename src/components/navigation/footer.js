import { Col } from "antd";

import { SocialMedia } from "../landingPage/socialMedia";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <Col
        xs={24}
        sm={24}
        md={24}
        style={{ fontFamily: "Montserrat", textAlign: "center" }}
      >
        <SocialMedia />
      </Col>
      <Col span={24} style={{ fontFamily: "Montserrat" }}>
        <div style={{ textAlign: "center" }}>
          <a
            href="https://techforgood.lk"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "12px",
              textDecoration: "none",
              color: "salmon",
            }}
          >
            {"❤️ techForGood"} &copy; {year} {"❤️ "}
          </a>
        </div>
      </Col>
    </div>
  );
};
