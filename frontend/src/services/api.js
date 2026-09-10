import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

/*
 * Authentication will use this interceptor to attach the JWT
 * automatically once Phase 2 introduces the authentication flow.
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/*
 * Keep API error handling centralized so React pages do not need
 * to understand Axios-specific error structures.
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }

    const normalizedError = {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "An unexpected API error occurred.",
      errors: error.response?.data?.errors || []
    };

    return Promise.reject(normalizedError);
  }
);

export default api;