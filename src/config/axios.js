import axios from "axios";
import { BACKEND_URL } from "./env";
import {getAccessToken} from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use(
  (configObj) => {
    const token = getAccessToken();

    if (token) {
      configObj.headers.Authorization = `Bearer ${token}`;
    }
    return configObj;
  }
);
export default axios;
