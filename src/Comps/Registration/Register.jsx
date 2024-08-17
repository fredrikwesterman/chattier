import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import RegistrationFailed from "./RegistrationFailed";
import RegistrationCompleted from "./RegistrationCompleted";
import BreadCrumbs from "./BreadCrumbs";
import RegistrationForm from "./RegistrationForm";

const Register = () => {
  const navigate = useNavigate();
  const { csrfToken } = useContext(AuthContext);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [RegistrationSuccess, setRegistrationSuccess] = useState(false);
  const [userAlreadyExcist, setUserAlreadyExcist] = useState(false);

  const registerNewUser = async () => {
    try {
      setUserAlreadyExcist(false);

      const response = await fetch(
        "https://chatify-api.up.railway.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            csrfToken: csrfToken,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("could not fetch");
      }
      const data = await response.json();
      setRegistrationSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setUserAlreadyExcist(true);
      console.log(error + "Something went wrong with the registration");
    }
  };

  return (
    <>
      <BreadCrumbs />
      <RegistrationForm
        setUsername={setUsername}
        setPassword={setPassword}
        setEmail={setEmail}
        registerNewUser={registerNewUser}
      />
      {RegistrationSuccess && <RegistrationCompleted />}
      {userAlreadyExcist && <RegistrationFailed />}
    </>
  );
};

export default Register;
