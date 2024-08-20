import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProfilePage = () => {
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
    </>
  );
};

export default ProfilePage;
