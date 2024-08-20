import LoginForm from "./LoginForm";
import BreadCrumbs from "./BreadCrumbs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const Login = () => {
  const {
    loginSuccess,
    setLoginSuccess,
    setLoginFailed,
    loginFailed,
    checkAuth,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  // checkAuth();

  if (loginFailed) {
    setTimeout(() => {
      setLoginFailed(false);
    }, 3000);
  }

  if (loginSuccess) {
    setTimeout(() => {
      navigate("/chat");
      setLoginSuccess(false);
    }, 3000);
  }

  return (
    <>
      <BreadCrumbs />
      <LoginForm />
    </>
  );
};

export default Login;
