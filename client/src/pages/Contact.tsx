import { useState } from 'react';
import sendEmail from '../utils/mailer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'comment',
    comments: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'comment',
          comments: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section>
      <h2 className="contact">Contact Me</h2>
      {status === 'success' && (
        <p style={{color: '#22dd22', textAlign: 'center'}}>Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p style={{color: '#dd2222', textAlign: 'center'}}>Failed to send message. Please try again.</p>
      )}
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
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default Contact;