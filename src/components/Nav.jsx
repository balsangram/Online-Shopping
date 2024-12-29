import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [user, SetUSer] = useState(true);
  const [berger, setBerger] = useState(false);
  return (
    <>
      <nav>
        <div className="small_nav" style={{ textAlign: "left" }}>
          {berger ? (
            <div onClick={() => setBerger(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="24"
                height="24"
                stroke-width="2"
              >
                <path d="M7 4l10 16"></path>
                <path d="M17 4l-10 16"></path>
              </svg>
            </div>
          ) : (
            <div onClick={() => setBerger(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="24"
                height="24"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
              >
                <path d="M4 20h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 4h16"></path>
              </svg>
            </div>
          )}
        </div>
        <div className="small_nav">
          <Link className="navLink" to="/">
            <div>MAMY</div>
          </Link>
        </div>

        <div className="nav_right small_nav">
          <div className="UserNAme">Name</div>
          {user ? (
            <div>
              <Link className="navLink" to="/Login_Reg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  strokeWidth="2"
                >
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
              </Link>
            </div>
          ) : (
            <div>
              <Link className="navLink" to="/Login_Reg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  strokeWidth="2"
                >
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M9 12h12l-3 -3"></path>
                  <path d="M18 15l3 -3"></path>
                </svg>
              </Link>
            </div>
          )}

          <Link>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </Link>
          <Link className="navLink" to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24"
              height="24"
              strokeWidth="2"
            >
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
