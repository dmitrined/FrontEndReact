import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import NavBarLecture from "./NavBarLecture";


export default function LayOut() : JSX.Element{
  return (
    <div>
      <NavBarLecture />
      <Outlet />
      <footer>
        Тут будет подвал
      </footer>
    </div>
  )
}
