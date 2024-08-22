import LoginForm from "./LoginForm";
import BreadCrumbs from "./BreadCrumbs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const Login = () => {
  const { loginSuccess, setLoginSuccess } = useContext(AuthContext);

  const navigate = useNavigate();

  if (loginSuccess) {
    setLoginSuccess(false);
    navigate("/chat");
  }

  return (
    <>
      <BreadCrumbs />
      <LoginForm />
    </>
  );
};

export default Login;
