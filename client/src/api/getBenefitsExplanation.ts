import axios from "axios";

export default async function getBenefitsExplanation(accessToken: string) {
  const benefitsUrl = `${import.meta.env.VITE_SERVER_URL}/benefits-explanation`;

  const headers = {
    authorization: `Bearer ${accessToken}`,
  };

  const benefitsRes = await axios.get(benefitsUrl, {
    headers,
  });

  return benefitsRes.data;
}
