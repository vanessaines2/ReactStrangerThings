import { useState, useEffect } from "react";
import { fetchAllPost, fetchAuthenticatedPosts } from "../API/api";
import { useAuth } from "../hooks/useAuth";

export default function AllPosts() {
  const [data, setData] = useState([]);

  const { token } = useAuth();

  useEffect(() => {
    async function getPost() {
      if (token === true) {
        const authPostList = await fetchAuthenticatedPosts(token);
        setData(authPostList.data.posts);
        console.log(setData);
      } else {
        const postList = await fetchAllPost();
        setData(postList.data.posts);
      }
    }
    getPost();
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((data) => {
          return (
            <div key={data.author.username}>
              <h1>username:{data.author.username}</h1>
              <h2>Title :{data.title}</h2>
              <p> {data.description}</p>
              <h5>Price: {data.price}</h5>
            </div>
          );
        })}
    </div>
  );
}
