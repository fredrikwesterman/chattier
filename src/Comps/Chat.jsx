import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const Chat = () => {
  const { logoutHandler } = useContext(AuthContext);
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
      <button onClick={logoutHandler} className="btn btn-primary">
        Logout
      </button>
    </>
  );
};

export default Chat;
