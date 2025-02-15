interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  comments: string;
}

interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
  details?: {
    code?: string;
    response?: string;
  };
}

const sendEmail = async (contactData: ContactFormData): Promise<EmailResponse> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });
    
    const data: EmailResponse = await response.json();
    if (!response.ok) throw new Error(data.error);
    return data;
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
};

export default sendEmail;