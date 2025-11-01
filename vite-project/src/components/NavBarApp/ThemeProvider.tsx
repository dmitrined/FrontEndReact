import { useState, type ReactNode } from "react";
import ThemeContext, { type ThemeType } from "./ThemeContext";

// Интерфейс для пропсов, включающий дочерние элементы
interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Состояние для хранения текущей темы
  const [theme, setTheme] = useState<ThemeType>("light");

  // Функция для переключения темы
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    // ThemeContext.Provider передает theme и toggleTheme всем дочерним компонентам
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}