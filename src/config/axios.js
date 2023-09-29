import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use(
  (configObj) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY5NTk4MzA2NSwiZXhwIjoxNjk2MDY5NDY1fQ.YhesYr3zBCaV3EvVCcSzAlSVGVA-RwmufbC40IEP3Z0";

    if (token) {
      configObj.headers.Authorization = `Bearer ${token}`;
    }
    return configObj;
  }
);
export default axios;
