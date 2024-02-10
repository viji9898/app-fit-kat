import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";

export const ListProgramWorkouts = () => {
  const { Meta } = Card;
  const { workoutId } = useParams();
  const [program] = useOutletContext();
  const [session, setSession] = useState({
    workouts: [{ url: "", title: "", exercises: [] }],
  });

  const selectSession = program.workoutList.find(
    (data) => data.url === workoutId
  );
  useEffect(() => {
    setSession(selectSession);
  }, [selectSession]);

  const listProgramSessions = session?.workouts.map((data, key) => {
    return (
      <Col xs={12} sm={12} md={6}>
        <Link to={data.url} style={{ textDecoration: "none" }}>
          <Card
            hoverable
            style={{
              backgroundColor: "#B7B7B7",
            }}
          >
            <Meta title={data.title} />
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <div style={{ width: "100%" }}>
      <Row gutter={[8, 8]}>{listProgramSessions}</Row>
      <br></br>
      <br></br>
      <Outlet context={[session, setSession]} />
    </div>
  );
};
