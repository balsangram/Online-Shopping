import React, { useState } from "react";
import axios from "axios";

function Login({ showregister }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [worning, setWorning] = useState("");

  const loginHandel = (e) => {
    console.log("hi");
    setUser("");
    setPassword("");
    setWorning("");
    e.preventDefault();
    axios = fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      data: {
        username: user,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.body);
        setWorning(err);
      });
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="side_log"></div>
      <div className="log" id="log">
        <h1>Login</h1>
        <form onSubmit={loginHandel}>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="name... "
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password..."
            autoComplete="off"
          />
          {worning && <p>{worning}</p>}
          <br />
          <button type="submit">Login</button>
        </form>
        <a href="" onClick={() => showregister(true)}>
          Register
        </a>
      </div>
    </div>
  );
}

export default Login;
