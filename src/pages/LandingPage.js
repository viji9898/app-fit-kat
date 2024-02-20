import { DynamicMetaTags } from "../utils/dynamicMetaTags";

import React from "react";
import { PageLayout } from "../components/layout/pageLayout";

import { Programs } from "../components/landingPage/programs";
import { Col, Row } from "antd";

export const LandingPage = () => {
  return (
    <PageLayout>
      <DynamicMetaTags ogTitle={`app-fitness`} ogImage={""} />
      <Row
        gutter={[18, 18]}
        style={{ textAlign: "center", width: "100%", justifyContent: "center" }}
      >
        <Col
          span={24}
          style={{
            minHeight: "250px",
            color: "red",
            backgroundColor: "green",
            backgroundImage:
              "url(https://app-fitness.s3.eu-west-2.amazonaws.com/movebykat/katherine-hero-image.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Col>
        <Programs />
      </Row>
    </PageLayout>
  );
};
