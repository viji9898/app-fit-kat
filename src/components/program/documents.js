import { Avatar, Card, Col, Row } from "antd";
import { Link, useOutletContext } from "react-router-dom";

export const Documents = () => {
  const [program] = useOutletContext();
  const { Meta } = Card;

  const listDocuments = program.documents.map((data) => {
    return (
      <Col xs={24} sm={24} md={8} key={data.title}>
        <Card actions={[<Link to={data.pdfUrl}>{"Download"}</Link>]}>
          <Meta
            avatar={<Avatar src={data.avatar} />}
            title={data.title}
            description={data.description}
          />
        </Card>
      </Col>
    );
  });

  return <Row gutter={[18, 18]}>{listDocuments}</Row>;
};
