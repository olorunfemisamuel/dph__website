import { Request, Response, NextFunction } from 'express';
import Investment from '../models/investment';

// @desc    Get user investments
// @route   GET /api/investments
// @access  Private
export const getInvestments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const investments = await Investment.find({ userId: (req as any).user.id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: investments.length,
      data: investments
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single investment
// @route   GET /api/investments/:id
// @access  Private
export const getInvestment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const investment = await Investment.findById(req.params.id);

    if (!investment) {
      return res.status(404).json({
        success: false,
        error: 'Investment not found'
      });
    }

    // Check ownership
    if (investment.userId.toString() !== (req as any).user.id && (req as any).user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to access this investment'
      });
    }

    res.status(200).json({
      success: true,
      data: investment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create investment
// @route   POST /api/investments
// @access  Private
export const createInvestment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Add user to req.body
    req.body.userId = (req as any).user.id;

    const investment = await Investment.create(req.body);

    res.status(201).json({
      success: true,
      data: investment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update investment
// @route   PUT /api/investments/:id
// @access  Private
export const updateInvestment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let investment = await Investment.findById(req.params.id);

    if (!investment) {
      return res.status(404).json({
        success: false,
        error: 'Investment not found'
      });
    }

    // Check ownership
    if (investment.userId.toString() !== (req as any).user.id && (req as any).user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this investment'
      });
    }

    investment = await Investment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: investment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete investment
// @route   DELETE /api/investments/:id
// @access  Private
export const deleteInvestment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const investment = await Investment.findById(req.params.id);

    if (!investment) {
      return res.status(404).json({
        success: false,
        error: 'Investment not found'
      });
    }

    // Check ownership
    if (investment.userId.toString() !== (req as any).user.id && (req as any).user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to delete this investment'
      });
    }

    await investment.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};