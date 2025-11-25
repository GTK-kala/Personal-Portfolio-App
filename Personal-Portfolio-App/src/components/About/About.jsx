import { ContextApi } from "../../context/ContextProvider";
import { skill } from "../../assets/Data/Data";
import { useContext } from "react";
import "./About.css";

const About = () => {
   const { theme } = useContext(ContextApi);

  return (
    <section className={theme ? "about_light" : "about_night"} id="about">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-text">
          <h2 className={theme ? "section-title_light" : "section-title_night"}>About Me</h2>
          <p className={theme ? "about-description_light" : "about-description_night"}>
            👨‍💻 I'm a Full-Stack Developer passionate about building modern,
            responsive, and interactive web applications. I turn ideas into
            seamless user experiences using the latest technologies.
          </p>

          <h3 className={theme ? "skills-title_light" : "skills-title_night"}>My Skills</h3>
          <div className="skills-list">
            {skill.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Optional Info Cards */}
        <div className="about-cards">
          <div className={theme ? "card_light" : "card_night"}>
            <h3>Experience</h3>
            <p>2+ Years</p>
          </div>
          <div className={theme ? "card_light" : "card_night"}>
            <h3>Projects</h3>
            <p>100+ Completed</p>
          </div>
          <div className={theme ? "card_light" : "card_night"}>
            <h3>Clients</h3>
            <p>120+ Clients</p>
          </div>
          <div className={theme ? "card_light" : "card_night"}>
            <h3>Workers</h3>
            <p>5+ Partner</p>
          </div>
          <div className={theme ? "card_light" : "card_night"}>
            <h3>Hours Of Support</h3>
            <p>3000+ Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
