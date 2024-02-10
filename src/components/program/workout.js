import { Avatar, Card, Col, Row } from "antd";
import { useContext } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Auth0Context from "../../utils/auth0/auth0Context";
import PaymentElement from "../../utils/stripe/paymentElement";

export const Workout = () => {
  const { Meta } = Card;
  const [program] = useOutletContext();

  const { userProfile } = useContext(Auth0Context);

  const checkPurchase = userProfile.purchase.some(
    (data) => data.ref === program.programRef
  );

  const listProgramSessions = program.workoutList.map((data) => {
    return (
      <Col xs={24} sm={24} md={8}>
        <Link to={data.url}>
          <Card
            hoverable
            style={{
              backgroundColor: "#B7B7B7",
            }}
          >
            <Meta
              title={data.title}
              avatar={
                <Avatar
                  shape="square"
                  size={"large"}
                  style={{ height: "65px" }}
                  src={data.thumbnail}
                />
              }
              description={
                <p>
                  DON'T skip the warm up, I know it can seem tidious but in the
                  long run it will pay off
                </p>
              }
            />
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <div>
      {checkPurchase ? (
        <div>
          <Row gutter={[8, 8]}>{listProgramSessions}</Row>
        </div>
      ) : (
        <PaymentElement productInfo={program.productInfo} />
      )}
    </div>
  );
};
