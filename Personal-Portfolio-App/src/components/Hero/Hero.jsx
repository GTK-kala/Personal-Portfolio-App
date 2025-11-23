import { ContextApi } from "../../context/ContextProvider";
import { Data } from "../../assets/Data/Data";
import { useContext } from "react";
import "./Hero.css";

const Hero = () => {
  const { theme } = useContext(ContextApi);

  return (
    <section className={theme ? "hero_light" : "hero_night"} id="home">
      {/* Floating shapes */}
      <div className="floating-shape shape"></div>

      <div className="hero-content">
        <h1 className={theme ? "hero-title_light" : "hero-title_night"}>
          Hi, I'm <span>Khalid</span>
        </h1>
        <p className={theme ? "hero-subtitle_light" : "hero-subtitle_night"}>
          Frontend Developer | React.js Enthusiast | Creating Modern Web
          Experiences
        </p>
        <div className="hero-buttons">
          <a href="/resume.pdf" className={theme ? "btn_light" : "btn_night"} download>
            Download CV
          </a>
          <a href="#contact" className={theme ? "btn_light " : "btn_night"}>
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={Data.profileImage} alt="Khalid" />
      </div>
    </section>
  );
};
export default Hero;
