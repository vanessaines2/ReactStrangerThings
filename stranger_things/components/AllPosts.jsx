import { useState, useEffect } from "react";
import { deletePosts, fetchAllPost, fetchAuthenticatedPosts } from "../API/api";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  const { token, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    async function getPosts() {
      if (token) {
        const authPostList = await fetchAuthenticatedPosts(token);
        setPosts(authPostList.data.posts);
        console.log(setPosts(authPostList.data.posts));
      } else {
        const postList = await fetchAllPost();
        setPosts(postList.data.posts);
      }
    }
    getPosts();
  }, []);

  return (
    <div className="create-post">
      <input
        id="search"
        type="text"
        className="input"
        placeholder="search posts..."
      />

      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div className="post" key={post._id}>
              <h1 className="post-username">
                Username: {post.author.username}
              </h1>
              <h2 className="post-title">Title: {post.title}</h2>
              <p className="post-description">{post.description}</p>
              <h5 className="post-price">Price: {post.price}</h5>
              {user._id === post.author._id && (
                <button
                  className="post-delete-button"
                  onClick={async (e) => {
                    e.preventDefault();
                    await deletePosts(token, post._id);
                    console.log("I've been clicked");
                  }}
                >
                  Delete Post
                </button>
              )}

              {/* <button className="post-delete-button"> Edit Post</button> */}
              <button
                className="post-delete-button"
                onClick={() => {
                  navigate(`/post/${post._id}/messages`);
                }}
              >
                {" "}
                Message
              </button>
            </div>
          );
        })}
    </div>
  );
}
