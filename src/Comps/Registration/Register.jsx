import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import RegistrationFailed from "./RegistrationFailed";
import RegistrationCompleted from "./RegistrationCompleted";
import BreadCrumbs from "./BreadCrumbs";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    registerNewUser,
    setUsername,
    setPassword,
    setEmail,
    registrationSuccess,
    setRegistrationSuccess,
    userAlreadyExcist,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  // const [username, setUsername] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [registrationSuccess, setRegistrationSuccess] = useState(false);
  // const [userAlreadyExcist, setUserAlreadyExcist] = useState(false);

  // const registerNewUser = async () => {
  //   try {
  //     setUserAlreadyExcist(false);

  //     const response = await fetch(
  //       "https://chatify-api.up.railway.app/auth/register",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           username: username,
  //           password: password,
  //           email: email,
  //           csrfToken: csrfToken,
  //         }),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("could not fetch");
  //     }
  //     const data = await response.json();
  //     setRegistrationSuccess(true);

  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 3000);
  //   } catch (error) {
  //     setUserAlreadyExcist(true);
  //     console.log(error + "Something went wrong with the registration");
  //   }
  // };
  if (registrationSuccess) {
    setTimeout(() => {
      navigate("/login");
      setRegistrationSuccess(false);
    }, 3000);
  }

  return (
    <>
      <BreadCrumbs />
      <RegistrationForm
        setUsername={setUsername}
        setPassword={setPassword}
        setEmail={setEmail}
        registerNewUser={registerNewUser}
      />
      {registrationSuccess && <RegistrationCompleted />}
      {userAlreadyExcist && <RegistrationFailed />}
    </>
  );
};

export default Register;
