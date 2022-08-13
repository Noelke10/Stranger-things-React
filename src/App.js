import * as React from "react";
// import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  //Navbar,
  Login,
  Register,
  Userpage,
  Homepage,
  Update,
  Create,
  Landing,
  Logout,
} from "./components";

const App = ({ posts, setPosts, postId, setPostsId, setpostShown }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const currToken = sessionStorage.getItem("token");
    setToken(currToken);
  }, []);

  return (
    <>
      <Routes>
        <Route path="Landing" element={<Landing />}></Route>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="Homepage" element={<Homepage token={token} />}></Route>
        <Route path="Userpage" element={<Userpage token={token} />}></Route>
        <Route
          path="Update"
          element={
            <Update
              token={token}
              posts={posts}
              setPosts={setPosts}
              postId={postId}
              setPostsId={setPostsId}
            />
          }
        ></Route>
        <Route
          path="Create"
          element={<Create token={token} posts={posts} setPosts={setPosts} />}
        ></Route>
        <Route
          path="Login"
          element={<Login token={token} setToken={setToken} />}
        ></Route>
        <Route path="Register" element={<Register />}></Route>
        <Route
          path="Logout"
          element={<Logout token={token} setToken={setToken} />}
        ></Route>
      </Routes>
    </>
  );
};
export default App;
