const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const productInfo = body.data.productInfo;
  const userProfile = body.data.userProfile;

  const { programCurrency, programName, programPrice, programRef } =
    productInfo;

  const { ref, userEmail } = userProfile;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: programPrice,
      currency: programCurrency,
      automatic_payment_methods: {
        enabled: true,
      },
      receipt_email: userEmail,
      metadata: {
        ref,
        programRef,
        programName,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(paymentIntent),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
