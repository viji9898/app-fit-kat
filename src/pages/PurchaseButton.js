import { Button, Col, Row } from "antd";

import { Link } from "react-router-dom";

export const PurchaseButton = ({ programId }) => {
  return (
    <div className="main">
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <Link to={`/checkout/${programId}`}>
            <Button
              style={{
                width: "300px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <strong>Sign Up & Purchase</strong>
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
