import { useState, useEffect, createContext } from "react";

export const ContextApi = createContext(null);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "light" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme ? "light" : "dark");
    document.documentElement.classList.toggle("dark", !theme);
  }, [theme]);

  const HandleTheme = () => setTheme((prev) => !prev);

  const ContextValue = { theme, HandleTheme, setTheme };

  return (
    <ContextApi.Provider value={ContextValue}>{children}</ContextApi.Provider>
  );
};

export default ContextProvider;
