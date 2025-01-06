import axios from "axios";
import React, { useEffect, useState } from "react";

function Categories({ setProduct }) {
  // console.log(setPtoduct, "hhhh");
  const [style, setStyle] = useState("categories_Container_left");
  const [verity, setVerity] = useState([]);
  // if ((style = !true)) {
  // }
  const catagories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setVerity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    catagories();
  }, []);
  return (
    <>
      <div
        className={`categories_Container , ${style}`}
        style={{ back: { style } }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>Categories</h1>

          <svg
            onClick={() => {
              if (style !== "categories_Container_left") {
                setStyle("categories_Container_left");
              } else {
                setStyle("");
              }
            }}
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

        {verity.map((catagories, index) => {
          return (
            <p
              className="single_catagories"
              value={catagories}
              onClick={
                () => setProduct(catagories)
                // console.log(catagories.target.value)
              }
              key={index}
            >
              {catagories}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
