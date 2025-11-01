import type { JSX } from 'react';
import style from './FooterApp.module.css'; 

// Компонент принимает тему и переключатель
export default function FooterApp(): JSX.Element {
    
    return (
        <footer className={style.footer} >
            <p className={style.copyright}>2025 AIT React App. Все права защищены.</p>
        </footer>
    );
}