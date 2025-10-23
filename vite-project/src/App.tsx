import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./components/Lecture/L5/LayOut/LayOut";
import Home from "./components/Lecture/L5/Home/Home";
import Alcohol from "./components/Lecture/L3/Alcohol/Alcohol";
import Counter from "./components/Lecture/L3/Counter/Counter";
import CarShop from "./components/Lecture/L2/CarShop/CarShop";
import UsersPage from "./components/Lecture/L4/UsersPage/UsersPage";
import UserPage from "./components/Lecture/L4/UsersPage/UserPage";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="alcohol" element={<Alcohol />} />
        <Route path="carshop" element={<CarShop />} />
        <Route path="counter" element={<Counter />} />
        <Route path="home" element={<Home />} />
        <Route path="userspage" element={<UsersPage />} />
        <Route path="userspage/:userId" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
