import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3977', // Base API URL
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const makeRequest = async (url, method = 'get', data = null, customHeaders = {}) => {
  try {
    const config = {
      url,
      method,
      data,
      headers: {
        ...apiClient.defaults.headers, // Include default headers from apiClient
        ...customHeaders,
      },
    };
    const response = await apiClient.request(config); // Use apiClient for making requests
    return response.data;
  } catch (error) {
    console.error('Request Error:', error);
    throw error;
  }
};
