import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import BreadCrumbs from "./BreadCrumbs";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registrationSuccess, setRegistrationSuccess } =
    useContext(AuthContext);

  const navigate = useNavigate();

  if (registrationSuccess) {
    setTimeout(() => {
      navigate("/login");
      setRegistrationSuccess(false);
    }, 3000);
  }

  return (
    <>
      <BreadCrumbs />
      <RegistrationForm />
    </>
  );
};

export default Register;
