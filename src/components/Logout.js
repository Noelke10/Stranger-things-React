import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const Logout = ({ token, setToken }) => {
  const history = useNavigate();
  const handleLogout = async () => {
    setToken("");
    sessionStorage.removeItem("token");
    history("/Homepage");
  };
  return (
    <Card
      varient="outline"
      sx={{
        display: "flex",
        backgroundColor: "lightgreen",
        boxShadow: "4px, 4px lightgrey",
      }}
    >
      <CardContent sx={{ flex: 1 }} key="logout">
        <Typography component="h2" variant="h4">
          Are you sure you want to do that?
        </Typography>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="outlined" color="inherit" onClick={() => history(-1)}>
          Go Back
        </Button>
      </CardContent>
    </Card>
  );
};

export default Logout;
