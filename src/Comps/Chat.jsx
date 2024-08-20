import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Chat = () => {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(AuthContext);

  const [decodedJwt, setDecodedJwt] = useState(null);
  const [logoutSuccess, setlogoutSuccess] = useState(false);

  const jwtToken = JSON.parse(localStorage.getItem("jwtToken"));

  useEffect(() => {
    const jwtDecoder = JSON.parse(atob(jwtToken.token.split(".")[1]));
    setDecodedJwt(jwtDecoder);
  }, []);

  console.log(jwtToken);
  console.log(decodedJwt);

  const logoutHandler = () => {
    setlogoutSuccess(true);
    setTimeout(() => {
      localStorage.clear("jwtToken");
      navigate("/login");
      setlogoutSuccess(false);
      setIsAuthenticated(false);
    }, 2000);
  };

  return (
    <>
      <div className="breadcrumbs text-sm ml-10">
        <ul>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/profile-page">to profile</Link>
          </li>
        </ul>
      </div>
      {decodedJwt && (
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={decodedJwt.avatar} alt="Movie" className="w-20" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{decodedJwt.user}</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button onClick={logoutHandler} className="btn btn-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
      {logoutSuccess && <div>Later Gator!</div>}
    </>
  );
};

export default Chat;
