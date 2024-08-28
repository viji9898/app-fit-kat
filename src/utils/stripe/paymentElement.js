import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm.js";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import Auth0Context from "../auth0/auth0Context.js";
import { Avatar, Button, Card, Col, Divider, Row } from "antd";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PageLayout } from "../../components/layout/pageLayout.js";

export default function PaymentElement() {
  const { userProfile } = useContext(Auth0Context);
  const [stripePromise, setStripePromise] = useState(null);
  const [program, setProgram] = useState({
    programRef: "",
    programImageThumbnail: "",
    programDescriptionPrice: "",
    programName: "",
    productInfo: {
      programName: "",
      programPrice: "",
      programCurrency: "",
      programRef: "",
      productDescription: "",
    },
  });

  const { programId } = useParams();

  const [clientSecret, setClientSecret] = useState("");

  const { Meta } = Card;
  const navigate = useNavigate();

  useEffect(() => {
    const programData = [
      {
        programRef: "1111",
        programImageThumbnail:
          "https://app-fitness.s3.eu-west-2.amazonaws.com/movebykat/muscle-ups-kat-mads.jpg",
        programDescriptionPrice: "£100",
        url: "muscle-up",
        programName: "Muscle Up",
        productInfo: {
          programName: "Muscle Ups",
          programPrice: "100",
          programCurrency: "gbp",
          programRef: "1111",
          productDescription: "",
        },
      },
    ];
    setProgram(programData[programId]);
    userProfile.purchases.forEach((data) => {
      if (data.ref === programData[programId].programRef) {
        navigate(`/${programData[programId].url}`);
      }
    });
  }, [programId, userProfile, navigate]);

  useEffect(() => {
    axios.get("/.netlify/functions/getStripeConfig").then(async (response) => {
      const { publishableKey } = response.data;
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    userProfile &&
      program.productInfo &&
      axios
        .post("/.netlify/functions/createPaymentIntent", {
          data: {
            productInfo: program.productInfo,
            userProfile,
          },
        })
        .then(async (response) => {
          const { client_secret } = response.data;
          setClientSecret(client_secret);
        });
  }, [userProfile, program]);

  return (
    <PageLayout>
      <Row
        style={
          {
            // maxWidth: "1200px",
            // justifyContent: "center",
            // margin: "10px",
          }
        }
        gutter={[18, 18]}
      >
        {userProfile && clientSecret && stripePromise && (
          <Col xs={24} sm={24} md={24}>
            <Card
              title={
                <div style={{ display: "flex" }}>{program.programName}</div>
              }
              extra={<Button>{program.programDescriptionPrice}</Button>}
            >
              <Meta
                avatar={
                  <Avatar
                    shape="square"
                    size={"large"}
                    style={{ height: "200px", width: "150px" }}
                    src={program.programImageThumbnail}
                  />
                }
                description={
                  "The BBR system has been constructed with the intent of increasing muscle mass via bodyweight exercises using gymnastic rings. Compound exercises which target multiple muscle groups simultaneously serve as the main constituent. "
                }
              />
            </Card>
          </Col>
        )}

        {userProfile && clientSecret && stripePromise && (
          <Col xs={24} sm={24} md={24}>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
          </Col>
        )}
        <Divider orientation="left">
          <Link to="/">
            <small>Return to Programme</small>
          </Link>
        </Divider>
      </Row>
    </PageLayout>
  );
}
