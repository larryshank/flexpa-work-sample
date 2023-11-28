import axios from "axios";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

interface LinkExchangeResponse {
  access_token: string;
  expires_in: number;
}

interface FlexpaAccessTokenBody {
  publicToken: string;
}

/**
 * Exchanges your `publicToken` for an `access_token`
 */
router.post("/", async (req: Request, res: Response) => {
  const { publicToken } = req.body as FlexpaAccessTokenBody;

  if (!publicToken) {
    return res.status(400).send("Invalid Flexpa public token");
  }

  if (!process.env.FLEXPA_PUBLIC_API_BASE_URL) {
    return res.status(500).send("Invalid public API base URL");
  }

  const { href } = new URL(
    "link/exchange",
    process.env.FLEXPA_PUBLIC_API_BASE_URL
  );

  try {
    const data = {
      public_token: publicToken,
      secret_key: process.env.FLEXPA_API_SECRET_KEY,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const resp = await axios.post(href, data, { headers });

    const { access_token: accessToken, expires_in: expiresIn } =
      (await resp.data) as LinkExchangeResponse;

    res.send({ accessToken, expiresIn });
  } catch (err) {
    return res.status(500).send(`Error exchanging token: ${err}`);
  }
});

export default router;
