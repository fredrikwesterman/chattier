import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Register = () => {
  const { csrfToken } = useContext(AuthContext);
  console.log(csrfToken);

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
              <input type="text" className="grow" placeholder="username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="password" className="grow" placeholder="password" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="email" className="grow" placeholder="Email" />
            </label>
            <div className="tooltip" data-tip="optional">
              <input
                type="file"
                className="file-input file-input-bordered mb-4"
                placeholder="Choose avatar"
              />
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => methodDoesNotExcist()}
                className="btn btn-primary"
              >
                Register
              </button>
              <Link to="/login">
                <button className="btn btn-outline btn-primary">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
