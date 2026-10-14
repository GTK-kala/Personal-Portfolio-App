import { ArrowUp } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { ContextApi } from "../../context/ContextProvider";

const BackToTop = () => {
  const { theme } = useContext(ContextApi);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-40 w-12 h-12 rounded-full flex items-center justify-center 
                  transition-all duration-500 hover:scale-110 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  } ${
                    theme
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-secondary/40"
                      : "bg-gradient-to-br from-secondary to-tertiary text-primary shadow-glow-tertiary"
                  }`}
    >
      <ArrowUp size={20} className="arrow-bounce" />
    </button>
  );
};

export default BackToTop;
