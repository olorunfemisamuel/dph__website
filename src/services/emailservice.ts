import nodemailer from 'nodemailer';
import logger from '../utils/logger';

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    const mailOptions = {
      from: options.from || process.env.EMAIL_FROM,
      to: options.to,
      subject: options.subject,
      html: options.html
    };

    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent: ${info.messageId}`);
  } catch (error) {
    logger.error('Error sending email:', error);
    throw error;
  }
};

export const sendContactConfirmation = async (email: string, name: string): Promise<void> => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #166534;">Thank you for contacting DPH Advisory</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you within 24-48 hours.</p>
      <p>Best regards,<br>DPH Advisory Team</p>
    </div>
  `;

  await sendEmail({
    to: email,
    subject: 'Thank you for contacting DPH Advisory',
    html
  });
};

export const sendAdminNotification = async (contactData: any): Promise<void> => {
  const html = `
    <div style="font-family: Arial, sans-serif;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Subject:</strong> ${contactData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
    </div>
  `;

  await sendEmail({
    to: process.env.ADMIN_EMAIL || 'admin@dphadvisory.com',
    subject: 'New Contact Form Submission',
    html
  });
};