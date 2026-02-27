import mongoose, { Schema, Document } from 'mongoose';

export interface IInvestment extends Document {
  userId: mongoose.Types.ObjectId;
  type: 'stocks' | 'bonds' | 'real_estate' | 'private_equity' | 'mutual_funds';
  amount: number;
  currency: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const InvestmentSchema = new Schema<IInvestment>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['stocks', 'bonds', 'real_estate', 'private_equity', 'mutual_funds'],
    required: true
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0, 'Amount cannot be negative']
  },
  currency: {
    type: String,
    required: true,
    default: 'USD',
    uppercase: true,
    enum: ['USD', 'EUR', 'GBP', 'JPY', 'CHF']
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'completed'],
    default: 'pending'
  },
  metadata: {
    type: Map,
    of: Schema.Types.Mixed,
    default: {}
  }
}, {
  timestamps: true
});

export default mongoose.model<IInvestment>('Investment', InvestmentSchema);