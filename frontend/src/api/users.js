// src/api/users.js
import apiClient from './client'

export const getUsers = () => apiClient.get('/users')
export const createUser = (userData) => apiClient.post('/users', userData)