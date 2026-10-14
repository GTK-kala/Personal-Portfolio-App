/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B3D91",
          50: "#E6EEF9",
          100: "#CCDDF3",
          200: "#99BBE7",
          300: "#6699DB",
          400: "#3377CF",
          500: "#0B3D91",
          600: "#093174",
          700: "#072557",
          800: "#05183A",
          900: "#020C1D",
        },
        secondary: {
          DEFAULT: "#3BA7F2",
          50: "#EAF5FE",
          100: "#D6EBFD",
          200: "#ADD7FB",
          300: "#84C3F9",
          400: "#5BB5F5",
          500: "#3BA7F2",
          600: "#1B8FE0",
          700: "#1572B4",
          800: "#105587",
          900: "#0A385A",
        },
        tertiary: {
          DEFAULT: "#7FE7D6",
          50: "#F0FCFA",
          100: "#E0F9F4",
          200: "#C2F3E9",
          300: "#A3EDDE",
          400: "#7FE7D6",
          500: "#4DD9C2",
          600: "#29C5AB",
          700: "#1F9B87",
          800: "#167063",
          900: "#0C463F",
        },
        bg: {
          DEFAULT: "#E8F6FF",
          light: "#F4FAFF",
          dark: "#D6ECFA",
        },
        darkbg: {
          DEFAULT: "#0A1229",
          light: "#111C3A",
          dark: "#05091A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Neumorphism light mode
        "neu-light": "8px 8px 16px #c5d1e0, -8px -8px 16px #ffffff",
        "neu-light-sm": "4px 4px 8px #c5d1e0, -4px -4px 8px #ffffff",
        "neu-light-inset":
          "inset 4px 4px 8px #c5d1e0, inset -4px -4px 8px #ffffff",
        // Neumorphism dark mode
        "neu-dark": "8px 8px 16px #05091a, -8px -8px 16px #0f1e42",
        "neu-dark-sm": "4px 4px 8px #05091a, -4px -4px 8px #0f1e42",
        "neu-dark-inset":
          "inset 4px 4px 8px #05091a, inset -4px -4px 8px #0f1e42",
        // Colored glows
        "glow-secondary": "0 0 30px rgba(59, 167, 242, 0.4)",
        "glow-tertiary": "0 0 30px rgba(127, 231, 214, 0.4)",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        blob: "blob 7s infinite",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};
