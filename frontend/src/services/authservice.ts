import api from "./api"
import { API_ENDPOINTS } from "../api/config"

export interface RegisterPayload {
  firstName: string
  lastName: string
  email: string
  password: string
  phone?: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  role: 'user' | 'admin' | 'advisor'
}

export interface AuthResponse {
  success: boolean
  token: string
  user: User  // fixed: backend sends 'user' not 'data'
}

export const register = async (data: RegisterPayload): Promise<AuthResponse> => {
  try {
    const response = await api.post(API_ENDPOINTS.AUTH.REGISTER, data)

    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user)) // fixed
    }

    return response.data
  } catch (error) {
    console.error('Error registering user:', error)
    throw error
  }
}

export const login = async (data: LoginPayload): Promise<AuthResponse> => {
  try {
    const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, data)

    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user)) // fixed
    }

    return response.data
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}

export const logout = async () => {
  try {
    await api.post(API_ENDPOINTS.AUTH.LOGOUT)
  } catch (error) {
    console.error('Error logging out:', error)
  } finally {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const token = localStorage.getItem('token')
    if (!token) return null

    const response = await api.get(API_ENDPOINTS.AUTH.ME)
    return response.data.data  // getMe returns { success, data: user }
  } catch (error) {
    console.error('Error fetching current user:', error)
    return null
  }
}

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('token')
}

export const getUserFromStorage = (): User | null => {
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}