import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-sub">
        Feel free to reach out for opportunities or collaboration.
      </p>

      <div className="contact-container">
        <form className="contact-form">
          {/* Name */}
          <div className="input-box">
            <input type="text" required />
            <label>Name</label>
          </div>

          {/* Email */}
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>

          {/* Message */}
          <div className="input-box textarea">
            <textarea required></textarea>
            <label>Message</label>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
