import { Col, Row, Card } from "antd";

export const ListResults = () => {
  const { Meta } = Card;
  return (
    <div className="main">
      <Row gutter={[18, 18]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>Results</h2>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://app-fitness.s3.eu-west-2.amazonaws.com/resultsFran.jpeg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://app-fitness.s3.eu-west-2.amazonaws.com/resultsFran.jpeg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://app-fitness.s3.eu-west-2.amazonaws.com/resultsFran.jpeg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
