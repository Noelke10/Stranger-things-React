import React, { useState, useEffect } from "react";
import Create from "./Create";
import Update from "./Update";
import { APIURL } from "..";

const HomePage = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch(`${APIURL}/posts`);
      const data = await response.json();
      setPosts(data.data.posts);
    };
    fetchAllPosts();
  }, []);

  return (
    <div>
      <header>
        <h1>Homepage</h1>
      </header>
      <h2>Posts</h2>
      {postId ? (
        <Update
          posts={posts}
          setPosts={setPosts}
          postId={postId}
          setPostId={setPostId}
        />
      ) : (
        <Create posts={posts} setPosts={setPosts} token={token} />
      )}
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
          <div>{post.location}</div>
          <div>{post.price}</div>
          <div>{post.willDeliver}</div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
