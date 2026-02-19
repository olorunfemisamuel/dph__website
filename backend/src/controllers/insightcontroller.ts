import { Request, Response, NextFunction } from 'express';
import Insight from '../models/insight';

// @desc    Get all insights
// @route   GET /api/insights
// @access  Public
export const getInsights = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const category = req.query.category as string;

    let query: any = { isPublished: true };
    if (category) {
      query.category = category;
    }

    const insights = await Insight.find(query)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Insight.countDocuments(query);

    res.status(200).json({
      success: true,
      count: insights.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: insights
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single insight by slug
// @route   GET /api/insights/:slug
// @access  Public
export const getInsightBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const insight = await Insight.findOne({ slug: req.params.slug });

    if (!insight) {
      return res.status(404).json({
        success: false,
        error: 'Insight not found'
      });
    }

    // Increment views
    insight.views += 1;
    await insight.save();

    res.status(200).json({
      success: true,
      data: insight
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create insight
// @route   POST /api/insights
// @access  Private/Admin
export const createInsight = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const insight = await Insight.create(req.body);

    res.status(201).json({
      success: true,
      data: insight
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update insight
// @route   PUT /api/insights/:id
// @access  Private/Admin
export const updateInsight = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let insight = await Insight.findById(req.params.id);

    if (!insight) {
      return res.status(404).json({
        success: false,
        error: 'Insight not found'
      });
    }

    insight = await Insight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: insight
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete insight
// @route   DELETE /api/insights/:id
// @access  Private/Admin
export const deleteInsight = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const insight = await Insight.findById(req.params.id);

    if (!insight) {
      return res.status(404).json({
        success: false,
        error: 'Insight not found'
      });
    }

    await insight.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};