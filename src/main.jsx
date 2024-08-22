import { createRoot } from "react-dom/client";
import App from "./Comps/App";
import "./Style/index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContextProvider";
import UserContextProvider from "./Context/UserContextProvider";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </AuthContextProvider>
);
