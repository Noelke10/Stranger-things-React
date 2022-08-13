import * as React from "react";
import { useState } from "react";
// import SearchIcon from "@mui/material/Search";
import { InputBase, IconButton } from "@mui/material";
import Box from "@mui/material/Box";

const Search = ({ token, posts, setPostsShown }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterPost =
      posts.length && posts.filter((post) => postMatches(post, searchTerm));
    const postShown = searchTerm.length ? filterPost : posts;
    setPostsShown(postShown);
  };

  function postMatches(post, text) {
    if (post.title.includes(searchTerm)) {
      return true;
    }
    if (post.description.includes(searchTerm)) {
      return true;
    }
    if (post.location.includes(searchTerm)) {
      return true;
    }
    if (post.price.includes(searchTerm)) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <Box
        sx={{
          position: "relative",
          borderRadius: "5px",
          mr: "3",
          ml: "0",
        }}
      >
        <InputBase
          onSubmit={handleSubmit}
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          aria-labelledby="search"
        ></InputBase>
        <IconButton onClick={handleSubmit} aria-labelledby="search">
          {" "}
          {/* <SearchIcon />{" "} */}
        </IconButton>
      </Box>
    </>
  );
};

export default Search;
