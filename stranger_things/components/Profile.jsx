import { useEffect, useState } from "react";
import { fetchMe } from "../API/api";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { token } = useAuth();
  const [user, setUser] = useState({});

  console.log("user data from profile", user.data);
  useEffect(() => {
    async function getProfile() {
      const response = await fetchMe(token);
      setUser(response);
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
      <h1>Hello - {}!</h1>
      <h3>Our Posts - insert our posts here,</h3>
      <h3>Our Messages </h3>
      <button className="create-post-button" onClick={LogOut}>
        Log Out
      </button>
    </div>
  );
}
export default Profile;
