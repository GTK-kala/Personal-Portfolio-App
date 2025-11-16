import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h3 className="footer-logo">Kal</h3>
        <p className="footer-text">
          Full-stack developer crafting modern web experiences.
        </p>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="#" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} — Designed & Built by{" "}
          <span>Khalid</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
