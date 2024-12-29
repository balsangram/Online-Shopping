import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";

function Limited() {
  const [result, setResult] = useState([]);
  let [link, setLink] = useState(true);
  let url1 = "https://fakestoreapi.com/products?limit=5";
  let url2 = "https://fakestoreapi.com/products?sort=desc";
  const letitedProduct = () => {
    axios.get(link ? url1 : url2).then((e) => {
      // console.log(e.data);
      setResult(e.data);
    });
  };
  useEffect(() => {
    letitedProduct();
  }, [link]);
  return (
    <div className="Limited_outer">
      <div className="limited_button">
        <button>NEW DROPS</button>
        <button>MOST TRENDING</button>
        {/* <button onClick={setLink(true)}>NEW DROPS</button>
        <button onClick={setLink(false)}>MOST TRENDING</button> */}
      </div>
      <div className="Limited">
        {result.slice(0, 5).map((e, index) => {
          // console.log(e);
          return (
            <>
              <Card
                key={index}
                // imgStyle={{ height: "25rem" }}
                img={e.image}
                heading={e.title}
                // rateing={e.rating.count}
                price={e.price}
                // btnStyle={{display:"  none"}}
              />
            </>
          );
        })}
      </div>
      <Link to={"/CategoriesPage"}>
        <button className="limited_btns">VIEW ALL</button>
      </Link>
    </div>
  );
}

export default Limited;
