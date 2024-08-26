import { createRoot } from "react-dom/client";
import App from "./Comps/App";
import "./Style/index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContextProvider";
import ChatContextProvider from "./Context/ChatContextProvider";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChatContextProvider>
  </AuthContextProvider>
);
