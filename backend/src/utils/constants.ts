export const USER_ROLES = {
  USER: 'user',
  ADVISOR: 'advisor',
  ADMIN: 'admin'
} as const;

export const INVESTMENT_TYPES = {
  STOCKS: 'stocks',
  BONDS: 'bonds',
  REAL_ESTATE: 'real_estate',
  PRIVATE_EQUITY: 'private_equity',
  MUTUAL_FUNDS: 'mutual_funds'
} as const;

export const INVESTMENT_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  COMPLETED: 'completed'
} as const;

export const CONTACT_STATUS = {
  NEW: 'new',
  READ: 'read',
  REPLIED: 'replied'
} as const;

export const JOB_APPLICATION_STATUS = {
  PENDING: 'pending',
  REVIEWED: 'reviewed',
  INTERVIEWED: 'interviewed',
  REJECTED: 'rejected',
  ACCEPTED: 'accepted'
} as const;

export const INSIGHT_CATEGORIES = {
  MARKET_NEWS: 'market_news',
  INVESTMENT_TIPS: 'investment_tips',
  ECONOMIC_ANALYSIS: 'economic_analysis',
  COMPANY_NEWS: 'company_news'
} as const;

export const CURRENCIES = {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  NGN: 'NGN'
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500
} as const;

export const ERROR_MESSAGES = {
  USER_EXISTS: 'User already exists with this email',
  INVALID_CREDENTIALS: 'Invalid credentials',
  NOT_AUTHORIZED: 'Not authorized to access this route',
  USER_NOT_FOUND: 'User not found',
  RESOURCE_NOT_FOUND: 'Resource not found',
  VALIDATION_FAILED: 'Validation failed',
  SERVER_ERROR: 'Server error occurred'
} as const;