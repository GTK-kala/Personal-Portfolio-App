import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-text">
            Feel free to reach out for collaborations, job opportunities, or any
            projects.
          </p>

          <div className="contact-animation">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
