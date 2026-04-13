import { useTheme } from "../hooks/useTheme";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const theme = useTheme();
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
