import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Root";

function Cart() {
  const [product, setProduct] = useState([]);
  const [cardVal, setCardVal] = useState([]);
  // const [quantity, setQuantity] = useState();
  let id = 5;
  const allproducts = () => {
    axios.get(`https://fakestoreapi.com/carts/${id}`).then((res) => {
      // console.log(res.data.products);
      setProduct(res.data.products);
    });
  };

  useEffect(() => {
    allproducts();
  }, []);
  useEffect(() => {
    product.forEach((element) => {
      // console.log(element);
      axios
        .get(`https://fakestoreapi.com/products/${element.productId}`)
        .then((res) => {
          console.log(res.data);
          setCardVal([...cardVal, res.data]);
        });
    });
  }, [product]);
  return (
    <div className="cart">
      {cardVal.map((e, index) => {
        // console.log(e);
        return (
          <Card
            key={index}
            img={e.image}
            card_box={{ width: "18rem" }}
            heading={e.title}
            rateing={e.rating.rate}
            price={e.price}
          />
        );
      })}
    </div>
  );
}

export default Cart;
