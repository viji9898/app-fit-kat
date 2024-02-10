import { Button, Col, Row } from "antd";
import { useOutletContext } from "react-router-dom";

export const About = () => {
  const [program] = useOutletContext();

  const listDocuments = program.documents.map((data) => {
    return (
      <Button
        target="_blank"
        rel="noreferrer"
        href={data.pdfUrl}
        shape="round"
        size="small"
      >
        {data.title}
      </Button>
    );
  });

  return (
    <div>
      <Row gutter={[18, 18]}>
        <div style={{ textAlign: "center" }}>{listDocuments}</div>
        <Col span={24}>{program.description}</Col>
      </Row>
    </div>
  );
};
