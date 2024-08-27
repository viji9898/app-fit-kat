import { Button, Card, Col, Row } from "antd";

import { Link } from "react-router-dom";

export const Programs = () => {
  // const programData = [
  //   // {
  //   //   title: "Muscle Ups",
  //   //   image:
  //   //     "https://app-fitness.s3.eu-west-2.amazonaws.com/movebykat/muscle-ups-kat-mads.jpg",
  //   //   url: "muscle-up-sample",
  //   //   description: "Routines to improve your muscle ups",
  //   // },
  //   // {
  //   //   title: "Rings for Beginner",
  //   //   image:
  //   //     "https://app-fitness.s3.eu-west-2.amazonaws.com/movebykat/calisthenics-kat.jpg",
  //   //   url: "/programs/limitless-legs",
  //   //   description: "Routines to improve your muscle ups",
  //   // },
  //   // {
  //   //   title: "Back Lever Pro",
  //   //   image:
  //   //     "https://fitnessfaqs.com/wp-content/uploads/2020/03/LP-ebook-cover2-resized-new.jpg",
  //   //   url: "/programs/2",
  //   //   backgroundImageUrl: "https://wallpapercave.com/dwp1x/wp10629185.jpg",
  //   // },
  //   // {
  //   //   title: "Front Lever Pro",
  //   //   image:
  //   //     "https://fitnessfaqs.com/wp-content/uploads/2020/03/LP-ebook-cover2-resized-new.jpg",
  //   //   url: "/programs/2",
  //   //   backgroundImageUrl: "https://wallpapercave.com/dwp1x/wp10629185.jpg",
  //   // },

  //   // {
  //   //   title: "Planche Pro",
  //   //   image: "https://fitnessfaqs.com/wp-content/uploads/2020/04/PP.jpg",
  //   //   url: "/master-the-planche",
  //   // },
  //   // {
  //   //   title: "Back Bridge Pro",
  //   //   image:
  //   //     "	https://fitnessfaqs.com/wp-content/uploads/2021/08/bb-middle-300x469.jpg",
  //   //   url: "/master-the-planche",
  //   // },
  //   // {
  //   //   title: "Side Split Pro",
  //   //   image:
  //   //     "https://fitnessfaqs.com/wp-content/uploads/2021/05/side-split-middle.jpg",
  //   //   url: "/master-the-planche",
  //   // },
  // ];

  // const listPrograms = programData.map((data) => {
  //   return (
  //     <Col xs={24} sm={24} md={8}>
  //       <Link to={data.url} style={{ textDecoration: "none" }}>
  //         <Card
  //           title={data.title}
  //           hoverable
  //           // style={{
  //           //   width: 350,
  //           // }}
  //           cover={<img alt="example" src={data.image} />}
  //         >
  //           <div style={{ textAlign: "center" }}>
  //             {/* {data.description}

  //             <br></br> */}
  //             <Button>Learn More</Button>
  //           </div>
  //         </Card>
  //       </Link>
  //     </Col>
  //   );
  // });

  const programData = [
    {
      link: "muscle-up-sample",
      title: "Muscle Ups",
      desktopCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/movebykat/muscle-ups-kat-mads.jpg",
      mobileCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/placeholder-image.jpg",
      disabled: false,
    },
    {
      link: "",
      title: "Hand Stands",
      desktopCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/hand-stands.jpg",
      mobileCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/placeholder-image.jpg",
      disabled: true,
    },
    {
      link: "",
      title: "Back Bends",
      desktopCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/IMG_4003.JPG",
      mobileCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/placeholder-image.jpg",
      disabled: true,
    },
    {
      link: "",
      title: "Side Splits",
      desktopCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/side-splits.jpg",
      mobileCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/side-splits.jpg",
      disabled: true,
    },
    {
      link: "",
      title: "Back Levers",
      desktopCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/movebykat/katherine-hero-image.jpeg",
      mobileCover:
        "https://app-fitness.s3.eu-west-2.amazonaws.com/movebykat/katherine-hero-image.jpeg",
      disabled: true,
    },
  ];

  const listProgramData = programData.map((data) => {
    return (
      <>
        <Col xs={0} sm={0} md={8}>
          <Link to={data.link} style={{ textDecoration: "none" }}>
            <Card
              title={data.title}
              hoverable
              cover={<img alt="example" src={data.desktopCover} />}
            >
              <div style={{ textAlign: "center" }}>
                {data.disabled ? (
                  <Button disabled>Coming Soon!</Button>
                ) : (
                  <Button>Learn More</Button>
                )}
              </div>
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={24} md={0}>
          <Link to={data.link} style={{ textDecoration: "none" }}>
            <Card
              title={data.title}
              hoverable
              cover={<img alt="example" src={data.mobileCover} />}
            >
              <div style={{ textAlign: "center" }}>
                {data.disabled ? (
                  <Button disabled>Coming Soon!</Button>
                ) : (
                  <Button>Learn More</Button>
                )}
              </div>
            </Card>
          </Link>
        </Col>
      </>
    );
  });

  return <Row gutter={[18, 18]}>{listProgramData}</Row>;
};
