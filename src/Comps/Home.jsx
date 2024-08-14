import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">CHATTIER</h1>
            <p className="mb-5">
              Welcome, here you can chat with yourself! Sometimes the best
              person to talk to is yourself. If you have not tried it, do it
              now!
            </p>
            <div>
              <button className="btn btn-primary mr-3 px-10">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn btn-outline btn-primary px-10">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
