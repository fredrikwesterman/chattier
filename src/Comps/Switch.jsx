import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";
import Register from "./Registration/Register";

const Switch = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default Switch;
