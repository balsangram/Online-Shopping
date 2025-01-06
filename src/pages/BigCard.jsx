import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function BigCard() {
  const location = useLocation();
  // console.log(location.state, "location");
  const [index, setIndex] = useState(location.state);
  const [values, SetValues] = useState();
  const big_All_data = useEffect(() => {
    // console.log(index, "kkkk");
    axios.get(`https://fakestoreapi.com/products/${index}`).then((res) => {
      // console.log(res.data);
      SetValues(res.data);
    });
  }, [index]);
  return (
    <div className="BigCard">
      {values && (
        <div className="total_BigCard">
          <div className="left_BigCard">
            <img className="BigCard_img" src={values.image} alt="" />
          </div>
          <div className="right_BigCard">
            <p className="BigCard_category">{values.category}</p>
            <p className="BigCard_title">{values.title}</p>
            <div className="BigCard_user">
              <p className="BigCard_rate">{values.rating.rate}</p>
              <p className="BigCard_count">{values.rating.count}</p>
            </div>
            <p className="BigCard_price">{values.price}</p>
            <p className="BigCard_description">{values.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BigCard;
