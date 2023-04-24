import { useState, useEffect } from "react";
import { deletePosts, fetchAllPost, fetchAuthenticatedPosts } from "../API/api";
import { useAuth } from "../hooks/useAuth";

export default function AllPosts() {
  const [data, setData] = useState([]);

  const { token } = useAuth();

  useEffect(() => {
    async function getPost() {
      if (token) {
        const authPostList = await fetchAuthenticatedPosts(token);
        setData(authPostList.data.posts);
        console.log(setData(authPostList.data.posts));
      } else {
        const postList = await fetchAllPost();
        setData(postList.data.posts);
      }
    }
    getPost();
  }, []);

  return (
    <div className="allPosts">
  {data.length > 0 &&
    data.map((data) => {
      return (
        <div className="post" key={data.author.id}>
          <h1 className="post-username">Username: {data.author.username}</h1>
          <h2 className="post-title">Title: {data.title}</h2>
          <p className="post-description">{data.description}</p>
          <h5 className="post-price">Price: {data.price}</h5>
          <button
            className="post-delete-button"
            onClick={async (e) => {
              e.preventDefault();
              await deletePosts(token, data._id);
              console.log("I've been clicked");
            }}
          >
            Delete Post
          </button>
        </div>
      );
    })}
</div>
  );
}
