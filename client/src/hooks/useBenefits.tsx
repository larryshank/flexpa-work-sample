/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import exchangeForAccessToken from "../api/exchangeForAccessToken";
import getBenefitsExplanation from "../api/getBenefitsExplanation";
import { Benefit, FlexpaConfig } from "../flexpa_types";

declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
};

export default function useBenefits() {
  const [benefit, setBenefit] = useState<Benefit>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    FlexpaLink.create({
      publishableKey: import.meta.env.VITE_FLEXPA_PUBLISHABLE_KEY,
      onSuccess: async (publicToken) => {
        setIsLoading(true);
        try {
          // Exchange `publicToken` for `access_token`
          const accessToken = await exchangeForAccessToken(publicToken);

          // Request Explanation of Benefits
          const explanationOfBenefits = await getBenefitsExplanation(
            accessToken
          );
          setBenefit(explanationOfBenefits);
        } catch (err) {
          setIsError(true);
          console.error("Error accessing benefits explanation", err);
        }
        setIsLoading(false);
      },
    });
  }, []);

  return { benefit, isLoading, isError };
}
