import type { JSX } from "react";
//import "./App.css";
import "../Consultation/Practice3/AppP3.module.css";
import { Route, Routes } from "react-router-dom";
import Alcohol from "../Lecture/L3/Alcohol/Alcohol";
import CarShop from "../Lecture/L2/CarShop/CarShop";
import Counter from "../Lecture/L3/Counter/Counter";
import Sandwich from "../Lecture/L3/Sandwich/Sandwich";
import UsersPage from "../Lecture/L4/UsersPage/UsersPage";
import UserPage from "../Lecture/L4/UsersPage/UserPage";
import Playgrount from "../Lecture/L4/Playground/Playgrount";
import DogsImage from "../Lecture/L4/DogsImage/DogsImage";
import CardSecurityCheck from "../Lecture/L7/CardSecurityCheck/CardSecurityCheck";
import ContactForm from "../Lecture/L7/ContactForm/ContactForm";
import LayOutApp from "./LayOutApp";
import Homework02 from "../HW/HW2/Homework02/Homework02";
import Feedback from "../HW/HW3/Feedback/Feedback";
import Anecdotes from "../HW/HW4/Anecdotes/Anecdotes";
import ProductsPage from "../HW/ProductsPage/ProductsPage";
import ProductPage from "../HW/ProductsPage/ProductPage";
import CityPage from "../Consultation/Practice1/CityPage/CityPage";
import { InputMirror } from "../Consultation/Practice2/InputMirror/InputMirror";
import Header from "../Consultation/Practice3/Header";



export default function AppApp(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LayOutApp />}>
        
        <Route index element={<Alcohol />} />
        
       
        <Route path="lecture" element={<Alcohol />} /> 
        
        <Route path="alcohol" element={<Alcohol />} />
        <Route path="carshop" element={<CarShop />} />
        <Route path="counter" element={<Counter />} />
        <Route path="sandwich" element={<Sandwich />} />
        <Route path="userspage" element={<UsersPage />} />
        <Route path="/userspage/:userId" element={<UserPage />} />
        <Route path="playgrount" element={<Playgrount />} />
        <Route path="dogsImage" element={<DogsImage />} />
        <Route path="cardSecurityCheck" element={<CardSecurityCheck />} />
        <Route path="contactForm" element={<ContactForm />} />
        <Route path="homework02" element={<Homework02 />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="anecdotes" element={<Anecdotes />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="citiPage" element={<CityPage />} />
        <Route path="inputMiror" element={<InputMirror />} />
        <Route path="header" element={<Header onAccountClick={function (): void {
          throw new Error("Function not implemented.");
        } } />} />


      </Route>
    </Routes>
  );
}