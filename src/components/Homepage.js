import React, { useState, useEffect } from "react";
// import Create from "./Create";
// import Update from "./Update";
import { APIURL } from "..";

import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const HomePage = ({ token }) => {
  const [posts, setPosts] = useState([]);
  // const [postId, setPostId] = useState(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch(`${APIURL}/posts`);
      const data = await response.json();
      setPosts(data.data.posts);
    };
    fetchAllPosts();
  }, []);

  return (
    // <div>
    //   <header>
    //     <h1>Homepage</h1>
    //   </header>
    //   <h2>Posts</h2>
    //   {postId ? (
    //     <Update
    //       posts={posts}
    //       setPosts={setPosts}
    //       postId={postId}
    //       setPostId={setPostId}
    //     />
    //   ) : (
    //     <Create posts={posts} setPosts={setPosts} token={token} />
    //   )}
    //   {posts.map((post) => (
    //     <div key={post._id}>
    //       <h3>{post.title}</h3>
    //       <div>{post.description}</div>
    //       <div>{post.location}</div>
    //       <div>{post.price}</div>
    //       <div>{post.willDeliver}</div>
    //     </div>
    //   ))}
    // </div>
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 6, sm: 9, md: 10 }}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} md={6} sm={4}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                backgroundColor: "LightGreen",
                boxShadow: "3px 2px black",
              }}
            >
              <CardContent sx={{ flex: 1 }} key={post._id}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1">{post.description}</Typography>
                <Typography variant="subtitle2">
                  {post.location},{post.price},{post.willDeliver}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
