import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const UserSettings = () => {
  const { user } = useContext(AuthContext);

  const [newUsername, setNewUsername] = useState(null);
  const [newEmail, setNewEmail] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);

  const newUsernameInput = useRef();
  const newEmailInput = useRef();
  const newAvatarInput = useRef();

  const updateUsernameFunction = () => {
    console.log(newUsername);
    newUsernameInput.current.value = "";
  };

  const updateEmailFunction = () => {
    console.log(newEmail);
    newEmailInput.current.value = "";
  };

  const updateAvatarFunction = () => {
    console.log("This is your new avatar, do you want to save it?!");
    newUsernameInput.current.value = "";
  };

  const deleteUserFunction = () => {
    console.warn("ARE YOU SURE YOU WANNA GO TO HELL?! 👿");
  };

  return (
    <>
      <Header />
      <div className="breadcrumbs text-sm ml-10">
        <ul>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center m-7">
        <h2 className="text-5xl">USER SETTINGS</h2>
      </div>
      <div className="flex justify-center mb-10">
        <div className="w-1/4">
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Change username
            </div>
            <div className="collapse-content flex">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Username"
                  ref={newUsernameInput}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </label>
              <button
                className="btn btn-primary ml-1"
                onClick={updateUsernameFunction}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="collapse bg-base-200 mb-2 mt-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Change Email
            </div>
            <div className="collapse-content flex content-center mt-2">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  ref={newEmailInput}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </label>
              <button
                className="btn btn-primary ml-1"
                onClick={updateEmailFunction}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="collapse bg-base-200 mb-2 mt-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Change Avatar
            </div>
            <div className="collapse-content flex content-center mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  ref={newAvatarInput}
                />
              </label>
              <button
                className="btn btn-primary ml-1"
                onClick={updateAvatarFunction}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="collapse text-secondary mb-2 mt-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              DELETE USER ⚠️
            </div>
            <div className="collapse-content flex content-center mt-2">
              <label className="flex items-center gap-2">
                <h2>ARE YOU SURE YOU WANNA DELETE YOURSELF?!</h2>
              </label>
              <button
                className="btn btn-secondary ml-1"
                onClick={deleteUserFunction}
              >
                YES, LET ME GO!
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserSettings;
