export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  role: 'user' | 'admin' | 'advisor';
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IContact {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
}

export interface IInvestment {
  _id?: string;
  userId: string;
  type: 'stocks' | 'bonds' | 'real_estate' | 'private_equity' | 'mutual_funds';
  amount: number;
  currency: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface IInsight {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: 'market_news' | 'investment_tips' | 'economic_analysis' | 'company_news';
  tags: string[];
  imageUrl?: string;
  publishedAt: Date;
  isPublished: boolean;
  views: number;
}

export interface IStockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume?: number;
  timestamp: Date;
}

export interface IJobApplication {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  location: string;
  resumeUrl?: string;
  coverLetter?: string;
  status: 'pending' | 'reviewed' | 'interviewed' | 'rejected' | 'accepted';
  createdAt: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp: string;
}