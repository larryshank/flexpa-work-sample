import cors from "cors";
import "dotenv/config";
import express from "express";

import benefitsExplanation from "./routes/benefitsExplanation";
import exchangeForAccessToken from "./routes/exchangeForAccessToken";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/exchange-for-access-token", exchangeForAccessToken);
app.use("/benefits-explanation", benefitsExplanation);

app.listen(9000, () => {
  console.log("Server listening on http://localhost:9000");
});
