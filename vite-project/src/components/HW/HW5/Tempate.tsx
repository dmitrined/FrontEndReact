import type { JSX } from "react";

import { Outlet } from "react-router-dom";
import Nav from "./Nav";


export default function LayOut() : JSX.Element{
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}
