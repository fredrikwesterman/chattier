import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";
import Register from "./Registration/Register";
import Chat from "./Chat";
import ProfilePage from "./ProfilePage";
import ProtectedRoute from "./Utils/ProtectedRoute";
import UserSettings from "./UserSettings";

const Switch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/settings" element={<UserSettings />} />
        </Route>
      </Routes>
    </>
  );
};

export default Switch;
