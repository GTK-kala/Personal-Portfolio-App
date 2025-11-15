import { useEffect, useRef } from "react";
import "./Skill.css";

const Skills = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    const scrollAnim = () => {
      const section = skillRef.current;
      if (!section) return;

      const top = section.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.8;

      if (top < trigger) {
        section.classList.add("reveal");
      }
    };

    window.addEventListener("scroll", scrollAnim);
    return () => window.removeEventListener("scroll", scrollAnim);
  }, []);

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 82 },
    { name: "MySQL", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Next.js", level: 75 },
    { name: "Git & GitHub", level: 92 },
    { name: "Postman", level: 88 },
    { name: "VS Code", level: 97 },
  ];

  return (
    <section className="skills-section" id="skills" ref={skillRef}>
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">
        A quick visual overview of the technologies I use to build modern web
        applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ "--progress": `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
