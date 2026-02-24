import { useState, useEffect } from "react";

function ThemeToggle() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
        setActive(true);
      } else {
        document.documentElement.classList.add("dark");
        setActive(false);
      }
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (systemDark) {
        document.documentElement.classList.add("dark");
        setActive(false);
      } else {
        document.documentElement.classList.remove("dark");
        setActive(true);
      }
    }
  }, []);

  const handleToggle = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setActive(true);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setActive(false);
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2">
      <button
        onClick={handleToggle}
        className="
          w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300
          bg-[#5E67E6] dark:bg-[#D0FF71]
        "
      >
        <div
          className={`
            w-3.5 h-3.5 rounded-full shadow-md transform transition-transform duration-300 ease-out
            bg-white dark:bg-[#303030]
            ${active ? "translate-x-4.5" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
}

export default ThemeToggle;
