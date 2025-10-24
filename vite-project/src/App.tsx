import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tempate from "./components/HW/HW5/Tempate";
import Homework02 from "./components/HW/HW2/Homework02/Homework02";
import Feedback from "./components/HW/HW3/Feedback/Feedback";
import Anecdotes from "./components/HW/HW4/Anecdotes/Anecdotes";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Tempate />}>
        <Route index element={<Homework02 />} />
        <Route path="homework02" element={<Homework02 />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="anecdotes" element={<Anecdotes />} />
      </Route>
    </Routes>
  );
}

export default App;
