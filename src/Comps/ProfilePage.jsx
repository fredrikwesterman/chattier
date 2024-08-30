import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import Header from "./Header";
import Footer from "./Footer";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <Header />
      <div className="breadcrumbs text-sm ml-10">
        <ul>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/profile-page">Profile Page</Link>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img src={user.avatar} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{user.user}</h1>
              <p className="py-6"></p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
      <Footer />
    </>
  );
};

export default ProfilePage;
