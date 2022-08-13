import React from "react";
import { useEffect, useState } from "react";
import { APIURL } from "../index";

const Landing = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch(`${APIURL}/posts`);
      const result = await response.json();
      setPosts(result.data.posts);
    };
    fetchAllPosts();
  }, []);

  return (
    <>
      <h1>Stranger's Things</h1>
      <button type="button" path={"/Login"}>
        Login
      </button>
      <button type="button" onClick={"/Register"}>
        Register
      </button>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
        </div>
      ))}
    </>
  );
};

export default Landing;
