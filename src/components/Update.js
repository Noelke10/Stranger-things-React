import React, { useState } from "react";
import { APIURL } from "../index";

const Update = ({ posts, setPosts, postId, setPostId }) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await fetch(`${APIURL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
        },
      }),
    });

    const result = await response.json();
    if (result && result.title) {
      const newPosts = posts.map((post) => {
        if (post._id === postId) {
          return result;
        } else {
          return post;
        }
      });
      setPosts(newPosts);
      setTitle("");
      setDescription("");
      setPostId("");
      setPrice("");
    }
  };

  return (
    <>
      <h3>Create a Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></input>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default Update;
