import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import NavBarApp from "./NavBarApp";


export default function LayOutApp() : JSX.Element{
  return (
    <div>
      <NavBarApp />
      <Outlet />
      <footer>
        Тут будет подвал
      </footer>
    </div>
  )
}
