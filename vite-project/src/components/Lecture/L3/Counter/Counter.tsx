import { useState, type JSX } from "react";
import style from './Counter.module.css'

export default function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  
  // создали переменную состояния counter
  // и функцию setCounter для изменения состояния
  // useState -  это хук
  // в круглых скобках начальное состояние переменной состояния
  // хук useState  принимает начальное значение переменной состояния
  // возвращает массив в котором на первом месте переменная состояния
  // а на втором месте функция  сетер
  // Хук - это функция которая используется только внутри компонента
  // В жизненном цикле компонента React есть 3 фазы:
  // Сборка (mounting)
  // Обновление (updating)
  // Разборка (unmounting)
  
  
  // Функция: Добавить 1 €
  function handlePlus(): void {
    setCounter(counter + 1);
  } 
  // Функция: Убрать 1 €
  function handleMinus(): void {
    setCounter (counter-1)
  }

  // Функция: Добавить 100 €
  function handlePlusHundred(): void {
    setCounter(counter + 100);
  }

  // Функция: Сбросить счетчик на 0
  function handleReset(): void {
    setCounter(0);
  }

  return <div>
    <h1>Добавление денег</h1>
    <img src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" alt="" />
    <div className={`${style.container} ${style.counterClass}`}>
       <span style={{color:"red"}}>{counter}  €</span>
        <button className = {style.btn} type="button" onClick={handlePlus}>Добавить денег</button>
        <button className = {style.btn} type="button" onClick={handleMinus}>Убрать лишние деньги</button>
        <button className = {style.btn} type="button" onClick={handlePlusHundred}>Добавить 100 €</button>
        <button className = {style.btn} type="button" onClick={handleReset}>Oбнулить</button>


    </div>
  </div>;
}
