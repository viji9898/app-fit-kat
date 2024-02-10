import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { programData } from "./programData";
import { PageLayout } from "../layout/pageLayout";

export const ViewProgram = () => {
  const { programId } = useParams();
  const [program, setProgram] = useState({
    programId: "",
    programRef: "",
    programDescriptionPrice: "",
    programName: "",
    description: "",
    links: [],
    workoutList: [
      {
        title: "",
        url: "",
        workouts: [
          {
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
                  },
                ],
                thumbnailGif: [
                  {
                    url: "",
                    title: "",
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
          },
        ],
      },
    ],
    documents: [],
  });
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (event, param, buttonValue) => {
    setActiveButton(buttonValue);
  };
  useEffect(() => {
    const selectProgram = programData.find(
      (data) => data.programId === programId
    );
    setProgram(selectProgram);
  }, [programId]);

  const listLinks = program.links.map((data, key) => {
    const buttonValue = data.title;
    return (
      <Link to={data.url}>
        <Button
          style={{
            margin: "2px",
            backgroundColor: activeButton === data.title ? "black" : "white",
            color: activeButton === data.title ? "white" : "black",
          }}
          onClick={(event) => handleClick(event, key, buttonValue)}
        >
          {data.title}
        </Button>
      </Link>
    );
  });

  return (
    <PageLayout>
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <h1>{program.programName}</h1>
          {listLinks}
        </Col>
        <Col span={24}>
          <Outlet context={[program, setProgram]} />
        </Col>
      </Row>
    </PageLayout>
  );
};
