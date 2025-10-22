import type { JSX } from "react";
import style from "./Bike.module.css";

interface Props{
    gears: number;
    brand: string;
    prce: number;
    image : string;
}

export default function Bike(props:Props): JSX.Element {
  const {gears, brand, prce, image} = props;
  return (
    <div>
      Brand: {brand} Gears: {gears} Price: {prce}
      Image <img className ={style.image} src = {image} />
    </div>
  )
}
