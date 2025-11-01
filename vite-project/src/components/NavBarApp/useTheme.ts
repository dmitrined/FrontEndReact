import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import type { ThemeContextType } from "./ThemeContext";

// Кастомный хук, который возвращает данные из ThemeContext.
// Гарантирует, что хук используется внутри ThemeProvider.
export function useTheme(): ThemeContextType {
  // Получение данных из контекста
  const context = useContext(ThemeContext);

  // Проверка на наличие контекста и выбрасывание ошибки при его отсутствии
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}