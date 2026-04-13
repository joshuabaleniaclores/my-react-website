import { useCallback, useEffect, useState } from "react";

export function useTheme() {
  const [darkMode, setDarkMode] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = useCallback(() => setDarkMode((prev) => !prev), []);

  return { darkMode, toggleTheme };
}
