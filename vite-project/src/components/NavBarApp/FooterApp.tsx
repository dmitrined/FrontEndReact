import type { JSX } from 'react';
import type { NavProps } from './NavBarApp'; // Используем тот же интерфейс для пропсов
import style from './FooterApp.module.css'; // Импортируем стили

// Компонент принимает тему и переключатель
export default function FooterApp({ theme, toggleTheme }: NavProps): JSX.Element {
    
    return (
        // Применение стиля и атрибута data-theme для CSS
        <footer className={style.footer} data-theme={theme}>
            <p className={style.copyright}>2025 AIT React App. Все права защищены.</p>
            
            {/* КНОПКА ПЕРЕКЛЮЧЕНИЯ ТЕМЫ: Здесь она размещена, 
                но вы можете вернуть ее в NavBarApp, если хотите. */}
            <button onClick={toggleTheme} className={style.themeToggle}>
                Тема: {theme.toUpperCase()} {theme === 'light' ? '🌙' : '🌞'}
            </button>
        </footer>
    );
}