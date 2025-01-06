import React, { useState } from "react";
import { Login, Regestation } from "../Root";
function Login_Reg() {
  const [show, setShow] = useState(true);
  // useEffect(() => {
  //   setShow();
  // }, []);
  console.log(show);
  return (
    <>
      <div className="regParent">
        {show ? (
          <div>
            <Regestation showLogin={setShow} />
          </div>
        ) : (
          <div>
            <Login showregister={setShow} />
          </div>
        )}
      </div>
    </>
  );
}

export default Login_Reg;
