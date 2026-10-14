import BackToTop from "../components/BackToTop/BackToTop";
import { ContextApi } from "../context/ContextProvider";
import Project from "../components/Projects/Project";
import Contact from "../components/Contact/Contact";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Skill from "../components/Skills/Skill";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";

const Home = () => {
  const { theme } = useContext(ContextApi);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme ? "bg-bg" : "bg-darkbg"
      }`}
    >
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: theme
              ? "rgba(232, 246, 255, 0.95)"
              : "rgba(10, 18, 41, 0.95)",
            color: theme ? "#0B3D91" : "#E8F6FF",
            borderRadius: "14px",
            padding: "12px 16px",
            fontSize: "0.9rem",
            backdropFilter: "blur(10px)",
            border: theme
              ? "1px solid rgba(59, 167, 242, 0.2)"
              : "1px solid rgba(127, 231, 214, 0.2)",
            boxShadow: theme
              ? "8px 8px 16px #c5d1e0, -8px -8px 16px #ffffff"
              : "8px 8px 16px #05091a, -8px -8px 16px #0f1e42",
          },
          success: {
            iconTheme: { primary: "#7FE7D6", secondary: "#0B3D91" },
          },
          error: {
            iconTheme: { primary: "#ef4444", secondary: "#0B3D91" },
          },
        }}
      />
    </div>
  );
};

export default Home;
