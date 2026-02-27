import { Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';

// Send token response
export const sendTokenResponse = (user: any, statusCode: number, res: Response) => {
  const secret = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';
  const expire = process.env.JWT_EXPIRES_IN || '7d';
  const cookieExpireDays = parseInt(process.env.JWT_COOKIE_EXPIRE || '7');

  const signOptions: SignOptions = {
    expiresIn: expire as SignOptions['expiresIn']
  };

  const token = jwt.sign(
    { id: user._id },
    secret,
    signOptions
  );

  const cookieOptions = {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const
  };

  res
    .status(statusCode)
    .cookie('token', token, cookieOptions)
    .json({
      success: true,
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
    });
};

// Generate random string
export const generateRandomString = (length: number = 20): string => {
  return Math.random().toString(36).substring(2, length + 2);
};

// Format error message
export const formatError = (error: any): string => {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  return 'An unexpected error occurred';
};

// Paginate results helper
export const getPaginationData = (page: number, limit: number, total: number) => {
  return {
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
    hasNext: page < Math.ceil(total / limit),
    hasPrev: page > 1
  };
};