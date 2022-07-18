import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Register, Login, Userpage, Homepage } from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const cohortName = "2204-FTB-ET-WEB-PT";
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const App = () => {
  const [token, setToken] = useState("");
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    onLoad();
  }, []);
  async function onLoad() {
    try {
      const currtoken = sessionStorage.getItem("token");
      if (currtoken) {
        setToken(currtoken);
      }
    } catch (e) {
      if (e !== "USER NOT FOUND") {
        alert(e.message);
      }
    }
  }

  return (
    <Router>
      <div className="App">
        <div id="navbar">
          <Link to="/login">LOGIN</Link>
          <Link to="/Register">REGISTER</Link>
          <Link to="/Homepage">HOME</Link>

          <Link to="/Userpage">PROFILE</Link>
        </div>
        <header className="header">
          <h1>Strangers Things</h1>
        </header>
        {/* <Login /> */}
        <Routes>
          <Route path="/Homepage" element={<Homepage />}></Route>
          {/* <Route path="/Landing" element={<Landing />}></Route> */}
          <Route path="/Userpage" element={<Userpage token={token} />}></Route>
          <Route
            path="/Register"
            element={
              <Register
                setToken={setToken}
                setUserName={setUserName}
                username={username}
                password={password}
                setPassword={setPassword}
              />
            }
          ></Route>
          <Route
            path="/"
            element={
              <Login
                setToken={setToken}
                setUserName={setUserName}
                username={username}
                password={password}
                setPassword={setPassword}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
