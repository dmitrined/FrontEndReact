import type { JSX } from 'react';
import { useState } from 'react';
import style from './NavBarApp.module.css'
import { Link, NavLink } from 'react-router-dom';
import logoAit from "./img/AitLogo.png"
// ✅ Импортируем строгий тип для согласованности
import type { ThemeType } from './ThemeContext'; 

// ✅ Определение интерфейса для пропсов
export interface NavProps {
    theme: ThemeType;
    toggleTheme: () => void; // Функция для переключения темы (не используется здесь, но передается)
}

// ✅ Компонент принимает пропсы
export default function NavBarApp({ theme,toggleTheme }: NavProps): JSX.Element {
    
    // Состояния для логики аккордеона
    const [isLectureVisible, setIsLectureVisible] = useState(false);
    const [isHomeworkVisible, setIsHomeworkVisible] = useState(false);
    const [isConsultationVisible, setIsConsultationVisible] = useState(false);

    // Функции-переключатели, закрывающие другие списки (логика аккордеона)
    const toggleLectureVisibility = (e: React.MouseEvent) => {
        e.preventDefault(); 
        setIsLectureVisible(!isLectureVisible);
        setIsHomeworkVisible(false);
        setIsConsultationVisible(false);
    };

    const toggleHomeworkVisibility = (e: React.MouseEvent) => {
        e.preventDefault(); 
        setIsHomeworkVisible(!isHomeworkVisible);
        setIsLectureVisible(false);
        setIsConsultationVisible(false);
    };
      
    const toggleConsultationVisibility = (e: React.MouseEvent) => {
        e.preventDefault(); 
        setIsConsultationVisible(!isConsultationVisible); 
        setIsLectureVisible(false);
        setIsHomeworkVisible(false);
    };
    
    return(
        
        // Применение атрибута data-theme для CSS-стилизации
        <nav className={style.navigation} data-theme={theme}>
            <img src={logoAit} alt="logoAit" className={style.logo} />
            
            {/* БЛОКИ АККОРДЕОНА: Обернуты в dropdownContainer для абсолютного позиционирования списков */}

            {/* БЛОК 1: LECTURE */}
            <div className={style.dropdownContainer}> 
                <Link 
                    to="lecture" 
                    onClick={toggleLectureVisibility} 
                    className={style.lectureToggle} 
                    role="button" 
                    tabIndex={0}
                >
                    Lecture {isLectureVisible ? '▲' : '▼'}
                </Link>
                
                {isLectureVisible && ( 
                    <ul className={style.list} key={"lecture"}>
                        <li className={style.listElement}><NavLink to="alcohol" className={style.link}>Alcohol</NavLink></li>
                    <li className={style.listElement}><NavLink to="carshop" className={style.link}>CarShop</NavLink></li>
                    <li className={style.listElement}><NavLink to="counter" className={style.link}>Counter</NavLink></li>
                    <li className={style.listElement}><NavLink to="sandwich" className={style.link}>Sandwich</NavLink></li>
                    <li className={style.listElement}><NavLink to="userspage" className={style.link}>Users Page</NavLink></li>
                    <li className={style.listElement}><NavLink to="playgrount" className={style.link}>Playgrount</NavLink></li>
                    <li className={style.listElement}><NavLink to="dogsImage" className={style.link}>DogsImage</NavLink></li>
                    <li className={style.listElement}><NavLink to="cardSecurityCheck" className={style.link}>CardSecurityCheck</NavLink></li>
                    <li className={style.listElement}><NavLink to="contactForm" className={style.link}>ContactForm</NavLink></li>

                    </ul>
                )}
            </div>
                
            {/* БЛОК 2: HOMEWORK */}
            <div className={style.dropdownContainer}> 
                <Link 
                    to="homework" 
                    onClick={toggleHomeworkVisibility} 
                    className={style.lectureToggle} 
                    role="button" 
                    tabIndex={0}
                >
                    HomeWork {isHomeworkVisible ? '▲' : '▼'}
                </Link>

                {isHomeworkVisible && ( 
                    <ul className={style.list} key={"homework"}>
                         <li className={style.listElement}><NavLink to="homework02" className={style.link}>Profile Card</NavLink></li>
                    <li className={style.listElement}><NavLink to="feedback" className={style.link}>Feedback</NavLink></li>
                    <li className={style.listElement}><NavLink to="anecdotes" className={style.link}>Anecdotes</NavLink></li>
                    <li className={style.listElement}><NavLink to="products" className={style.link}>Products</NavLink></li>
                    </ul>
                )}
            </div>

            {/* БЛОК 3: CONSULTATION */}
            <div className={style.dropdownContainer}> 
                <Link 
                    to="consultation" 
                    onClick={toggleConsultationVisibility} 
                    className={style.lectureToggle} 
                    role="button" 
                    tabIndex={0}
                >
                    Consultation {isConsultationVisible ? '▲' : '▼'}
                </Link>

                {isConsultationVisible && ( 
                    <ul className={style.list} key={"consultation"}>
                      <li className={style.listElement}><NavLink to="citiPage" className={style.link}>CitiPage</NavLink></li>
                    <li className={style.listElement}><NavLink to="inputMiror" className={style.link}>InputMiror</NavLink></li>
                    <li className={style.listElement}><NavLink to="header" className={style.link}>Burger</NavLink></li>
                    </ul>
                )}
            </div>
            
            <button onClick={toggleTheme} className={style.themeToggle}>
                {theme === 'light' ? '🌙' : '🌞'}
            </button>
        </nav>
    )
}