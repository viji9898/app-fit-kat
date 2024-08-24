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
          {/* <h1>Muscle Up Beginners</h1> */}
          <h1>Welcome to the online muscle up programme</h1>
        </Col>
        <Col sm={24} xs={24} md={12}>
          <div>
            <p>
              Welcome to the Muscle-Up Program! The programme has been divided
              into 5 key sections to help you on your journey; warm-up, false
              grip, transition, strength and stretching/conditioning. Each
              section is key to unlocking the skill so be sure not to skip any
              parts - and yes that means you must warm up and cool down properly
              too!
            </p>

            <p>
              The programme provides the basic foundations required in the ring
              muscle up. However it is important to note that each of us have
              different bodies and experience levels so to really maximise your
              progress, you need to identify your own weaknesses and areas to
              focus on specifically. If you require further help with this, then
              please do reach out to discuss further an indiviualised programme.{" "}
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
              For each exercise, you will be provided with a video
              demonstration, an image to remind you of the exercise and a short
              written description. The intention behind the programme is to make
              it as user friendly as possible for you in the gym so that once
              you find your rhythm and understanding of each movement, you can
              seamlessly flow through your training routine without the
              disruption of having to watch and read long descriptions. Should
              you require any further help with the exercises then please do
              reach out using the online forum.{" "}
            </p>
          </div>
        </Col>
        {listWorkout}
      </Row>
    </PageLayout>
  );
};
