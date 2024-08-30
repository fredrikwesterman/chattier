import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const Header = () => {
  const { logoutSuccess, logoutHandler, setLogoutSuccess, user } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (logoutSuccess) {
      setLogoutSuccess(false);
      navigate("/login");
    }
  }, [logoutSuccess]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <h1 className="text-xl">Chattier</h1>
        </div>
        <div className="flex-none gap-2">
          <div className="tooltip tooltip-left" data-tip="User settings">
            <Link to="/settings">
              <svg
                class="h-8 w-8 text-primary"
                width="15"
                height="15"
                viewBox="0 0 34 34"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
                <circle cx="12" cy="12" r="3" />
              </svg>
            </Link>
          </div>
          <div className="tooltip tooltip-left" data-tip="Menu">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="avatar" src={user} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-primary"
              >
                <li>
                  <Link to="/chat">Chat</Link>
                </li>
                <li>
                  <Link to="/profile-page">Profile</Link>
                </li>
                <li>
                  <a onClick={logoutHandler}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-primary"></div>
    </>
  );
};

export default Header;
