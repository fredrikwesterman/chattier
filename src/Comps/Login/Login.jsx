import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";
import LoginForm from "./LoginForm";
import BreadCrumbs from "./BreadCrumbs";

const Login = () => {
  const { csrfToken } = useContext(AuthContext);

  return (
    <>
      <BreadCrumbs />
      <LoginForm />
    </>
  );
};

export default Login;
