import { useCallback, useEffect, useRef, useState } from "react";

export function useTheme() {
  const [darkMode, setDarkMode] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  const hasMounted = useRef(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    if (hasMounted.current) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
    hasMounted.current = true;
  }, [darkMode]);

  const toggleTheme = useCallback(() => setDarkMode((prev) => !prev), []);

  return { darkMode, toggleTheme };
}
