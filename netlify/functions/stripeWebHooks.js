const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

exports.handler = async (event) => {
  const endpointSecret = process.env.REACT_APP_STRIPE_SIGNING_SECRET;

  const sig = event.headers["stripe-signature"];

  const handlePaymentIntentSucceeded = async (paymentIntent) => {
    const programData = paymentIntent.metadata;
    await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/.netlify/functions/updateProfile`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ programData }),
      }
    );
  };

  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      endpointSecret
    );

    // Handle the event
    switch (stripeEvent.type) {
      case "payment_intent.succeeded":
        const paymentIntent = stripeEvent.data.object;
        handlePaymentIntentSucceeded(paymentIntent);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${stripeEvent.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Event received" }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `Webhook Error: ${err.message}` }),
    };
  }
};
