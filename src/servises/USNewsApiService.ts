import axios from "axios";

const apiKey = process.env.REACT_APP_NEWS_API_KEY || "";

export function fetchUSNews() {
  return axios
    .get("https://newsapi.org/v2/top-headlines?country=us", {
      params: { apiKey: apiKey },
    })
    .then((response) => response.data);
}
// export function fetchUSNews() {
//   return axios
//     .get(
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=6004b8fcb1604003b4ead57854e8d2c2"
//     )
//     .then((response) => response.data);
// }

export function fetchINDNews() {
  return axios
    .get("https://newsapi.org/v2/top-headlines?country=in", {
      params: { apiKey: apiKey },
    })
    .then((response) => response.data);
}
export function getNewsByPub() {
  return axios
    .get("https://newsapi.org/v2/top-headlines/sources", {
      params: { apiKey: apiKey },
    })
    .then((response) => response.data);
}
