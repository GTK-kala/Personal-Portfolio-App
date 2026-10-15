import { useContext } from "react";
import { Heart } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { ContextApi } from "../../context/ContextProvider";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ContextApi);

  const quickLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const contacts = [
    {
      icon: CiLocationOn,
      label: "Address",
      value: "Addis Ababa, Ethiopia",
    },
    {
      icon: IoCallOutline,
      label: "Call",
      value: "+251 910 090 754",
    },
    {
      icon: MdOutlineMail,
      label: "Email",
      value: "gtkkala1110@gmail.com",
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden pt-16 transition-colors duration-500 ${
        theme
          ? "bg-gradient-to-br from-primary to-primary-700 text-white"
          : "bg-gradient-to-br from-darkbg to-darkbg-dark text-bg"
      }`}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 rounded-full pointer-events-none w-72 h-72 bg-secondary/20 filter blur-3xl" />
      <div className="absolute bottom-0 left-0 rounded-full pointer-events-none w-72 h-72 bg-tertiary/10 filter blur-3xl" />

      <div className="relative container-x">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur">
                <span className="text-lg font-bold">K</span>
              </div>
              <span className="text-xl font-bold">Khalid</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Full-stack developer crafting modern and scalable web solutions
              with clean code and beautiful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="inline-block text-sm transition-colors duration-200 text-white/70 hover:text-tertiary hover:translate-x-1"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <div className="flex gap-3 mb-5">
              <a
                href="https://github.com/GTK-kala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 backdrop-blur hover:bg-tertiary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://t.me/gtkkala17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 backdrop-blur hover:bg-tertiary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <FaTelegramPlane size={18} />
              </a>
              <a
                href="mailto:gtkkala1110@gmail.com"
                className="p-2.5 rounded-xl bg-white/10 backdrop-blur hover:bg-tertiary hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <MdOutlineMail size={18} />
              </a>
            </div>

            <ul className="space-y-2 text-sm">
              {contacts.map(({ icon: Icon, value }, i) => (
                <li key={i} className="flex items-center gap-2 text-white/70">
                  <Icon size={14} className="flex-shrink-0" />
                  <span className="truncate">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 text-center border-t border-white/10">
          <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/70">
            Made with{" "}
            <Heart
              className="text-tertiary fill-tertiary animate-pulse"
              size={14}
            />{" "}
            by Khalid
          </p>
          <p className="mt-2 text-xs text-white/40">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
