import type { JSX } from "react";
//import "./App.css";
import "./components/Consultation/Practice3/AppP3.module.css"
import { Route, Routes } from "react-router-dom";
import Tempate from "./components/HW/HW5/Tempate";
import Homework02 from "./components/HW/HW2/Homework02/Homework02";
import Feedback from "./components/HW/HW3/Feedback/Feedback";
import Anecdotes from "./components/HW/HW4/Anecdotes/Anecdotes";
import AppP3 from "./components/Consultation/Practice3/AppP3";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Tempate />}>
        <Route index element={<Homework02 />} />
        <Route path="homework02" element={<Homework02 />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="anecdotes" element={<Anecdotes />} />
        <Route path="appP3" element={<AppP3 />} />

       
       


      </Route>
    </Routes>
  );
}

export default App;
