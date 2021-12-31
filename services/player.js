import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;
const version = "api/v1";

export const getFeaturedGame = async () => {
  const endpoint = "players/landingpage";

  const response = await axios.get(`${api}/${version}/${endpoint}`);
  const { data } = response.data;

  return data;
};

export const getDetailVoucher = async (id) => {
  const endpoint = `players/${id}/detail`;

  const response = await axios.get(`${api}/${version}/${endpoint}`);
  const { data } = response.data;

  return data;
};

export const getGameCategory = async () => {
  const endpoint = "players/category";

  const response = await axios.get(`${api}/${version}/${endpoint}`);
  const { data } = response.data;

  return data;
};
