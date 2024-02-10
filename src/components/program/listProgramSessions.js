import { Button, Col, Row, Tabs } from "antd";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { ExerciseCard } from "./exerciseCard";
import { VideoCard } from "./videoCard";

export const ListProgramSessions = () => {
  const { sessionId } = useParams();
  const [session] = useOutletContext();
  const [exercise, setExercise] = useState({
    url: "",
    title: "",
    exercises: [
      {
        title: "",
        sets: "",
        reps: "",
        videoUrl: [
          {
            url: "",
            title: "",
            buttonTitle: "",
          },
        ],
        thumbnailGif: [
          {
            url: "",
          },
        ],
        images: [
          {
            url: "",
            title: "",
          },
        ],
      },
    ],
  });

  const selectExercises = session?.workouts.find(
    (data) => data.url === sessionId
  );

  useEffect(() => {
    setExercise(selectExercises);
  }, [selectExercises, exercise]);

  const listProgramSessions = exercise?.exercises.map((data, key) => {
    const onChange = (key) => {
      console.log(key);
    };

    const items = [
      {
        key: "1",
        label: "Routine",
        children: <ExerciseCard exercises={data} />,
      },
      {
        key: "2",
        label: "Detail",
        children: (
          <div style={{ height: "419px", padding: "10px" }}>
            {data.description}
          </div>
        ),
      },
      {
        key: "3",
        label: <span>Video</span>,
        children: <VideoCard exercises={data} />,
      },
    ];

    const OperationsSlot = {
      left: (
        <Button
          shape="round"
          style={{
            marginLeft: "10px",
            marginRight: "16px",
            background: "black",
            color: "white",
          }}
        >
          {data.title}
        </Button>
      ),
    };
    return (
      <Col xs={24} sm={24} md={8} key={key}>
        <Tabs
          style={{
            border: "2px solid black",
            borderRadius: "5px",
            height: "100%",
          }}
          defaultActiveKey="1"
          tabBarExtraContent={OperationsSlot}
          items={items}
          onChange={onChange}
        />
      </Col>
    );
  });

  return (
    <Row gutter={[8, 18]}>
      {listProgramSessions ? listProgramSessions : "invalid url"}
    </Row>
  );
};
