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
        data.map((posts) => {
          return (
            <div key={posts._id}>
              <h1>username:{posts.author.username}</h1>
              <h2>Title :{posts.title}</h2>
              <p> {posts.description}</p>
              <h5>Price: {posts.price}</h5>
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  await deletePosts(token, posts._id);
                  console.log("ive been clicked");
                }}
              >
                {" "}
                Delete Post
              </button>
              <button>Message</button>
              <button>Edit </button>
              <button>test</button>
            </div>
          );
        })}
    </div>
  );
}
