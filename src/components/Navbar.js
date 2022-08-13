// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   makeStyles,
// } from "@mui/material";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(10),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

// const Navbar = ({ token, posts, setPosts, username }) => {
//   const classes = useStyles();

//   return (
//     <>
//       <AppBar position="static">
//         <CssBaseline />
//         <Toolbar>
//           <Typography variant="h2">Strangers Things</Typography>
//           <Typography variant="h4" className={classes.logo}>
//             Navbar
//           </Typography>
//           <div className={classes.navlinks}>
//             <Link to="/" className={classes.link}>
//               Home
//             </Link>
//             <Link to="/Login" className={classes.link}>
//               Login
//             </Link>
//             <Link to="/Register" className={classes.link}>
//               Register
//             </Link>
//             <Link to="/Userpage" className={classes.link}>
//               Homepage
//             </Link>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };
// export default Navbar;
