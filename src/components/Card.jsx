import React from "react";
import pimg from "../images/product.jpg";
import { Link } from "react-router-dom";

function Card({
  img,
  heading,
  description,
  rateing,
  price,
  imgStyle,
  btnStyle,
  card_box,
  card_img,
}) {
  // function bigCard() {
  //   console.log("click card");

  // }
  return (
    <>
      <Link to={"/BigCard"} className="card" style={card_box}>
        <div className="card_img_part" style={imgStyle}>
          <img className="card_img" style={card_img} src={img} alt="Product" />
        </div>
        <h1 className="card_heading">{heading}</h1>
        {/* <p className="card_details">{description}</p> */}
        <div className="card_R_St">
          <div>
            {/* <p className="card_reating">{rateing}</p> */}
            <p className="card_price">USD {price} $</p>
          </div>
          <div>
            {/* <button className="card_btn" style={btnStyle}>
              Add to
              <br />
              Cart
            </button> */}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
