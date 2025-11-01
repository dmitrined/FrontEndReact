import type { JSX } from "react";
import styles from "./MyHome.module.css";



export default function MyHome():JSX.Element {
  return (
   <div className={styles.container}>
      <h1 className={styles.heading}>Здравствуйте, добро пожаловать! 👋</h1>
      <p className={styles.text}>
        Перед вами сайт, где я обучаюсь React.
      </p>
      <p className={styles.text}>
        Здесь находятся мои работы по лекциям, домашним заданиям и консультациям.
      </p>
      <p className={styles.note}>
        Сайт находится в процессе разработки и наполнения.
      </p>
    </div>
  )
}






