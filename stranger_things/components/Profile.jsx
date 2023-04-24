import { useEffect, useState } from "react";
import { fetchMe } from "../API/api";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { token } = useAuth();
  const [user, setUser] = useState([]);
  console.log("user from profile", user);
  useEffect(() => {
    async function getProfile() {
      const response = await fetchMe(token);
      setUser(response);
    }
    getProfile();
  }, [token]);
  return (
    <div>
      {/* we may want the logout button to be in the nav bar only once youre logged in  */}
      <h1>our messages</h1>
      <h2>our posts- we can filter through all posts and display ours </h2>
      <h3>LogOut</h3>
    </div>
  );
}
export default Profile;
