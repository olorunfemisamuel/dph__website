export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    ME: '/api/auth/me'
  },
  // Contact endpoints
  CONTACT: {
    SUBMIT: '/api/contacts',
    GET_ALL: '/api/contacts',
    UPDATE_STATUS: (id: string) => `/api/contacts/${id}/status`
  },
  // Insights endpoints
  INSIGHTS: {
    GET_ALL: '/api/insights',
    GET_BY_ID: (id: string) => `/api/insights/${id}`,
    CREATE: '/api/insights',
    UPDATE: (id: string) => `/api/insights/${id}`,
    DELETE: (id: string) => `/api/insights/${id}`
  },
  // Investments endpoints
  INVESTMENTS: {
    GET_ALL: '/api/investments',
    GET_BY_ID: (id: string) => `/api/investments/${id}`,
    CREATE: '/api/investments',
    UPDATE: (id: string) => `/api/investments/${id}`,
    DELETE: (id: string) => `/api/investments/${id}`
  },
  // Jobs endpoints
  JOBS: {
    GET_ALL: '/api/jobs',
    GET_BY_ID: (id: string) => `/api/jobs/${id}`,
    APPLY: '/api/jobs/apply',
    CREATE: '/api/jobs',
    UPDATE: (id: string) => `/api/jobs/${id}`,
    DELETE: (id: string) => `/api/jobs/${id}`
  },
  // Admin endpoints
  ADMIN: {
    DASHBOARD: '/api/admin/dashboard',
    USERS: '/api/admin/users',
    USER_BY_ID: (id: string) => `/api/admin/users/${id}`
  }
};

export const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:8000/ws/stocks';