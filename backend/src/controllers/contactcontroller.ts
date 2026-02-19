import { Request, Response, NextFunction } from 'express';
import Contact from '../models/contact';

export const submitContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contact
    });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;
    const status = req.query.status as string;

    let query: any = {};
    if (status) query.status = status;

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Contact.countDocuments(query);

    res.status(200).json({
      success: true,
      count: contacts.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: contacts
    });
  } catch (error) {
    next(error);
  }
};

export const updateContactStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};