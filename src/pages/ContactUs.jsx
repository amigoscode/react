import { useState } from 'react';
import styles from './ContactUs.module.css';

const MIN_CHAR_LENGTH = 50;
const ContactUs = () => {
  const [formData, setFormData] = useState(null);
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (eventObj) => {
    eventObj.preventDefault();
    const data = new FormData(eventObj.target);
    const formattedFormData = Object.fromEntries(data.entries());
    if (formattedFormData.message === '') {
      alert('The email and or message fields cannot be blank');
      return;
    }

    if (messageText.length < MIN_CHAR_LENGTH) {
      alert('The message needs to be more than 50 characters long');
      return;
    }
    setFormData(formattedFormData);
    setMessageText('');
  };

  return (
    <>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        {/* <section>
            <label htmlFor="email">Email</label>
            <br />
            <input className={styles.email} type="email" id="email" name="email" placeholder="test@test.com" />
          </section> */}
        <section>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            className={styles.message}
            placeholder="What's on your mind"
            onChange={(e) => setMessageText(e.target.value)}
            value={messageText}
          />
          {messageText.length - MIN_CHAR_LENGTH}
        </section>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactUs;
