import { useContext } from "react";
import { skill } from "../../assets/Data/Data";
import { ContextApi } from "../../context/ContextProvider";
import { Award, Briefcase, Users, Clock } from "lucide-react";

const About = () => {
  const { theme } = useContext(ContextApi);

  const stats = [
    { icon: Briefcase, label: "Experience", value: "2+ Years" },
    { icon: Award, label: "Projects", value: "100+ Done" },
    { icon: Users, label: "Clients", value: "120+" },
    { icon: Clock, label: "Support", value: "3000+ Hrs" },
  ];

  return (
    <section
      id="about"
      className={`section-py transition-colors duration-500 ${
        theme ? "bg-bg" : "bg-darkbg"
      }`}
    >
      <div className="container-x">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me and what drives my passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-3xl ${
                theme
                  ? "bg-bg shadow-neu-light"
                  : "bg-darkbg-light shadow-neu-dark"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  theme ? "text-primary" : "text-bg"
                }`}
              >
                Turning Ideas Into Reality Through Code
              </h3>
              <p
                className={`mb-4 leading-relaxed ${
                  theme ? "text-primary-600" : "text-bg-dark"
                }`}
              >
                👨‍💻 I'm a Full-Stack Developer passionate about building modern,
                responsive, and interactive web applications. I turn ideas into
                seamless user experiences using the latest technologies.
              </p>
              <p
                className={`leading-relaxed ${
                  theme ? "text-primary-600" : "text-bg-dark"
                }`}
              >
                I focus on clean architecture, performance, and pixel-perfect
                design to deliver products that users love.
              </p>
            </div>

            {/* Skills */}
            <div
              className={`p-6 sm:p-8 rounded-3xl ${
                theme
                  ? "bg-bg shadow-neu-light"
                  : "bg-darkbg-light shadow-neu-dark"
              }`}
            >
              <h3
                className={`text-lg font-bold mb-4 ${
                  theme ? "text-primary" : "text-bg"
                }`}
              >
                My Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.map((s, i) => (
                  <span
                    key={i}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all hover:scale-105 ${
                      theme
                        ? "bg-secondary-50 text-primary-700 border border-secondary-100"
                        : "bg-darkbg text-bg border border-secondary-800"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 text-center ${
                  theme
                    ? "bg-bg shadow-neu-light hover:shadow-neu-light-sm"
                    : "bg-darkbg-light shadow-neu-dark hover:shadow-neu-dark-sm"
                }`}
              >
                <div
                  className={`inline-flex p-3 rounded-2xl mb-3 ${
                    theme ? "bg-secondary-50" : "bg-darkbg"
                  }`}
                >
                  <Icon size={22} className="text-secondary" />
                </div>
                <div
                  className={`text-2xl sm:text-3xl font-bold mb-1 ${
                    theme ? "text-primary" : "text-bg"
                  }`}
                >
                  {value}
                </div>
                <div
                  className={`text-xs sm:text-sm ${
                    theme ? "text-primary-600" : "text-bg-dark"
                  }`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
