import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3 className="footer-title">Khalid</h3>
          <p className="footer-text">
            Full-stack developer crafting modern and scalable web solutions.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Connect</h4>
          <div className="footer-socials">
            <a href="https://github.com/GTK-kala" target="_blank">
              <FaGithub size={25} />
            </a>
            <a href="https://t.me/gtkkala17" target="_blank">
              <FaTelegramPlane size={25} />
            </a>
            <a href="https://gtkkala1110@gmail" target="_blank">
              <FaEnvelope size={25} />
            </a>
          </div>
          <div className="contact-info">
            <div className="info-address">
              <span className="icon">
                <CiLocationOn />
              </span>
              <p>
                <strong>Address</strong> <br />
                <span>Addis Ababa , Ethiopia</span>
              </p>
            </div>

            <div className="info-address">
              <span className="icon">
                <IoCallOutline />
              </span>
              <p>
                <strong>Call Us</strong> <br />
                <span>+251 909 100 754</span>
              </p>
            </div>
            <div className="info-address">
              <span className="icon">
                <MdOutlineMail />
              </span>
              <p>
                <strong>Email Us</strong> <br />
                <span>gtkkala1110@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Khalid. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
