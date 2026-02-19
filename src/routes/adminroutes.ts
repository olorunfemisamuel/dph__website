import { Router } from 'express';
import { protect, authorize } from '../middleware/auth';
import User from '../models/user';
import Contact from '../models/contact';
import Investment from '../models/investment';
import Insight from '../models/insight';
import JobApplication from '../models/jobapplication';
import logger from '../utils/logger';

const router = Router();

// Dashboard statistics
router.get('/dashboard', protect, authorize('admin'), async (req, res) => {
  try {
    const [
      totalUsers,
      totalContacts,
      totalInvestments,
      totalInsights,
      totalApplications,
      recentContacts,
      recentInvestments
    ] = await Promise.all([
      User.countDocuments(),
      Contact.countDocuments(),
      Investment.countDocuments(),
      Insight.countDocuments(),
      JobApplication.countDocuments(),
      Contact.find().sort('-createdAt').limit(5),
      Investment.find().populate('userId', 'firstName lastName email').sort('-createdAt').limit(5)
    ]);

    res.json({
      success: true,
      data: {
        totals: {
          users: totalUsers,
          contacts: totalContacts,
          investments: totalInvestments,
          insights: totalInsights,
          applications: totalApplications
        },
        recentContacts,
        recentInvestments
      }
    });
  } catch (error) {
    logger.error('Dashboard stats error:', error);
    res.status(500).json({ success: false, error: 'Failed to get dashboard statistics' });
  }
});

// User management
router.get('/users', protect, authorize('admin'), async (req, res) => {
  try {
    const { page = 1, limit = 10, role, search } = req.query;

    const query: any = {};
    if (role) query.role = role;
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const users = await User.find(query)
      .select('-password')
      .sort('-createdAt')
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await User.countDocuments(query);

    res.json({
      success: true,
      data: users,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Get users error:', error);
    res.status(500).json({ success: false, error: 'Failed to get users' });
  }
});

router.patch('/users/:id/role', protect, authorize('admin'), async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    logger.error('Update user role error:', error);
    res.status(500).json({ success: false, error: 'Failed to update user role' });
  }
});

router.delete('/users/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    logger.error('Delete user error:', error);
    res.status(500).json({ success: false, error: 'Failed to delete user' });
  }
});

export default router;