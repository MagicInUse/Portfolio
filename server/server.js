import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();

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
  try {
    await transporter.verify();

    const { name, email, subject, comments } = req.body;

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

    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
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

// Serve static files from parent directory
app.use(express.static(join(__dirname, '..')));

// Handle all other routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));