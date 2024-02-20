import { Col, Row } from "antd";
import { PageLayout } from "../components/layout/pageLayout";

export const MuscleUp = () => {
  return (
    <PageLayout>
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <h1>MuscleUp</h1>
        </Col>
      </Row>
    </PageLayout>
  );
};
