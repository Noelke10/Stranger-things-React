import React, { useState } from "react";
import { APIURL } from "../index";

const Create = ({ posts, setPosts }) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("title, description: ", title, description);
    const response = await fetch(`${APIURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer TOKEN_STRING_HERE",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const result = await response.json();
    setPosts([result, ...posts]);
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

export default Create;
