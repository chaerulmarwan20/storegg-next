import axios from "axios";
import Cookies from "js-cookie";

const callApi = async ({ url, method, data, token = false }) => {
  let headers = {};
  if (token) {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);
  const res = {};
  if (response.status > 300) {
    res.error = true;
    res.message = response.data.message;
    res.data = null;
    return res;
  }
  const { length } = Object.keys(response.data);
  res.error = false;
  res.message = "Success";
  res.data = length > 1 ? response.data : response.data.data;
  return res;
};

export default callApi;
