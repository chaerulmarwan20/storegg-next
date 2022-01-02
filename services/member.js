import callApi from "../config/api";

const api = process.env.NEXT_PUBLIC_API;
const version = "api/v1";

export const getMemberOverview = () => {
  const url = `${api}/${version}/players/dashboard`;
  return callApi({
    url,
    method: "GET",
    token: true,
  });
};

export const getMemberTransactions = (value) => {
  let params = "";
  if (value === "all") params = "";
  else params = `?status=${value}`;
  const url = `${api}/${version}/players/history${params}`;
  return callApi({
    url,
    method: "GET",
    token: true,
  });
};
