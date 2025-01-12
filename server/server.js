import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();TM

// Verify env variables are loaded
// console.log('Environment Check:', {
//   hasUser: !!process.env.SMTP_USER,
//   hasPass: !!process.env.SMTP_PASSWORD,
//   hasToAddress: !!process.env.SMTP_TO_ADDRESS
// });

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',')

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

app.post('/api/contact', async (req, res) => {
  // Log incoming request
//   console.log('Received contact request:', {
//     body: req.body,
//     auth: {
//       hasUser: !!process.env.SMTP_USER,
//       hasPass: !!process.env.SMTP_PASSWORD
//     }
//   });

  try {
    // Test connection first
    // console.log('Testing connection...');
    await transporter.verify();
    // console.log('Connection verified');

    const { name, email, subject, comments } = req.body;
    // console.log('Sending email with config:', {
    //   from: process.env.SMTP_USER,
    //   to: process.env.SMTP_TO_ADDRESS,
    //   subject: `Portfolio Contact: ${subject}`
    // });

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO_ADDRESS,
      subject: `Portfolio Contact: ${subject} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${comments}</p>
      `
    });

    // console.log('Email sent successfully:', info);
    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    // console.error('Detailed error:', {
    //   message: error.message,
    //   code: error.code,
    //   response: error.response,
    //   responseCode: error.responseCode,
    //   command: error.command
    // });
    res.status(500).json({ 
      success: false, 
      error: error.message,
      details: {
        code: error.code,
        response: error.response
      }
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));