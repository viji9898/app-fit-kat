import { Button, Col, Row } from "antd";

export const ListSampleRoutine = () => {
  const exerciseData = [
    {
      excercise: "Head, Heck, Shoulders",
    },
    {
      excercise: "Wrists ",
    },
    {
      excercise: "internal rotation ",
    },
    {
      excercise: "external rotation ",
    },
    {
      excercise: "band rotation with overhead reach",
    },
    {
      excercise: "dislocations",
    },
    {
      excercise: "scapula push ups",
    },
    {
      excercise: "hollow body hold",
    },
    {
      excercise: "retracted scapula ups",
    },
    {
      excercise: "superman",
    },
    {
      excercise: "False grip intro",
    },
    {
      excercise: "false grip isometric hold",
    },
    {
      excercise: "false grip hang",
    },
    {
      excercise: "false grip rows",
    },
    {
      excercise: "false grip pull up",
    },
    {
      excercise: "Russian press up",
    },
    {
      excercise: "skin the cat",
    },
    {
      excercise: "box assisted transition ",
    },
    {
      excercise: "negatives",
    },
    {
      excercise: "transitions unassisted ",
    },
    {
      excercise: "deep dips isometeric holds",
    },
    {
      excercise: "deep dips",
    },
    {
      excercise: "weighted false grip up pulls",
    },
  ];

  const listExercise = exerciseData.map((data) => {
    return <Button style={{ margin: "3px" }}>{data.excercise}</Button>;
  });

  return (
    <div className="main">
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <h1>Exercise List</h1>
          {listExercise}
        </Col>
      </Row>
    </div>
  );
};
