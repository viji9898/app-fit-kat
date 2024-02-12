import { Button, Col, Row, Tabs } from "antd";

import { SampleExercise } from "./sampleExercise";
import { VideoCard } from "../program/videoCard";

export const ListSampleExercises = () => {
  const exercises = [
    {
      url: "superman",
      title: "Superman",
      sets: "3",
      reps: "10",
      rest: "10 secs",
      images: [
        {
          url: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/646dc4ed-92b5-4d7b-8e9b-cdbc1a4164a4.gif?ClientID=vimeo-core-prod&Date=1707744506&Signature=91304a5aa101bb4c42ad1dfc2ffc836c9de77075",
        },
      ],
      videoUrl: [
        {
          url: "https://player.vimeo.com/video/912214724?h=fa1697e6c2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          title: "Superman",
          buttonTitle: "",
        },
      ],
      description: (
        <div>
          <p>To perform the Superman exercise:</p>
          <ol>
            <li>
              Lie face down on a mat or flat surface with your arms extended
              overhead and your legs straight.
            </li>
            <li>Engage your core muscles to stabilize your spine.</li>
            <li>
              Simultaneously lift your arms, chest, and legs off the ground,
              keeping them straight.
            </li>
            <li>
              Hold this position for a few seconds, focusing on squeezing your
              glutes and lower back muscles.
            </li>
            <li>
              Slowly lower back down to the starting position with control.
            </li>
          </ol>
        </div>
      ),
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
      url: "scapular-push",
      title: "Scapular Push",
      sets: "3",
      reps: "10",
      rest: "10 secs",
      images: [
        {
          url: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/a488add5-38f9-4606-a9bf-f06d418aa871.gif?ClientID=vimeo-core-prod&Date=1707744898&Signature=42aaf72f0d2987cf6c9e6cbcc60fb7116cc81fdc",
          title: "sample-image",
        },
      ],
      videoUrl: [
        {
          url: "https://player.vimeo.com/video/912213626?h=fc8498ddfe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          title: "Band & Bar Warm-up",
          buttonTitle: "",
        },
      ],
      description: (
        <div>
          {" "}
          <p>To perform the Scapular Push exercise:</p>
          <ol>
            <li>
              Start by lying face down on a mat or flat surface with your arms
              extended overhead and your palms facing each other.
            </li>
            <li>Engage your core muscles to maintain a stable position.</li>
            <li>
              Keeping your arms straight, lift your chest and shoulders off the
              ground by retracting your shoulder blades and squeezing your
              shoulder blades together.
            </li>
            <li>
              Hold this elevated position for a brief pause, focusing on the
              contraction in your mid-back muscles.
            </li>
            <li>
              Slowly lower yourself back down to the starting position with
              control.
            </li>
          </ol>
        </div>
      ),
      thumbnailGif: [
        {
          url: "https://app-fitness.s3.eu-west-2.amazonaws.com/warm-up-band-bar/backward-circles.gif",
        },
      ],
    },
    {
      url: "hollow-body-hold",
      title: "Hollow Body Hold",
      sets: "3",
      reps: "10",
      rest: false,
      description: (
        <div>
          {" "}
          <p>To perform the Hollow Body Hold:</p>
          <ol>
            <li>
              Lie flat on your back on a mat with your arms extended overhead
              and your legs straight.
            </li>
            <li>
              Engage your core muscles by drawing your belly button towards your
              spine and pressing your lower back into the floor.
            </li>
            <li>
              Simultaneously lift your arms, shoulders, and legs off the ground,
              keeping them straight.
            </li>
            <li>
              At the same time, lift your head, neck, and shoulders off the
              ground, creating a slight hollow shape with your body.
            </li>
            <li>
              Hold this position, keeping your lower back pressed into the floor
              and your core engaged.
            </li>
          </ol>
        </div>
      ),
      images: [
        {
          url: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7f9e3ba2-d37f-472b-a6fa-a4b06dd1de6e.gif?ClientID=vimeo-core-prod&Date=1707745952&Signature=e4990aa2c757b8a495af4a04fc8d1f3e381609c4",
          title: "sample-image",
        },
      ],
      videoUrl: [
        {
          url: "https://player.vimeo.com/video/912213094?h=3bcbbbadf7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          title: "Hollow Body Hold",
          buttonTitle: "",
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
      url: "wrists",
      title: "Wrists",
      sets: "N/A",
      reps: "N/A",
      rest: false,
      description: (
        <div>
          {" "}
          <p>Here's a simple floor wrist warm-up routine:</p>
          <ol>
            <li>
              <strong>Wrist Circles:</strong> Start by kneeling on the floor
              with your palms placed flat in front of you, fingers facing
              forward. Rotate your wrists in circles, first clockwise and then
              counterclockwise, for about 10-15 repetitions each direction.
            </li>
            <li>
              <strong>Wrist Flexor Stretch:</strong> Remain in the kneeling
              position with your palms on the floor. Shift your body weight back
              slightly while keeping your palms flat, feeling a stretch in the
              front of your wrists. Hold for 15-30 seconds.
            </li>
            <li>
              <strong>Wrist Extensor Stretch:</strong> Flip your hands over so
              that your palms are facing up, fingers still pointing forward.
              Gently lean forward, allowing your body weight to stretch the back
              of your wrists. Hold for 15-30 seconds.
            </li>
            <li>
              <strong>Finger Pulses:</strong> Return to the kneeling position
              with your palms flat on the floor. Lift and lower your fingers,
              keeping your palms and wrists grounded, for 10-15 repetitions.
            </li>
            <li>
              <strong>Wrist Rocking:</strong> Sit back on your heels with your
              palms flat on the floor behind you, fingers pointing towards your
              body. Shift your body weight forward and backward, rocking gently
              over your wrists. Start with small movements and gradually
              increase the range of motion as your wrists feel more warmed up.
            </li>
          </ol>
        </div>
      ),
      images: [
        {
          url: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f6de6063-126a-4c01-ba18-d305ddf2d2bd.gif?ClientID=vimeo-core-prod&Date=1707746170&Signature=853c2ded8cb670a404224d56b87f45f51e889d5b",
          title: "sample-image",
        },
      ],
      videoUrl: [
        {
          url: "https://player.vimeo.com/video/912215018?h=05424d64f9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
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
