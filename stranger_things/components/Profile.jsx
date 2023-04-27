import { useEffect, useState } from "react";
import { fetchMe } from "../API/registerUser";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { token, user, setToken } = useAuth();

  const navigate = useNavigate();

  function LogOut() {
    console.log("logout button has been clicked");
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div>
      {console.log("user from profile")}
      <h1>Welcome - {token && `Welcome, ${user.username}`}</h1>
      <h3>Our Posts - insert our posts here,</h3>
      <h3>Our Messages </h3>
      <button className="create-post-button" onClick={LogOut}>
        Log Out
      </button>
    </div>
  );
}
export default Profile;
