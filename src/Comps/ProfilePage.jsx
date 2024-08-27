import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { logoutHandler, logoutSuccess, setLogoutSuccess, user, setUser } =
    useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    if (logoutSuccess) {
      setLogoutSuccess(false);
      navigate("/login");
    }
  }, [logoutSuccess]);

  return (
    <>
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
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={user.avatar} alt="Movie" className="w-20" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{user.user}</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button onClick={logoutHandler} className="btn btn-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
      {logoutSuccess && <div>Later Gator!</div>}
    </>
  );
};

export default ProfilePage;
