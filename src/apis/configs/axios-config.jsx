import axios from "axios";
import { auth } from "../../utils/auth/firebase";
export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  withCredentials: true,
});

// defining a custom error handler for all APIs
const errorHandler = (error) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
api.interceptors.request.use(async (config) => {
  console.log(import.meta.env.VITE_BACKEND_API_URL)
  let token = "";
  if (auth.currentUser) {
    token = await auth.currentUser.getIdToken();
  }

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
