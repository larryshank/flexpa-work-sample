import axios from "axios";

export default async function exchangeForAccessToken(publicToken: string) {
  const accessTokenUrl = `${
    import.meta.env.VITE_SERVER_URL
  }/exchange-for-access-token`;

  const headers = {
    "Content-Type": "application/json",
  };

  const accessTokenRes = await axios.post(
    accessTokenUrl,
    { publicToken },
    { headers }
  );

  const { accessToken } = accessTokenRes.data;
  return accessToken;
}
