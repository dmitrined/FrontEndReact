import type { JSX } from "react";
//import "./App.css";
import "./components/Consultation/Practice3/AppP3.module.css";
import { Route, Routes } from "react-router-dom";
import Alcohol from "../L3/Alcohol/Alcohol";
import CarShop from "../L2/CarShop/CarShop";


function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Alcohol />}>
        <Route index element={<Alcohol />} />
        <Route path="carshop" element={<CarShop />} />
      </Route>
    </Routes>
  );
}

export default App;
