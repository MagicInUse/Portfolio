import React, { useState, ChangeEvent, FormEvent } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'comment',
    comments: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      callerName: formData.name,
      callerEmail: formData.email,
      subject: formData.subject,
      comment: formData.comments
    };

    try {
      const response = await fetch('.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Your message has been sent!');
      } else {
        alert('Failed to send your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <section>
      <h2 className="contact">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <label htmlFor="subject">Subject:</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="comment">Comment</option>
            <option value="collaborate">Collaborate</option>
            <option value="issue">Issue</option>
            <option value="other">Other</option>
          </select>
        </section>
        <section>
          <label htmlFor="comments">Additional Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={5}
            maxLength={500}
            required
          />
        </section>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;