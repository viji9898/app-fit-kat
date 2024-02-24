import { Button, Col, Row, Tabs } from "antd";
import { PageLayout } from "../layout/pageLayout";
import { programDataMuscleUp } from "./programDataMuscleUp";
import { useEffect, useState } from "react";

import { SampleExercise } from "./sampleExercise";
import { VideoCard } from "../program/videoCard";

export const WarmUpMuscleUp = () => {
  const [exercises, setExercises] = useState([
    {
      url: "forward-circles",
      title: "Forward Circles",
      sets: "1",
      reps: "10",
      rest: false,
      images: [
        {
          url: "",
          title: "",
        },
        {
          url: "",
          title: "",
        },
      ],
      videoUrl: [
        {
          url: "",
          title: "",
          buttonTitle: "",
        },
      ],
      description: "",
      thumbnailGif: [
        {
          url: "",
        },
      ],
    },
  ]);

  console.log(programDataMuscleUp.workouts[0].exercises);

  useEffect(() => {
    setExercises(programDataMuscleUp.workouts[0].exercises);
  }, []);

  const listWorkouts = programDataMuscleUp.workouts.map((data, index) => {
    console.log(index);

    return (
      <Button
        style={{ marginRight: "5px" }}
        onClick={() => {
          setExercises(programDataMuscleUp.workouts[index].exercises);
        }}
      >
        {data.title}
      </Button>
    );
  });

  const listExerciseCards = exercises.map((data, key) => {
    const onChange = (key) => {
      console.log(key);
    };

    const items = [
      {
        key: "1",
        label: "Routine",
        children: <SampleExercise exercises={data} />,
      },
      {
        key: "2",
        label: "Video",
        children: <VideoCard exercises={data} />,
      },
      {
        key: "3",
        label: "Detail",
        children: <div style={{ padding: "10px" }}>{data.description}</div>,
      },
    ];
    const OperationsSlot = {
      left: (
        <div style={{ padding: "10px" }}>
          <b>{data.title}</b>
        </div>
      ),
    };
    return (
      <Col xs={24} sm={24} md={12} key={key}>
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
    <PageLayout>
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <h1>Warm up</h1>
          {listWorkouts}
        </Col>
        <Row gutter={[18, 18]}>{listExerciseCards}</Row>
      </Row>
    </PageLayout>
  );
};
