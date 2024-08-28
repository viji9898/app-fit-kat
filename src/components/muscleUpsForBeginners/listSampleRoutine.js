import { Col, Row, Table } from "antd";

export const ListSampleRoutine = () => {
  const exerciseData = [
    {
      session: "Warm-Up",
      focus: "Wrists",
      exercise: "Over Head Reach",
      sets: "1",
      reps: "8-10",
      rest: "-",
      tempo: "-",
      intensity: "-",
    },
    {
      session: "Warm-Up",
      focus: "Wrists",
      exercise: "Banded Dislocations",
      sets: "1",
      reps: "8-10",
      rest: "-",
      tempo: "-",
      intensity: "-",
    },
    {
      session: "Warm-Up",
      focus: "Wrists",
      exercise: "Internal External Rotation",
      sets: "1",
      reps: "8-10",
      rest: "-",
      tempo: "-",
      intensity: "-",
    },
    {
      session: "Warm-Up",
      focus: "Wrists",
      exercise: "Internal Rotation",
      sets: "1",
      reps: "8-10",
      rest: "-",
      tempo: "-",
      intensity: "-",
    },
  ];

  const columns = [
    {
      title: "Session",
      dataIndex: "session",
      key: "session",
      // render: (text) => <a>{text}</a>,
      responsive: ["md"],
    },
    {
      title: "Focus",
      dataIndex: "focus",
      key: "focus",

      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Exercise",
      dataIndex: "exercise",
      key: "exercise",
    },
    {
      title: "Sets",
      dataIndex: "sets",
      key: "sets",
    },
    {
      title: "Intensity",
      dataIndex: "intensity",
      key: "intensity",
      responsive: ["md"],
    },
    {
      title: "Reps",
      dataIndex: "reps",
      key: "reps",
    },
    {
      title: "Tempo",
      dataIndex: "tempo",
      key: "tempo",
      responsive: ["md"],
    },
    {
      title: "Rest",
      dataIndex: "rest",
      key: "rest",
    },
  ];

  return (
    <div className="main" style={{ textAlign: "center", width: "100%" }}>
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <h2>Sample Routine</h2>
          <Table
            pagination={{
              position: ["none"],
            }}
            style={{ width: "100%" }}
            size="small"
            columns={columns}
            dataSource={exerciseData}
          />
        </Col>
      </Row>
    </div>
  );
};
