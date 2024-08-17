import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

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
      <div className="breadcrumbs text-sm ml-10">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Register</Link>
          </li>
        </ul>
      </div>
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="email"
                className="grow"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <div className="card-actions justify-end">
              <button onClick={registerNewUser} className="btn btn-primary">
                Register
              </button>
              <Link to="/login">
                <button className="btn btn-outline btn-primary">Login</button>
              </Link>
            </div>
          </div>
          {RegistrationSuccess && (
            <div role="alert" className="alert alert-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current text-primary"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Registration Complete!</span>
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          )}
          {userAlreadyExcist && (
            <div role="alert" className="alert alert-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current text-error"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Username or email already excist 😥</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
