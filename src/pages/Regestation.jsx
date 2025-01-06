import React from "react";

function Regestation({ showLogin }) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const registerHandeler = () => {
  // console.log("success");
  // useState("");
  // setEmail("");
  // setPassword("");
  // };

  return (
    <div className="log_reg">
      <h1> REGESTRATION</h1>
      <form action="" autoComplete="off">
        <input type="text" placeholder="Name" /> <br />
        <input type="text" placeholder="Email" /> <br />
        <input type="password" placeholder="Password" />
        <br />
        <button>LOGIN</button>
      </form>
      <hr className="login_hr" />
      <p className="change" onClick={() => showLogin(false)}>
        REGESTRATION
      </p>
    </div>
  );
}

export default Regestation;
