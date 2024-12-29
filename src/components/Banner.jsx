import React from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";

function Banner() {
  return (
    <div className="banner">
      <h1>SEASONAL FAVS ☀️</h1>
      <div className="specal_all_cards">
        <div className=" specal_card">
          <img className="specal_image" src={img1} alt="" />
        </div>
        <div className=" specal_card">
          <img className="specal_image" src={img2} alt="" />
        </div>
        <div className=" specal_card">
          <img className="specal_image" src={img3} alt="" />
        </div>
        <div className=" specal_card">
          <img className="specal_image" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
