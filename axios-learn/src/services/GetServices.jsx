import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const getMovie = () => {
  return api.get("?i=tt3896198&apikey=6186aa99");
};
