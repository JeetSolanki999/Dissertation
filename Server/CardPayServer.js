import express from "express";

const app = express();
const port = 19001;
const PUBLISHABLE_KEY =
  "pk_test_51KltnxDSvLLV7Jtr2lV3yhbABcCmhZ2MWAlnPt3h8yGGjcKPBtY5oE6f1CDwxDfR6rAFOyMGrer5TPu1X68z5wKn002tnGhv6r";
const SECRET_KEY =
  "sk_test_51KltnxDSvLLV7JtrxhBE2aQXeYUGKcjyWY1Q8scrrTPF0ql74Mf0KwoYBslm3XH1Nic0KvtSR4Dx3BZ6ncILMnsw00QoyaUnlv";
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import Stripe from "stripe";

const cardpayment = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await cardpayment.paymentIntents.create({
      amount: 2000000,
      currency: "aed",
      payment_method_types: ["card"],
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});
