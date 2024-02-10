import { Col, Row } from "antd";
import { PageLayout } from "../components/layout/pageLayout";
import { ListSampleExercises } from "../components/muscleUpsForBeginners/listSampleExercises";

export const MuscleUpBeginners = () => {
  return (
    <PageLayout>
      <Row gutter={[18, 18]}>
        <Col span={24} style={{ textAlign: "center" }}>
          <h1>MuscleUpBeginners</h1>
        </Col>
        <Col sm={24} xs={24} md={12}>
          <p>
            {
              "Examples of compound exercises in the program include pullups, dips and pushups. Examples of isolation exercises in the program include bicep curls and tricep extensions. "
            }
          </p>
          <p>
            {
              "Examples of compound exercises in the program include pullups, dips and pushups. Examples of isolation exercises in the program include bicep curls and tricep extensions. "
            }
          </p>
          <p>
            {
              "Examples of compound exercises in the program include pullups, dips and pushups. Examples of isolation exercises in the program include bicep curls and tricep extensions. "
            }
          </p>
        </Col>
        <Col sm={24} xs={24} md={12}>
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
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <h2>Sample Workouts</h2>
        </Col>
        <ListSampleExercises />
      </Row>
    </PageLayout>
  );
};
