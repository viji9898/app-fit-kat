import { PaymentElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "antd";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { pathname } = location;

  const [message, setMessage] = useState(null);

  const [isProcessing, setIsProcessing] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(".netlify/functions/stripeRetrieveProduct")
  //     .then(async (response) => {
  //       setProduct(response.data);
  //     });
  // }, []);

  const postDiscordMessage = () => {
    const values = {
      name: "vijitha",
      number: "077773892389238",
      email: "success@sucess.com",
      message: "payment successful",
    };
    return axios
      .post(".netlify/functions/postDiscordMessage", values)
      .then((response) => {
        console.log(response);
      })
      .catch(function error(error) {
        const errorMessage = error.response.data;
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          //not working!!
          postDiscordMessage();
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Please add payment method to proceed");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, clientSecret]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin + pathname}`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <br></br>
      <Button
        size="large"
        disabled={isProcessing || !stripe || !elements}
        id="submit"
        htmlType="submit"
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </Button>
      {/* Show any error or success messages */}
      <br></br>
      <br></br>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
