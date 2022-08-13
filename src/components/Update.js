import React, { useState } from "react";
import { APIURL } from "../index";
import { useNavigate } from "react-router-dom";

const Update = ({ posts, setPosts, postId, setPostId, token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const history = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await fetch(`${APIURL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
      history("/Userpage");
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
