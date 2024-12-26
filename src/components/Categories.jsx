import axios from "axios";
import React, { useEffect, useState } from "react";

function Categories({ setProduct }) {
  // console.log(setPtoduct, "hhhh");

  const [verity, setVerity] = useState([]);
  // const [prod, setProd] = useState();
  // setProduct(prod);

  // setPtoduct(prod);
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
      <div className="categories_Container">
        <h1>Categories</h1>
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
