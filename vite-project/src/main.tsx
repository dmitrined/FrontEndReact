import { createRoot } from "react-dom/client";
//import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./components/Lecture/L6/themeContext/ThemeProvider.tsx";
import AppApp from "./components/NavBarApp/AppApp.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <BrowserRouter basename="/FrontEndReact">
      <AppApp />
    </BrowserRouter>
  </ThemeProvider>
);
