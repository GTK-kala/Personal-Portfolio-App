import { ContextApi } from "../../context/ContextProvider";
import { useContext } from "react";

const Loader = () => {
  const { theme } = useContext(ContextApi);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-colors duration-500 ${
        theme ? "bg-bg" : "bg-darkbg"
      }`}
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div
          className="absolute bottom-1/4 -right-20 w-72 h-72 bg-tertiary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main loader */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Orbital spinner */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32">
          {/* Outer rotating ring 1 */}
          <div
            className="absolute inset-0 rounded-full animate-spin"
            style={{ animationDuration: "2s" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-secondary/50" />
          </div>

          {/* Outer rotating ring 2 (opposite direction) */}
          <div
            className="absolute inset-2 rounded-full animate-spin"
            style={{
              animationDuration: "3s",
              animationDirection: "reverse",
            }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-tertiary shadow-lg shadow-tertiary/50" />
          </div>

          {/* Middle rotating ring 3 */}
          <div
            className="absolute inset-4 rounded-full animate-spin"
            style={{ animationDuration: "1.5s" }}
          >
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
          </div>

          {/* Center logo pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center animate-pulse ${
                theme
                  ? "bg-gradient-to-br from-primary to-secondary shadow-glow-secondary"
                  : "bg-gradient-to-br from-secondary to-tertiary shadow-glow-tertiary"
              }`}
            >
              <span className="text-white font-bold text-xl sm:text-2xl font-display">
                K
              </span>
            </div>
          </div>
        </div>

        {/* Brand name with shimmer */}
        <div className="flex flex-col items-center gap-3">
          <h1
            className={`text-2xl sm:text-3xl font-bold font-display tracking-wider ${
              theme ? "text-primary" : "text-bg"
            }`}
          >
            Khalid
            <span className="gradient-text">.</span>
          </h1>

          {/* Progress bar */}
          <div
            className={`w-48 sm:w-56 h-1.5 rounded-full overflow-hidden ${
              theme ? "bg-bg-dark" : "bg-darkbg-light"
            }`}
          >
            <div className="h-full w-full bg-gradient-to-r from-primary via-secondary to-tertiary animate-gradient rounded-full" />
          </div>

          {/* Loading text */}
          <p
            className={`text-xs sm:text-sm font-medium tracking-widest uppercase ${
              theme ? "text-primary-500" : "text-bg-dark"
            }`}
          >
            Loading
            <span className="inline-flex ml-1">
              <span
                className="animate-bounce"
                style={{ animationDelay: "0ms" }}
              >
                .
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "150ms" }}
              >
                .
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "300ms" }}
              >
                .
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <p
          className={`text-[10px] sm:text-xs tracking-[0.3em] uppercase ${
            theme ? "text-primary-400" : "text-bg-dark"
          }`}
        >
          Crafting Experience
        </p>
      </div>
    </div>
  );
};

export default Loader;
