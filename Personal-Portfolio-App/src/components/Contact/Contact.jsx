import { ContextApi } from "../../context/ContextProvider";
import { useState, useContext} from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  // const [loading, setLoading] = useState(false);
  const { theme } = useContext(ContextApi);
  const [name , setName ] = useState('');
  const [email , setEmail ] = useState('');
  const [message , setMessage ] = useState('');

  const  HandelSubmit = async (e) => {
     e.preventDefault();
     const value = {
      name,
      email,
      message
     }
    try {
      const result = await emailjs.send(
       "service_dga4h43",
       "template_fyt1f2g",
       value, 
       "Ek-zK_lz8--m_fd-8"
      )
      console.log(result.text);
      toast.success("Message sent successfully!")
    } catch (error) {
      toast.error("Failed to send message!");
    }
    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    <section id="contact" className={theme ? "contact-section_light" : "contact-section_night"}>
      <div className="contact-container">
        <div className="contact-left">
          <h2 className={theme ? "contact-title_light" : "contact-title_night"}>Let's Work Together</h2>
          <p className={theme ? "contact-text_light" : "contact-text_night"}>
            Feel free to reach out for collaborations, job opportunities, or any
            projects.
          </p>

          <div className="contact-animation">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) =>HandelSubmit(e)}>
          <input className="input" type="text" name="name" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
          <input className="input" type="email" name="email" value={email} placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
          <textarea className="input" name="message" value={message} placeholder="Your Message" onChange={(e) => setMessage(e.target.value)} required></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
