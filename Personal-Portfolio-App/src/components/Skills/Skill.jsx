import { ContextApi } from "../../context/ContextProvider"
import { techIcons } from "../../assets/Data/Data";
import { useEffect, useRef, useContext} from "react";
import "./Skill.css";

const Skill = () => {
  const { theme } = useContext(ContextApi)
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
    <section className={theme ? "skill-wrapper_light" : "skill-wrapper_night"} id="skills" ref={sectionRef}>
      <h2 className={theme ? "skill-title_light" : "skill-title_night"}>My Skills</h2>
      <p className={theme ? "skill-subtitle_light" : "skill-subtitle_night"}>
        Tools & technologies I use to craft modern digital experiences.
      </p>

      <div className="skill-grid">
        {techIcons.map((skill, i) => (
          <div
            className="skill-card"
            style={{ animationDelay: `${i * 0.1}s` }}
            key={i} >
            <span className="skill-icon"><img className="skill-img" src={skill.icon} alt={skill.name} /></span>
            <h3 className={theme ? "icons-name_light" : "icons-name_night"}>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skill;
