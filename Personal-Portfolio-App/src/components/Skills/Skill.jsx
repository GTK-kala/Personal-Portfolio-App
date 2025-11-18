import { techIcons } from "../../assets/Data/Data";
import { useEffect, useRef } from "react";
import "./Skill.css";

const Skill = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sectionRef.current.classList.add("show");
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="skill-wrapper" id="skills" ref={sectionRef}>
      <h2 className="skill-title">My Skills</h2>
      <p className="skill-subtitle">
        Tools & technologies I use to craft modern digital experiences.
      </p>

      <div className="skill-grid">
        {techIcons.map((skill, i) => (
          <div
            className="skill-card"
            style={{ animationDelay: `${i * 0.1}s` }}
            key={i} >
            <span className="skill-icon"><img className="skill-img" src={skill.icon} alt={skill.name} /></span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skill;
