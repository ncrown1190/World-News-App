import axios from "axios";

export function fetchUSNews() {
  return axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=6004b8fcb1604003b4ead57854e8d2c2"
    )
    .then((response) => response.data);
}

export function fetchINDNews() {
  return axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2"
    )
    .then((response) => response.data);
}
export function getNewsByPub() {
  return axios
    .get(
      "https://newsapi.org/v2/top-headlines/sources?apiKey=6004b8fcb1604003b4ead57854e8d2c2"
    )
    .then((response) => response.data);
}
