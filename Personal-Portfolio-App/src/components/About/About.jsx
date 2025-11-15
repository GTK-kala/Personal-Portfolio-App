import { skill } from "../../assets/Data/Data";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-description">
            👨‍💻 I'm a Full-Stack Developer passionate about building modern,
            responsive, and interactive web applications. I turn ideas into
            seamless user experiences using the latest technologies.
          </p>

          <h3 className="skills-title">My Skills</h3>
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
          <div className="card">
            <h3>Experience</h3>
            <p>2+ Years</p>
          </div>
          <div className="card">
            <h3>Projects</h3>
            <p>100+ Completed</p>
          </div>
          <div className="card">
            <h3>Clients</h3>
            <p>120+ Clients</p>
          </div>
          <div className="card">
            <h3>Workers</h3>
            <p>5+ Partner</p>
          </div>
          <div className="card">
            <h3>Hours Of Support</h3>
            <p>3000+ Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
