import mongoose, { Document, Schema } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  coverImage?: string;
  isPublished: boolean;
  publishedAt?: Date;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, trim: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true, maxlength: 300 },
    author: { type: String, required: true, default: 'DPH Admin' },
    category: {
      type: String,
      required: true,
      enum: ['Market Insights', 'Investment Tips', 'Company News', 'Economic Analysis', 'General'],
      default: 'General'
    },
    tags: [{ type: String }],
    coverImage: { type: String },
    isPublished: { type: Boolean, default: false },
    publishedAt: { type: Date },
    views: { type: Number, default: 0 }
  },
  { timestamps: true }
);

// Auto-generate slug from title
BlogPostSchema.pre('save', function (next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  if (this.isModified('isPublished') && this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

export default mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);