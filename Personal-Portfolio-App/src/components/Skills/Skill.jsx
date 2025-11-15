import { useEffect, useRef } from "react";
import "./Skill.css";

export default function Skills() {
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

  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Tailwind", icon: "🌪️" },
    { name: "Next.js", icon: "⬛" },
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐙" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Postman", icon: "📬" },
    { name: "JavaScript", icon: "⚡" },
    { name: "VS Code", icon: "💻" },
    { name: "HTML", icon: "🌐" }
  ];

  return (
    <section className="skill-wrapper" id="skills" ref={sectionRef}>
      <h2 className="skill-title">My Skills</h2>
      <p className="skill-subtitle">
        Tools & technologies I use to craft modern digital experiences.
      </p>

      <div className="skill-grid">
        {skills.map((skill, i) => (
          <div
            className="skill-card"
            style={{ animationDelay: `${i * 0.1}s` }}
            key={i} >
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
