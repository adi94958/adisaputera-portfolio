import axios from 'axios';
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_CONFIG, AUTH_CONFIG, HTTP_STATUS, ENV } from '../constants';

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    const token = localStorage.getItem(AUTH_CONFIG.TOKEN_KEY);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request in development
    if (process.env.NODE_ENV === ENV.DEV) {
      console.log(`🚀 [API] ${config.method?.toUpperCase()} ${config.url}`);
    }
    
    return config;
  },
  (error) => {
    console.error('❌ [API] Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (process.env.NODE_ENV === ENV.DEV) {
      console.log(`✅ [API] ${response.config.method?.toUpperCase()} ${response.config.url} - ${response.status}`);
    }
    
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
      // Unauthorized - redirect to login
      localStorage.removeItem(AUTH_CONFIG.TOKEN_KEY);
      window.location.href = AUTH_CONFIG.LOGIN_REDIRECT;
    }
    
    if (error.response?.status === HTTP_STATUS.NOT_FOUND) {
      console.error('❌ [API] Resource not found');
    }
    
    if (error.response?.status >= HTTP_STATUS.INTERNAL_SERVER_ERROR) {
      console.error('❌ [API] Server error');
    }
    
    console.error('❌ [API] Response error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
