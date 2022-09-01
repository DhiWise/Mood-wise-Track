import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {},
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getTrackslimit5 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://api.spotify.com/v1/me/top/tracks?limit=5`,
    method: "get",
    params: params,
    headers,
    data,
  });
};
export const getRecommendationslimit20seedgenressadmarketINminpopularity10 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://api.spotify.com/v1/recommendations?limit=20&market=IN&min_popularity=10`,
    method: "get",
    params,
    headers,
    data,
  });
};
export const postToken = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://accounts.spotify.com/api/token`,
    method: "post",
    params,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization:
        `Basic {base64(clientId:secretId)}`,
      ...headers,
    },
    data,
  });
};
