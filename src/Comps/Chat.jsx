import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const Chat = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  // const jwtToken = JSON.parse(localStorage.getItem("jwtToken"));
  // if (jwtToken) {
  //   setIsAuthenticated(true);
  // }

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
    </>
  );
};

export default Chat;
