import axios from "axios";
import { auth } from "./firebase";

const customFetch = axios.create({
  baseURL: process.env.REACT_APP_BASEAPI_URL,
});
customFetch.interceptors.request.use(async (config) => {
  const token = await auth.currentUser.getIdToken();
  console.log(token);
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});
export default customFetch;
