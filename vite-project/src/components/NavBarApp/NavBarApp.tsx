import type { JSX } from 'react';
import { useState } from 'react';
import style from './NavBarApp.module.css'
import { Link, NavLink } from 'react-router-dom';
import logoAit from "./img/AitLogo.png"

export default function NavBarApp(): JSX.Element {
    
    // 1. СОСТОЯНИЯ ДЛЯ ТРЕХ РАЗДЕЛОВ
    const [isLectureVisible, setIsLectureVisible] = useState(false);
    const [isHomeworkVisible, setIsHomeworkVisible] = useState(false);
    const [isConsultationVisible, setIsConsultationVisible] = useState(false);

    // 2. ФУНКЦИИ-ПЕРЕКЛЮЧАТЕЛИ (ЛОГИКА АККОРДЕОНА)

    const toggleLectureVisibility = (e: React.MouseEvent) => {
        e.preventDefault(); 
        setIsLectureVisible(!isLectureVisible);
        // Закрываем другие списки, если этот открывается/закрывается
        setIsHomeworkVisible(false);
        setIsConsultationVisible(false);
    };

    const toggleHomeworkVisibility = (e: React.MouseEvent) => {
        e.preventDefault(); 
        setIsHomeworkVisible(!isHomeworkVisible);
        // Закрываем другие списки
        setIsLectureVisible(false);
        setIsConsultationVisible(false);
    };
      
    const toggleConsultationVisibility = (e: React.MouseEvent) => {
        e.preventDefault(); 
        setIsConsultationVisible(!isConsultationVisible); // 🛑 ИСПРАВЛЕНО: используем isConsultationVisible
        // Закрываем другие списки
        setIsLectureVisible(false);
        setIsHomeworkVisible(false);
    };
    
    return(
        
        <nav className={style.navigation}>
            <img src={logoAit} alt="logoAit" className={style.logo} />
            {/* 🛑 БЛОК 1: LECTURE */}
            <Link 
                to="lecture" 
                onClick={toggleLectureVisibility} 
                className={style.lectureToggle} 
                role="button" 
                tabIndex={0}
            >
                Lecture {isLectureVisible ? '⏫' : '⏬'}
            </Link>
            
            {/* УСЛОВИЕ: isLectureVisible */}
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
                
            {/* 🛑 БЛОК 2: HOMEWORK */}
            <Link 
                to="homework" 
                onClick={toggleHomeworkVisibility} 
                className={style.lectureToggle} 
                role="button" 
                tabIndex={0}
            >
                HomeWork {isHomeworkVisible ? '⏫' : '⏬'}
            </Link>

            {/* УСЛОВИЕ: isHomeworkVisible */}
            {isHomeworkVisible && ( 
                <ul className={style.list} key={"homework"}>
                    <li className={style.listElement}><NavLink to="homework02" className={style.link}>Profile Card</NavLink></li>
                    <li className={style.listElement}><NavLink to="feedback" className={style.link}>Feedback</NavLink></li>
                    <li className={style.listElement}><NavLink to="anecdotes" className={style.link}>Anecdotes</NavLink></li>
                    <li className={style.listElement}><NavLink to="products" className={style.link}>Products</NavLink></li>
                </ul>
            )}

            {/* 🛑 БЛОК 3: CONSULTATION */}
            <Link 
                to="consultation" 
                onClick={toggleConsultationVisibility} 
                className={style.lectureToggle} 
                role="button" 
                tabIndex={0}
            >
                Consultation {isConsultationVisible ? '⏫' : '⏬'} {/* 🛑 ИСПРАВЛЕНО: Заголовок и индикатор */}
            </Link>

            {/* УСЛОВИЕ: isConsultationVisible */}
            {isConsultationVisible && ( 
                <ul className={style.list} key={"consultation"}>
                    <li className={style.listElement}><NavLink to="citiPage" className={style.link}>CitiPage</NavLink></li>
                    <li className={style.listElement}><NavLink to="inputMiror" className={style.link}>InputMiror</NavLink></li>
                    <li className={style.listElement}><NavLink to="header" className={style.link}>Burger</NavLink></li>
                </ul>
            )}
        </nav>
    )
}