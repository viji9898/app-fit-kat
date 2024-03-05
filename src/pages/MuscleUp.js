import { Card, Col, Row } from "antd";
import { PageLayout } from "../components/layout/pageLayout";
import { workoutList } from "../components/muscleUpsForBeginners/programDataMuscleUp";
import { Link } from "react-router-dom";

export const MuscleUp = () => {
  const listWorkout = workoutList.map((data) => {
    return (
      <Col xs={24} sm={24} md={12}>
        <Link to={data.url}>
          <Card
            hoverable
            // cover={<img alt="example" src={data.thumbnail} />}
            // title={data.title}
          >
            <img style={{ width: "100%" }} alt="example" src={data.thumbnail} />
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <PageLayout>
      <Row gutter={[18, 18]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <h1>Muscle Up Beginners</h1>
        </Col>
        <Col sm={24} xs={24} md={12}>
          <div>
            <p>
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
            </p>
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
        {listWorkout}
      </Row>
    </PageLayout>
  );
};
