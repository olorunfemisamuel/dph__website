import api from "./api"
import { API_ENDPOINTS } from "../api/config"

export interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

export interface Contact extends ContactPayload {
  _id: string
  status: 'pending' | 'read' | 'replied' | 'archived'
  createdAt: string
  updatedAt: string
}

export interface ContactsResponse {
  success: boolean
  count: number
  total: number
  page: number
  pages: number
  data: Contact[]
}

export const submitContact = async (data: ContactPayload) => {
  try {
    const response = await api.post(API_ENDPOINTS.CONTACT.SUBMIT, data)
    return response.data
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw error
  }
}

export const getContacts = async (page = 1, status?: string): Promise<ContactsResponse> => {
  try {
    const params = new URLSearchParams()
    params.append('page', page.toString())
    if (status) params.append('status', status)

    const response = await api.get(`${API_ENDPOINTS.CONTACT.GET_ALL}?${params}`)
    return response.data
  } catch (error) {
    console.error('Error fetching contacts:', error)
    throw error
  }
}

export const updateContactStatus = async (id: string, status: string) => {
  try {
    const response = await api.put(API_ENDPOINTS.CONTACT.UPDATE_STATUS(id), { status })
    return response.data
  } catch (error) {
    console.error('Error updating contact status:', error)
    throw error
  }
}