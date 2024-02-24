import { Card, Col, Row } from "antd";
import { PageLayout } from "../components/layout/pageLayout";
import { programDataMuscleUp } from "../components/muscleUpsForBeginners/programDataMuscleUp";
import { Link } from "react-router-dom";

export const MuscleUp = () => {
  const listWorkout = programDataMuscleUp.workoutList.map((data) => {
    return (
      <Col xs={24} sm={24} md={12}>
        <Link to={data.url}>
          <Card
            hoverable
            cover={<img alt="example" src={data.thumbnail} />}
            title={data.title}
          ></Card>
        </Link>
      </Col>
    );
  });

  return (
    <PageLayout>
      <Row gutter={[18, 18]}>{listWorkout}</Row>
    </PageLayout>
  );
};
