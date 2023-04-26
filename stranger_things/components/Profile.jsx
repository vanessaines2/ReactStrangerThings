import { useEffect, useState } from "react";
import { fetchMe } from "../API/api";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { token } = useAuth();
  const [username, setUsername] = useState("");

  console.log("username.data from profile", username.data);
  useEffect(() => {
    async function getProfile() {
      const response = await fetchMe(token);
      setUsername(response);
    }
    getProfile();
  }, [token]);
  function LogOut() {
    console.log("logout button has been clicked");
    localStorage.removeItem("token");
  }
  return (
    <div>
      {console.log("user from profile")}
      <h1>Welcome - username !</h1>
      <h3>Our Posts - insert our posts here,</h3>
      <h3>Our Messages </h3>
      <button className="create-post-button" onClick={LogOut}>
        Log Out
      </button>
    </div>
  );
}
export default Profile;
