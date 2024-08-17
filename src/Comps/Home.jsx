import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold">CHATTIER</h1>
            <p className="mb-5">
              <br /> Here you can chat with yourself! Maybe with a friend.
              <br /> It depends on how good i am at coding 🤷‍♂️
            </p>
            <div>
              <Link to="/login">
                <button className="btn btn-primary mr-3 px-10">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline btn-primary px-10">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
