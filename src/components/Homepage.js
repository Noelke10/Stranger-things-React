import React, { useState, useEffect } from "react";
import { APIURL } from "..";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Search from "./Search";

const HomePage = ({ token }) => {
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Stranger's Things
            </Typography>
            {!token ? (
              <>
                <Button href="/Register" color="inherit">
                  Register
                </Button>
                <Button href="/Login" color="inherit">
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button href="/Homepage" color="inherit">
                  Home
                </Button>
                <Button href="/Userpage" color="inherit">
                  My Page
                </Button>
                <Button href="/Inbox" color="inherit">
                  Inbox
                </Button>
                <Button href="/Logout" color="inherit">
                  Logout
                </Button>
                <Button href="/Create" color="inherit">
                  Create Post
                </Button>
                <Search />
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Typography variant="h2" component="div">
        Posts
      </Typography>
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
