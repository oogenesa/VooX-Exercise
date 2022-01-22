import axios from "axios";

const API_URL = "http://localhost:5000/";

export const get_all_issues = () => {
  let url = API_URL + "issues";
  return axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get_param_issues = (req) => {
  let url = API_URL + "issues_param";
  return axios
    .post(url, req, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
