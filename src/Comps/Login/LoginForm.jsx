import { Link } from "react-router-dom";

const LoginForm = () => {
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
            <input type="text" className="grow" placeholder="username" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input type="password" className="grow" placeholder="password" />
          </label>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Login</button>
            <Link to="/register">
              <button className="btn btn-outline btn-primary">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
