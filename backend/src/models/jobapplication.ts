import mongoose, { Schema, Document } from 'mongoose';

export interface IJobApplication extends Document {
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
  updatedAt: Date;
}

const JobApplicationSchema = new Schema<IJobApplication>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[0-9]{10,15}$/, 'Please provide a valid phone number']
  },
  position: {
    type: String,
    required: [true, 'Position is required']
  },
  department: {
    type: String,
    required: [true, 'Department is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  resumeUrl: String,
  coverLetter: String,
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'interviewed', 'rejected', 'accepted'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.model<IJobApplication>('JobApplication', JobApplicationSchema);