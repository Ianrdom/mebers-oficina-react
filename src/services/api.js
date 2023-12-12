import axios from "axios";
import { userState } from "../services/recoilAuth";
import { getRecoil } from "recoil-nexus";
const api = axios.create({
  baseURL: "http://191.52.55.168:19003/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((req) => {
  const currentUserState = getRecoil(userState);
  if (currentUserState.access != null) {
    req.headers.authorization = `Bearer ${currentUserState.access}`;
  }
  return req;
});
export default api;
