// src/api/apiClient.ts
import axios from "axios";
import useAuthStore from "@/stores/authStore";

// export const API_BASE_URL = import.meta.env.VITE_API_URL 

// export const API_BASE_URL = " https://backend.foodhybrid.com/api"
export const API_BASE_URL = "https://server.tafiki.com/api"

// Create Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

});

// Request Interceptor - Inject access token from Zustand store
apiClient.interceptors.request.use(
  (config) => {
    const { access } = useAuthStore.getState();
    if (access) {
      config.headers["Authorization"] = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Utility: Axios client for multipart/form-data uploads
export const formDataClient = axios.create({
  baseURL: API_BASE_URL,
  // Do not set Content-Type here; let the browser set the multipart boundary
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
});

// Interceptor to inject access token for FormData client
formDataClient.interceptors.request.use(
  (config) => {
    const { access } = useAuthStore.getState();
    if (access) {
      config.headers["Authorization"] = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default apiClient;
