import { apis } from "service";

const COMMON_URL = `https://`;

const API_URLS = {
  GET_TRACKSLIMIT5: `${COMMON_URL}api.spotify.com/v1/me/top/tracks?limit=5`,
  GET_RECOMMENDATIONSLIMIT20SEEDGENRESSADMARKET_I_NMINPOPULARITY10: `${COMMON_URL}api.spotify.com/v1/recommendations?limit=20&seed_genres=sad&market=IN&min_popularity=10`,
  POST_TOKEN: `${COMMON_URL}accounts.spotify.com/api/token`,
};

export const getTrackslimit5 = (payload) =>
  apis.get(API_URLS.GET_TRACKSLIMIT5, {
    ...payload,
    params: { time_range: "{{timeRange}}", ...payload?.params },
  });

export const getRecommendationslimit20seedgenressadmarketINminpopularity10 = (
  payload
) =>
  apis.get(
    API_URLS.GET_RECOMMENDATIONSLIMIT20SEEDGENRESSADMARKET_I_NMINPOPULARITY10,
    payload
  );

export const postToken = (payload) =>
  apis.post(API_URLS.POST_TOKEN, {
    ...payload,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic {base64(clientId:secretId)}`,
      ...payload?.headers,
    },
  });
