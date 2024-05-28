import axios from "axios";
import { checkToken } from "./auth";

const instance = axios.create({
  baseURL: "https://task-react-auth-backend.eapi.joincoded.com/api",
});
// if their is an action i wont to add if i have token for example to print a note
instance.interceptors.request.use((config) => {
  const token = checkToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
