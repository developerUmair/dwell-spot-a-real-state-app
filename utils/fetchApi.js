import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

let headers = {
  "x-rapidapi-key": "bad658cd46mshba88fe540ac1c83p1e8672jsn69cc3f4ca592",
  "x-rapidapi-host": "bayut.p.rapidapi.com",
};

export const fetchApi = async (url) => {
  //   const response = await axios.get(url, { headers });
  const { data } = await axios.get(url, { headers });
  return data;
};
