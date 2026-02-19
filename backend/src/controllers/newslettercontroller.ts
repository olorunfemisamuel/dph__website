import { Request, Response, NextFunction } from 'express';
import Newsletter from '../models/newsletter';

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter/subscribe
// @access  Public
export const subscribe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, name } = req.body;

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      if (existing.isActive) {
        return res.status(400).json({ success: false, error: 'Email already subscribed' });
      }
      existing.isActive = true;
      existing.unsubscribedAt = undefined;
      await existing.save();
      return res.status(200).json({ success: true, message: 'Successfully re-subscribed!' });
    }

    const subscriber = await Newsletter.create({ email, name });
    res.status(201).json({ success: true, message: 'Successfully subscribed!', data: subscriber });
  } catch (error) {
    next(error);
  }
};

// @desc    Unsubscribe from newsletter
// @route   POST /api/newsletter/unsubscribe
// @access  Public
export const unsubscribe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    const subscriber = await Newsletter.findOneAndUpdate(
      { email },
      { isActive: false, unsubscribedAt: new Date() },
      { new: true }
    );

    if (!subscriber) {
      return res.status(404).json({ success: false, error: 'Email not found' });
    }

    res.status(200).json({ success: true, message: 'Successfully unsubscribed' });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all subscribers
// @route   GET /api/newsletter/subscribers
// @access  Private/Admin
export const getSubscribers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;
    const active = req.query.active;

    let query: any = {};
    if (active !== undefined) query.isActive = active === 'true';

    const subscribers = await Newsletter.find(query)
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Newsletter.countDocuments(query);
    const activeCount = await Newsletter.countDocuments({ isActive: true });

    res.status(200).json({
      success: true,
      count: subscribers.length,
      total,
      activeCount,
      page,
      pages: Math.ceil(total / limit),
      data: subscribers
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete subscriber
// @route   DELETE /api/newsletter/:id
// @access  Private/Admin
export const deleteSubscriber = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subscriber = await Newsletter.findByIdAndDelete(req.params.id);
    if (!subscriber) {
      return res.status(404).json({ success: false, error: 'Subscriber not found' });
    }
    res.status(200).json({ success: true, message: 'Subscriber deleted' });
  } catch (error) {
    next(error);
  }
};