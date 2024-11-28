import axios from "axios";

// Base configuration for API calls
const apiClient = axios.create({
  FbaseURL: process.env.Login_APP_API_URL, 
//   SbaseURL : process.env.Addmeeting_APP_API_URL,
  timeout: 5000, // Timeout for the request
  headers: {
    "Content-Type": "application/json",
  },
});

// Common function to make API calls
export const apiCall = async (method, url, data, params) => {
    try {
      const response = await apiClient({
        method,
        url,
        data,
        params,
      });
      return response.data;
    } catch (error) {
      console.error("API Call Error:", error);
      throw error; // Rethrow to handle in the component
    }
  };