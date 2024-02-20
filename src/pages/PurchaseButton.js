import { Button, Col, Row } from "antd";

import { Link } from "react-router-dom";

export const PurchaseButton = ({ programId }) => {
  return (
    <div className="main">
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <Link to={`/checkout/${programId}`}>
            <Button>Buy Muscle Up Program</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
