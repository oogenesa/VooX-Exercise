import axios from "axios";

const API_URL = "http://localhost:5000/";
// const API_URL = "https://calm-ocean-03341.herokuapp.com/";

export const get_all_issues = () => {
  let url = API_URL + "issues";
  return axios
    .get(url)
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
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
