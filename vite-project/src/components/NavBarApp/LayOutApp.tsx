import type { JSX } from "react";
import { Outlet } from "react-router-dom";
// ✅ Импортируем тип пропсов для дочерних компонентов
import NavBarApp, { type NavProps } from "./NavBarApp"; 
import FooterApp from "./FooterApp";
import ThemeProvider from "./ThemeProvider"; 
import { useTheme } from "./useTheme";     
import style from "./LayoutApp.module.css";

/**
 * LayOutContent - Компонент, который использует контекст темы.
 * Обернут в ThemeProvider в LayOutApp, чтобы избежать ошибки.
 */
function LayOutContent(): JSX.Element {
    
    // 1. ПОЛУЧЕНИЕ КОНТЕКСТА ТЕМЫ: Получаем тему и переключатель для всего лейаута
    const { theme, toggleTheme } = useTheme();

    // 2. ОПРЕДЕЛЕНИЕ ПРОПСОВ: Передача данных дочерним компонентам
    const sharedProps: NavProps = {
        theme,
        toggleTheme,
    };

    return (
        // ✅ data-theme для применения CSS-переменных ко всему приложению
        <div className={style.layoutContainer} data-theme={theme}>
            
            <NavBarApp {...sharedProps} />

            {/* mainContent: Контейнер для роутов, имеет padding-top для компенсации фиксированной навигации */}
            <main className={style.mainContent}>
                <Outlet />
            </main>

            <FooterApp {...sharedProps} />
        </div>
    );
}

/**
 * LayOutApp - Основной компонент-лейаут, оборачивающий контент в провайдер.
 */
export default function LayOutApp(): JSX.Element {
    return (
        // ✅ ThemeProvider оборачивает LayOutContent, гарантируя доступность контекста
        <ThemeProvider>
            <LayOutContent />
        </ThemeProvider>
    );
}