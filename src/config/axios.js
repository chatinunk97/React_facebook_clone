import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken, removeAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use((configObj) => {

  const token = getAccessToken();

  if (token) {
    configObj.headers.Authorization = `Bearer ${token}`;
  }
  return configObj;
});

axios.interceptors.response.use(
response => response,
  (error) => {
    if (error.response.status === 401) {
      removeAccessToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
