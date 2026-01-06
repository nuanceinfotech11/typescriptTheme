/* eslint-disable arrow-body-style */
import axios from "axios";

export const TYPE_API_URL = "http://18.237.108.200";

const axiosInstance = axios.create({
  baseURL: TYPE_API_URL,
  headers: { "ngrok-skip-browser-warning": "69420" }
});

export const getApiData = async (url) => {
    console.log(url)
  const res = await axiosInstance({
    url,
    method: "GET",
  });
  return res;
};