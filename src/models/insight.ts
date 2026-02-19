import mongoose, { Schema, Document } from 'mongoose';

export interface IInsight extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const InsightSchema = new Schema<IInsight>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    maxlength: [500, 'Excerpt cannot exceed 500 characters']
  },
  author: {
    type: String,
    required: [true, 'Author is required']
  },
  category: {
    type: String,
    enum: ['market_news', 'investment_tips', 'economic_analysis', 'company_news'],
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  imageUrl: String,
  publishedAt: {
    type: Date,
    default: Date.now
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Create slug from title before saving
InsightSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
  next();
});

export default mongoose.model<IInsight>('Insight', InsightSchema);