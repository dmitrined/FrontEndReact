import type { JSX } from "react";
//import "./App.css";
import "./components/Consultation/Practice3/AppP3.module.css"
import { Route, Routes } from "react-router-dom";
import Tempate from "./components/HW/HW5/Tempate";
import Sandwich from "./components/Lecture/L3/Sandwich/Sandwich";
import ProductsPage from "./components/Lecture/L6/ProductsPage/ProductsPage";
import ProductPage from "./components/Lecture/L6/ProductsPage/ProductPage";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Tempate />}>
        <Route index element={<Sandwich />} />
        <Route path="sandwich" element={<Sandwich />} />
        <Route path="products" element={<ProductsPage/>} />
        <Route path="/products/:productId" element = {<ProductPage />} />


        

       
       


      </Route>
    </Routes>
  );
}

export default App;
