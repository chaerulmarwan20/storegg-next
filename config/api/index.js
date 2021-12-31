import axios from "axios";

const callApi = async ({ url, method, data }) => {
  const response = await axios({ url, method, data }).catch(
    (err) => err.response
  );
  const res = {};
  if (response.status > 300) {
    res.error = true;
    res.message = response.data.message;
    res.data = null;
    return res;
  }
  res.error = false;
  res.message = "Success";
  res.data = response.data.data;
  return res;
};

export default callApi;
