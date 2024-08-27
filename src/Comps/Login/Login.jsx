import LoginForm from "./LoginForm";
import BreadCrumbs from "./BreadCrumbs";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const Login = () => {
  const { loginSuccess, setLoginSuccess, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccess) {
      setLoginSuccess(false);
      navigate("/chat");
    }
  }, [loginSuccess]);

  return (
    <>
      <BreadCrumbs />
      <LoginForm />
    </>
  );
};

export default Login;
