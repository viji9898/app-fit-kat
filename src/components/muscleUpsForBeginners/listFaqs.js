import { Col, Collapse, Row } from "antd";
import React from "react";

export const ListFaqs = () => {
  const Panel = Collapse.Panel;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className="main">
      <Row gutter={[18, 18]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>FAQs</h2>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Collapse defaultActiveKey={["1"]} ghost>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <img
            width={"100%"}
            alt="katherine on a box"
            src="https://app-fitness.s3.eu-west-2.amazonaws.com/kat_faq.JPG"
          />
        </Col>
      </Row>
    </div>
  );
};
