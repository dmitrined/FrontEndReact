import type { JSX } from "react";
import { useState } from "react";
import style from "./LayoutApp.module.css";
import { Link, NavLink } from "react-router-dom";
import logoAit from "./img/AitLogo.png";
import myFoto from "./img/myFoto.png";
import type { ThemeType } from "./ThemeContext";

// ✅ Определение интерфейса для пропсов
export interface NavProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

// ✅ Компонент принимает пропсы
export default function NavBarApp({
  theme,
  toggleTheme,
}: NavProps): JSX.Element {
  // ✅ Состояние для открытия/закрытия бургер-меню
  const [isOpen, setIsOpen] = useState(false);

  // Состояния для логики аккордеона
  const [isLectureVisible, setIsLectureVisible] = useState(false);
  const [isHomeworkVisible, setIsHomeworkVisible] = useState(false);
  const [isConsultationVisible, setIsConsultationVisible] = useState(false);

  // ✅ НОВАЯ ФУНКЦИЯ: Закрытие бургер-меню и всех аккордеонов при клике на ссылку
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsLectureVisible(false);
    setIsHomeworkVisible(false);
    setIsConsultationVisible(false);
  };

  // Функции-переключатели аккордеона
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

  return (
    <nav className={`${style.navigation}`} data-theme={theme}>
      <a target="_blank" href="https://edu.ait-tr.de/">
        <img src={logoAit} alt="logoAit" className={style.logo} />
      </a>

      <a
        target="_blank"
        href="https://github.com/dmitrined/FrontEndReact/tree/main/vite-project/src"
        className={`${style.githubLink} ${style.link}`}
      >
        GitHub
      </a>

      <NavLink to="home" className={style.link}>
        <img className={style.myFoto} src={myFoto} alt="myFoto" />
      </NavLink>

      <div className={`${style.navItems} ${isOpen ? style.open : ""}`}>
        {/* БЛОК 1: LECTURE */}
        <div className={style.dropdownContainer}>
          <Link
            to="lecture"
            onClick={toggleLectureVisibility}
            className={style.lectureToggle}
            role="button"
            tabIndex={0}
          >
            Lecture {isLectureVisible ? "▲" : "▼"}
          </Link>

          {isLectureVisible && (
            <ul className={style.list} key={"lecture"}>
              <li className={style.listElement}>
                <NavLink
                  to="alcohol"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Alcohol
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="carshop"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  CarShop
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="counter"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Counter
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="sandwich"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Sandwich
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="userspage"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Users Page
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="playgrount"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Playgrount
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="dogsImage"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  DogsImage
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="cardSecurityCheck"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  CardSecurityCheck
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="contactForm"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  ContactForm
                </NavLink>
              </li>
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
            HomeWork {isHomeworkVisible ? "▲" : "▼"}
          </Link>

          {isHomeworkVisible && (
            <ul className={style.list} key={"homework"}>
              {/* ✅ Добавлено onClick={handleLinkClick} */}
              <li className={style.listElement}>
                <NavLink
                  to="homework02"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Profile Card
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="feedback"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Feedback
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="anecdotes"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Anecdotes
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="products"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Products
                </NavLink>
              </li>
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
            Consultation {isConsultationVisible ? "▲" : "▼"}
          </Link>

          {isConsultationVisible && (
            <ul className={style.list} key={"consultation"}>
              {/* ✅ Добавлено onClick={handleLinkClick} */}
              <li className={style.listElement}>
                <NavLink
                  to="citiPage"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  CitiPage
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="inputMiror"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  InputMiror
                </NavLink>
              </li>
              <li className={style.listElement}>
                <NavLink
                  to="header"
                  className={style.link}
                  onClick={handleLinkClick}
                >
                  Burger
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* ✅ КНОПКА-ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ */}
      <button onClick={toggleTheme} className={style.themeToggle}>
        {theme === "light" ? "🌙" : "🌞"}
      </button>

      {/* ✅ БУРГЕР-ИКОНКА: Переключает состояние 'isOpen' */}
      <p className={style.burgerIcon} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </p>
    </nav>
  );
}
