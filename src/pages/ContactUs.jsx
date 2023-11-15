import { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (eventObj) => {
    eventObj.preventDefault();
    const data = new FormData(eventObj.target);
    const formattedFormData = Object.fromEntries(data.entries());
    setFormData(formattedFormData);
  };

  if (formData) {
    return (
      <>
        <h1>Thank you form submitting this form</h1>
        <p>Your email: {formData.email}</p>
        <p>Your message: {formData.message}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="email">Email</label>
            <br />
            <input className={styles.email} type="email" id="email" name="email" placeholder="test@test.com" />
          </section>
          <section>
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" id="message" className={styles.message} placeholder="What's on your mind" />
          </section>
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
};

export default ContactUs;
