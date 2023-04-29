import { useState, useEffect } from "react";
import { deletePosts, fetchAllPost, fetchAuthenticatedPosts } from "../API/api";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");
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
  // function postMatches(post, searchPost) {}
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchPost);
  });
  console.log(filteredPosts, "filtered posts ");
  // if there is a search show filtered posts

  // else show all posts
  const displayAllPosts = posts.map((post) => {
    return;
  });

  return (
    <div className="searchInput">
      {" "}
      <input
        // id="search"
        type="text"
        className="searchInput"
        placeholder="search posts..."
        onChange={(e) => {
          setSearchPost(e.target.value.toLowerCase());
          console.log(searchPost);
        }}
      />
      <div className="create-post">
        {posts.length > 0 &&
          !searchPost &&
          posts.map((post) => {
            return (
              <div className="post" key={post._id}>
                <h1 className="post-username">
                  Username: {post.author.username}
                </h1>
                <h2 className="post-title">Title: {post.title}</h2>
                <p className="post-description">{post.description}</p>
                <h5 className="post-price">Price: {post.price}</h5>

                {/* this will delete  only by author */}
                {user._id === post.author._id && (
                  <button
                    className="post-button"
                    onClick={async (e) => {
                      e.preventDefault();
                      await deletePosts(token, post._id);
                      console.log("I've been clicked");
                      navigate("/posts");
                    }}
                  >
                    Delete Post
                  </button>
                )}
                {/* this will edit only if its made by u */}
                {user._id === post.author._id && (
                  <button
                    className="post-button"
                    onClick={() => {
                      navigate(`/posts/${post._id}`);
                    }}
                  >
                    {" "}
                    Edit Post
                  </button>
                )}
                {/* only send a message if youre logged in */}
                {token && (
                  <button
                    className="post-button"
                    onClick={() => {
                      navigate(`/post/${post._id}/messages`);
                    }}
                  >
                    {" "}
                    Message
                  </button>
                )}
              </div>
            );
          })}
        {posts.length > 0 &&
          searchPost &&
          filteredPosts.map((post) => {
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
                    className="post-button"
                    onClick={async (e) => {
                      e.preventDefault();
                      await deletePosts(token, post._id);
                      console.log("I've been clicked");
                    }}
                  >
                    Delete Post
                  </button>
                )}

                {user._id === post.author._id && (
                  <button
                    className="post-button"
                    onClick={() => {
                      navigate(`/posts/${post._id}`);
                    }}
                  >
                    {" "}
                    Edit Post
                  </button>
                )}

                {token && (
                  <button
                    className="post-button"
                    onClick={() => {
                      navigate(`/post/${post._id}/messages`);
                    }}
                  >
                    {" "}
                    Message
                  </button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
