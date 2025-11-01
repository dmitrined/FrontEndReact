import { createContext } from "react";

// ✅ Тип, который строго ограничивает возможные значения темы
export type ThemeType = 'light' | 'dark';

// Интерфейс для типизации значений, передаваемых в контекст
export interface ThemeContextType {
    theme: ThemeType;       // ✅ ИСПРАВЛЕНО: Текущая тема: "light" или "dark"
    toggleTheme: () => void; // Функция для переключения темы
}

// Создание контекста с начальным значением undefined. 
// Тип может быть ThemeContextType или undefined (если не обернут в Provider).
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;