import { useEffect, useState } from "react";
import { fetchMe } from "../API/api";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { token } = useAuth();
  const [user, setUser] = useState({});
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
      <h1>que lo que </h1>
    </div>
  );
}
export default Profile;
