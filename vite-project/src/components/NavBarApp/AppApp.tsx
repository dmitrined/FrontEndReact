import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";

// Импорт компонентов Lecture
import Alcohol from "../Lecture/L3/Alcohol/Alcohol";
import CarShop from "../Lecture/L2/CarShop/CarShop";
import Counter from "../Lecture/L3/Counter/Counter";
import Sandwich from "../Lecture/L3/Sandwich/Sandwich";
import UsersPage from "../Lecture/L4/UsersPage/UsersPage";
import UserPage from "../Lecture/L4/UsersPage/UserPage"; // Динамический маршрут
import Playgrount from "../Lecture/L4/Playground/Playgrount";
import DogsImage from "../Lecture/L4/DogsImage/DogsImage";
import CardSecurityCheck from "../Lecture/L7/CardSecurityCheck/CardSecurityCheck";
import ContactForm from "../Lecture/L7/ContactForm/ContactForm";

// Импорт компонентов Homework
import Homework02 from "../HW/HW2/Homework02/Homework02";
import Feedback from "../HW/HW3/Feedback/Feedback";
import Anecdotes from "../HW/HW4/Anecdotes/Anecdotes";
import ProductsPage from "../HW/ProductsPage/ProductsPage";
import ProductPage from "../HW/ProductsPage/ProductPage"; // Динамический маршрут

// Импорт компонентов Consultation
import CityPage from "../Consultation/Practice1/CityPage/CityPage";
import { InputMirror } from "../Consultation/Practice2/InputMirror/InputMirror";
import Header from "../Consultation/Practice3/Header"; // Компонент с требуемым пропсом onAccountClick

// Импорт компонента Layout
import LayOutApp from "./LayOutApp";
import MyHome from "./MyHome/MyHome";

// 🛑 ЛОГИКА ДЛЯ ПРОПСА Header: Функция-заглушка для обработки клика
const handleAccountClick = () => {
  console.log("Account button clicked from Header component!");
  // Здесь будет реальная логика, например, переход на страницу профиля
};

export default function AppApp(): JSX.Element {
  return (
    <Routes>
      {/* ВСЕ маршруты вложены в LayOutApp (NavBar + Outlet + Footer) */}
      <Route path="/" element={<LayOutApp />}>
        {/* Главная страница (по умолчанию) */}
        <Route index element={<MyHome />} />
        <Route path="home" element={<MyHome />} />
        {/* --- МАРШРУТЫ LECTURE --- */}
        <Route path="alcohol" element={<Alcohol />} />
        <Route path="carshop" element={<CarShop />} />
        <Route path="counter" element={<Counter />} />
        <Route path="sandwich" element={<Sandwich />} />
        <Route path="userspage" element={<UsersPage />} />
        <Route path="/userspage/:userId" element={<UserPage />} />{" "}
        {/* Динамический маршрут */}
        <Route path="playgrount" element={<Playgrount />} />
        <Route path="dogsImage" element={<DogsImage />} />
        <Route path="cardSecurityCheck" element={<CardSecurityCheck />} />
        <Route path="contactForm" element={<ContactForm />} />
        {/* --- МАРШРУТЫ HOMEWORK --- */}
        <Route path="homework02" element={<Homework02 />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="anecdotes" element={<Anecdotes />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />{" "}
        {/* Динамический маршрут */}
        {/* --- МАРШРУТЫ CONSULTATION --- */}
        <Route path="citiPage" element={<CityPage />} />
        <Route path="inputMiror" element={<InputMirror />} />
        {/* Передача требуемого пропса onAccountClick в компонент Header */}
        <Route
          path="header"
          element={<Header onAccountClick={handleAccountClick} />}
        />
      </Route>
    </Routes>
  );
}
