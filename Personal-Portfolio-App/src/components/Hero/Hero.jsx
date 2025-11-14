import { Data } from "../../assets/Data/Data";
import "./Hero.css";

 const Hero = () => {
  return (
        <section className="hero" id="home">
      {/* Floating shapes */}
      <div className="floating-shape shape"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span>Khalid</span>
        </h1>
        <p className="hero-subtitle">
          Frontend Developer | React.js Enthusiast | Creating Modern Web Experiences
        </p>
        <div className="hero-buttons">
          <a href="/resume.pdf" className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={Data.profileImage} alt="Khalid" />
      </div>
    </section>
  );
}
export default Hero
