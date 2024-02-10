import { Button, Col, Row, Tabs } from "antd";

import { SampleExercise } from "./sampleExercise";
import { VideoCard } from "../program/videoCard";

export const ListSampleExercises = () => {
  const exercises = [
    {
      url: "forward-circles",
      title: "Forward Circles",
      sets: "1",
      reps: "10",
      rest: "10 secs",
      images: [
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/forward-circles.gif",
        },
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/forward-circles-behind-view.gif",
        },
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/images/forward-circles-img.jpg",
          title: "Forward Circle",
        },
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/floor-stretch-sample-image.jpg",
          title: "sample-image",
        },
      ],
      videoUrl: [
        {
          url: "https://player.vimeo.com/video/525247324?h=6a6068dec3&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479",
          title: "Band & Bar Warm-up",
          buttonTitle: "",
        },
      ],
      description: "",
      thumbnailGif: [
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/forward-circles.gif",
        },
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/forward-circles-behind-view.gif",
        },
      ],
    },
    {
      url: "backward-circles",
      title: "Backward Circles",
      sets: "1",
      reps: "10",
      rest: false,
      images: [
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/images/backward-circles-img-low-res.jpg",
          title: "sample-image",
        },
      ],
      videoUrl: [
        {
          url: "https://player.vimeo.com/video/525247324?h=6a6068dec3&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479",
          title: "Band & Bar Warm-up",
          buttonTitle: "",
        },
      ],
      description: "",
      thumbnailGif: [
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/backward-circles.gif",
        },
      ],
    },
    {
      url: "cross-body-circles",
      title: "Cross body circles",
      sets: "1",
      reps: "10",
      rest: false,
      description: "",
      images: [
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/images/cross-body-img.jpg",
          title: "sample-image",
        },
      ],
      videoUrl: [
        {
          url: "https://player.vimeo.com/video/525263321?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479",
          title: "Cat Camel",
          buttonTitle: "Video",
        },
      ],
      thumbnailGif: [
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/cross-body.gif",
        },
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/cross-body-forward-roll.gif",
        },
      ],
    },
    {
      url: "back-circles",
      title: "Back Circles",
      sets: "1",
      reps: "10",
      rest: false,
      description: "",
      images: [
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/images/back-circles-backward-roll-img.jpg",
          title: "sample-image",
        },
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/images/internal-external-rotation-img.jpg",
          title: "sample-image",
        },
      ],
      videoUrl: [
        {
          url: "https://player.vimeo.com/video/525247324?h=6a6068dec3&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479",
          title: "Band & Bar Warm-up",
          buttonTitle: "",
        },
      ],
      thumbnailGif: [
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/back-circles-backward-roll.gif",
        },
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/back-circles-forward-roll.gif",
        },
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/back-circles-backward-roll-back-view.gif",
        },
      ],
    },
  ];

  const listSampleExercises = exercises.map((data, key) => {
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
    <div style={{ width: "100%" }}>
      <Row gutter={[18, 18]}>{listSampleExercises}</Row>
    </div>
  );
};
