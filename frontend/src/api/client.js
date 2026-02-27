// src/api/client.js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// Global error handler for ALL API calls
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data)
    return Promise.reject(error)
  }
)

export default apiClient