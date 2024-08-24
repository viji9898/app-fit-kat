import { Col, Row, Tabs } from "antd";
import { PageLayout } from "../layout/pageLayout";
import { programDataMuscleUp, transitionData } from "./programDataMuscleUp";
import { useEffect, useState } from "react";

import { SampleExercise } from "./sampleExercise";
import { VideoCard } from "../program/videoCard";
import { Link } from "react-router-dom";

export const Transition = () => {
  const [exercises, setExercises] = useState([
    {
      url: "",
      title: "",
      sets: "",
      reps: "",
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
    },
  ]);

  console.log(programDataMuscleUp.workouts[0].exercises);

  useEffect(() => {
    setExercises(transitionData.exercises);
  }, []);

  // const listWorkouts = programDataMuscleUp.workouts.map((data, index) => {
  //   console.log(index);

  //   return (
  //     <Button
  //       style={{ marginRight: "5px" }}
  //       onClick={() => {
  //         setExercises(programDataMuscleUp.workouts[index].exercises);
  //       }}
  //     >
  //       {data.title}
  //     </Button>
  //   );
  // });

  const listExerciseCards = exercises.map((data, key) => {
    const onChange = (key) => {
      console.log(key);
    };

    const items = [
      {
        key: "1",
        label: <div style={{ marginLeft: "15px" }}>Routine</div>,
        children: <SampleExercise exercises={data} />,
      },
      {
        key: "2",
        label: "Video",
        children: <VideoCard exercises={data} />,
      },
      // {
      //   key: "3",
      //   label: "Detail",
      //   children: <div style={{ padding: "10px" }}>{data.description}</div>,
      // },
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
            border: "1px solid black",
            borderRadius: "5px",
            height: "100%",
          }}
          tabBarExtraContent={OperationsSlot}
          defaultActiveKey="1"
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
          <Link to={"/muscle-up"}>Back to program</Link>
        </Col>
        <Col span={24}>
          <h1>Transition</h1>
        </Col>

        <Col sm={24} xs={24} md={12}>
          <div>
            <p>
              The transition in the ring muscle-up is the most challenging phase
              of the movement. It requires strength and solid range of motion
              through shoulder internal rotation. It is easy to think of the
              muscle up as a strength move but I would encourage you to see it
              as a mobility movement that requires strength. This combined with
              an understanding of the timing and coordination is what allows for
              a smooth, seamless transition.
            </p>
            {/* <p>
              The transition in the ring muscle-up is the most challenging phase
              of the movement, where you shift from the pulling motion of a ring
              pull-up to the pushing motion of a ring dip. It requires a full
              range of motion high pull up with a full range of motion deep dip.
              This combined with good strength and range in shoulder internation
              rotation as well as coordination is what allows for a smooth,
              seamless transition.
            </p> */}
            {/* <p>
              Welcome to our Women's Muscle-Up Program! This program is
              specifically designed to help women develop the strength, skill,
              and confidence to perform the impressive muscle-up exercise.
              Whether you're a beginner looking to achieve your first muscle-up
              or an experienced athlete aiming to refine your technique, this
              program is tailored to meet your needs.
            </p>

            <p>
              The muscle-up is a dynamic upper-body movement that combines a
              pull-up with a transition to a dip, requiring significant upper
              body and core strength, as well as coordination and control. While
              it may seem daunting at first, with the right approach and
              consistent training, mastering the muscle-up is well within reach
              for women of all fitness levels.
            </p> */}
          </div>
        </Col>
        <Col sm={24} xs={24} md={12}>
          <div
            style={{
              padding: "75% 0 0 0",
              position: "relative",
            }}
          >
            <iframe
              loading="lazy"
              src={
                "https://player.vimeo.com/video/525247324?h=6a6068dec3&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
              }
              frameborder="0"
              allow={"autoplay; fullscreen; picture-in-picture"}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title={"Intro to Muscle Ups"}
            ></iframe>
            <br></br>
          </div>
        </Col>
        <Row gutter={[18, 40]}>{listExerciseCards}</Row>
        <br></br>
      </Row>
    </PageLayout>
  );
};
