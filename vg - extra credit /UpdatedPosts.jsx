import { updatePost } from "../stranger_things/API/api";
import { useState } from "react";
import { useAuth } from "../stranger_things/hooks/useAuth";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function UpdatedPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { postId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="create-post">
      <h1> Edit Post</h1>
      <form
        className="create-post-form"
        onSubmit={async (e) => {
          e.preventDefault();
          await updatePost(token, postId, title, description, price);
          navigate("/posts");
        }}
      >
        <input
          className="create-post-input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label className="create-post-label">Description:</label>
        <input
          className="create-post-input"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label className="create-post-label">Price:</label>
        <input
          className="create-post-input"
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button className="create-post-button" type="submit">
          Edit Post
        </button>
      </form>
    </div>
  );
}
