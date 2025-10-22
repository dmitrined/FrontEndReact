
import { useState, type JSX } from 'react'
import style from './Sandwich.module.css'

export default function Sandwich() : JSX.Element {
    const [sandwich, setSandwich] = useState<string>("Sandwich : ")

    function handleAddBread(): void {
        setSandwich(`${sandwich} Bread 🍞`)
    }

    function handleAddCheese(): void {
        setSandwich(`${sandwich} Cheese 🧀`)
    }

    function handleAddBacon(): void {
        setSandwich(`${sandwich} Bacon 🥩`)
    }

     function handleAddSalat(): void {
        setSandwich(`${sandwich} Salat 🥬`)
    }

    function handleReset(): void {
        setSandwich("Sandwich : ")
    }

  return (
    <div className={style.container}>
      <h2>Sandwich</h2>
      <img src="https://mur-mur.top/uploads/posts/2023-05/1683186165_mur-mur-top-p-mini-burgeri-keitering-krasivo-53.jpg" alt="" />
      <p>{sandwich}</p>

      <div className={style.btnContainer}>
        <button type='button' onClick={handleAddBread} className={style.btn}>Bread</button>
        <button type='button' onClick={handleAddCheese} className={style.btn}>Cheese</button>
        <button type='button' onClick={handleAddBacon} className={style.btn}>Bacon</button>
        <button type='button' onClick={handleAddSalat} className={style.btn}>Salat</button>
        <button type='button' onClick={handleReset} className={style.btn}>Resset</button>





      </div>
    </div>
  )
}
