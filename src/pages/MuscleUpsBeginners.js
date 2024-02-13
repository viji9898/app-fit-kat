import { Col, Row } from "antd";
import { PageLayout } from "../components/layout/pageLayout";
import { ListSampleExercises } from "../components/muscleUpsForBeginners/listSampleExercises";
import { Purchase } from "../components/muscleUpsForBeginners/purchase";
import { ListSampleRoutine } from "../components/muscleUpsForBeginners/listSampleRoutine";
import { ResultsSample } from "../components/muscleUpsForBeginners/resultsSample";

export const MuscleUpBeginners = () => {
  return (
    <PageLayout>
      <Row gutter={[18, 18]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <h1>MuscleUpBeginners</h1>
        </Col>
        <Col sm={24} xs={24} md={12}>
          <div class="program-introduction">
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
        <Col sm={24} xs={24} md={24}>
          <div>
            <p>
              Our program takes a progressive approach, breaking down the
              muscle-up into manageable steps and providing targeted exercises
              to build the necessary strength and skills. We focus not only on
              developing the muscles involved in the movement but also on
              improving mobility, stability, and technique to ensure safe and
              effective progression.
            </p>
            <p>
              Throughout the program, you'll receive guidance on proper form,
              programming, and recovery strategies to optimize your training and
              minimize the risk of injury. You'll also have access to a
              supportive community of women who share your goals and can provide
              encouragement and motivation along the way.
            </p>

            <p>
              Whether your goal is to conquer your first muscle-up or to refine
              your technique and increase your rep count, our Women's Muscle-Up
              Program is here to support you on your journey to strength and
              mastery. Let's get started!
            </p>
          </div>
        </Col>
        {/* <Col sm={24} xs={24} md={12}>
          <div style={{ padding: "75% 0 0 0", position: "relative" }}>
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
        </Col> */}
        <Purchase />
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>Sample Workouts</h2>
        </Col>
        <ListSampleExercises />
        <ListSampleRoutine />
        <ResultsSample />
        <Purchase />
      </Row>
    </PageLayout>
  );
};
