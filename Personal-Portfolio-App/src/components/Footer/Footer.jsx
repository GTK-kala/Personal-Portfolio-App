import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>

      <div className="footer-container">
        <h2 className="footer-title">Khalid</h2>
        <p className="footer-sub">
          Full-Stack Developer • Crafting Web Experiences
        </p>

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
