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
  return <div></div>;
}
export default Profile;
