import type { JSX } from "react";
import Car from "../Car/Car";
import Bike from "../Bike/Bike";

export default function CarShop() : JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      {/* вызываем компонент Car с пропсами */}
      <Car brand={"Toyota"} color={"black"} image={""} />
        <Car brand={"BMW"} color={"red"} image={""} />
        <Car brand={"Audi"} color={"blue"} image={""} />
        <Car brand={"Lexus"} color={"green"} image={""} />
        <Car brand={"Mercedes"} color={"white"} image={""} />
        <Bike gears={8} brand={"Harley Davidson"} prce={14000} image={"https://sportishka.com/uploads/posts/2022-04/1650967338_37-sportishka-com-p-chopperi-kharlei-devidson-modelnii-ryad-kr-39.jpg"} />


    </div>
  )
}
