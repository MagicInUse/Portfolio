import { useState, ChangeEvent } from 'react';
import styles from './ContactForm.module.css';
import sendEmail from '../../utils/mailer.js';

const ContactForm: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      <h2 className={styles.title}>Contact Me</h2>
      {status === 'success' && (
        <p className={styles.success}>Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className={styles.error}>Failed to send message. Please try again.</p>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <section className={styles.formSection}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </section>
        <section className={styles.formSection}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </section>
        <section className={styles.formSection}>
          <label className={styles.label} htmlFor="subject">Subject:</label>
          <select
            className={styles.select}
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
        <section className={styles.formSection}>
          <label className={styles.label} htmlFor="comments">Additional Comments:</label>
          <textarea
            className={styles.textarea}
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={5}
            maxLength={500}
            required
          />
        </section>
        <button className={styles.button} type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;