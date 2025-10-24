import type { JSX } from 'react';
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom';

export default function Nav():JSX.Element {
    return(
        <nav className={style.navigation}>
            <ul className={style.list}>
            <li className={style.listElement}>
            <NavLink to="homework02" className={style.link}>
            Profile Card
            </NavLink>
            </li>
            <li className={style.listElement}>
            <NavLink to="feedback" className={style.link}>
            Feedback
            </NavLink>
            </li>
            <li className={style.listElement}>
            <NavLink to="anecdotes" className={style.link}>
            Anecdotes
            </NavLink>
            </li>
            </ul>
        </nav>
    )
}