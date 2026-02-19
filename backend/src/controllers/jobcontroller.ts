import { Request, Response, NextFunction } from 'express';
import JobApplication from '../models/jobapplication';

// @desc    Submit job application
// @route   POST /api/jobs/apply
// @access  Public
export const submitJobApplication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const application = await JobApplication.create(req.body);

    // TODO: Send email notification to HR

    res.status(201).json({
      success: true,
      message: 'Job application submitted successfully',
      data: application
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all job applications
// @route   GET /api/jobs/applications
// @access  Private/Admin
export const getJobApplications = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;
    const status = req.query.status as string;

    let query: any = {};
    if (status) {
      query.status = status;
    }

    const applications = await JobApplication.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await JobApplication.countDocuments(query);

    res.status(200).json({
      success: true,
      count: applications.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: applications
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update application status
// @route   PUT /api/jobs/applications/:id/status
// @access  Private/Admin
export const updateApplicationStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { status } = req.body;

    const application = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        error: 'Application not found'
      });
    }

    res.status(200).json({
      success: true,
      data: application
    });
  } catch (error) {
    next(error);
  }
};