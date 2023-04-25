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
      <form className="searchBar">
        <input
          id="search"
          type="text"
          className="input"
          placeholder="search..."
        />
        <button type="submit">Search</button>
      </form>
      {data.length > 0 &&
        data.map((posts) => {
          return (
            <div className="post" key={posts._id}>
              <h1 className="post-username">
                Username: {posts.author.username}
              </h1>
              <h2 className="post-title">Title: {posts.title}</h2>
              <p className="post-description">{posts.description}</p>
              <h5 className="post-price">Price: {posts.price}</h5>
              <button
                className="post-delete-button"
                onClick={async (e) => {
                  e.preventDefault();
                  await deletePosts(token, posts._id);
                  console.log("I've been clicked");
                }}
              >
                Delete Post
              </button>
              {/* maybe an if statement, if its your post youre able to edit, else no */}
              <button className="post-delete-button"> Edit Post</button>
            </div>
          );
        })}
    </div>
  );
}
