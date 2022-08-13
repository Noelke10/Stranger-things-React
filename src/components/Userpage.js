import * as React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";

const cohortName = "2204-ftb-et-web-pt";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Userpage = ({ token, setPostId, postId, username }) => {
  const [posts, setPosts] = useState([]);
  // const history = useNavigate();
  // const [postId, setPostId] = useState(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      console.log(token);
      const response = await fetch(`${APIURL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      if (result) {
        const activePost = result.data.posts.filter(
          (post) => post.active === true
        );
        setPosts(activePost);
      }
    };
    fetchUserPosts();
  }, [token]);

  const handleDelete = async (postId) => {
    const response = await fetch(`${APIURL}/post/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (result) {
      const newPosts = posts.filter((post) => post._id !== postId);
      console.log(newPosts);

      setPosts(newPosts);
    }
  };

  // const handleSubmit = async (post) => {
  //   setPostId(post._id);
  //   history("/Userpage");
  // };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {posts.map((post) => (
          <Grid item xs={12} md={6} sm={4}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                backgroundColor: "",
                margin: "10px",
                boxShadow: "3px 4px black",
              }}
            >
              <CardContent sx={{ flex: 1 }} key={post._id}>
                <Typography component="h2" variant="h5">
                  {" "}
                  {post.title}
                </Typography>
                <Typography variant="subtitle1">{post.description}</Typography>
                <Typography variant="subtitle2">{post.location}</Typography>
                <Typography variant="subtitle2">{post.price}</Typography>
                <Typography variant="subtitle2">{post.willDeliver}</Typography>
              </CardContent>
              <CardActions>
                <Button type="button" className="btnEdit">
                  Edit
                </Button>
                <Button
                  type="button"
                  className="btnDelete"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Userpage;
