import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm.js";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import Auth0Context from "../auth0/auth0Context.js";
import { Avatar, Button, Card, Col, Row } from "antd";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    const programData = [
      {
        programRef: "1111",
        programImageThumbnail:
          "https://fitnessfaqs.com/wp-content/uploads/2020/03/brbbr-4.jpg",
        programDescriptionPrice: "£100",
        programName: "Body Weight Body Building",
        productInfo: {
          programName: "Body Weight Body Building",
          programPrice: "12000",
          programCurrency: "usd",
          programRef: "1111",
          productDescription: "",
        },
      },
    ];
    setProgram(programData[programId]);
  }, [programId]);

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
    <Row
      style={{ maxWidth: "1200px", justifyContent: "center", margin: "10px" }}
      gutter={[18, 18]}
    >
      {userProfile && clientSecret && stripePromise && (
        <Col xs={24} sm={24} md={12}>
          <Card
            title={<div style={{ display: "flex" }}>{program.programName}</div>}
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
        <Col xs={24} sm={24} md={12}>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        </Col>
      )}
    </Row>
  );
}
