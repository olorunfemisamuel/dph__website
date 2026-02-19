import { Request, Response, NextFunction } from 'express';
import BlogPost from '../models/blogpost';

// @desc    Get all blog posts
// @route   GET /api/blog
// @access  Public
export const getBlogPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const category = req.query.category as string;
    const published = req.query.published;

    let query: any = {};
    if (category) query.category = category;
    if (published === 'true') query.isPublished = true;

    const posts = await BlogPost.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await BlogPost.countDocuments(query);

    res.status(200).json({
      success: true,
      count: posts.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: posts
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog post
// @route   GET /api/blog/:id
// @access  Public
export const getBlogPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, error: 'Post not found' });
    }
    post.views += 1;
    await post.save();
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

// @desc    Create blog post
// @route   POST /api/blog
// @access  Private/Admin
export const createBlogPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await BlogPost.create(req.body);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

// @desc    Update blog post
// @route   PUT /api/blog/:id
// @access  Private/Admin
export const updateBlogPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ success: false, error: 'Post not found' });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete blog post
// @route   DELETE /api/blog/:id
// @access  Private/Admin
export const deleteBlogPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, error: 'Post not found' });
    }
    res.status(200).json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
};