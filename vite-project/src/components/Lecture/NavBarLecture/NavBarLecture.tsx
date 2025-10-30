import type { JSX } from 'react';
import style from './NavLecture.module.css'
import { NavLink } from 'react-router-dom';

export default function NavBarLecture():JSX.Element {
    return(
        <nav className={style.navigation}>
            <ul className={style.list}>
            <li className={style.listElement}>
            <NavLink to="alcohol" className={style.link}>
            Alcohol
            </NavLink>
            </li>
            <li className={style.listElement}>
            <NavLink to="carshop" className={style.link}>
            CarShop
            </NavLink>
            </li>
            <li className={style.listElement}>
            <NavLink to="counter" className={style.link}>
            Counter
            </NavLink>
            </li>
            <li className={style.listElement}>
            <NavLink to="home" className={style.link}>
            Home
            </NavLink>
            </li>
            <li className={style.listElement}>
            <NavLink to="userspage" className={style.link}>
            Users Page
            </NavLink>
            </li>

            <li className={style.listElement}>
            <NavLink to="playgrount" className={style.link}>
            Playgrount
            </NavLink>
            </li>

            <li className={style.listElement}>
            <NavLink to="dogsImage" className={style.link}>
            DogsImage
            </NavLink>
            </li>

            <li className={style.listElement}>
            <NavLink to="cardSecurityCheck" className={style.link}>
            CardSecurityCheck
            </NavLink>
            </li>

            <li className={style.listElement}>
            <NavLink to="contactForm" className={style.link}>
            ContactForm
            </NavLink>
            </li>

            </ul>
        </nav>
    )
}