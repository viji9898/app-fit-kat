import { Button, Col, Row } from "antd";

export const Hero = () => {
  return (
    <Row
      gutter={[18, 18]}
      style={{
        background: "rgb(225, 225, 219)",
        maxWidth: "1200px",
      }}
    >
      <Col xs={24} sm={24} md={12}>
        <div
          style={{
            background: "rgb(225, 225, 219)",
            margin: "40px",
            textAlign: "center",
          }}
        >
          <img
            src={
              "https://fitnessfaqs.com/wp-content/uploads/2023/10/weighted-chin-pic-min.png"
            }
            width={"70%"}
            alt="rocket ready to launch"
          />
        </div>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "40px",
            marginBottom: "0px",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <h1>Master Calistenics</h1>
          <Button>Get Your Program</Button>
        </div>
      </Col>
    </Row>
  );
};
