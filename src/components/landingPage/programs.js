import { Avatar, Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

export const Programs = () => {
  const { Meta } = Card;
  const programData = [
    {
      title: "Muscle Ups for Beginners",
      image:
        "https://i.pinimg.com/originals/b8/b5/a1/b8b5a157511031cadfc329ae2431e67b.jpg",
      url: "muscle-ups-beginners",
    },
    {
      title: "Rings for Beginner",
      image:
        "https://img.freepik.com/premium-photo/working-out-young-athletic-sportswoman-exercising-gymnastic-rings-gym-exercising-woman-holding-gymnast-rings-looking-up-workout-gym-concept-power-strength-healthy-lifestyle-sport_124865-17859.jpg",
      url: "/programs/limitless-legs",
    },
    // {
    //   title: "Back Lever Pro",
    //   image:
    //     "https://fitnessfaqs.com/wp-content/uploads/2020/03/LP-ebook-cover2-resized-new.jpg",
    //   url: "/programs/2",
    //   backgroundImageUrl: "https://wallpapercave.com/dwp1x/wp10629185.jpg",
    // },
    // {
    //   title: "Front Lever Pro",
    //   image:
    //     "https://fitnessfaqs.com/wp-content/uploads/2020/03/LP-ebook-cover2-resized-new.jpg",
    //   url: "/programs/2",
    //   backgroundImageUrl: "https://wallpapercave.com/dwp1x/wp10629185.jpg",
    // },

    // {
    //   title: "Planche Pro",
    //   image: "https://fitnessfaqs.com/wp-content/uploads/2020/04/PP.jpg",
    //   url: "/master-the-planche",
    // },
    // {
    //   title: "Back Bridge Pro",
    //   image:
    //     "	https://fitnessfaqs.com/wp-content/uploads/2021/08/bb-middle-300x469.jpg",
    //   url: "/master-the-planche",
    // },
    // {
    //   title: "Side Split Pro",
    //   image:
    //     "https://fitnessfaqs.com/wp-content/uploads/2021/05/side-split-middle.jpg",
    //   url: "/master-the-planche",
    // },
  ];

  const listPrograms = programData.map((data) => {
    return (
      <Col xs={24} sm={24} md={24}>
        <Link to={data.url} style={{ textDecoration: "none" }}>
          <Card
            hoverable
            style={{
              backgroundColor: "#B7B7B7",
            }}
          >
            <Meta
              title={data.title}
              avatar={
                <Avatar
                  shape="square"
                  size={"large"}
                  style={{ height: "65px" }}
                  src={data.image}
                />
              }
              description={<Button>Learn More</Button>}
            />
            <Meta />
          </Card>
        </Link>
      </Col>
    );
  });

  return <Row gutter={[18, 18]}>{listPrograms}</Row>;
};
