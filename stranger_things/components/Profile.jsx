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
    <div>
      <h1>{token && `Welcome, ${user.username}`}</h1>
      <h4>
        - pls note you may have to refresh when you login & when you delete,
        sorry !
      </h4>
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
        <h3> My Posts</h3>
      </div>

      <button className="create-post-button" onClick={LogOut}>
        Log Out
      </button>
    </div>
  );
}
export default Profile;
