import React, { useState } from "react";
import { APIURL } from "../index";

const Create = ({ posts, setPosts, token }) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("title, description: ", title, description);
    const response = await fetch(`${APIURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer"`${token}`,
      },
      body: JSON.stringify({
        title,
        description,
        price,
        location,
        deliver,
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
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        ></input>
        <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(ev) => setLocation(ev.target.value)}
        ></input>
        <input
          type="checkbox"
          id="willDeliver"
          name="willDeliver"
          value={deliver}
          onChange={(ev) => setDeliver(ev.target.value)}
        ></input>
        <label className="willDeliver">Will Deliver</label>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
