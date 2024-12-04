import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

interface RequestBody {
  callerName: string;
  callerEmail: string;
  subject: string;
  comment: string;
}

interface Response {
  statusCode: number;
  body: string;
}

const handler: Handler = async function(event): Promise<Response> {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as RequestBody;

  const message = {
    personalizations: [
      {
        to: [{ email: process.env.VITE_EMAIL }], // Replace with your email
        subject: requestBody.subject,
      },
    ],
    from: { email: requestBody.callerEmail }, // Use the caller's email as the sender
    content: [
      {
        type: 'text/plain',
        value: `Name: ${requestBody.callerName}\nEmail: ${requestBody.callerEmail}\nSubject: ${requestBody.subject}\nComment: ${requestBody.comment}`,
      },
    ],
  };

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.VITE_NETLIFY_EMAILS_SECRET}`,
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`SendGrid API error: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify("Email sent successfully!"),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify("Failed to send email"),
    };
  }
};

export { handler };