import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Limited() {
  const [result, setResult] = useState([]);
  const letitedProduct = () => {
    axios.get("https://fakestoreapi.com/products?limit=5").then((e) => {
      // console.log(e.data);
      setResult(e.data);
    });
  };
  useEffect(() => {
    letitedProduct();
  }, []);
  return (
    <div className="Limited">
      {result.map((e) => {
        console.log(e);
        return (
          <Card
            imgStyle={{ height: "25rem" }}
            img={e.image}
            heading={e.title}
            rateing={e.rating.count}
            price={e.price}
          />
        );
      })}
      {/* <Card /> */}
    </div>
  );
}

export default Limited;
