import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { CssBaseline, Typography } from "@mui/material";

const cohortName = "2204-FTB-ET-WEB-PT";
const APIURL = `http://strangers-things.herokuapp.com/api/${cohortName}`;

async function userLogin(username, password) {
  return fetch(`${APIURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result.data.token;
    })
    .catch(console.error);
}

function Login({ setToken }) {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await userLogin(username, password);
      if (token) {
        sessionStorage.setItem("token", JSON.stringify(token));
        setToken(token);
        history("/Homepage");
        alert("You are logged in!");
      } else {
        alert("Username or passowrd are incorrect");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined-required"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
