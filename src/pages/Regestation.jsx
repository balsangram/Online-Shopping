import React, { useEffect, useState } from "react";

function Regestation({ showLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerHandeler = () => {
    console.log("success");
    // useState("");
    // setEmail("");
    // setPassword("");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="reg" id="reg">
        <h1>Regestation</h1>
        <form onSubmit={registerHandeler()}>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name..."
          />
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email.."
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password..."
          />
          <br />
          <button type="submit">Regestation</button>
        </form>
        <a href="" onClick={() => showLogin(false)}>
          Login
        </a>
      </div>
      <div className="reg_side"></div>
    </div>
  );
}

export default Regestation;
