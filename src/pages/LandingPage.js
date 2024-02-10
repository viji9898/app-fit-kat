import { DynamicMetaTags } from "../utils/dynamicMetaTags";

import React from "react";
import { PageLayout } from "../components/layout/pageLayout";

import { Programs } from "../components/landingPage/programs";
import { Col, Row } from "antd";

export const LandingPage = () => {
  return (
    <PageLayout>
      <DynamicMetaTags ogTitle={`app-fitness`} ogImage={""} />
      <Row gutter={[18, 18]} style={{ textAlign: "center" }}>
        <Col
          span={24}
          style={{
            minHeight: "200px",
            color: "red",
            backgroundColor: "green",
            backgroundImage:
              "url(https://dplvxv40qur9n.cloudfront.net/a04852c9-ba7a-4b55-8a0d-462c54c43aa1.jpg)",
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
