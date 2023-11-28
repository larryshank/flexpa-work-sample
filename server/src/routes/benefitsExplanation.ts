import axios from "axios";
import axiosRetry from "axios-retry";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

const client = axios.create();
axiosRetry(client, {
  retries: 20,
  retryDelay: (retryCount, error) => {
    if (error?.response?.headers["x-retry-after"]) {
      return parseInt(error.response.headers["x-retry-after"]) * 1000;
    } else {
      return 2000;
    }
  },
  retryCondition: (error) => {
    // Retry only if the status code is 429
    return error?.response?.status === 429;
  },
});

router.get("/", async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send("Invalid authorization");
  }

  if (!process.env.FLEXPA_PUBLIC_API_BASE_URL) {
    return res.status(500).send("Invalid public API base URL");
  }

  const { href } = new URL(
    "fhir/ExplanationOfBenefit?patient=$PATIENT_ID",
    process.env.FLEXPA_PUBLIC_API_BASE_URL
  );

  // Call Flexpa API's exchange endpoint to exchange your `publicToken` for an `access_token`
  try {
    const headers = {
      Authorization: authorization,
      "X-Flexpa-Raw": "0",
    };

    const response = await client.get(href, { headers });

    res.send(response.data);
  } catch (err) {
    console.error(`Error getting explanation of benefits: ${err}`);
    return res
      .status(500)
      .send(`Error getting explanation of benefits: ${err}`);
  }
});

export default router;
