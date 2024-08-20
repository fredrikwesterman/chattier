import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";
import Register from "./Registration/Register";
import Chat from "./Chat";
import ProfilePage from "./ProfilePage";

const Switch = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default Switch;
