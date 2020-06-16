import axios from "axios";
export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: getToken()
    },
    baseURL: "http://localhost:5000"
  });
};

const tokenName = "eoeir2934uehfosdbs";
export const getToken = () => {
  return JSON.parse(localStorage.getItem(tokenName));
};
export const setToken = token => {
  localStorage.setItem(tokenName, JSON.stringify(token));
};
export const clearToken = () => {
  localStorage.removeItem(tokenName);
};
