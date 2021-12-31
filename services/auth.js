import callApi from "../config/api";

const api = process.env.NEXT_PUBLIC_API;
const version = "api/v1";

export const setSignUp = (data) => {
  const url = `${api}/${version}/auth/signup`;
  return callApi({
    url,
    method: "POST",
    data,
  });
};

export const setLogin = (data) => {
  const url = `${api}/${version}/auth/signin`;
  return callApi({
    url,
    method: "POST",
    data,
  });
};
