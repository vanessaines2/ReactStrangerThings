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
    <div className="create-post">
      {data.length > 0 &&
        data.map((posts) => {
          return (
            <div className="post" key={posts.author.id}>
              <h1 className="post-username">Username: {posts.author.username}</h1>
              <h2 className="post-title">Title: {posts.title}</h2>
              <p className="post-description">{posts.description}</p>
              <h5 className="post-price">Price: {posts.price}</h5>
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
