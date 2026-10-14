import { ContextApi } from "../../context/ContextProvider";
import { useEffect, useRef, useContext, useState } from "react";
import { techIcons } from "../../assets/Data/Data";

const Skill = () => {
  const { theme } = useContext(ContextApi);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`section-py transition-colors duration-500 ${
        theme ? "bg-bg-light" : "bg-darkbg-light"
      }`}
    >
      <div className="container-x">
        <div className="mb-12 sm:mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Tools & technologies I use to craft modern digital experiences
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-5">
          {techIcons.map((skill, i) => (
            <div
              key={i}
              className={`group p-3 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center 
                          transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                            theme
                              ? "bg-bg shadow-neu-light-sm hover:shadow-neu-light"
                              : "bg-darkbg shadow-neu-dark-sm hover:shadow-neu-dark"
                          } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 sm:w-12 sm:h-12 object-contain mb-2 sm:mb-3 group-hover:scale-110 transition-transform"
                loading="lazy"
              />
              <h3
                className={`text-[10px] sm:text-xs font-semibold ${
                  theme ? "text-primary-700" : "text-bg"
                }`}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
