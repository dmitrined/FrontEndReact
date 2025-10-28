import type { JSX } from 'react';
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom';

export default function Nav():JSX.Element {
    return(
        <nav className={style.navigation}>
            <ul className={style.list}>

            <li className={style.listElement}>
            <NavLink to="sandwich" className={style.link}>
            Sandwich
            </NavLink>
            </li>
            
            <li className={style.listElement}>
            <NavLink to="products" className={style.link}>
            Products
            </NavLink>

            </li>
            </ul>
        </nav>
    )
}
