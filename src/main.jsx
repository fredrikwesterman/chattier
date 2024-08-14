import { createRoot } from "react-dom/client";
import App from "./Comps/App";
import "./Style/index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
