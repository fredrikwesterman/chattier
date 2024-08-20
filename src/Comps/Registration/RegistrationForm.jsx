import { Link } from "react-router-dom";
import RegistrationFailed from "./RegistrationFailed";
import RegistrationCompleted from "./RegistrationCompleted";
import { useContext, useRef, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import EmptyInputField from "./EmptyInputField";

const RegistrationForm = () => {
  const {
    setUsername,

    setPassword,

    setEmail,
    registrationSuccess,
    userAlreadyExcist,
    registerNewUser,
  } = useContext(AuthContext);

  const [emptyInputField, setEmptyInutField] = useState(false);

  const usernameInput = useRef();
  const passwordInput = useRef();
  const emailInput = useRef();

  // useEffect(() => {
  //   if (
  //     !usernameInput.current?.value ||
  //     !passwordInput.current?.value ||
  //     !emailInput.current?.value === ""
  //   ) {
  //     setEmptyInutField(true);
  //   } else {
  //     setEmptyInutField(false);
  //   }
  // }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-4">Register Account</h2>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="username"
              ref={usernameInput}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="password"
              ref={passwordInput}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="email"
              className="grow"
              placeholder="Email"
              ref={emailInput}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <div className="card-actions justify-end">
            <button onClick={registerNewUser} className="btn btn-primary px-6">
              Register
            </button>
            <Link to="/login">
              <button className="btn btn-outline btn-primary px-8">
                Login
              </button>
            </Link>
          </div>
        </div>
        {registrationSuccess && <RegistrationCompleted />}
        {userAlreadyExcist && <RegistrationFailed />}
        {emptyInputField && <EmptyInputField />}
      </div>
    </div>
  );
};

export default RegistrationForm;
