import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function TypeProduct({ getProduct }) {
  // console.log(getProduct);

  const [typeProduct, setTypeProduct] = useState([]);
  let url1 = `https://fakestoreapi.com/products/category/${getProduct}`;
  let url2 = `https://fakestoreapi.com/products`;
  const typedata = () => {
    // axios.get(url1).then((res) => {
    axios.get(getProduct ? url1 : url2).then((res) => {
      // console.log(res.data);
      setTypeProduct(res.data);
      // console.log(typeProduct);
    });
  };
  useEffect(() => {
    typedata();
  }, [getProduct]);
  return (
    <>
      <div className="TypeProduct">
        {typeProduct.map((e, index) => {
          // console.log(e);
          // return <Card img={e.image} />;
          return (
            <Card
              key={index}
              img={e.image}
              heading={e.title}
              rateing={e.rating.rate}
              price={e.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default TypeProduct;
