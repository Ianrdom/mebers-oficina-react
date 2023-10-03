import axios from "axios";

const api = axios.create({
  baseURL: "https://oficina-mebers-django-exy5-dev.fl0.io/api",
});

export default api;
