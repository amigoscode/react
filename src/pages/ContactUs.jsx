import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <form>
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
};

export default ContactUs;
