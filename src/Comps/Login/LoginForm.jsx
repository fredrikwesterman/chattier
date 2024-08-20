import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";

const LoginForm = () => {
  const { loginFunction, setUsername, setPassword } = useContext(AuthContext);

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
          <h2 className="card-title mb-4">Login</h2>
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
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input
              type="password"
              className="grow"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <div className="card-actions justify-end">
            <button onClick={loginFunction} className="btn btn-primary px-8">
              Login
            </button>
            <Link to="/register">
              <button className="btn btn-outline btn-primary px-6">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
