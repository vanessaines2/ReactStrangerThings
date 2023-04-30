import { useEffect, useState } from "react";
import { fetchMe } from "../API/registerUser";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { token, user, setToken } = useAuth();
  console.log("user from profile", user);
  console.log("user messages", user.messages);
  const navigate = useNavigate();
  const messages = user.messages || [];

  function LogOut() {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="profilePage">
      <h1>{token && `Welcome, ${user.username}`}</h1>
      <h4>- pls note you may have to refresh when you login sorry !</h4>
      <h3>My Messages</h3>
      <div>
        {messages.map((message) => {
          return (
            <div className="messages" key={message._id}>
              <h3>From: {message.fromUser.username}</h3>
              <h4>Message : {message.content}</h4>
              <h5> Posts: {message.post.title}</h5>
            </div>
          );
        })}
      </div>
      <div>
        <br></br>
      </div>

      <footer>
        <button className="logOutBtn" onClick={LogOut}>
          Log Out
        </button>{" "}
      </footer>
    </div>
  );
}
export default Profile;
