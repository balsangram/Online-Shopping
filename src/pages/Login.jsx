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
    <>
      <div className="log_reg">
        <h1>LOGIN</h1>
        <form action="">
          <input type="text" placeholder="Email" /> <br />
          <input type="password" placeholder="Password" />
          <br />
          <button>LOGIN</button>
        </form>
        <hr className="login_hr" />
        <p href="" onClick={() => showregister(true)}>
          REGESTRATION
        </p>
      </div>
    </>
  );
}

export default Login;
