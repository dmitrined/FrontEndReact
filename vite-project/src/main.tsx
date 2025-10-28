import { createRoot } from "react-dom/client";
//import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./components/Lecture/L6/themeContext/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider >
<BrowserRouter basename="/FrontEndReact">
    <App />
  </BrowserRouter>
  </ThemeProvider>
  
  
);
