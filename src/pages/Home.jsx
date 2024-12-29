import axios from "axios";
import React, { useEffect, useState } from "react";
import { Banner, BigBanner, Card, Limited } from "../Root";
import { Link } from "react-router-dom";

function Home() {
  const [details, setDetails] = useState([]);

  const cat = async () => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      // console.log(res.data);
      res.data.map((e) => {
        axios
          .get(`https://fakestoreapi.com/products/category/${e}`)
          .then((response) => {
            setDetails((det) => {
              // console.log("Each data" , det);
              return [...det, { categoryname: e, data: response.data }];
            });
          });
      });
    });
  };
  // console.log(details);

  useEffect(() => {
    setDetails([]);
    cat();
    // console.log("inside use effect");
  }, []);

  return (
    <div className="home">
      <div>
        <BigBanner />
      </div>
      <div>
        <Limited />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        {details?.length > 0 && (
          <div>
            <div>
              {details.map((e, index) => {
                return (
                  <div key={index}>
                    <h1 className="Home_deading">{e.categoryname}</h1>
                    <div className="home_products">
                      {e.data.slice(0, 4).map((ele, indexno) => {
                        return (
                          <Card
                            key={indexno}
                            card_box={{ width: "21%" }}
                            img={ele.image}
                            card_img={{ height: "20rem", width: "16rem" }}
                            heading={ele.title}
                            price={ele.price}
                          />
                        );
                      })}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Link to={"/CategoriesPage"} className="home_button">
                        <button className="home_btn">VIEW ALL</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
